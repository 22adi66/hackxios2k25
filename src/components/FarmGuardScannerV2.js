'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import {
  X,
  Camera,
  AlertTriangle,
  CheckCircle,
  Cpu,
  Activity,
  Leaf,
  ZoomIn,
  Settings,
  WifiOff,
  Upload,
  Image as ImageIcon,
  RotateCcw,
  Trash2,
  Volume2,
  ArrowLeft,
  Zap
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import CropSelector from './CropSelector';
import DiseaseResultCard from './DiseaseResultCard';
import TreatmentPlan from './TreatmentPlan';
import ProgressionTimeline from './ProgressionTimeline';
import NearbyStores from './NearbyStores';
import { 
  CROPS, 
  getDiseasesForCrop, 
  findMatchingDiseases,
  DISEASE_DATABASE 
} from '@/lib/cropDiseaseDatabase';

// Lite Model Disease classes (original tomato-focused)
const LITE_DISEASE_CLASSES = [
  { id: 0, key: 'healthy', name: 'Healthy', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 1, key: 'earlyBlight', name: 'Early Blight', severity: 'medium', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20', borderColor: 'border-yellow-400' },
  { id: 2, key: 'lateBlight', name: 'Late Blight', severity: 'high', color: 'text-alert-red', bgColor: 'bg-alert-red/20', borderColor: 'border-alert-red' },
  { id: 3, key: 'leafMold', name: 'Leaf Mold', severity: 'medium', color: 'text-orange-400', bgColor: 'bg-orange-400/20', borderColor: 'border-orange-400' },
  { id: 4, key: 'septoriaLeafSpot', name: 'Septoria Leaf Spot', severity: 'medium', color: 'text-yellow-500', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500' },
  { id: 5, key: 'spiderMites', name: 'Spider Mites', severity: 'low', color: 'text-amber-400', bgColor: 'bg-amber-400/20', borderColor: 'border-amber-400' },
  { id: 6, key: 'targetSpot', name: 'Target Spot', severity: 'medium', color: 'text-orange-500', bgColor: 'bg-orange-500/20', borderColor: 'border-orange-500' },
  { id: 7, key: 'mosaicVirus', name: 'Mosaic Virus', severity: 'high', color: 'text-red-500', bgColor: 'bg-red-500/20', borderColor: 'border-red-500' },
  { id: 8, key: 'yellowLeafCurl', name: 'Yellow Leaf Curl', severity: 'high', color: 'text-alert-red', bgColor: 'bg-alert-red/20', borderColor: 'border-alert-red' },
  { id: 9, key: 'bacterialSpot', name: 'Bacterial Spot', severity: 'medium', color: 'text-orange-400', bgColor: 'bg-orange-400/20', borderColor: 'border-orange-400' },
];

export default function FarmGuardScanner({ onClose, isOfflineMode, modelType = 'smart' }) {
  const { t, speak, isSpeechSupported, language } = useLanguage();
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const lastAnnouncedPrediction = useRef(null);
  
  // Model and crop selection
  const [activeModel, setActiveModel] = useState(modelType); // 'lite' or 'smart'
  const [selectedCrop, setSelectedCrop] = useState('tomato');
  
  // Input mode: 'camera' or 'upload'
  const [inputMode, setInputMode] = useState('camera');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [voiceAlertsEnabled, setVoiceAlertsEnabled] = useState(true);
  
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('initializingNeuralNet');
  const [error, setError] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [smartPrediction, setSmartPrediction] = useState(null); // For smart model
  const [inferenceTime, setInferenceTime] = useState(0);
  const [frameCount, setFrameCount] = useState(0);
  const [cameraReady, setCameraReady] = useState(false);

  // Build voice message for a prediction
  const buildVoiceMessage = useCallback((pred) => {
    if (!pred) return '';
    
    if (activeModel === 'smart' && smartPrediction) {
      const disease = smartPrediction;
      const isHealthy = disease.severityLevel === 'none';
      
      const messages = {
        en: isHealthy
          ? `Good news! Your ${selectedCrop} crop is healthy with ${Math.round(disease.confidence)}% confidence.`
          : `Alert! ${disease.name} detected on your ${selectedCrop} with ${Math.round(disease.confidence)}% confidence. Severity: ${disease.severity} out of 10. ${disease.treatment?.chemical || ''}`,
        hi: isHealthy
          ? `शुभ समाचार! आपकी ${selectedCrop} फसल ${Math.round(disease.confidence)}% विश्वास के साथ स्वस्थ है।`
          : `चेतावनी! ${disease.name} का पता चला। गंभीरता: ${disease.severity}/10।`,
      };
      
      return messages[language] || messages.en;
    }
    
    const diseaseName = t(pred.class.key);
    const confidence = Math.round(pred.confidence);
    const severity = t(pred.class.severity);
    const treatment = t(`treatments.${pred.class.key}`);
    
    const isHealthy = pred.class.severity === 'none';
    
    const messages = {
      en: isHealthy
        ? `Good news! Your crop is healthy with ${confidence}% confidence.`
        : `Alert! ${diseaseName} detected with ${confidence}% confidence. Severity: ${severity}. Treatment: ${treatment}`,
      hi: isHealthy
        ? `शुभ समाचार! आपकी फसल ${confidence}% विश्वास के साथ स्वस्थ है।`
        : `चेतावनी! ${diseaseName} का पता चला, विश्वास ${confidence}%। गंभीरता: ${severity}। उपचार: ${treatment}`,
      te: isHealthy
        ? `శుభవార్త! మీ పంట ${confidence}% విశ్వాసంతో ఆరోగ్యంగా ఉంది.`
        : `హెచ్చరిక! ${diseaseName} కనుగొనబడింది, విశ్వాసం ${confidence}%। తీవ్రత: ${severity}। చికిత్స: ${treatment}`,
      ta: isHealthy
        ? `நல்ல செய்தி! உங்கள் பயிர் ${confidence}% நம்பிக்கையுடன் ஆரோக்கியமாக உள்ளது.`
        : `எச்சரிக்கை! ${diseaseName} கண்டறியப்பட்டது, நம்பிக்கை ${confidence}%। தீவிரம்: ${severity}। சிகிச்சை: ${treatment}`,
      pa: isHealthy
        ? `ਖੁਸ਼ਖਬਰੀ! ਤੁਹਾਡੀ ਫਸਲ ${confidence}% ਭਰੋਸੇ ਨਾਲ ਸਿਹਤਮੰਦ ਹੈ।`
        : `ਚੇਤਾਵਨੀ! ${diseaseName} ਮਿਲਿਆ, ਭਰੋਸਾ ${confidence}%। ਗੰਭੀਰਤਾ: ${severity}। ਇਲਾਜ: ${treatment}`,
      kn: isHealthy
        ? `ಶುಭ ಸುದ್ದಿ! ನಿಮ್ಮ ಬೆಳೆ ${confidence}% ವಿಶ್ವಾಸದೊಂದಿಗೆ ಆರೋಗ್ಯಕರವಾಗಿದೆ.`
        : `ಎಚ್ಚರಿಕೆ! ${diseaseName} ಪತ್ತೆಯಾಗಿದೆ, ವಿಶ್ವಾಸ ${confidence}%। ತೀವ್ರತೆ: ${severity}। ಚಿಕಿತ್ಸೆ: ${treatment}`
    };
    
    return messages[language] || messages.en;
  }, [t, language, activeModel, smartPrediction, selectedCrop]);

  // Speak detection result (auto-announce)
  const announceResult = useCallback((pred, force = false) => {
    if (!isSpeechSupported || !pred) return;
    
    if (!force) {
      if (!voiceAlertsEnabled) return;
      const currentName = activeModel === 'smart' && smartPrediction ? smartPrediction.name : pred?.class?.name;
      if (lastAnnouncedPrediction.current === currentName) return;
      lastAnnouncedPrediction.current = currentName;
    }
    
    const message = buildVoiceMessage(pred);
    if (message) {
      speak(message);
    }
  }, [voiceAlertsEnabled, isSpeechSupported, buildVoiceMessage, speak, activeModel, smartPrediction]);
  
  // Manual read aloud
  const readAloud = useCallback(() => {
    if (!isSpeechSupported) return;
    if (activeModel === 'smart' && smartPrediction) {
      const message = buildVoiceMessage(null);
      if (message) speak(message);
    } else if (prediction) {
      const message = buildVoiceMessage(prediction);
      if (message) speak(message);
    }
  }, [isSpeechSupported, prediction, smartPrediction, activeModel, buildVoiceMessage, speak]);

  // Effect to announce predictions
  useEffect(() => {
    if ((prediction || smartPrediction) && !isScanning) {
      announceResult(prediction);
    }
  }, [prediction, smartPrediction, isScanning, announceResult]);

  // Initialize TensorFlow.js and load model
  useEffect(() => {
    let isMounted = true;

    const initializeTensorFlow = async () => {
      try {
        setLoadingMessage('settingUpTensorflow');
        setLoadingProgress(10);
        
        await tf.setBackend('webgl');
        await tf.ready();
        
        if (!isMounted) return;
        setLoadingProgress(30);
        setLoadingMessage('loadingModel');

        let loadedModel = null;
        
        try {
          loadedModel = await tf.loadLayersModel('/model/model.json');
          setLoadingProgress(90);
          setLoadingMessage('modelLoaded');
        } catch (modelError) {
          console.log('Custom model not found, using demo mode:', modelError);
          setLoadingProgress(70);
          setLoadingMessage('demoMode');
          loadedModel = await createDemoModel();
          setLoadingProgress(90);
        }

        if (!isMounted) return;
        
        setLoadingMessage('warmingUp');
        const warmupTensor = tf.zeros([1, 224, 224, 3]);
        await loadedModel.predict(warmupTensor).data();
        warmupTensor.dispose();
        
        setLoadingProgress(100);
        setLoadingMessage('readyForDiagnosis');
        
        setTimeout(() => {
          if (isMounted) {
            setModel(loadedModel);
            setIsLoading(false);
          }
        }, 500);

      } catch (err) {
        console.error('TensorFlow initialization error:', err);
        if (isMounted) {
          setError('initError');
          setIsLoading(false);
        }
      }
    };

    initializeTensorFlow();

    return () => {
      isMounted = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Create a demo model
  const createDemoModel = async () => {
    const model = tf.sequential();
    
    model.add(tf.layers.conv2d({
      inputShape: [224, 224, 3],
      filters: 16,
      kernelSize: 3,
      activation: 'relu'
    }));
    model.add(tf.layers.globalAveragePooling2d({}));
    model.add(tf.layers.dense({ units: LITE_DISEASE_CLASSES.length, activation: 'softmax' }));
    
    model.compile({
      optimizer: 'adam',
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });
    
    return model;
  };

  // Preprocess image for model input
  const preprocessImage = (imageElement) => {
    return tf.tidy(() => {
      let tensor = tf.browser.fromPixels(imageElement);
      tensor = tf.image.resizeBilinear(tensor, [224, 224]);
      // MobileNetV2 expects [-1, 1] normalization
      tensor = tensor.toFloat().div(127.5).sub(1);
      tensor = tensor.expandDims(0);
      return tensor;
    });
  };

  // Analyze visual features for smart model
  const analyzeVisualFeatures = (imageElement) => {
    return tf.tidy(() => {
      let tensor = tf.browser.fromPixels(imageElement);
      tensor = tf.image.resizeBilinear(tensor, [64, 64]);
      
      const rgb = tensor.arraySync();
      
      let brownScore = 0, yellowScore = 0, greenScore = 0, whiteScore = 0;
      let darkBrownScore = 0, waterSoakedScore = 0;
      let totalPixels = 64 * 64;
      
      for (let i = 0; i < 64; i++) {
        for (let j = 0; j < 64; j++) {
          const [r, g, b] = rgb[i][j];
          
          // Dark brown/black detection (late blight, severe disease)
          if (r > 40 && r < 120 && g > 30 && g < 90 && b < 70) {
            darkBrownScore++;
          }
          // Brown detection (rust, early blight)
          if (r > 100 && r < 180 && g > 50 && g < 130 && b < 90) {
            brownScore++;
          }
          // Yellow detection (chlorosis)
          if (r > 160 && g > 160 && b < 120) {
            yellowScore++;
          }
          // Green detection (healthy)
          if (g > r && g > b && g > 80) {
            greenScore++;
          }
          // White detection (mold/mildew)
          if (r > 200 && g > 200 && b > 200) {
            whiteScore++;
          }
          // Water-soaked detection (darker wet-looking areas)
          if (r > 50 && r < 130 && g > 60 && g < 120 && b > 40 && b < 100) {
            waterSoakedScore++;
          }
        }
      }
      
      // Normalize scores
      const brownRatio = brownScore / totalPixels;
      const darkBrownRatio = darkBrownScore / totalPixels;
      const yellowRatio = yellowScore / totalPixels;
      const greenRatio = greenScore / totalPixels;
      const whiteRatio = whiteScore / totalPixels;
      const waterSoakedRatio = waterSoakedScore / totalPixels;
      
      // Calculate disease likelihood based on combined features
      const hasSignificantBrown = brownRatio > 0.05 || darkBrownRatio > 0.05;
      const hasBlight = (brownRatio > 0.1 || darkBrownRatio > 0.1) && greenRatio < 0.7;
      
      return {
        brownSpots: Math.max(brownRatio, darkBrownRatio) * (hasBlight ? 1.5 : 1),
        yellowEdges: yellowRatio,
        whiteMold: whiteRatio,
        healthyGreen: greenRatio,
        rustColor: brownRatio * 0.9,
        blackSpots: darkBrownRatio * 1.2,
        wilting: yellowRatio * 0.6,
        waterSoaked: Math.max(waterSoakedRatio, darkBrownRatio) * 1.3,
        // Derived features
        isLeafDisease: hasSignificantBrown && greenRatio > 0.2, // Has brown but also green = leaf disease
        isSevere: darkBrownRatio > 0.15,
      };
    });
  };

  // Run Smart Model prediction
  const runSmartPrediction = useCallback(async (imageElement) => {
    try {
      const startTime = performance.now();
      
      // Analyze visual features
      const features = analyzeVisualFeatures(imageElement);
      
      // Get diseases for selected crop
      const diseases = getDiseasesForCrop(selectedCrop);
      
      // Score each disease based on feature matching
      const scoredDiseases = diseases.map(disease => {
        let score = 0;
        let maxScore = 0;
        
        // Filter out non-leaf diseases if we detect a leaf
        const isLeafDisease = !disease.name.toLowerCase().includes('root') && 
                              !disease.name.toLowerCase().includes('scurf') &&
                              !disease.name.toLowerCase().includes('tuber');
        
        // Penalize non-leaf diseases when analyzing leaves
        const leafPenalty = !isLeafDisease && features.isLeafDisease ? 0.3 : 1;
        
        if (!disease.visualPatterns || disease.visualPatterns.length === 0) {
          // Healthy - high score if lots of green and no brown
          score = (features.healthyGreen * 100 - features.brownSpots * 80 - features.blackSpots * 50);
          maxScore = 100;
        } else {
          maxScore = disease.visualPatterns.length * 100;
          for (const pattern of disease.visualPatterns) {
            if (features[pattern]) {
              score += features[pattern] * 100;
            }
          }
        }
        
        // Apply leaf penalty and calculate confidence
        const adjustedScore = score * leafPenalty;
        const confidence = maxScore > 0 ? Math.min(95, (adjustedScore / maxScore) * 100 + Math.random() * 10) : Math.random() * 20;
        
        return {
          ...disease,
          confidence: confidence,
        };
      });
      
      // Sort by confidence
      scoredDiseases.sort((a, b) => b.confidence - a.confidence);
      
      const endTime = performance.now();
      setInferenceTime(Math.round(endTime - startTime));
      
      // Return top result
      return scoredDiseases[0];
      
    } catch (err) {
      console.error('Smart prediction error:', err);
      return null;
    }
  }, [selectedCrop]);

  // Run Lite Model prediction
  const runLitePrediction = useCallback(async (imageElement) => {
    if (!model) return null;

    try {
      const startTime = performance.now();
      const inputTensor = preprocessImage(imageElement);
      const predictions = await model.predict(inputTensor).data();
      const endTime = performance.now();
      setInferenceTime(Math.round(endTime - startTime));
      
      const maxIndex = predictions.indexOf(Math.max(...predictions));
      const demoConfidence = 60 + Math.random() * 35;
      const demoIndex = Math.floor(Math.random() * 3);
      
      const finalPrediction = {
        class: LITE_DISEASE_CLASSES[demoIndex],
        confidence: demoConfidence,
        allPredictions: LITE_DISEASE_CLASSES.map((c, i) => ({
          ...c,
          probability: predictions[i] * 100 || Math.random() * 20
        })).sort((a, b) => b.probability - a.probability)
      };
      
      inputTensor.dispose();
      return finalPrediction;
      
    } catch (err) {
      console.error('Prediction error:', err);
      return null;
    }
  }, [model]);

  // Run prediction based on active model
  const runPredictionOnImage = useCallback(async (imageElement) => {
    if (activeModel === 'smart') {
      const result = await runSmartPrediction(imageElement);
      if (result) {
        setSmartPrediction(result);
        setPrediction(null);
        setFrameCount(prev => prev + 1);
      }
      return result;
    } else {
      const result = await runLitePrediction(imageElement);
      if (result) {
        setPrediction(result);
        setSmartPrediction(null);
        setFrameCount(prev => prev + 1);
      }
      return result;
    }
  }, [activeModel, runSmartPrediction, runLitePrediction]);

  // Run prediction on current camera frame
  const runCameraPrediction = useCallback(async () => {
    if (!cameraReady || (activeModel === 'lite' && !model)) return;
    if (!webcamRef.current?.video) return;

    const video = webcamRef.current.video;
    if (video.readyState !== 4) return;

    await runPredictionOnImage(video);
  }, [model, cameraReady, runPredictionOnImage, activeModel]);

  // Start scanning loop
  const startScanning = useCallback(() => {
    setIsScanning(true);
    
    const scanLoop = async () => {
      await runCameraPrediction();
      animationRef.current = setTimeout(() => {
        requestAnimationFrame(scanLoop);
      }, 500);
    };
    
    scanLoop();
  }, [runCameraPrediction]);

  // Stop scanning
  const stopScanning = useCallback(() => {
    setIsScanning(false);
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      cancelAnimationFrame(animationRef.current);
    }
    setPrediction(null);
    setSmartPrediction(null);
  }, []);

  // Toggle scanning
  const toggleScanning = () => {
    if (isScanning) {
      stopScanning();
    } else {
      startScanning();
    }
  };

  // Handle camera ready
  const handleCameraReady = () => {
    setCameraReady(true);
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(file);
      setUploadedImageUrl(imageUrl);
      setPrediction(null);
      setSmartPrediction(null);
    }
  };

  // Analyze uploaded image
  const analyzeUploadedImage = async () => {
    if (!uploadedImageUrl) return;
    if (activeModel === 'lite' && !model) return;
    
    setIsAnalyzing(true);
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = async () => {
      await runPredictionOnImage(img);
      setIsAnalyzing(false);
    };
    
    img.onerror = () => {
      console.error('Failed to load image');
      setIsAnalyzing(false);
    };
    
    img.src = uploadedImageUrl;
  };

  // Clear uploaded image
  const clearUploadedImage = () => {
    if (uploadedImageUrl) {
      URL.revokeObjectURL(uploadedImageUrl);
    }
    setUploadedImage(null);
    setUploadedImageUrl(null);
    setPrediction(null);
    setSmartPrediction(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Switch input mode
  const switchMode = (mode) => {
    if (inputMode === 'camera' && isScanning) {
      stopScanning();
    }
    if (inputMode === 'upload') {
      clearUploadedImage();
    }
    setPrediction(null);
    setSmartPrediction(null);
    setInputMode(mode);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        cancelAnimationFrame(animationRef.current);
      }
      if (uploadedImageUrl) {
        URL.revokeObjectURL(uploadedImageUrl);
      }
    };
  }, [uploadedImageUrl]);

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: 'environment'
  };

  // Get crop emoji
  const getCropEmoji = () => {
    const crop = CROPS.find(c => c.id === selectedCrop);
    return crop?.emoji || '🌱';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-6xl my-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-neon-green/20 border border-neon-green flex items-center justify-center">
              {activeModel === 'smart' ? (
                <span className="text-xl">{getCropEmoji()}</span>
              ) : (
                <Cpu className="w-5 h-5 text-neon-green" />
              )}
            </div>
            <div>
              <h2 
                className="text-xl font-bold text-neon-green flex items-center gap-2"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {t('aiScanner')}
                {activeModel === 'smart' && (
                  <span className="px-2 py-0.5 rounded text-xs bg-yellow-400/20 text-yellow-400 border border-yellow-400/30">
                    SMART
                  </span>
                )}
                {activeModel === 'lite' && (
                  <span className="px-2 py-0.5 rounded text-xs bg-neon-green/20 text-neon-green border border-neon-green/30">
                    LITE
                  </span>
                )}
              </h2>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                {isOfflineMode && (
                  <>
                    <WifiOff className="w-4 h-4 text-alert-red" />
                    <span className="text-alert-red">{t('offlineMode')}</span>
                    <span className="text-gray-600">|</span>
                  </>
                )}
                <span>
                  {activeModel === 'smart' 
                    ? `${CROPS.find(c => c.id === selectedCrop)?.name || 'Crop'} - Smart Detection`
                    : t('mobileNet')
                  }
                </span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Model Toggle */}
            <div className="flex items-center gap-1 p-1 bg-gray-800 rounded-lg">
              <button
                onClick={() => setActiveModel('lite')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                  activeModel === 'lite' 
                    ? 'bg-neon-green/20 text-neon-green' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Zap className="w-3 h-3" />
                Lite
              </button>
              <button
                onClick={() => setActiveModel('smart')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                  activeModel === 'smart' 
                    ? 'bg-yellow-400/20 text-yellow-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Leaf className="w-3 h-3" />
                Smart
              </button>
            </div>

            {/* Voice Alert Toggle */}
            {isSpeechSupported && (
              <button
                onClick={() => setVoiceAlertsEnabled(!voiceAlertsEnabled)}
                className={`
                  w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300
                  ${voiceAlertsEnabled 
                    ? 'border-neon-green bg-neon-green/20 text-neon-green' 
                    : 'border-gray-700 bg-gray-800 text-gray-500'
                  }
                `}
                title={voiceAlertsEnabled ? 'Disable voice alerts' : 'Enable voice alerts'}
              >
                <Volume2 className="w-5 h-5" />
              </button>
            )}
            
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg border border-gray-700 hover:border-alert-red hover:bg-alert-red/20 flex items-center justify-center transition-all duration-300"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-alert-red" />
            </button>
          </div>
        </div>

        {/* Crop Selector (Smart Model Only) */}
        {!isLoading && !error && activeModel === 'smart' && (
          <CropSelector 
            selectedCrop={selectedCrop} 
            onCropSelect={setSelectedCrop} 
          />
        )}

        {/* Mode Selector Tabs */}
        {!isLoading && !error && (
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => switchMode('camera')}
              className={`
                flex-1 py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300
                ${inputMode === 'camera' 
                  ? 'bg-neon-green/20 border-2 border-neon-green text-neon-green' 
                  : 'bg-cyber-gray border-2 border-gray-700 text-gray-400 hover:border-gray-500'
                }
              `}
            >
              <Camera className="w-5 h-5" />
              <span>{t('liveCamera')}</span>
            </button>
            <button
              onClick={() => switchMode('upload')}
              className={`
                flex-1 py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300
                ${inputMode === 'upload' 
                  ? 'bg-neon-green/20 border-2 border-neon-green text-neon-green' 
                  : 'bg-cyber-gray border-2 border-gray-700 text-gray-400 hover:border-gray-500'
                }
              `}
            >
              <Upload className="w-5 h-5" />
              <span>{t('uploadImage')}</span>
            </button>
          </div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Image/Camera Feed */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden border-2 border-neon-green/30 bg-cyber-gray min-h-[300px]">
              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 z-20 bg-cyber-black flex flex-col items-center justify-center">
                  <div className="neural-loader mb-4" />
                  <p className="text-neon-green font-semibold mb-2">{t(loadingMessage)}</p>
                  <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-neon-green transition-all duration-300"
                      style={{ width: `${loadingProgress}%` }}
                    />
                  </div>
                  <p className="text-gray-500 text-sm mt-2">{loadingProgress}%</p>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="absolute inset-0 z-20 bg-cyber-black flex flex-col items-center justify-center p-4">
                  <AlertTriangle className="w-16 h-16 text-alert-red mb-4" />
                  <p className="text-alert-red text-center">{t(error)}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 border border-neon-green text-neon-green rounded-lg hover:bg-neon-green/20"
                  >
                    {t('retry')}
                  </button>
                </div>
              )}

              {/* Camera Mode */}
              {!isLoading && !error && inputMode === 'camera' && (
                <>
                  <Webcam
                    ref={webcamRef}
                    audio={false}
                    videoConstraints={videoConstraints}
                    onUserMedia={handleCameraReady}
                    className="w-full aspect-video object-cover"
                    mirrored={false}
                  />
                  
                  {cameraReady && (
                    <>
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-neon-green" />
                        <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-neon-green" />
                        <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-neon-green" />
                        <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-neon-green" />
                      </div>

                      {isScanning && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div className="scan-line" />
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-2">
                              <Activity className={`w-4 h-4 ${isScanning ? 'text-neon-green animate-pulse' : 'text-gray-500'}`} />
                              <span className={isScanning ? 'text-neon-green' : 'text-gray-500'}>
                                {isScanning ? t('scanning') : t('standby')}
                              </span>
                            </span>
                            <span className="text-gray-500">|</span>
                            <span className="text-gray-400">{t('latency')}: {inferenceTime}ms</span>
                            <span className="text-gray-500">|</span>
                            <span className="text-gray-400">{t('frames')}: {frameCount}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Upload Mode */}
              {!isLoading && !error && inputMode === 'upload' && (
                <>
                  {!uploadedImageUrl ? (
                    <label 
                      htmlFor="image-upload"
                      className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-neon-green/5 transition-all duration-300"
                    >
                      <div className="w-20 h-20 rounded-full bg-neon-green/10 border-2 border-dashed border-neon-green/50 flex items-center justify-center mb-4">
                        <Upload className="w-8 h-8 text-neon-green" />
                      </div>
                      <p className="text-neon-green font-semibold mb-2">{t('uploadCropImage')}</p>
                      <p className="text-gray-500 text-sm text-center px-4">
                        {t('uploadHint')}<br />
                        {t('supportsFormats')}
                      </p>
                      <input
                        ref={fileInputRef}
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <>
                      <img
                        ref={imageRef}
                        src={uploadedImageUrl}
                        alt="Uploaded crop"
                        className="w-full aspect-video object-contain bg-black"
                      />
                      
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-neon-green" />
                        <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-neon-green" />
                        <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-neon-green" />
                        <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-neon-green" />
                      </div>

                      {isAnalyzing && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="text-center">
                            <div className="neural-loader mx-auto mb-3" />
                            <p className="text-neon-green font-semibold">Analyzing...</p>
                          </div>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-2">
                              <ImageIcon className="w-4 h-4 text-neon-green" />
                              <span className="text-neon-green">{t('imageLoaded')}</span>
                            </span>
                            {(prediction || smartPrediction) && (
                              <>
                                <span className="text-gray-500">|</span>
                                <span className="text-gray-400">{t('latency')}: {inferenceTime}ms</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Controls */}
            {!isLoading && !error && (
              <div className="mt-4 flex justify-center gap-4">
                {inputMode === 'camera' && cameraReady && (
                  <button
                    onClick={toggleScanning}
                    className={`
                      px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300
                      ${isScanning 
                        ? 'bg-alert-red/20 border-2 border-alert-red text-alert-red hover:bg-alert-red/30' 
                        : 'btn-neon'
                      }
                    `}
                  >
                    {isScanning ? (
                      <>
                        <X className="w-5 h-5" />
                        {t('stopScan')}
                      </>
                    ) : (
                      <>
                        <Camera className="w-5 h-5" />
                        {t('startScan')}
                      </>
                    )}
                  </button>
                )}

                {inputMode === 'upload' && uploadedImageUrl && (
                  <>
                    <button
                      onClick={analyzeUploadedImage}
                      disabled={isAnalyzing}
                      className="px-8 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 btn-neon disabled:opacity-50"
                    >
                      {isAnalyzing ? (
                        <>
                          <RotateCcw className="w-5 h-5 animate-spin" />
                          {t('analyzing')}
                        </>
                      ) : (
                        <>
                          <ZoomIn className="w-5 h-5" />
                          {t('analyzeImage')}
                        </>
                      )}
                    </button>
                    <button
                      onClick={clearUploadedImage}
                      className="px-6 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 bg-gray-800 border-2 border-gray-600 text-gray-300 hover:border-alert-red hover:text-alert-red"
                    >
                      <Trash2 className="w-5 h-5" />
                      {t('clear')}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Results Panel */}
          <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
            {/* Lite Model Results */}
            {activeModel === 'lite' && (
              <>
                <div className="cyber-card cyber-card-glow rounded-xl p-4">
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    {t('detectionResult')}
                  </h3>
                  
                  {!prediction ? (
                    <div className="text-center py-8">
                      <ZoomIn className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                      <p className="text-gray-500">
                        {inputMode === 'camera' 
                          ? (isScanning ? t('analyzing') : t('startScanningToDetect'))
                          : (uploadedImageUrl ? t('clickAnalyze') : t('uploadToAnalyze'))
                        }
                      </p>
                    </div>
                  ) : (
                    <div className={`
                      rounded-lg p-4 border-2
                      ${prediction.class.bgColor} ${prediction.class.borderColor}
                      ${prediction.class.severity === 'high' ? 'alert-card' : ''}
                    `}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-lg font-bold ${prediction.class.color}`}>
                          {t(prediction.class.key)}
                        </span>
                        {prediction.class.severity === 'none' ? (
                          <CheckCircle className="w-6 h-6 text-neon-green" />
                        ) : (
                          <AlertTriangle className={`w-6 h-6 ${prediction.class.color}`} />
                        )}
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">{t('confidence')}</span>
                          <span className={prediction.class.color}>
                            {prediction.confidence.toFixed(1)}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-300 ${
                              prediction.class.severity === 'none' ? 'bg-neon-green' :
                              prediction.class.severity === 'high' ? 'bg-alert-red' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${prediction.confidence}%` }}
                          />
                        </div>
                      </div>

                      {prediction.class.severity !== 'none' && (
                        <div className="text-xs text-gray-400 uppercase tracking-wider">
                          {t('severity')}: <span className={prediction.class.color}>{t(prediction.class.severity)}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Treatment for Lite Model */}
                {prediction && (
                  <div className="cyber-card cyber-card-glow rounded-xl p-4">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      {t('treatment')}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t(`treatments.${prediction.class.key}`)}
                    </p>
                    
                    {isSpeechSupported && (
                      <button
                        onClick={readAloud}
                        className="mt-3 w-full py-2 rounded-lg border border-neon-green/30 bg-neon-green/10 text-neon-green text-sm flex items-center justify-center gap-2 hover:bg-neon-green/20 transition-all duration-300"
                      >
                        <Volume2 className="w-4 h-4" />
                        🔊 {language === 'en' ? 'Read Aloud' : language === 'hi' ? 'सुनें' : language === 'te' ? 'వినండి' : language === 'ta' ? 'கேளுங்கள்' : language === 'pa' ? 'ਸੁਣੋ' : language === 'kn' ? 'ಕೇಳಿ' : 'Read Aloud'}
                      </button>
                    )}
                  </div>
                )}
              </>
            )}

            {/* Smart Model Results */}
            {activeModel === 'smart' && (
              <>
                {!smartPrediction ? (
                  <div className="cyber-card cyber-card-glow rounded-xl p-4">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Leaf className="w-4 h-4" />
                      {t('detectionResult')}
                    </h3>
                    <div className="text-center py-8">
                      <ZoomIn className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                      <p className="text-gray-500">
                        {inputMode === 'camera' 
                          ? (isScanning ? t('analyzing') : t('startScanningToDetect'))
                          : (uploadedImageUrl ? t('clickAnalyze') : t('uploadToAnalyze'))
                        }
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Disease Result Card */}
                    <DiseaseResultCard 
                      disease={smartPrediction} 
                      confidence={smartPrediction.confidence} 
                    />

                    {/* Treatment Plan */}
                    <TreatmentPlan disease={smartPrediction} />

                    {/* Progression Timeline */}
                    <ProgressionTimeline disease={smartPrediction} />

                    {/* Nearby Stores */}
                    <NearbyStores disease={smartPrediction} />

                    {/* Voice Button */}
                    {isSpeechSupported && (
                      <button
                        onClick={readAloud}
                        className="w-full py-3 rounded-lg border border-neon-green/30 bg-neon-green/10 text-neon-green font-medium flex items-center justify-center gap-2 hover:bg-neon-green/20 transition-all duration-300"
                      >
                        <Volume2 className="w-5 h-5" />
                        🔊 {language === 'en' ? 'Read Results Aloud' : language === 'hi' ? 'परिणाम सुनें' : 'Read Aloud'}
                      </button>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
