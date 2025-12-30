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
  Share2,
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Full 38-class PlantVillage model classes (matching class_names.json)
const DISEASE_CLASSES = [
  { id: 0, key: 'appleScab', name: 'Apple Scab', crop: 'Apple', severity: 'medium', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20', borderColor: 'border-yellow-400' },
  { id: 1, key: 'appleBlackRot', name: 'Apple Black Rot', crop: 'Apple', severity: 'high', color: 'text-alert-red', bgColor: 'bg-alert-red/20', borderColor: 'border-alert-red' },
  { id: 2, key: 'appleCedarRust', name: 'Cedar Apple Rust', crop: 'Apple', severity: 'medium', color: 'text-orange-400', bgColor: 'bg-orange-400/20', borderColor: 'border-orange-400' },
  { id: 3, key: 'appleHealthy', name: 'Apple - Healthy', crop: 'Apple', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 4, key: 'blueberryHealthy', name: 'Blueberry - Healthy', crop: 'Blueberry', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 5, key: 'cherryPowderyMildew', name: 'Cherry Powdery Mildew', crop: 'Cherry', severity: 'medium', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20', borderColor: 'border-yellow-400' },
  { id: 6, key: 'cherryHealthy', name: 'Cherry - Healthy', crop: 'Cherry', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 7, key: 'cornGrayLeafSpot', name: 'Corn Gray Leaf Spot', crop: 'Corn', severity: 'medium', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20', borderColor: 'border-yellow-400' },
  { id: 8, key: 'cornCommonRust', name: 'Corn Common Rust', crop: 'Corn', severity: 'medium', color: 'text-orange-400', bgColor: 'bg-orange-400/20', borderColor: 'border-orange-400' },
  { id: 9, key: 'cornNorthernLeafBlight', name: 'Corn Northern Leaf Blight', crop: 'Corn', severity: 'high', color: 'text-alert-red', bgColor: 'bg-alert-red/20', borderColor: 'border-alert-red' },
  { id: 10, key: 'cornHealthy', name: 'Corn - Healthy', crop: 'Corn', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 11, key: 'grapeBlackRot', name: 'Grape Black Rot', crop: 'Grape', severity: 'high', color: 'text-alert-red', bgColor: 'bg-alert-red/20', borderColor: 'border-alert-red' },
  { id: 12, key: 'grapeBlackMeasles', name: 'Grape Black Measles (Esca)', crop: 'Grape', severity: 'high', color: 'text-alert-red', bgColor: 'bg-alert-red/20', borderColor: 'border-alert-red' },
  { id: 13, key: 'grapeLeafBlight', name: 'Grape Leaf Blight', crop: 'Grape', severity: 'medium', color: 'text-orange-400', bgColor: 'bg-orange-400/20', borderColor: 'border-orange-400' },
  { id: 14, key: 'grapeHealthy', name: 'Grape - Healthy', crop: 'Grape', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 15, key: 'orangeCitrusGreening', name: 'Orange Citrus Greening', crop: 'Orange', severity: 'high', color: 'text-alert-red', bgColor: 'bg-alert-red/20', borderColor: 'border-alert-red' },
  { id: 16, key: 'peachBacterialSpot', name: 'Peach Bacterial Spot', crop: 'Peach', severity: 'medium', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20', borderColor: 'border-yellow-400' },
  { id: 17, key: 'peachHealthy', name: 'Peach - Healthy', crop: 'Peach', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 18, key: 'pepperBacterialSpot', name: 'Pepper Bacterial Spot', crop: 'Pepper', severity: 'medium', color: 'text-orange-400', bgColor: 'bg-orange-400/20', borderColor: 'border-orange-400' },
  { id: 19, key: 'pepperHealthy', name: 'Pepper - Healthy', crop: 'Pepper', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 20, key: 'potatoEarlyBlight', name: 'Potato Early Blight', crop: 'Potato', severity: 'medium', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20', borderColor: 'border-yellow-400' },
  { id: 21, key: 'potatoLateBlight', name: 'Potato Late Blight', crop: 'Potato', severity: 'high', color: 'text-alert-red', bgColor: 'bg-alert-red/20', borderColor: 'border-alert-red' },
  { id: 22, key: 'potatoHealthy', name: 'Potato - Healthy', crop: 'Potato', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 23, key: 'raspberryHealthy', name: 'Raspberry - Healthy', crop: 'Raspberry', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 24, key: 'soybeanHealthy', name: 'Soybean - Healthy', crop: 'Soybean', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 25, key: 'squashPowderyMildew', name: 'Squash Powdery Mildew', crop: 'Squash', severity: 'medium', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20', borderColor: 'border-yellow-400' },
  { id: 26, key: 'strawberryLeafScorch', name: 'Strawberry Leaf Scorch', crop: 'Strawberry', severity: 'medium', color: 'text-orange-400', bgColor: 'bg-orange-400/20', borderColor: 'border-orange-400' },
  { id: 27, key: 'strawberryHealthy', name: 'Strawberry - Healthy', crop: 'Strawberry', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
  { id: 28, key: 'tomatoBacterialSpot', name: 'Tomato Bacterial Spot', crop: 'Tomato', severity: 'medium', color: 'text-orange-400', bgColor: 'bg-orange-400/20', borderColor: 'border-orange-400' },
  { id: 29, key: 'tomatoEarlyBlight', name: 'Tomato Early Blight', crop: 'Tomato', severity: 'medium', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20', borderColor: 'border-yellow-400' },
  { id: 30, key: 'tomatoLateBlight', name: 'Tomato Late Blight', crop: 'Tomato', severity: 'high', color: 'text-alert-red', bgColor: 'bg-alert-red/20', borderColor: 'border-alert-red' },
  { id: 31, key: 'tomatoLeafMold', name: 'Tomato Leaf Mold', crop: 'Tomato', severity: 'medium', color: 'text-orange-400', bgColor: 'bg-orange-400/20', borderColor: 'border-orange-400' },
  { id: 32, key: 'tomatoSeptoriaLeafSpot', name: 'Tomato Septoria Leaf Spot', crop: 'Tomato', severity: 'medium', color: 'text-yellow-500', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500' },
  { id: 33, key: 'tomatoSpiderMites', name: 'Tomato Spider Mites', crop: 'Tomato', severity: 'low', color: 'text-amber-400', bgColor: 'bg-amber-400/20', borderColor: 'border-amber-400' },
  { id: 34, key: 'tomatoTargetSpot', name: 'Tomato Target Spot', crop: 'Tomato', severity: 'medium', color: 'text-orange-500', bgColor: 'bg-orange-500/20', borderColor: 'border-orange-500' },
  { id: 35, key: 'tomatoYellowLeafCurl', name: 'Tomato Yellow Leaf Curl Virus', crop: 'Tomato', severity: 'high', color: 'text-alert-red', bgColor: 'bg-alert-red/20', borderColor: 'border-alert-red' },
  { id: 36, key: 'tomatoMosaicVirus', name: 'Tomato Mosaic Virus', crop: 'Tomato', severity: 'high', color: 'text-red-500', bgColor: 'bg-red-500/20', borderColor: 'border-red-500' },
  { id: 37, key: 'tomatoHealthy', name: 'Tomato - Healthy', crop: 'Tomato', severity: 'none', color: 'text-neon-green', bgColor: 'bg-neon-green/20', borderColor: 'border-neon-green' },
];

// Treatment recommendations for all 38 classes
const TREATMENTS = {
  appleScab: 'Apply fungicide (Captan or Myclobutanil). Remove fallen leaves. Prune for air circulation.',
  appleBlackRot: 'Remove infected fruit and cankers. Apply fungicide. Maintain tree health with proper fertilization.',
  appleCedarRust: 'Apply fungicide in spring. Remove nearby cedar trees if possible. Use resistant varieties.',
  appleHealthy: 'No treatment needed. Continue regular care and monitoring.',
  blueberryHealthy: 'No treatment needed. Continue regular care and monitoring.',
  cherryPowderyMildew: 'Apply sulfur-based fungicide. Improve air circulation. Avoid overhead watering.',
  cherryHealthy: 'No treatment needed. Continue regular care and monitoring.',
  cornGrayLeafSpot: 'Use resistant hybrids. Apply fungicide if severe. Rotate crops and remove debris.',
  cornCommonRust: 'Apply fungicide (Azoxystrobin). Use resistant varieties. Plant early to avoid peak infection.',
  cornNorthernLeafBlight: 'Apply fungicide immediately. Use resistant hybrids. Practice crop rotation.',
  cornHealthy: 'No treatment needed. Continue regular care and monitoring.',
  grapeBlackRot: 'Remove mummified berries. Apply fungicide (Mancozeb) before bloom. Prune for air flow.',
  grapeBlackMeasles: 'No cure available. Remove infected vines. Avoid plant stress. Use preventive trunk treatments.',
  grapeLeafBlight: 'Apply copper-based fungicide. Remove infected leaves. Improve vineyard sanitation.',
  grapeHealthy: 'No treatment needed. Continue regular care and monitoring.',
  orangeCitrusGreening: 'No cure. Remove infected trees. Control psyllid vectors. Use disease-free nursery stock.',
  peachBacterialSpot: 'Apply copper spray during dormancy. Avoid overhead irrigation. Use resistant varieties.',
  peachHealthy: 'No treatment needed. Continue regular care and monitoring.',
  pepperBacterialSpot: 'Apply copper-based bactericide. Remove infected plants. Use disease-free seeds.',
  pepperHealthy: 'No treatment needed. Continue regular care and monitoring.',
  potatoEarlyBlight: 'Apply fungicide (Chlorothalonil). Remove infected leaves. Ensure proper plant spacing.',
  potatoLateBlight: 'URGENT: Apply fungicide immediately (Metalaxyl). Remove and destroy infected plants. Avoid overhead watering.',
  potatoHealthy: 'No treatment needed. Continue regular care and monitoring.',
  raspberryHealthy: 'No treatment needed. Continue regular care and monitoring.',
  soybeanHealthy: 'No treatment needed. Continue regular care and monitoring.',
  squashPowderyMildew: 'Apply sulfur or neem oil. Improve air circulation. Water at base of plants.',
  strawberryLeafScorch: 'Remove infected leaves. Apply fungicide. Ensure good drainage and air circulation.',
  strawberryHealthy: 'No treatment needed. Continue regular care and monitoring.',
  tomatoBacterialSpot: 'Apply copper-based bactericide. Remove infected plants. Use disease-free seeds. Rotate crops.',
  tomatoEarlyBlight: 'Apply copper-based fungicide. Remove affected leaves. Ensure proper spacing.',
  tomatoLateBlight: 'URGENT: Apply fungicide immediately. Remove and destroy infected plants. Avoid overhead watering.',
  tomatoLeafMold: 'Improve ventilation. Reduce humidity. Apply fungicide if severe.',
  tomatoSeptoriaLeafSpot: 'Remove infected leaves. Apply fungicide. Mulch to prevent soil splash.',
  tomatoSpiderMites: 'Spray with water to dislodge mites. Apply neem oil or insecticidal soap. Introduce predatory mites.',
  tomatoTargetSpot: 'Apply fungicide (Chlorothalonil). Remove infected leaves. Improve air circulation.',
  tomatoYellowLeafCurl: 'No cure. Remove infected plants. Control whiteflies. Use resistant varieties.',
  tomatoMosaicVirus: 'No cure. Remove infected plants. Disinfect tools. Wash hands before handling plants.',
  tomatoHealthy: 'No treatment needed. Continue regular care and monitoring.',
};

export default function FarmGuardScanner({ onClose, isOfflineMode }) {
  const { t, speak, isSpeechSupported, language } = useLanguage();
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const lastAnnouncedPrediction = useRef(null);
  
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
  const [inferenceTime, setInferenceTime] = useState(0);
  const [frameCount, setFrameCount] = useState(0);
  const [cameraReady, setCameraReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  // Get the current image as a blob for sharing
  const getImageBlob = useCallback(async () => {
    try {
      let imageDataUrl = null;
      
      if (inputMode === 'upload' && uploadedImageUrl) {
        imageDataUrl = uploadedImageUrl;
      } else if (inputMode === 'camera' && webcamRef.current) {
        imageDataUrl = webcamRef.current.getScreenshot();
      }
      
      if (!imageDataUrl) return null;
      
      // Convert data URL to blob
      const response = await fetch(imageDataUrl);
      const blob = await response.blob();
      return blob;
    } catch (err) {
      console.error('Error getting image blob:', err);
      return null;
    }
  }, [inputMode, uploadedImageUrl]);

  // Build share message for a prediction
  const buildShareMessage = useCallback((pred) => {
    if (!pred) return '';
    
    const diseaseName = pred.class.name;
    const cropName = pred.class.crop || '';
    const confidence = Math.round(pred.confidence);
    const severity = pred.class.severity !== 'none' ? pred.class.severity : '';
    const treatment = t(`treatments.${pred.class.key}`) || TREATMENTS[pred.class.key] || 'Continue monitoring your crop.';
    
    // Get severity emoji
    const severityEmoji = pred.class.severity === 'high' ? '🔴' : 
                          pred.class.severity === 'medium' ? '🟡' : 
                          pred.class.severity === 'low' ? '🟢' : '✅';
    
    const statusEmoji = pred.class.severity === 'none' ? '✅' : '⚠️';
    
    let message = `🌿 *FARMGUARD AI* 🌿\n`;
    message += `Crop Disease Detector\n\n`;
    
    message += `${statusEmoji} *DIAGNOSIS*\n`;
    if (cropName) message += `Crop: ${cropName}\n`;
    message += `Disease: ${diseaseName}\n`;
    message += `Confidence: ${confidence}%\n`;
    if (severity) {
      message += `Severity: ${severityEmoji} ${severity.toUpperCase()}\n`;
    }
    message += `\n`;
    
    message += `💊 *TREATMENT*\n`;
    message += `${treatment}\n\n`;
    
    message += `📅 ${new Date().toLocaleDateString()}\n`;
    message += `🤖 FarmGuard AI - Works Offline`;
    
    return message;
  }, []);

  // Detect if mobile device
  const isMobile = useCallback(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, []);

  // Share via WhatsApp - DIRECT, no Web Share API
  const shareWhatsApp = useCallback(() => {
    if (!prediction) return;
    const message = buildShareMessage(prediction);
    const encodedMessage = encodeURIComponent(message);
    
    // Use different URLs for mobile vs desktop
    if (isMobile()) {
      // Mobile: Use WhatsApp app deep link
      window.open(`https://api.whatsapp.com/send?text=${encodedMessage}`, '_blank');
    } else {
      // Desktop: Use WhatsApp Web
      window.open(`https://web.whatsapp.com/send?text=${encodedMessage}`, '_blank');
    }
  }, [prediction, buildShareMessage, isMobile]);

  // Share via SMS - DIRECT
  const shareSMS = useCallback(() => {
    if (!prediction) return;
    const message = buildShareMessage(prediction);
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `sms:?body=${encodedMessage}`;
  }, [prediction, buildShareMessage]);

  // Share with image using Native Share API (for mobile)
  const shareNative = useCallback(async () => {
    if (!prediction) return;
    setIsSharing(true);
    
    try {
      const message = buildShareMessage(prediction);
      const imageBlob = await getImageBlob();
      
      // Check if Web Share API with files is supported
      if (navigator.share && imageBlob) {
        const file = new File([imageBlob], 'farmguard-diagnosis.jpg', { type: 'image/jpeg' });
        const shareData = {
          text: message,
          files: [file],
        };
        
        if (navigator.canShare && navigator.canShare(shareData)) {
          await navigator.share(shareData);
          setIsSharing(false);
          return;
        }
        
        // Try sharing without files
        await navigator.share({ text: message });
      } else if (navigator.share) {
        await navigator.share({ text: message });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(message);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Share error:', err);
      }
    }
    
    setIsSharing(false);
  }, [prediction, buildShareMessage, getImageBlob]);

  // Copy to clipboard
  const copyToClipboard = useCallback(async () => {
    if (!prediction) return;
    const message = buildShareMessage(prediction);
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [prediction, buildShareMessage]);

  // Build voice message for a prediction
  const buildVoiceMessage = useCallback((pred) => {
    if (!pred) return '';
    
    const diseaseName = pred.class.name;
    const cropName = pred.class.crop || 'crop';
    const confidence = Math.round(pred.confidence);
    const severity = pred.class.severity;
    const treatment = t(`treatments.${pred.class.key}`) || TREATMENTS[pred.class.key] || 'Continue monitoring.';
    
    // Build announcement message based on language
    const isHealthy = pred.class.severity === 'none';
    
    const messages = {
      en: isHealthy
        ? `Good news! Your ${cropName} is healthy with ${confidence}% confidence.`
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
  }, [language]);

  // Speak detection result (auto-announce)
  const announceResult = useCallback((pred, force = false) => {
    if (!isSpeechSupported || !pred) return;
    
    // For auto-announce: check voiceAlertsEnabled and don't repeat
    if (!force) {
      if (!voiceAlertsEnabled) return;
      if (lastAnnouncedPrediction.current === pred.class.name) return;
      lastAnnouncedPrediction.current = pred.class.name;
    }
    
    const message = buildVoiceMessage(pred);
    if (message) {
      speak(message);
    }
  }, [voiceAlertsEnabled, isSpeechSupported, buildVoiceMessage, speak]);
  
  // Manual read aloud (always works, ignores lastAnnouncedPrediction)
  const readAloud = useCallback(() => {
    if (!isSpeechSupported || !prediction) return;
    const message = buildVoiceMessage(prediction);
    if (message) {
      speak(message);
    }
  }, [isSpeechSupported, prediction, buildVoiceMessage, speak]);

  // Effect to announce predictions
  useEffect(() => {
    if (prediction && !isScanning) {
      announceResult(prediction);
    }
  }, [prediction, isScanning, announceResult]);

  // Initialize TensorFlow.js and load model
  useEffect(() => {
    let isMounted = true;

    const initializeTensorFlow = async () => {
      try {
        setLoadingMessage('settingUpTensorflow');
        setLoadingProgress(10);
        
        // Set backend to WebGL for GPU acceleration
        await tf.setBackend('webgl');
        await tf.ready();
        
        if (!isMounted) return;
        setLoadingProgress(30);
        setLoadingMessage('loadingModel');

        // Try to load custom model, fall back to demo mode
        let loadedModel = null;
        
        try {
          // Attempt to load the model from public/model folder
          loadedModel = await tf.loadLayersModel('/model/model.json');
          setLoadingProgress(90);
          setLoadingMessage('modelLoaded');
        } catch (modelError) {
          console.log('Custom model not found, using demo mode:', modelError);
          setLoadingProgress(70);
          setLoadingMessage('demoMode');
          
          // Create a simple demo model for demonstration
          loadedModel = await createDemoModel();
          setLoadingProgress(90);
        }

        if (!isMounted) return;
        
        // Warm up the model with a dummy tensor
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

  // Create a demo model for demonstration purposes
  const createDemoModel = async () => {
    const model = tf.sequential();
    
    model.add(tf.layers.conv2d({
      inputShape: [224, 224, 3],
      filters: 16,
      kernelSize: 3,
      activation: 'relu'
    }));
    model.add(tf.layers.globalAveragePooling2d({}));
    model.add(tf.layers.dense({ units: DISEASE_CLASSES.length, activation: 'softmax' }));
    
    model.compile({
      optimizer: 'adam',
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });
    
    return model;
  };

  // Preprocess image for model input (works for both video and image elements)
  const preprocessImage = (imageElement) => {
    return tf.tidy(() => {
      // Capture frame from video or image
      let tensor = tf.browser.fromPixels(imageElement);
      
      // Resize to 224x224 (MobileNetV2 input size)
      tensor = tf.image.resizeBilinear(tensor, [224, 224]);
      
      // IMPORTANT: MobileNetV2 expects [-1, 1] normalization!
      // This matches tf.keras.applications.mobilenet_v2.preprocess_input
      tensor = tensor.toFloat().div(127.5).sub(1);
      
      // Add batch dimension
      tensor = tensor.expandDims(0);
      
      return tensor;
    });
  };

  // Run prediction on an image element
  const runPredictionOnImage = useCallback(async (imageElement) => {
    if (!model) return null;

    try {
      const startTime = performance.now();
      
      // Preprocess the image
      const inputTensor = preprocessImage(imageElement);
      
      // Run inference
      const predictions = await model.predict(inputTensor).data();
      
      const endTime = performance.now();
      setInferenceTime(Math.round(endTime - startTime));
      
      // Find the class with highest probability
      const maxIndex = predictions.indexOf(Math.max(...predictions));
      const confidence = predictions[maxIndex] * 100;
      
      // Debug: Log top 5 predictions to console
      const sortedPreds = [...predictions]
        .map((p, i) => ({ index: i, prob: p * 100, name: DISEASE_CLASSES[i]?.name }))
        .sort((a, b) => b.prob - a.prob)
        .slice(0, 5);
      console.log('Top 5 predictions:', sortedPreds);
      
      // Use ACTUAL model predictions (not demo/random values)
      const finalPrediction = {
        class: DISEASE_CLASSES[maxIndex] || DISEASE_CLASSES[0],
        confidence: confidence,
        allPredictions: DISEASE_CLASSES.map((c, i) => ({
          ...c,
          probability: (predictions[i] || 0) * 100
        })).sort((a, b) => b.probability - a.probability)
      };
      
      // Clean up tensor
      inputTensor.dispose();
      
      return finalPrediction;
      
    } catch (err) {
      console.error('Prediction error:', err);
      return null;
    }
  }, [model]);

  // Run prediction on current camera frame
  const runCameraPrediction = useCallback(async () => {
    if (!model || !webcamRef.current?.video || !cameraReady) return;

    const video = webcamRef.current.video;
    
    if (video.readyState !== 4) return;

    const result = await runPredictionOnImage(video);
    if (result) {
      setPrediction(result);
      setFrameCount(prev => prev + 1);
    }
  }, [model, cameraReady, runPredictionOnImage]);

  // Start scanning loop for camera
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
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      // Create object URL for preview
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(file);
      setUploadedImageUrl(imageUrl);
      setPrediction(null);
    }
  };

  // Analyze uploaded image
  const analyzeUploadedImage = async () => {
    if (!uploadedImageUrl || !model) return;
    
    setIsAnalyzing(true);
    
    // Wait for image to load
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = async () => {
      const result = await runPredictionOnImage(img);
      if (result) {
        setPrediction(result);
        setFrameCount(prev => prev + 1);
      }
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
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Switch input mode
  const switchMode = (mode) => {
    // Stop scanning if switching away from camera
    if (inputMode === 'camera' && isScanning) {
      stopScanning();
    }
    // Clear uploaded image if switching away from upload
    if (inputMode === 'upload') {
      clearUploadedImage();
    }
    setPrediction(null);
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

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-4xl my-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-neon-green/20 border border-neon-green flex items-center justify-center">
              <Cpu className="w-5 h-5 text-neon-green" />
            </div>
            <div>
              <h2 
                className="text-xl font-bold text-neon-green"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {t('aiScanner')}
              </h2>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                {isOfflineMode && (
                  <>
                    <WifiOff className="w-4 h-4 text-alert-red" />
                    <span className="text-alert-red">{t('offlineMode')}</span>
                    <span className="text-gray-600">|</span>
                  </>
                )}
                <span>{t('mobileNet')}</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
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
        <div className="grid md:grid-cols-3 gap-4">
          {/* Image/Camera Feed */}
          <div className="md:col-span-2">
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
                  
                  {/* Scanner Overlay */}
                  {cameraReady && (
                    <>
                      {/* Corner brackets */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-neon-green" />
                        <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-neon-green" />
                        <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-neon-green" />
                        <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-neon-green" />
                      </div>

                      {/* Scan line animation */}
                      {isScanning && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div className="scan-line" />
                        </div>
                      )}

                      {/* Status bar */}
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
                    // Upload Drop Zone
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
                    // Uploaded Image Preview
                    <>
                      <img
                        ref={imageRef}
                        src={uploadedImageUrl}
                        alt="Uploaded crop"
                        className="w-full aspect-video object-contain bg-black"
                      />
                      
                      {/* Corner brackets */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-neon-green" />
                        <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-neon-green" />
                        <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-neon-green" />
                        <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-neon-green" />
                      </div>

                      {/* Analyzing overlay */}
                      {isAnalyzing && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="text-center">
                            <div className="neural-loader mx-auto mb-3" />
                            <p className="text-neon-green font-semibold">Analyzing...</p>
                          </div>
                        </div>
                      )}

                      {/* Status bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-2">
                              <ImageIcon className="w-4 h-4 text-neon-green" />
                              <span className="text-neon-green">{t('imageLoaded')}</span>
                            </span>
                            {prediction && (
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
          <div className="space-y-4">
            {/* Detection Result */}
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
                    <div>
                      <span className={`text-lg font-bold ${prediction.class.color}`}>
                        {prediction.class.name}
                      </span>
                      {prediction.class.crop && (
                        <span className="text-xs text-gray-400 ml-2">({prediction.class.crop})</span>
                      )}
                    </div>
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

            {/* Treatment Recommendation */}
            {prediction && (
              <div className="cyber-card cyber-card-glow rounded-xl p-4">
                <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  {t('treatment')}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(`treatments.${prediction.class.key}`) || TREATMENTS[prediction.class.key] || 'Continue monitoring your crop.'}
                </p>
                
                {/* Voice Announcement Button */}
                {isSpeechSupported && (
                  <button
                    onClick={readAloud}
                    className="mt-3 w-full py-2 rounded-lg border border-neon-green/30 bg-neon-green/10 text-neon-green text-sm flex items-center justify-center gap-2 hover:bg-neon-green/20 transition-all duration-300"
                  >
                    <Volume2 className="w-4 h-4" />
                    🔊 {language === 'en' ? 'Read Aloud' : language === 'hi' ? 'सुनें' : language === 'te' ? 'వినండి' : language === 'ta' ? 'கேளுங்கள்' : language === 'pa' ? 'ਸੁਣੋ' : language === 'kn' ? 'ಕೇಳಿ' : 'Read Aloud'}
                  </button>
                )}

                {/* Share Results Section */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Share2 className="w-3 h-3" />
                    {language === 'en' ? 'Share Results' : language === 'hi' ? 'परिणाम साझा करें' : language === 'te' ? 'ఫలితాలను షేర్ చేయండి' : language === 'ta' ? 'முடிவுகளை பகிரவும்' : language === 'pa' ? 'ਨਤੀਜੇ ਸਾਂਝੇ ਕਰੋ' : language === 'kn' ? 'ಫಲಿತಾಂಶಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ' : 'Share Results'}
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {/* WhatsApp - Direct link */}
                    <button
                      onClick={shareWhatsApp}
                      className="py-2.5 px-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-medium flex flex-col items-center gap-1.5 hover:bg-green-500/30 active:scale-95 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span>WhatsApp</span>
                    </button>
                    
                    {/* SMS - Direct link */}
                    <button
                      onClick={shareSMS}
                      className="py-2.5 px-3 rounded-lg bg-blue-500/20 border border-blue-500/50 text-blue-400 text-xs font-medium flex flex-col items-center gap-1.5 hover:bg-blue-500/30 active:scale-95 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>SMS</span>
                    </button>
                    
                    {/* Copy */}
                    <button
                      onClick={copyToClipboard}
                      className={`py-2.5 px-3 rounded-lg border text-xs font-medium flex flex-col items-center gap-1.5 active:scale-95 transition-all duration-300 ${
                        copied 
                          ? 'bg-neon-green/20 border-neon-green/50 text-neon-green' 
                          : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      <span>{copied ? (language === 'en' ? 'Copied!' : '✓') : (language === 'en' ? 'Copy' : language === 'hi' ? 'कॉपी' : language === 'te' ? 'కాపీ' : language === 'ta' ? 'நகல்' : language === 'pa' ? 'ਕਾਪੀ' : language === 'kn' ? 'ನಕಲಿಸಿ' : 'Copy')}</span>
                    </button>
                  </div>
                  
                  {/* Share with Image button (uses native share) */}
                  <button
                    onClick={shareNative}
                    disabled={isSharing}
                    className="mt-3 w-full py-2.5 rounded-lg bg-purple-500/20 border border-purple-500/50 text-purple-400 text-xs font-medium flex items-center justify-center gap-2 hover:bg-purple-500/30 active:scale-[0.98] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSharing ? (
                      <div className="w-4 h-4 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin" />
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        📷 {language === 'en' ? 'Share with Image' : language === 'hi' ? 'छवि के साथ साझा करें' : 'Share with Image'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
}
