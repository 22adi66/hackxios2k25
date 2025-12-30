// Multilingual translations for FarmGuard AI
// Supported languages: English, Hindi, Telugu, Tamil

export const translations = {
  en: {
    // App name and taglines
    appName: 'FARMGUARD',
    tagline: 'Edge AI Crop Diagnostics',
    
    // Navigation
    home: 'Home',
    scanner: 'Scanner',
    history: 'History',
    settings: 'Settings',
    
    // Main page
    systemTime: 'System Time',
    offlineMode: 'Offline Mode',
    onlineMode: 'Online Mode',
    simulateOffline: 'Simulate Offline Mode',
    offlineActive: 'Offline Mode Simulation Active',
    offlineDescription: 'The AI model is running entirely in your browser. Zero cloud dependency!',
    toggleOfflineDesc: 'Toggle to simulate offline environment for demo',
    
    // System status
    systemStatus: 'SYSTEM STATUS',
    neuralEngine: 'Neural Engine',
    ready: 'Ready',
    inferenceLatency: 'Inference Latency',
    modelSize: 'Model Size',
    privacy: 'Privacy',
    local: '100% Local',
    
    // Diagnosis
    cropDiseaseDetection: 'CROP DISEASE DETECTION',
    scanDescription: 'Point your camera at any crop leaf. Our MobileNetV2 neural network will analyze and detect diseases in real-time — completely offline.',
    startDiagnosis: 'START DIAGNOSIS',
    aiEngineStandby: 'AI Engine Standing By',
    noUploadRequired: 'No upload required',
    instantResults: 'Instant results',
    worksOffline: 'Works offline',
    
    // Features
    whyFarmguard: 'WHY FARMGUARD?',
    offlineFeature: '100% Offline',
    offlineFeatureDesc: 'No internet? No problem. Edge AI runs entirely in your browser.',
    instantDetection: 'Instant Detection',
    instantDetectionDesc: 'Real-time analysis with sub-second inference latency.',
    privacyFirst: 'Privacy First',
    privacyFirstDesc: 'Your images never leave your device. Complete data privacy.',
    
    // Scanner
    aiScanner: 'AI SCANNER',
    mobileNet: 'MobileNetV2 Neural Network',
    liveCamera: 'Live Camera',
    uploadImage: 'Upload Image',
    startScan: 'START SCAN',
    stopScan: 'STOP SCAN',
    analyzeImage: 'ANALYZE IMAGE',
    analyzing: 'ANALYZING...',
    clear: 'CLEAR',
    uploadCropImage: 'Upload Crop Image',
    uploadHint: 'Click to browse or drag and drop',
    supportsFormats: 'Supports JPG, PNG, WebP',
    imageLoaded: 'IMAGE LOADED',
    scanning: 'SCANNING',
    standby: 'STANDBY',
    latency: 'Latency',
    frames: 'Frames',
    
    // Results
    detectionResult: 'Detection Result',
    startScanningToDetect: 'Start scanning to detect diseases',
    clickAnalyze: 'Click "Analyze Image" to detect',
    uploadToAnalyze: 'Upload an image to analyze',
    confidence: 'Confidence',
    severity: 'Severity',
    treatment: 'Treatment',
    allClasses: 'All Classes',
    
    // Disease names
    healthy: 'Healthy',
    earlyBlight: 'Early Blight',
    lateBlight: 'Late Blight',
    leafMold: 'Leaf Mold',
    septoriaLeafSpot: 'Septoria Leaf Spot',
    spiderMites: 'Spider Mites',
    targetSpot: 'Target Spot',
    mosaicVirus: 'Mosaic Virus',
    yellowLeafCurl: 'Yellow Leaf Curl',
    bacterialSpot: 'Bacterial Spot',
    
    // Severity levels
    none: 'none',
    low: 'low',
    medium: 'medium',
    high: 'high',
    
    // Treatments - All 38 diseases
    treatments: {
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
    },
    
    // Loading states
    initializingNeuralNet: 'Initializing Neural Network...',
    settingUpTensorflow: 'Setting up TensorFlow.js...',
    loadingModel: 'Loading MobileNetV2 Model...',
    modelLoaded: 'Model loaded successfully!',
    demoMode: 'Demo mode: Simulating AI detection...',
    warmingUp: 'Warming up neural network...',
    readyForDiagnosis: 'Ready for diagnosis!',
    
    // Errors
    initError: 'Failed to initialize AI engine. Please refresh and try again.',
    retry: 'Retry',
    
    // Footer
    footerText: 'FarmGuard AI — Built for Farmers, Powered by Edge AI',
    hackathon: 'Hackathon 2025 | Best Innovation Entry',
    
    // Language selector
    selectLanguage: 'Select Language',
    english: 'English',
    hindi: 'हिंदी',
    telugu: 'తెలుగు',
    tamil: 'தமிழ்',
  },
  
  hi: {
    // App name and taglines
    appName: 'फार्मगार्ड',
    tagline: 'एज एआई फसल निदान',
    
    // Navigation
    home: 'होम',
    scanner: 'स्कैनर',
    history: 'इतिहास',
    settings: 'सेटिंग्स',
    
    // Main page
    systemTime: 'सिस्टम समय',
    offlineMode: 'ऑफलाइन मोड',
    onlineMode: 'ऑनलाइन मोड',
    simulateOffline: 'ऑफलाइन मोड सिमुलेट करें',
    offlineActive: 'ऑफलाइन मोड सिमुलेशन सक्रिय',
    offlineDescription: 'एआई मॉडल पूरी तरह से आपके ब्राउज़र में चल रहा है। शून्य क्लाउड निर्भरता!',
    toggleOfflineDesc: 'डेमो के लिए ऑफलाइन वातावरण सिमुलेट करें',
    
    // System status
    systemStatus: 'सिस्टम स्थिति',
    neuralEngine: 'न्यूरल इंजन',
    ready: 'तैयार',
    inferenceLatency: 'अनुमान विलंबता',
    modelSize: 'मॉडल आकार',
    privacy: 'गोपनीयता',
    local: '100% स्थानीय',
    
    // Diagnosis
    cropDiseaseDetection: 'फसल रोग पहचान',
    scanDescription: 'किसी भी फसल की पत्ती पर अपना कैमरा पॉइंट करें। हमारा MobileNetV2 न्यूरल नेटवर्क रीयल-टाइम में रोगों का विश्लेषण और पता लगाएगा — पूरी तरह से ऑफ़लाइन।',
    startDiagnosis: 'निदान शुरू करें',
    aiEngineStandby: 'एआई इंजन तैयार',
    noUploadRequired: 'अपलोड की आवश्यकता नहीं',
    instantResults: 'तुरंत परिणाम',
    worksOffline: 'ऑफ़लाइन काम करता है',
    
    // Features
    whyFarmguard: 'फार्मगार्ड क्यों?',
    offlineFeature: '100% ऑफ़लाइन',
    offlineFeatureDesc: 'इंटरनेट नहीं? कोई समस्या नहीं। एज एआई पूरी तरह से आपके ब्राउज़र में चलता है।',
    instantDetection: 'तुरंत पहचान',
    instantDetectionDesc: 'सब-सेकंड अनुमान विलंबता के साथ रीयल-टाइम विश्लेषण।',
    privacyFirst: 'गोपनीयता पहले',
    privacyFirstDesc: 'आपकी छवियां आपके डिवाइस से कभी नहीं जातीं। पूर्ण डेटा गोपनीयता।',
    
    // Scanner
    aiScanner: 'एआई स्कैनर',
    mobileNet: 'MobileNetV2 न्यूरल नेटवर्क',
    liveCamera: 'लाइव कैमरा',
    uploadImage: 'छवि अपलोड करें',
    startScan: 'स्कैन शुरू करें',
    stopScan: 'स्कैन बंद करें',
    analyzeImage: 'छवि विश्लेषण करें',
    analyzing: 'विश्लेषण हो रहा है...',
    clear: 'साफ़ करें',
    uploadCropImage: 'फसल की छवि अपलोड करें',
    uploadHint: 'ब्राउज़ करने के लिए क्लिक करें',
    supportsFormats: 'JPG, PNG, WebP समर्थित',
    imageLoaded: 'छवि लोड हुई',
    scanning: 'स्कैनिंग',
    standby: 'स्टैंडबाय',
    latency: 'विलंबता',
    frames: 'फ्रेम',
    
    // Results
    detectionResult: 'पहचान परिणाम',
    startScanningToDetect: 'रोग पहचानने के लिए स्कैन शुरू करें',
    clickAnalyze: 'पहचानने के लिए "छवि विश्लेषण करें" पर क्लिक करें',
    uploadToAnalyze: 'विश्लेषण के लिए छवि अपलोड करें',
    confidence: 'विश्वास',
    severity: 'गंभीरता',
    treatment: 'उपचार',
    allClasses: 'सभी वर्ग',
    
    // Disease names
    healthy: 'स्वस्थ',
    earlyBlight: 'अगेती झुलसा',
    lateBlight: 'पछेती झुलसा',
    leafMold: 'पत्ती फफूंद',
    septoriaLeafSpot: 'सेप्टोरिया पत्ती धब्बा',
    spiderMites: 'मकड़ी के कण',
    targetSpot: 'टारगेट स्पॉट',
    mosaicVirus: 'मोज़ेक वायरस',
    yellowLeafCurl: 'पीली पत्ती मोड़',
    bacterialSpot: 'बैक्टीरियल स्पॉट',
    
    // Severity levels
    none: 'कोई नहीं',
    low: 'कम',
    medium: 'मध्यम',
    high: 'उच्च',
    
    // Treatments - All 38 diseases
    treatments: {
      appleScab: 'फफूंदनाशक (कैप्टान या माइक्लोब्यूटानिल) लगाएं। गिरी हुई पत्तियां हटाएं। हवा के संचार के लिए छंटाई करें।',
      appleBlackRot: 'संक्रमित फल और कैंकर हटाएं। फफूंदनाशक लगाएं। उचित उर्वरण से पेड़ का स्वास्थ्य बनाए रखें।',
      appleCedarRust: 'वसंत में फफूंदनाशक लगाएं। यदि संभव हो तो पास के देवदार के पेड़ हटाएं। प्रतिरोधी किस्मों का उपयोग करें।',
      appleHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      blueberryHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      cherryPowderyMildew: 'सल्फर-आधारित फफूंदनाशक लगाएं। हवा का संचार बढ़ाएं। ऊपर से पानी देने से बचें।',
      cherryHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      cornGrayLeafSpot: 'प्रतिरोधी हाइब्रिड का उपयोग करें। गंभीर होने पर फफूंदनाशक लगाएं। फसल चक्र अपनाएं।',
      cornCommonRust: 'फफूंदनाशक (एज़ोक्सीस्ट्रोबिन) लगाएं। प्रतिरोधी किस्मों का उपयोग करें। जल्दी बुवाई करें।',
      cornNorthernLeafBlight: 'तुरंत फफूंदनाशक लगाएं। प्रतिरोधी हाइब्रिड का उपयोग करें। फसल चक्र अपनाएं।',
      cornHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      grapeBlackRot: 'सूखे हुए जामुन हटाएं। फूल आने से पहले फफूंदनाशक (मैंकोज़ेब) लगाएं। हवा के लिए छंटाई करें।',
      grapeBlackMeasles: 'कोई इलाज नहीं। संक्रमित बेलें हटाएं। पौधों पर तनाव से बचें।',
      grapeLeafBlight: 'कॉपर-आधारित फफूंदनाशक लगाएं। संक्रमित पत्तियां हटाएं। बागान की सफाई रखें।',
      grapeHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      orangeCitrusGreening: 'कोई इलाज नहीं। संक्रमित पेड़ हटाएं। सिल्लिड वेक्टर को नियंत्रित करें।',
      peachBacterialSpot: 'सुप्तावस्था में कॉपर स्प्रे करें। ऊपर से सिंचाई से बचें। प्रतिरोधी किस्मों का उपयोग करें।',
      peachHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      pepperBacterialSpot: 'कॉपर-आधारित जीवाणुनाशक लगाएं। संक्रमित पौधे हटाएं। रोग-मुक्त बीज उपयोग करें।',
      pepperHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      potatoEarlyBlight: 'फफूंदनाशक (क्लोरोथालोनिल) लगाएं। संक्रमित पत्तियां हटाएं। उचित दूरी रखें।',
      potatoLateBlight: 'तत्काल: तुरंत फफूंदनाशक (मेटालैक्सिल) लगाएं। संक्रमित पौधे हटाएं और नष्ट करें।',
      potatoHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      raspberryHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      soybeanHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      squashPowderyMildew: 'सल्फर या नीम तेल लगाएं। हवा का संचार बढ़ाएं। पौधों के आधार पर पानी दें।',
      strawberryLeafScorch: 'संक्रमित पत्तियां हटाएं। फफूंदनाशक लगाएं। अच्छी जल निकासी सुनिश्चित करें।',
      strawberryHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      tomatoBacterialSpot: 'कॉपर-आधारित जीवाणुनाशक लगाएं। संक्रमित पौधे हटाएं। फसल चक्र अपनाएं।',
      tomatoEarlyBlight: 'कॉपर-आधारित फफूंदनाशक लगाएं। प्रभावित पत्तियां हटाएं। उचित दूरी रखें।',
      tomatoLateBlight: 'तत्काल: तुरंत फफूंदनाशक लगाएं। संक्रमित पौधे हटाएं और नष्ट करें।',
      tomatoLeafMold: 'वेंटिलेशन में सुधार करें। आर्द्रता कम करें। गंभीर होने पर फफूंदनाशक लगाएं।',
      tomatoSeptoriaLeafSpot: 'संक्रमित पत्तियां हटाएं। फफूंदनाशक लगाएं। मिट्टी के छींटे रोकने के लिए मल्च करें।',
      tomatoSpiderMites: 'माइट्स हटाने के लिए पानी का छिड़काव करें। नीम तेल या कीटनाशक साबुन लगाएं।',
      tomatoTargetSpot: 'फफूंदनाशक (क्लोरोथालोनिल) लगाएं। संक्रमित पत्तियां हटाएं। हवा का संचार बढ़ाएं।',
      tomatoYellowLeafCurl: 'कोई इलाज नहीं। संक्रमित पौधे हटाएं। व्हाइटफ्लाई नियंत्रित करें।',
      tomatoMosaicVirus: 'कोई इलाज नहीं। संक्रमित पौधे हटाएं। उपकरण कीटाणुरहित करें।',
      tomatoHealthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
    },
    
    // Loading states
    initializingNeuralNet: 'न्यूरल नेटवर्क प्रारंभ हो रहा है...',
    settingUpTensorflow: 'TensorFlow.js सेटअप हो रहा है...',
    loadingModel: 'MobileNetV2 मॉडल लोड हो रहा है...',
    modelLoaded: 'मॉडल सफलतापूर्वक लोड हुआ!',
    demoMode: 'डेमो मोड: एआई पहचान सिमुलेट हो रहा है...',
    warmingUp: 'न्यूरल नेटवर्क वार्म अप हो रहा है...',
    readyForDiagnosis: 'निदान के लिए तैयार!',
    
    // Errors
    initError: 'एआई इंजन प्रारंभ करने में विफल। कृपया रिफ्रेश करें और पुनः प्रयास करें।',
    retry: 'पुनः प्रयास करें',
    
    // Footer
    footerText: 'फार्मगार्ड एआई — किसानों के लिए बनाया, एज एआई द्वारा संचालित',
    hackathon: 'हैकाथॉन 2025 | सर्वश्रेष्ठ नवाचार प्रविष्टि',
    
    // Language selector
    selectLanguage: 'भाषा चुनें',
    english: 'English',
    hindi: 'हिंदी',
    telugu: 'తెలుగు',
    tamil: 'தமிழ்',
  },
  
  te: {
    // App name and taglines
    appName: 'ఫార్మ్‌గార్డ్',
    tagline: 'ఎడ్జ్ AI పంట రోగనిర్ధారణ',
    
    // Navigation
    home: 'హోమ్',
    scanner: 'స్కానర్',
    history: 'చరిత్ర',
    settings: 'సెట్టింగ్‌లు',
    
    // Main page
    systemTime: 'సిస్టమ్ సమయం',
    offlineMode: 'ఆఫ్‌లైన్ మోడ్',
    onlineMode: 'ఆన్‌లైన్ మోడ్',
    simulateOffline: 'ఆఫ్‌లైన్ మోడ్ అనుకరించు',
    offlineActive: 'ఆఫ్‌లైన్ మోడ్ సిమ్యులేషన్ యాక్టివ్',
    offlineDescription: 'AI మోడల్ మీ బ్రౌజర్‌లో పూర్తిగా నడుస్తోంది. క్లౌడ్ డిపెండెన్సీ సున్నా!',
    toggleOfflineDesc: 'డెమో కోసం ఆఫ్‌లైన్ వాతావరణాన్ని అనుకరించండి',
    
    // System status
    systemStatus: 'సిస్టమ్ స్థితి',
    neuralEngine: 'న్యూరల్ ఇంజన్',
    ready: 'సిద్ధం',
    inferenceLatency: 'అనుమాన జాప్యం',
    modelSize: 'మోడల్ పరిమాణం',
    privacy: 'గోప్యత',
    local: '100% స్థానిక',
    
    // Diagnosis
    cropDiseaseDetection: 'పంట వ్యాధి గుర్తింపు',
    scanDescription: 'ఏదైనా పంట ఆకుపై మీ కెమెరాను చూపించండి. మా MobileNetV2 న్యూరల్ నెట్‌వర్క్ రియల్-టైమ్‌లో వ్యాధులను విశ్లేషిస్తుంది — పూర్తిగా ఆఫ్‌లైన్‌లో.',
    startDiagnosis: 'రోగనిర్ధారణ ప్రారంభించు',
    aiEngineStandby: 'AI ఇంజన్ సిద్ధంగా ఉంది',
    noUploadRequired: 'అప్‌లోడ్ అవసరం లేదు',
    instantResults: 'తక్షణ ఫలితాలు',
    worksOffline: 'ఆఫ్‌లైన్‌లో పనిచేస్తుంది',
    
    // Features
    whyFarmguard: 'ఫార్మ్‌గార్డ్ ఎందుకు?',
    offlineFeature: '100% ఆఫ్‌లైన్',
    offlineFeatureDesc: 'ఇంటర్నెట్ లేదా? సమస్య లేదు. ఎడ్జ్ AI మీ బ్రౌజర్‌లో పూర్తిగా నడుస్తుంది.',
    instantDetection: 'తక్షణ గుర్తింపు',
    instantDetectionDesc: 'సబ్-సెకండ్ అనుమాన జాప్యంతో రియల్-టైమ్ విశ్లేషణ.',
    privacyFirst: 'గోప్యత మొదట',
    privacyFirstDesc: 'మీ చిత్రాలు మీ పరికరం నుండి ఎప్పటికీ బయటకు వెళ్ళవు. పూర్తి డేటా గోప్యత.',
    
    // Scanner
    aiScanner: 'AI స్కానర్',
    mobileNet: 'MobileNetV2 న్యూరల్ నెట్‌వర్క్',
    liveCamera: 'లైవ్ కెమెరా',
    uploadImage: 'చిత్రం అప్‌లోడ్ చేయండి',
    startScan: 'స్కాన్ ప్రారంభించు',
    stopScan: 'స్కాన్ ఆపు',
    analyzeImage: 'చిత్రం విశ్లేషించు',
    analyzing: 'విశ్లేషిస్తోంది...',
    clear: 'క్లియర్',
    uploadCropImage: 'పంట చిత్రం అప్‌లోడ్ చేయండి',
    uploadHint: 'బ్రౌజ్ చేయడానికి క్లిక్ చేయండి',
    supportsFormats: 'JPG, PNG, WebP మద్దతు',
    imageLoaded: 'చిత్రం లోడ్ అయింది',
    scanning: 'స్కానింగ్',
    standby: 'స్టాండ్‌బై',
    latency: 'జాప్యం',
    frames: 'ఫ్రేమ్‌లు',
    
    // Results
    detectionResult: 'గుర్తింపు ఫలితం',
    startScanningToDetect: 'వ్యాధులను గుర్తించడానికి స్కాన్ ప్రారంభించండి',
    clickAnalyze: 'గుర్తించడానికి "చిత్రం విశ్లేషించు" క్లిక్ చేయండి',
    uploadToAnalyze: 'విశ్లేషించడానికి చిత్రం అప్‌లోడ్ చేయండి',
    confidence: 'విశ్వాసం',
    severity: 'తీవ్రత',
    treatment: 'చికిత్స',
    allClasses: 'అన్ని తరగతులు',
    
    // Disease names
    healthy: 'ఆరోగ్యకరమైన',
    earlyBlight: 'ముందస్తు బ్లైట్',
    lateBlight: 'ఆలస్య బ్లైట్',
    leafMold: 'ఆకు బూజు',
    septoriaLeafSpot: 'సెప్టోరియా ఆకు మచ్చ',
    spiderMites: 'సాలీడు పురుగులు',
    targetSpot: 'టార్గెట్ స్పాట్',
    mosaicVirus: 'మొజాయిక్ వైరస్',
    yellowLeafCurl: 'పసుపు ఆకు ముడత',
    bacterialSpot: 'బాక్టీరియల్ స్పాట్',
    
    // Severity levels
    none: 'ఏమీ లేదు',
    low: 'తక్కువ',
    medium: 'మధ్యస్థం',
    high: 'ఎక్కువ',
    
    // Treatments - All 38 diseases
    treatments: {
      appleScab: 'శిలీంద్ర నాశిని (కాప్టాన్ లేదా మైక్లోబ్యూటానిల్) వర్తించండి. రాలిన ఆకులను తొలగించండి. గాలి ప్రసరణ కోసం కత్తిరించండి.',
      appleBlackRot: 'సంక్రమిత పండ్లు మరియు కాంకర్లను తొలగించండి. శిలీంద్ర నాశిని వర్తించండి. సరైన ఎరువులతో చెట్టు ఆరోగ్యం కాపాడండి.',
      appleCedarRust: 'వసంతంలో శిలీంద్ర నాశిని వర్తించండి. సాధ్యమైతే సమీపంలోని సెడార్ చెట్లను తొలగించండి. నిరోధక రకాలను ఉపయోగించండి.',
      appleHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      blueberryHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      cherryPowderyMildew: 'సల్ఫర్-ఆధారిత శిలీంద్ర నాశిని వర్తించండి. గాలి ప్రసరణ మెరుగుపరచండి. పైన నుండి నీరు పోయడం మానుకోండి.',
      cherryHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      cornGrayLeafSpot: 'నిరోధక హైబ్రిడ్లు ఉపయోగించండి. తీవ్రంగా ఉంటే శిలీంద్ర నాశిని వర్తించండి. పంట భ్రమణం పాటించండి.',
      cornCommonRust: 'శిలీంద్ర నాశిని (అజోక్సిస్ట్రోబిన్) వర్తించండి. నిరోధక రకాలను ఉపయోగించండి. ముందుగా నాటండి.',
      cornNorthernLeafBlight: 'వెంటనే శిలీంద్ర నాశిని వర్తించండి. నిరోధక హైబ్రిడ్లు ఉపయోగించండి. పంట భ్రమణం పాటించండి.',
      cornHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      grapeBlackRot: 'ఎండిన ద్రాక్షలను తొలగించండి. పూల ముందు శిలీంద్ర నాశిని (మాంకోజెబ్) వర్తించండి. గాలి కోసం కత్తిరించండి.',
      grapeBlackMeasles: 'నివారణ లేదు. సంక్రమిత తీగలను తొలగించండి. మొక్కల ఒత్తిడి నివారించండి.',
      grapeLeafBlight: 'రాగి-ఆధారిత శిలీంద్ర నాశిని వర్తించండి. సంక్రమిత ఆకులను తొలగించండి. వైన్‌యార్డ్ పారిశుద్ధ్యం మెరుగుపరచండి.',
      grapeHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      orangeCitrusGreening: 'నివారణ లేదు. సంక్రమిత చెట్లను తొలగించండి. సిల్లిడ్ వెక్టార్లను నియంత్రించండి.',
      peachBacterialSpot: 'సుప్తావస్థలో రాగి స్ప్రే చేయండి. పైన నుండి నీటిపారుదల మానుకోండి. నిరోధక రకాలను ఉపయోగించండి.',
      peachHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      pepperBacterialSpot: 'రాగి-ఆధారిత బాక్టీరిసైడ్ వర్తించండి. సంక్రమిత మొక్కలను తొలగించండి. వ్యాధి-రహిత విత్తనాలు ఉపయోగించండి.',
      pepperHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      potatoEarlyBlight: 'శిలీంద్ర నాశిని (క్లోరోథలోనిల్) వర్తించండి. సంక్రమిత ఆకులను తొలగించండి. సరైన దూరం నిర్ధారించండి.',
      potatoLateBlight: 'అత్యవసరం: వెంటనే శిలీంద్ర నాశిని (మెటాలాక్సిల్) వర్తించండి. సంక్రమిత మొక్కలను తొలగించి నాశనం చేయండి.',
      potatoHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      raspberryHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      soybeanHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      squashPowderyMildew: 'సల్ఫర్ లేదా వేప నూనె వర్తించండి. గాలి ప్రసరణ మెరుగుపరచండి. మొక్కల అడుగున నీరు పోయండి.',
      strawberryLeafScorch: 'సంక్రమిత ఆకులను తొలగించండి. శిలీంద్ర నాశిని వర్తించండి. మంచి నీటి పారుదల నిర్ధారించండి.',
      strawberryHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      tomatoBacterialSpot: 'రాగి-ఆధారిత బాక్టీరిసైడ్ వర్తించండి. సంక్రమిత మొక్కలను తొలగించండి. పంట భ్రమణం పాటించండి.',
      tomatoEarlyBlight: 'రాగి-ఆధారిత శిలీంద్ర నాశిని వర్తించండి. ప్రభావిత ఆకులను తొలగించండి. సరైన దూరం నిర్ధారించండి.',
      tomatoLateBlight: 'అత్యవసరం: వెంటనే శిలీంద్ర నాశిని వర్తించండి. సంక్రమిత మొక్కలను తొలగించి నాశనం చేయండి.',
      tomatoLeafMold: 'వెంటిలేషన్ మెరుగుపరచండి. తేమ తగ్గించండి. తీవ్రంగా ఉంటే శిలీంద్ర నాశిని వర్తించండి.',
      tomatoSeptoriaLeafSpot: 'సంక్రమిత ఆకులను తొలగించండి. శిలీంద్ర నాశిని వర్తించండి. నేల చిమ్మడం నివారించడానికి మల్చ్ చేయండి.',
      tomatoSpiderMites: 'మైట్‌లను తొలగించడానికి నీటితో స్ప్రే చేయండి. వేప నూనె లేదా కీటక నాశక సబ్బు వర్తించండి.',
      tomatoTargetSpot: 'శిలీంద్ర నాశిని (క్లోరోథలోనిల్) వర్తించండి. సంక్రమిత ఆకులను తొలగించండి. గాలి ప్రసరణ మెరుగుపరచండి.',
      tomatoYellowLeafCurl: 'నివారణ లేదు. సంక్రమిత మొక్కలను తొలగించండి. వైట్‌ఫ్లైలను నియంత్రించండి.',
      tomatoMosaicVirus: 'నివారణ లేదు. సంక్రమిత మొక్కలను తొలగించండి. పనిముట్లను శుద్ధి చేయండి.',
      tomatoHealthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
    },
    
    // Loading states
    initializingNeuralNet: 'న్యూరల్ నెట్‌వర్క్ ప్రారంభిస్తోంది...',
    settingUpTensorflow: 'TensorFlow.js సెటప్ అవుతోంది...',
    loadingModel: 'MobileNetV2 మోడల్ లోడ్ అవుతోంది...',
    modelLoaded: 'మోడల్ విజయవంతంగా లోడ్ అయింది!',
    demoMode: 'డెమో మోడ్: AI గుర్తింపు అనుకరణ...',
    warmingUp: 'న్యూరల్ నెట్‌వర్క్ వార్మ్ అప్ అవుతోంది...',
    readyForDiagnosis: 'రోగనిర్ధారణకు సిద్ధం!',
    
    // Errors
    initError: 'AI ఇంజన్ ప్రారంభించడంలో విఫలమైంది. దయచేసి రిఫ్రెష్ చేసి మళ్ళీ ప్రయత్నించండి.',
    retry: 'మళ్ళీ ప్రయత్నించు',
    
    // Footer
    footerText: 'ఫార్మ్‌గార్డ్ AI — రైతుల కోసం నిర్మించబడింది, ఎడ్జ్ AI ద్వారా శక్తి',
    hackathon: 'హ్యాకథాన్ 2025 | ఉత్తమ ఆవిష్కరణ ఎంట్రీ',
    
    // Language selector
    selectLanguage: 'భాష ఎంచుకోండి',
    english: 'English',
    hindi: 'हिंदी',
    telugu: 'తెలుగు',
    tamil: 'தமிழ்',
  },
  
  ta: {
    // App name and taglines
    appName: 'பார்ம்கார்டு',
    tagline: 'எட்ஜ் AI பயிர் நோயறிதல்',
    
    // Navigation
    home: 'முகப்பு',
    scanner: 'ஸ்கேனர்',
    history: 'வரலாறு',
    settings: 'அமைப்புகள்',
    
    // Main page
    systemTime: 'கணினி நேரம்',
    offlineMode: 'ஆஃப்லைன் முறை',
    onlineMode: 'ஆன்லைன் முறை',
    simulateOffline: 'ஆஃப்லைன் முறையை உருவகப்படுத்து',
    offlineActive: 'ஆஃப்லைன் முறை உருவகப்படுத்தல் செயலில்',
    offlineDescription: 'AI மாடல் முழுவதும் உங்கள் உலாவியில் இயங்குகிறது. கிளவுட் சார்பு இல்லை!',
    toggleOfflineDesc: 'டெமோவுக்கு ஆஃப்லைன் சூழலை உருவகப்படுத்தவும்',
    
    // System status
    systemStatus: 'கணினி நிலை',
    neuralEngine: 'நியூரல் என்ஜின்',
    ready: 'தயார்',
    inferenceLatency: 'ஊகம் தாமதம்',
    modelSize: 'மாடல் அளவு',
    privacy: 'தனியுரிமை',
    local: '100% உள்ளூர்',
    
    // Diagnosis
    cropDiseaseDetection: 'பயிர் நோய் கண்டறிதல்',
    scanDescription: 'எந்த பயிர் இலையிலும் உங்கள் கேமராவை சுட்டிக்காட்டுங்கள். எங்கள் MobileNetV2 நியூரல் நெட்வொர்க் நிகழ்நேரத்தில் நோய்களை பகுப்பாய்வு செய்யும் — முழுமையாக ஆஃப்லைனில்.',
    startDiagnosis: 'நோயறிதலைத் தொடங்கு',
    aiEngineStandby: 'AI என்ஜின் தயாராக உள்ளது',
    noUploadRequired: 'பதிவேற்றம் தேவையில்லை',
    instantResults: 'உடனடி முடிவுகள்',
    worksOffline: 'ஆஃப்லைனில் வேலை செய்கிறது',
    
    // Features
    whyFarmguard: 'ஏன் பார்ம்கார்டு?',
    offlineFeature: '100% ஆஃப்லைன்',
    offlineFeatureDesc: 'இணையம் இல்லையா? பிரச்சனை இல்லை. எட்ஜ் AI முழுவதும் உங்கள் உலாவியில் இயங்குகிறது.',
    instantDetection: 'உடனடி கண்டறிதல்',
    instantDetectionDesc: 'சப்-செகண்ட் ஊகம் தாமதத்துடன் நிகழ்நேர பகுப்பாய்வு.',
    privacyFirst: 'தனியுரிமை முதலில்',
    privacyFirstDesc: 'உங்கள் படங்கள் உங்கள் சாதனத்தை விட்டு வெளியேறாது. முழுமையான தரவு தனியுரிமை.',
    
    // Scanner
    aiScanner: 'AI ஸ்கேனர்',
    mobileNet: 'MobileNetV2 நியூரல் நெட்வொர்க்',
    liveCamera: 'நேரடி கேமரா',
    uploadImage: 'படத்தை பதிவேற்றவும்',
    startScan: 'ஸ்கேன் தொடங்கு',
    stopScan: 'ஸ்கேன் நிறுத்து',
    analyzeImage: 'படத்தை பகுப்பாய்வு செய்',
    analyzing: 'பகுப்பாய்வு செய்கிறது...',
    clear: 'அழி',
    uploadCropImage: 'பயிர் படத்தை பதிவேற்றவும்',
    uploadHint: 'உலாவ கிளிக் செய்யவும்',
    supportsFormats: 'JPG, PNG, WebP ஆதரவு',
    imageLoaded: 'படம் ஏற்றப்பட்டது',
    scanning: 'ஸ்கேனிங்',
    standby: 'ஸ்டாண்ட்பை',
    latency: 'தாமதம்',
    frames: 'பிரேம்கள்',
    
    // Results
    detectionResult: 'கண்டறிதல் முடிவு',
    startScanningToDetect: 'நோய்களை கண்டறிய ஸ்கேன் தொடங்கவும்',
    clickAnalyze: 'கண்டறிய "படத்தை பகுப்பாய்வு செய்" கிளிக் செய்யவும்',
    uploadToAnalyze: 'பகுப்பாய்வு செய்ய படத்தை பதிவேற்றவும்',
    confidence: 'நம்பிக்கை',
    severity: 'தீவிரம்',
    treatment: 'சிகிச்சை',
    allClasses: 'அனைத்து வகுப்புகள்',
    
    // Disease names
    healthy: 'ஆரோக்கியமான',
    earlyBlight: 'ஆரம்ப கருகல்',
    lateBlight: 'தாமத கருகல்',
    leafMold: 'இலை பூஞ்சை',
    septoriaLeafSpot: 'செப்டோரியா இலை புள்ளி',
    spiderMites: 'சிலந்தி பூச்சிகள்',
    targetSpot: 'டார்கெட் ஸ்பாட்',
    mosaicVirus: 'மொசைக் வைரஸ்',
    yellowLeafCurl: 'மஞ்சள் இலை சுருட்டை',
    bacterialSpot: 'பாக்டீரியா புள்ளி',
    
    // Severity levels
    none: 'எதுவும் இல்லை',
    low: 'குறைவு',
    medium: 'நடுத்தரம்',
    high: 'அதிகம்',
    
    // Treatments - All 38 diseases
    treatments: {
      appleScab: 'பூஞ்சைக்கொல்லி (கேப்டான் அல்லது மைக்ளோபியூட்டானில்) பயன்படுத்தவும். உதிர்ந்த இலைகளை அகற்றவும். காற்று சுழற்சிக்கு கிளைகளை வெட்டவும்.',
      appleBlackRot: 'தொற்று பழங்கள் மற்றும் புற்றுகளை அகற்றவும். பூஞ்சைக்கொல்லியை பயன்படுத்தவும். சரியான உரமிடுதலுடன் மர ஆரோக்கியத்தை பராமரிக்கவும்.',
      appleCedarRust: 'வசந்தகாலத்தில் பூஞ்சைக்கொல்லியை பயன்படுத்தவும். முடிந்தால் அருகிலுள்ள சிடார் மரங்களை அகற்றவும். எதிர்ப்பு வகைகளை பயன்படுத்தவும்.',
      appleHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      blueberryHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      cherryPowderyMildew: 'கந்தக அடிப்படையிலான பூஞ்சைக்கொல்லியை பயன்படுத்தவும். காற்று சுழற்சியை மேம்படுத்தவும். மேலே இருந்து நீர் ஊற்றுவதை தவிர்க்கவும்.',
      cherryHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      cornGrayLeafSpot: 'எதிர்ப்பு கலப்பினங்களை பயன்படுத்தவும். தீவிரமானால் பூஞ்சைக்கொல்லியை பயன்படுத்தவும். பயிர் சுழற்சியை பின்பற்றவும்.',
      cornCommonRust: 'பூஞ்சைக்கொல்லி (அசோக்சிஸ்ட்ரோபின்) பயன்படுத்தவும். எதிர்ப்பு வகைகளை பயன்படுத்தவும். சீக்கிரம் நடவும்.',
      cornNorthernLeafBlight: 'உடனடியாக பூஞ்சைக்கொல்லியை பயன்படுத்தவும். எதிர்ப்பு கலப்பினங்களை பயன்படுத்தவும். பயிர் சுழற்சியை பின்பற்றவும்.',
      cornHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      grapeBlackRot: 'உலர்ந்த திராட்சைகளை அகற்றவும். பூக்கும் முன் பூஞ்சைக்கொல்லி (மாங்கோசெப்) பயன்படுத்தவும். காற்றுக்கு கிளைகளை வெட்டவும்.',
      grapeBlackMeasles: 'சிகிச்சை இல்லை. தொற்று கொடிகளை அகற்றவும். தாவர அழுத்தத்தை தவிர்க்கவும்.',
      grapeLeafBlight: 'செம்பு அடிப்படையிலான பூஞ்சைக்கொல்லியை பயன்படுத்தவும். தொற்று இலைகளை அகற்றவும். திராட்சைத் தோட்ட சுகாதாரத்தை மேம்படுத்தவும்.',
      grapeHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      orangeCitrusGreening: 'சிகிச்சை இல்லை. தொற்று மரங்களை அகற்றவும். சில்லிட் வெக்டர்களை கட்டுப்படுத்தவும்.',
      peachBacterialSpot: 'உறக்கநிலையில் செம்பு தெளிக்கவும். மேலே இருந்து நீர்ப்பாசனத்தை தவிர்க்கவும். எதிர்ப்பு வகைகளை பயன்படுத்தவும்.',
      peachHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      pepperBacterialSpot: 'செம்பு அடிப்படையிலான பாக்டீரியாக்கொல்லியை பயன்படுத்தவும். தொற்று தாவரங்களை அகற்றவும். நோயற்ற விதைகளை பயன்படுத்தவும்.',
      pepperHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      potatoEarlyBlight: 'பூஞ்சைக்கொல்லி (குளோரோதலோனில்) பயன்படுத்தவும். தொற்று இலைகளை அகற்றவும். சரியான இடைவெளியை உறுதிப்படுத்தவும்.',
      potatoLateBlight: 'அவசரம்: உடனடியாக பூஞ்சைக்கொல்லி (மெட்டாலாக்சில்) பயன்படுத்தவும். தொற்று தாவரங்களை அகற்றி அழிக்கவும்.',
      potatoHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      raspberryHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      soybeanHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      squashPowderyMildew: 'கந்தகம் அல்லது வேப்ப எண்ணெய் பயன்படுத்தவும். காற்று சுழற்சியை மேம்படுத்தவும். தாவரங்களின் அடியில் நீர் ஊற்றவும்.',
      strawberryLeafScorch: 'தொற்று இலைகளை அகற்றவும். பூஞ்சைக்கொல்லியை பயன்படுத்தவும். நல்ல வடிகால் மற்றும் காற்று சுழற்சியை உறுதிப்படுத்தவும்.',
      strawberryHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      tomatoBacterialSpot: 'செம்பு அடிப்படையிலான பாக்டீரியாக்கொல்லியை பயன்படுத்தவும். தொற்று தாவரங்களை அகற்றவும். பயிர் சுழற்சியை பின்பற்றவும்.',
      tomatoEarlyBlight: 'செம்பு அடிப்படையிலான பூஞ்சைக்கொல்லியை பயன்படுத்தவும். பாதிக்கப்பட்ட இலைகளை அகற்றவும். சரியான இடைவெளியை உறுதிப்படுத்தவும்.',
      tomatoLateBlight: 'அவசரம்: உடனடியாக பூஞ்சைக்கொல்லியை பயன்படுத்தவும். தொற்று தாவரங்களை அகற்றி அழிக்கவும்.',
      tomatoLeafMold: 'காற்றோட்டத்தை மேம்படுத்தவும். ஈரப்பதத்தை குறைக்கவும். தீவிரமானால் பூஞ்சைக்கொல்லியை பயன்படுத்தவும்.',
      tomatoSeptoriaLeafSpot: 'தொற்று இலைகளை அகற்றவும். பூஞ்சைக்கொல்லியை பயன்படுத்தவும். மண் தெறிப்பை தடுக்க மல்ச் செய்யவும்.',
      tomatoSpiderMites: 'பூச்சிகளை அகற்ற நீர் தெளிக்கவும். வேப்ப எண்ணெய் அல்லது பூச்சிக்கொல்லி சோப்பு பயன்படுத்தவும்.',
      tomatoTargetSpot: 'பூஞ்சைக்கொல்லி (குளோரோதலோனில்) பயன்படுத்தவும். தொற்று இலைகளை அகற்றவும். காற்று சுழற்சியை மேம்படுத்தவும்.',
      tomatoYellowLeafCurl: 'சிகிச்சை இல்லை. தொற்று தாவரங்களை அகற்றவும். வெள்ளை ஈக்களை கட்டுப்படுத்தவும்.',
      tomatoMosaicVirus: 'சிகிச்சை இல்லை. தொற்று தாவரங்களை அகற்றவும். கருவிகளை கிருமி நீக்கம் செய்யவும்.',
      tomatoHealthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
    },
    
    // Loading states
    initializingNeuralNet: 'நியூரல் நெட்வொர்க் துவக்கப்படுகிறது...',
    settingUpTensorflow: 'TensorFlow.js அமைக்கப்படுகிறது...',
    loadingModel: 'MobileNetV2 மாடல் ஏற்றப்படுகிறது...',
    modelLoaded: 'மாடல் வெற்றிகரமாக ஏற்றப்பட்டது!',
    demoMode: 'டெமோ முறை: AI கண்டறிதல் உருவகப்படுத்துகிறது...',
    warmingUp: 'நியூரல் நெட்வொர்க் வார்ம் அப் ஆகிறது...',
    readyForDiagnosis: 'நோயறிதலுக்கு தயார்!',
    
    // Errors
    initError: 'AI என்ஜினை துவக்குவதில் தோல்வி. புதுப்பித்து மீண்டும் முயற்சிக்கவும்.',
    retry: 'மீண்டும் முயற்சி',
    
    // Footer
    footerText: 'பார்ம்கார்டு AI — விவசாயிகளுக்காக உருவாக்கப்பட்டது, எட்ஜ் AI மூலம் இயக்கப்படுகிறது',
    hackathon: 'ஹேக்கத்தான் 2025 | சிறந்த கண்டுபிடிப்பு பதிவு',
    
    // Language selector
    selectLanguage: 'மொழியை தேர்ந்தெடுக்கவும்',
    english: 'English',
    hindi: 'हिंदी',
    telugu: 'తెలుగు',
    tamil: 'தமிழ்',
  },

  // Punjabi - Punjab is the "Granary of India" (major wheat & rice producer)
  pa: {
    // App name and taglines
    appName: 'ਫਾਰਮਗਾਰਡ',
    tagline: 'ਐੱਜ AI ਫਸਲ ਨਿਦਾਨ',
    
    // Navigation
    home: 'ਹੋਮ',
    scanner: 'ਸਕੈਨਰ',
    history: 'ਇਤਿਹਾਸ',
    settings: 'ਸੈਟਿੰਗਾਂ',
    
    // Main page
    systemTime: 'ਸਿਸਟਮ ਸਮਾਂ',
    offlineMode: 'ਆਫਲਾਈਨ ਮੋਡ',
    onlineMode: 'ਆਨਲਾਈਨ ਮੋਡ',
    simulateOffline: 'ਆਫਲਾਈਨ ਮੋਡ ਸਿਮੂਲੇਟ ਕਰੋ',
    offlineActive: 'ਆਫਲਾਈਨ ਮੋਡ ਸਿਮੂਲੇਸ਼ਨ ਐਕਟਿਵ',
    offlineDescription: 'AI ਮਾਡਲ ਪੂਰੀ ਤਰ੍ਹਾਂ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਚੱਲ ਰਿਹਾ ਹੈ। ਕਲਾਊਡ ਨਿਰਭਰਤਾ ਜ਼ੀਰੋ!',
    toggleOfflineDesc: 'ਡੈਮੋ ਲਈ ਆਫਲਾਈਨ ਵਾਤਾਵਰਣ ਸਿਮੂਲੇਟ ਕਰੋ',
    
    // System status
    systemStatus: 'ਸਿਸਟਮ ਸਥਿਤੀ',
    neuralEngine: 'ਨਿਊਰਲ ਇੰਜਣ',
    ready: 'ਤਿਆਰ',
    inferenceLatency: 'ਅਨੁਮਾਨ ਲੇਟੈਂਸੀ',
    modelSize: 'ਮਾਡਲ ਸਾਈਜ਼',
    privacy: 'ਪ੍ਰਾਈਵੇਸੀ',
    local: '100% ਲੋਕਲ',
    
    // Diagnosis
    cropDiseaseDetection: 'ਫਸਲ ਰੋਗ ਖੋਜ',
    scanDescription: 'ਕਿਸੇ ਵੀ ਫਸਲ ਦੇ ਪੱਤੇ ਵੱਲ ਆਪਣਾ ਕੈਮਰਾ ਪੁਆਇੰਟ ਕਰੋ। ਸਾਡਾ MobileNetV2 ਨਿਊਰਲ ਨੈੱਟਵਰਕ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਰੋਗਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੇਗਾ — ਪੂਰੀ ਤਰ੍ਹਾਂ ਆਫਲਾਈਨ।',
    startDiagnosis: 'ਨਿਦਾਨ ਸ਼ੁਰੂ ਕਰੋ',
    aiEngineStandby: 'AI ਇੰਜਣ ਤਿਆਰ ਹੈ',
    noUploadRequired: 'ਅੱਪਲੋਡ ਦੀ ਲੋੜ ਨਹੀਂ',
    instantResults: 'ਤੁਰੰਤ ਨਤੀਜੇ',
    worksOffline: 'ਆਫਲਾਈਨ ਕੰਮ ਕਰਦਾ ਹੈ',
    
    // Features
    whyFarmguard: 'ਫਾਰਮਗਾਰਡ ਕਿਉਂ?',
    offlineFeature: '100% ਆਫਲਾਈਨ',
    offlineFeatureDesc: 'ਇੰਟਰਨੈੱਟ ਨਹੀਂ? ਕੋਈ ਸਮੱਸਿਆ ਨਹੀਂ। ਐੱਜ AI ਪੂਰੀ ਤਰ੍ਹਾਂ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਚੱਲਦਾ ਹੈ।',
    instantDetection: 'ਤੁਰੰਤ ਖੋਜ',
    instantDetectionDesc: 'ਸਬ-ਸੈਕੰਡ ਅਨੁਮਾਨ ਲੇਟੈਂਸੀ ਨਾਲ ਰੀਅਲ-ਟਾਈਮ ਵਿਸ਼ਲੇਸ਼ਣ।',
    privacyFirst: 'ਪ੍ਰਾਈਵੇਸੀ ਪਹਿਲਾਂ',
    privacyFirstDesc: 'ਤੁਹਾਡੀਆਂ ਤਸਵੀਰਾਂ ਤੁਹਾਡੀ ਡਿਵਾਈਸ ਤੋਂ ਬਾਹਰ ਨਹੀਂ ਜਾਂਦੀਆਂ। ਪੂਰੀ ਡੇਟਾ ਪ੍ਰਾਈਵੇਸੀ।',
    
    // Scanner
    aiScanner: 'AI ਸਕੈਨਰ',
    mobileNet: 'MobileNetV2 ਨਿਊਰਲ ਨੈੱਟਵਰਕ',
    liveCamera: 'ਲਾਈਵ ਕੈਮਰਾ',
    uploadImage: 'ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ',
    startScan: 'ਸਕੈਨ ਸ਼ੁਰੂ ਕਰੋ',
    stopScan: 'ਸਕੈਨ ਬੰਦ ਕਰੋ',
    analyzeImage: 'ਤਸਵੀਰ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ',
    analyzing: 'ਵਿਸ਼ਲੇਸ਼ਣ ਹੋ ਰਿਹਾ ਹੈ...',
    clear: 'ਸਾਫ਼ ਕਰੋ',
    uploadCropImage: 'ਫਸਲ ਦੀ ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ',
    uploadHint: 'ਬ੍ਰਾਊਜ਼ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ',
    supportsFormats: 'JPG, PNG, WebP ਸਪੋਰਟ',
    imageLoaded: 'ਤਸਵੀਰ ਲੋਡ ਹੋਈ',
    scanning: 'ਸਕੈਨਿੰਗ',
    standby: 'ਸਟੈਂਡਬਾਈ',
    latency: 'ਲੇਟੈਂਸੀ',
    frames: 'ਫ੍ਰੇਮ',
    
    // Results
    detectionResult: 'ਖੋਜ ਨਤੀਜਾ',
    startScanningToDetect: 'ਰੋਗ ਖੋਜਣ ਲਈ ਸਕੈਨ ਸ਼ੁਰੂ ਕਰੋ',
    clickAnalyze: 'ਖੋਜਣ ਲਈ "ਤਸਵੀਰ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ" ਕਲਿੱਕ ਕਰੋ',
    uploadToAnalyze: 'ਵਿਸ਼ਲੇਸ਼ਣ ਲਈ ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ',
    confidence: 'ਭਰੋਸਾ',
    severity: 'ਗੰਭੀਰਤਾ',
    treatment: 'ਇਲਾਜ',
    allClasses: 'ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ',
    
    // Disease names
    healthy: 'ਸਿਹਤਮੰਦ',
    earlyBlight: 'ਅਗੇਤੀ ਝੁਲਸ',
    lateBlight: 'ਪਿਛੇਤੀ ਝੁਲਸ',
    leafMold: 'ਪੱਤਾ ਉੱਲੀ',
    septoriaLeafSpot: 'ਸੇਪਟੋਰੀਆ ਪੱਤਾ ਧੱਬਾ',
    spiderMites: 'ਮੱਕੜੀ ਦੇ ਕੀੜੇ',
    targetSpot: 'ਟਾਰਗੇਟ ਸਪਾਟ',
    mosaicVirus: 'ਮੋਜ਼ੇਕ ਵਾਇਰਸ',
    yellowLeafCurl: 'ਪੀਲੀ ਪੱਤਾ ਮਰੋੜ',
    bacterialSpot: 'ਬੈਕਟੀਰੀਅਲ ਸਪਾਟ',
    
    // Severity levels
    none: 'ਕੋਈ ਨਹੀਂ',
    low: 'ਘੱਟ',
    medium: 'ਦਰਮਿਆਨੀ',
    high: 'ਉੱਚੀ',
    
    // Treatments - All 38 diseases
    treatments: {
      appleScab: 'ਉੱਲੀਨਾਸ਼ਕ (ਕੈਪਟਾਨ ਜਾਂ ਮਾਈਕਲੋਬਿਊਟਾਨਿਲ) ਲਗਾਓ। ਡਿੱਗੇ ਪੱਤੇ ਹਟਾਓ। ਹਵਾ ਦੀ ਆਵਾਜਾਈ ਲਈ ਛਾਂਟੀ ਕਰੋ।',
      appleBlackRot: 'ਸੰਕਰਮਿਤ ਫਲ ਅਤੇ ਕੈਂਕਰ ਹਟਾਓ। ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਸਹੀ ਖਾਦ ਨਾਲ ਰੁੱਖ ਦੀ ਸਿਹਤ ਬਣਾਈ ਰੱਖੋ।',
      appleCedarRust: 'ਬਸੰਤ ਵਿੱਚ ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਜੇ ਸੰਭਵ ਹੋਵੇ ਤਾਂ ਨੇੜੇ ਦੇ ਸੀਡਰ ਰੁੱਖ ਹਟਾਓ। ਰੋਧਕ ਕਿਸਮਾਂ ਵਰਤੋ।',
      appleHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      blueberryHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      cherryPowderyMildew: 'ਗੰਧਕ-ਅਧਾਰਿਤ ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਹਵਾ ਦੀ ਆਵਾਜਾਈ ਸੁਧਾਰੋ। ਉੱਪਰੋਂ ਪਾਣੀ ਦੇਣ ਤੋਂ ਬਚੋ।',
      cherryHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      cornGrayLeafSpot: 'ਰੋਧਕ ਹਾਈਬ੍ਰਿਡ ਵਰਤੋ। ਗੰਭੀਰ ਹੋਣ ਤੇ ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਫਸਲ ਚੱਕਰ ਅਪਣਾਓ।',
      cornCommonRust: 'ਉੱਲੀਨਾਸ਼ਕ (ਅਜ਼ੋਕਸੀਸਟ੍ਰੋਬਿਨ) ਲਗਾਓ। ਰੋਧਕ ਕਿਸਮਾਂ ਵਰਤੋ। ਜਲਦੀ ਬਿਜਾਈ ਕਰੋ।',
      cornNorthernLeafBlight: 'ਤੁਰੰਤ ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਰੋਧਕ ਹਾਈਬ੍ਰਿਡ ਵਰਤੋ। ਫਸਲ ਚੱਕਰ ਅਪਣਾਓ।',
      cornHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      grapeBlackRot: 'ਸੁੱਕੀਆਂ ਅੰਗੂਰਾਂ ਹਟਾਓ। ਫੁੱਲ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਉੱਲੀਨਾਸ਼ਕ (ਮੈਂਕੋਜ਼ੈਬ) ਲਗਾਓ। ਹਵਾ ਲਈ ਛਾਂਟੀ ਕਰੋ।',
      grapeBlackMeasles: 'ਕੋਈ ਇਲਾਜ ਨਹੀਂ। ਸੰਕਰਮਿਤ ਵੇਲਾਂ ਹਟਾਓ। ਬੂਟਿਆਂ ਤੇ ਤਣਾਅ ਤੋਂ ਬਚੋ।',
      grapeLeafBlight: 'ਕਾਪਰ-ਅਧਾਰਿਤ ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਸੰਕਰਮਿਤ ਪੱਤੇ ਹਟਾਓ। ਅੰਗੂਰ ਬਾਗ ਦੀ ਸਫਾਈ ਸੁਧਾਰੋ।',
      grapeHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      orangeCitrusGreening: 'ਕੋਈ ਇਲਾਜ ਨਹੀਂ। ਸੰਕਰਮਿਤ ਰੁੱਖ ਹਟਾਓ। ਸਿਲਿਡ ਵੈਕਟਰ ਕੰਟਰੋਲ ਕਰੋ।',
      peachBacterialSpot: 'ਸੁਸਤ ਅਵਸਥਾ ਵਿੱਚ ਕਾਪਰ ਸਪਰੇਅ ਕਰੋ। ਉੱਪਰੋਂ ਸਿੰਚਾਈ ਤੋਂ ਬਚੋ। ਰੋਧਕ ਕਿਸਮਾਂ ਵਰਤੋ।',
      peachHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      pepperBacterialSpot: 'ਕਾਪਰ-ਅਧਾਰਿਤ ਬੈਕਟੀਰੀਸਾਈਡ ਲਗਾਓ। ਸੰਕਰਮਿਤ ਬੂਟੇ ਹਟਾਓ। ਰੋਗ-ਮੁਕਤ ਬੀਜ ਵਰਤੋ।',
      pepperHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      potatoEarlyBlight: 'ਉੱਲੀਨਾਸ਼ਕ (ਕਲੋਰੋਥੈਲੋਨਿਲ) ਲਗਾਓ। ਸੰਕਰਮਿਤ ਪੱਤੇ ਹਟਾਓ। ਸਹੀ ਦੂਰੀ ਯਕੀਨੀ ਬਣਾਓ।',
      potatoLateBlight: 'ਤੁਰੰਤ: ਫੌਰੀ ਉੱਲੀਨਾਸ਼ਕ (ਮੈਟਾਲੈਕਸਿਲ) ਲਗਾਓ। ਸੰਕਰਮਿਤ ਬੂਟੇ ਹਟਾਓ ਅਤੇ ਨਸ਼ਟ ਕਰੋ।',
      potatoHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      raspberryHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      soybeanHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      squashPowderyMildew: 'ਗੰਧਕ ਜਾਂ ਨਿੰਮ ਤੇਲ ਲਗਾਓ। ਹਵਾ ਦੀ ਆਵਾਜਾਈ ਸੁਧਾਰੋ। ਬੂਟਿਆਂ ਦੇ ਅਧਾਰ ਤੇ ਪਾਣੀ ਦਿਓ।',
      strawberryLeafScorch: 'ਸੰਕਰਮਿਤ ਪੱਤੇ ਹਟਾਓ। ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਚੰਗੀ ਨਿਕਾਸੀ ਅਤੇ ਹਵਾ ਦੀ ਆਵਾਜਾਈ ਯਕੀਨੀ ਬਣਾਓ।',
      strawberryHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      tomatoBacterialSpot: 'ਕਾਪਰ-ਅਧਾਰਿਤ ਬੈਕਟੀਰੀਸਾਈਡ ਲਗਾਓ। ਸੰਕਰਮਿਤ ਬੂਟੇ ਹਟਾਓ। ਫਸਲ ਚੱਕਰ ਅਪਣਾਓ।',
      tomatoEarlyBlight: 'ਕਾਪਰ-ਅਧਾਰਿਤ ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਪ੍ਰਭਾਵਿਤ ਪੱਤੇ ਹਟਾਓ। ਸਹੀ ਦੂਰੀ ਯਕੀਨੀ ਬਣਾਓ।',
      tomatoLateBlight: 'ਤੁਰੰਤ: ਫੌਰੀ ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਸੰਕਰਮਿਤ ਬੂਟੇ ਹਟਾਓ ਅਤੇ ਨਸ਼ਟ ਕਰੋ।',
      tomatoLeafMold: 'ਹਵਾਦਾਰੀ ਸੁਧਾਰੋ। ਨਮੀ ਘਟਾਓ। ਗੰਭੀਰ ਹੋਣ ਤੇ ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ।',
      tomatoSeptoriaLeafSpot: 'ਸੰਕਰਮਿਤ ਪੱਤੇ ਹਟਾਓ। ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਮਿੱਟੀ ਦੇ ਛਿੱਟੇ ਰੋਕਣ ਲਈ ਮਲਚ ਕਰੋ।',
      tomatoSpiderMites: 'ਕੀੜਿਆਂ ਨੂੰ ਹਟਾਉਣ ਲਈ ਪਾਣੀ ਸਪਰੇਅ ਕਰੋ। ਨਿੰਮ ਤੇਲ ਜਾਂ ਕੀਟਨਾਸ਼ਕ ਸਾਬਣ ਲਗਾਓ।',
      tomatoTargetSpot: 'ਉੱਲੀਨਾਸ਼ਕ (ਕਲੋਰੋਥੈਲੋਨਿਲ) ਲਗਾਓ। ਸੰਕਰਮਿਤ ਪੱਤੇ ਹਟਾਓ। ਹਵਾ ਦੀ ਆਵਾਜਾਈ ਸੁਧਾਰੋ।',
      tomatoYellowLeafCurl: 'ਕੋਈ ਇਲਾਜ ਨਹੀਂ। ਸੰਕਰਮਿਤ ਬੂਟੇ ਹਟਾਓ। ਚਿੱਟੀ ਮੱਖੀ ਕੰਟਰੋਲ ਕਰੋ।',
      tomatoMosaicVirus: 'ਕੋਈ ਇਲਾਜ ਨਹੀਂ। ਸੰਕਰਮਿਤ ਬੂਟੇ ਹਟਾਓ। ਔਜ਼ਾਰ ਸਾਫ਼ ਕਰੋ।',
      tomatoHealthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
    },
    
    // Loading states
    initializingNeuralNet: 'ਨਿਊਰਲ ਨੈੱਟਵਰਕ ਸ਼ੁਰੂ ਹੋ ਰਿਹਾ ਹੈ...',
    settingUpTensorflow: 'TensorFlow.js ਸੈੱਟਅੱਪ ਹੋ ਰਿਹਾ ਹੈ...',
    loadingModel: 'MobileNetV2 ਮਾਡਲ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
    modelLoaded: 'ਮਾਡਲ ਸਫਲਤਾਪੂਰਵਕ ਲੋਡ ਹੋਇਆ!',
    demoMode: 'ਡੈਮੋ ਮੋਡ: AI ਖੋਜ ਸਿਮੂਲੇਟ ਹੋ ਰਹੀ ਹੈ...',
    warmingUp: 'ਨਿਊਰਲ ਨੈੱਟਵਰਕ ਵਾਰਮ ਅੱਪ ਹੋ ਰਿਹਾ ਹੈ...',
    readyForDiagnosis: 'ਨਿਦਾਨ ਲਈ ਤਿਆਰ!',
    
    // Errors
    initError: 'AI ਇੰਜਣ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਅਸਫਲ। ਕਿਰਪਾ ਕਰਕੇ ਰਿਫ੍ਰੈਸ਼ ਕਰੋ ਅਤੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
    retry: 'ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ',
    
    // Footer
    footerText: 'ਫਾਰਮਗਾਰਡ AI — ਕਿਸਾਨਾਂ ਲਈ ਬਣਾਇਆ, ਐੱਜ AI ਦੁਆਰਾ ਸੰਚਾਲਿਤ',
    hackathon: 'ਹੈਕਾਥਨ 2025 | ਸਰਵੋਤਮ ਨਵੀਨਤਾ ਐਂਟਰੀ',
    
    // Language selector
    selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
    english: 'English',
    hindi: 'हिंदी',
    telugu: 'తెలుగు',
    tamil: 'தமிழ்',
    punjabi: 'ਪੰਜਾਬੀ',
    kannada: 'ಕನ್ನಡ',
  },

  // Kannada - Karnataka is a major agricultural state
  kn: {
    // App name and taglines
    appName: 'ಫಾರ್ಮ್‌ಗಾರ್ಡ್',
    tagline: 'ಎಡ್ಜ್ AI ಬೆಳೆ ರೋಗನಿರ್ಣಯ',
    
    // Navigation
    home: 'ಹೋಮ್',
    scanner: 'ಸ್ಕ್ಯಾನರ್',
    history: 'ಇತಿಹಾಸ',
    settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    
    // Main page
    systemTime: 'ಸಿಸ್ಟಮ್ ಸಮಯ',
    offlineMode: 'ಆಫ್‌ಲೈನ್ ಮೋಡ್',
    onlineMode: 'ಆನ್‌ಲೈನ್ ಮೋಡ್',
    simulateOffline: 'ಆಫ್‌ಲೈನ್ ಮೋಡ್ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ',
    offlineActive: 'ಆಫ್‌ಲೈನ್ ಮೋಡ್ ಸಿಮ್ಯುಲೇಶನ್ ಆಕ್ಟಿವ್',
    offlineDescription: 'AI ಮಾಡೆಲ್ ಸಂಪೂರ್ಣವಾಗಿ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ರನ್ ಆಗುತ್ತಿದೆ. ಕ್ಲೌಡ್ ಅವಲಂಬನೆ ಶೂನ್ಯ!',
    toggleOfflineDesc: 'ಡೆಮೊಗಾಗಿ ಆಫ್‌ಲೈನ್ ಪರಿಸರವನ್ನು ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ',
    
    // System status
    systemStatus: 'ಸಿಸ್ಟಮ್ ಸ್ಥಿತಿ',
    neuralEngine: 'ನ್ಯೂರಲ್ ಎಂಜಿನ್',
    ready: 'ಸಿದ್ಧ',
    inferenceLatency: 'ಊಹೆ ವಿಳಂಬ',
    modelSize: 'ಮಾಡೆಲ್ ಗಾತ್ರ',
    privacy: 'ಗೌಪ್ಯತೆ',
    local: '100% ಸ್ಥಳೀಯ',
    
    // Diagnosis
    cropDiseaseDetection: 'ಬೆಳೆ ರೋಗ ಪತ್ತೆ',
    scanDescription: 'ಯಾವುದೇ ಬೆಳೆ ಎಲೆಯ ಮೇಲೆ ನಿಮ್ಮ ಕ್ಯಾಮೆರಾವನ್ನು ತೋರಿಸಿ. ನಮ್ಮ MobileNetV2 ನ್ಯೂರಲ್ ನೆಟ್‌ವರ್ಕ್ ನೈಜ-ಸಮಯದಲ್ಲಿ ರೋಗಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ — ಸಂಪೂರ್ಣವಾಗಿ ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ.',
    startDiagnosis: 'ರೋಗನಿರ್ಣಯ ಪ್ರಾರಂಭಿಸಿ',
    aiEngineStandby: 'AI ಎಂಜಿನ್ ಸಿದ್ಧವಾಗಿದೆ',
    noUploadRequired: 'ಅಪ್‌ಲೋಡ್ ಅಗತ್ಯವಿಲ್ಲ',
    instantResults: 'ತ್ವರಿತ ಫಲಿತಾಂಶಗಳು',
    worksOffline: 'ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
    
    // Features
    whyFarmguard: 'ಫಾರ್ಮ್‌ಗಾರ್ಡ್ ಏಕೆ?',
    offlineFeature: '100% ಆಫ್‌ಲೈನ್',
    offlineFeatureDesc: 'ಇಂಟರ್ನೆಟ್ ಇಲ್ಲವೇ? ಸಮಸ್ಯೆ ಇಲ್ಲ. ಎಡ್ಜ್ AI ಸಂಪೂರ್ಣವಾಗಿ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ರನ್ ಆಗುತ್ತದೆ.',
    instantDetection: 'ತ್ವರಿತ ಪತ್ತೆ',
    instantDetectionDesc: 'ಸಬ್-ಸೆಕೆಂಡ್ ಊಹೆ ವಿಳಂಬದೊಂದಿಗೆ ನೈಜ-ಸಮಯ ವಿಶ್ಲೇಷಣೆ.',
    privacyFirst: 'ಗೌಪ್ಯತೆ ಮೊದಲು',
    privacyFirstDesc: 'ನಿಮ್ಮ ಚಿತ್ರಗಳು ನಿಮ್ಮ ಸಾಧನವನ್ನು ಎಂದಿಗೂ ಬಿಡುವುದಿಲ್ಲ. ಸಂಪೂರ್ಣ ಡೇಟಾ ಗೌಪ್ಯತೆ.',
    
    // Scanner
    aiScanner: 'AI ಸ್ಕ್ಯಾನರ್',
    mobileNet: 'MobileNetV2 ನ್ಯೂರಲ್ ನೆಟ್‌ವರ್ಕ್',
    liveCamera: 'ಲೈವ್ ಕ್ಯಾಮೆರಾ',
    uploadImage: 'ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    startScan: 'ಸ್ಕ್ಯಾನ್ ಪ್ರಾರಂಭಿಸಿ',
    stopScan: 'ಸ್ಕ್ಯಾನ್ ನಿಲ್ಲಿಸಿ',
    analyzeImage: 'ಚಿತ್ರ ವಿಶ್ಲೇಷಿಸಿ',
    analyzing: 'ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...',
    clear: 'ತೆರವುಗೊಳಿಸಿ',
    uploadCropImage: 'ಬೆಳೆ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    uploadHint: 'ಬ್ರೌಸ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
    supportsFormats: 'JPG, PNG, WebP ಬೆಂಬಲ',
    imageLoaded: 'ಚಿತ್ರ ಲೋಡ್ ಆಗಿದೆ',
    scanning: 'ಸ್ಕ್ಯಾನಿಂಗ್',
    standby: 'ಸ್ಟ್ಯಾಂಡ್‌ಬೈ',
    latency: 'ವಿಳಂಬ',
    frames: 'ಫ್ರೇಮ್‌ಗಳು',
    
    // Results
    detectionResult: 'ಪತ್ತೆ ಫಲಿತಾಂಶ',
    startScanningToDetect: 'ರೋಗಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲು ಸ್ಕ್ಯಾನ್ ಪ್ರಾರಂಭಿಸಿ',
    clickAnalyze: 'ಪತ್ತೆಹಚ್ಚಲು "ಚಿತ್ರ ವಿಶ್ಲೇಷಿಸಿ" ಕ್ಲಿಕ್ ಮಾಡಿ',
    uploadToAnalyze: 'ವಿಶ್ಲೇಷಿಸಲು ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    confidence: 'ವಿಶ್ವಾಸ',
    severity: 'ತೀವ್ರತೆ',
    treatment: 'ಚಿಕಿತ್ಸೆ',
    allClasses: 'ಎಲ್ಲಾ ವರ್ಗಗಳು',
    
    // Disease names
    healthy: 'ಆರೋಗ್ಯಕರ',
    earlyBlight: 'ಆರಂಭಿಕ ಅಂಗಮಾರಿ',
    lateBlight: 'ತಡವಾದ ಅಂಗಮಾರಿ',
    leafMold: 'ಎಲೆ ಅಚ್ಚು',
    septoriaLeafSpot: 'ಸೆಪ್ಟೋರಿಯಾ ಎಲೆ ಚುಕ್ಕೆ',
    spiderMites: 'ಜೇಡ ಹುಳುಗಳು',
    targetSpot: 'ಟಾರ್ಗೆಟ್ ಸ್ಪಾಟ್',
    mosaicVirus: 'ಮೊಸಾಯಿಕ್ ವೈರಸ್',
    yellowLeafCurl: 'ಹಳದಿ ಎಲೆ ಸುರುಳಿ',
    bacterialSpot: 'ಬ್ಯಾಕ್ಟೀರಿಯಲ್ ಸ್ಪಾಟ್',
    
    // Severity levels
    none: 'ಯಾವುದೂ ಇಲ್ಲ',
    low: 'ಕಡಿಮೆ',
    medium: 'ಮಧ್ಯಮ',
    high: 'ಹೆಚ್ಚು',
    
    // Treatments - All 38 diseases
    treatments: {
      appleScab: 'ಶಿಲೀಂಧ್ರನಾಶಕ (ಕ್ಯಾಪ್ಟನ್ ಅಥವಾ ಮೈಕ್ಲೋಬ್ಯುಟಾನಿಲ್) ಅನ್ವಯಿಸಿ. ಉದುರಿದ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಗಾಳಿ ಸಂಚಾರಕ್ಕೆ ಕಾತರಿಸಿ.',
      appleBlackRot: 'ಸೋಂಕಿತ ಹಣ್ಣುಗಳು ಮತ್ತು ಕ್ಯಾಂಕರ್‌ಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಸರಿಯಾದ ಗೊಬ್ಬರದೊಂದಿಗೆ ಮರದ ಆರೋಗ್ಯ ಕಾಪಾಡಿ.',
      appleCedarRust: 'ವಸಂತಕಾಲದಲ್ಲಿ ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಸಾಧ್ಯವಾದರೆ ಹತ್ತಿರದ ಸೀಡಾರ್ ಮರಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ನಿರೋಧಕ ತಳಿಗಳನ್ನು ಬಳಸಿ.',
      appleHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      blueberryHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      cherryPowderyMildew: 'ಗಂಧಕ-ಆಧಾರಿತ ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಗಾಳಿ ಸಂಚಾರ ಸುಧಾರಿಸಿ. ಮೇಲಿನಿಂದ ನೀರು ಹಾಕುವುದನ್ನು ತಪ್ಪಿಸಿ.',
      cherryHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      cornGrayLeafSpot: 'ನಿರೋಧಕ ಹೈಬ್ರಿಡ್‌ಗಳನ್ನು ಬಳಸಿ. ತೀವ್ರವಾದರೆ ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಬೆಳೆ ಸರದಿ ಅಭ್ಯಾಸ ಮಾಡಿ.',
      cornCommonRust: 'ಶಿಲೀಂಧ್ರನಾಶಕ (ಅಜೋಕ್ಸಿಸ್ಟ್ರೋಬಿನ್) ಅನ್ವಯಿಸಿ. ನಿರೋಧಕ ತಳಿಗಳನ್ನು ಬಳಸಿ. ಬೇಗ ನಾಟಿ ಮಾಡಿ.',
      cornNorthernLeafBlight: 'ತಕ್ಷಣ ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ನಿರೋಧಕ ಹೈಬ್ರಿಡ್‌ಗಳನ್ನು ಬಳಸಿ. ಬೆಳೆ ಸರದಿ ಅಭ್ಯಾಸ ಮಾಡಿ.',
      cornHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      grapeBlackRot: 'ಒಣಗಿದ ದ್ರಾಕ್ಷಿಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಹೂವು ಬರುವ ಮೊದಲು ಶಿಲೀಂಧ್ರನಾಶಕ (ಮಾಂಕೋಜೆಬ್) ಅನ್ವಯಿಸಿ. ಗಾಳಿಗೆ ಕಾತರಿಸಿ.',
      grapeBlackMeasles: 'ಚಿಕಿತ್ಸೆ ಲಭ್ಯವಿಲ್ಲ. ಸೋಂಕಿತ ಬಳ್ಳಿಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಸಸ್ಯ ಒತ್ತಡ ತಪ್ಪಿಸಿ.',
      grapeLeafBlight: 'ತಾಮ್ರ-ಆಧಾರಿತ ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ದ್ರಾಕ್ಷಿತೋಟ ಸ್ವಚ್ಛತೆ ಸುಧಾರಿಸಿ.',
      grapeHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      orangeCitrusGreening: 'ಚಿಕಿತ್ಸೆ ಲಭ್ಯವಿಲ್ಲ. ಸೋಂಕಿತ ಮರಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಸಿಲ್ಲಿಡ್ ವೆಕ್ಟರ್‌ಗಳನ್ನು ನಿಯಂತ್ರಿಸಿ.',
      peachBacterialSpot: 'ನಿದ್ರಾವಸ್ಥೆಯಲ್ಲಿ ತಾಮ್ರ ಸಿಂಪಡಿಸಿ. ಮೇಲಿನಿಂದ ನೀರಾವರಿ ತಪ್ಪಿಸಿ. ನಿರೋಧಕ ತಳಿಗಳನ್ನು ಬಳಸಿ.',
      peachHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      pepperBacterialSpot: 'ತಾಮ್ರ-ಆಧಾರಿತ ಬ್ಯಾಕ್ಟೀರಿಸೈಡ್ ಅನ್ವಯಿಸಿ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ರೋಗ-ಮುಕ್ತ ಬೀಜಗಳನ್ನು ಬಳಸಿ.',
      pepperHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      potatoEarlyBlight: 'ಶಿಲೀಂಧ್ರನಾಶಕ (ಕ್ಲೋರೋಥಲೋನಿಲ್) ಅನ್ವಯಿಸಿ. ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಸರಿಯಾದ ಅಂತರ ಖಚಿತಪಡಿಸಿ.',
      potatoLateBlight: 'ತುರ್ತು: ತಕ್ಷಣ ಶಿಲೀಂಧ್ರನಾಶಕ (ಮೆಟಾಲಾಕ್ಸಿಲ್) ಅನ್ವಯಿಸಿ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ನಾಶಪಡಿಸಿ.',
      potatoHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      raspberryHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      soybeanHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      squashPowderyMildew: 'ಗಂಧಕ ಅಥವಾ ಬೇವಿನ ಎಣ್ಣೆ ಅನ್ವಯಿಸಿ. ಗಾಳಿ ಸಂಚಾರ ಸುಧಾರಿಸಿ. ಸಸ್ಯಗಳ ಬುಡದಲ್ಲಿ ನೀರು ಹಾಕಿ.',
      strawberryLeafScorch: 'ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಒಳ್ಳೆಯ ಒಳಚರಂಡಿ ಮತ್ತು ಗಾಳಿ ಸಂಚಾರ ಖಚಿತಪಡಿಸಿ.',
      strawberryHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      tomatoBacterialSpot: 'ತಾಮ್ರ-ಆಧಾರಿತ ಬ್ಯಾಕ್ಟೀರಿಸೈಡ್ ಅನ್ವಯಿಸಿ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಬೆಳೆ ಸರದಿ ಅಭ್ಯಾಸ ಮಾಡಿ.',
      tomatoEarlyBlight: 'ತಾಮ್ರ-ಆಧಾರಿತ ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಪ್ರಭಾವಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಸರಿಯಾದ ಅಂತರ ಖಚಿತಪಡಿಸಿ.',
      tomatoLateBlight: 'ತುರ್ತು: ತಕ್ಷಣ ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ನಾಶಪಡಿಸಿ.',
      tomatoLeafMold: 'ವಾತಾಯನ ಸುಧಾರಿಸಿ. ತೇವಾಂಶ ಕಡಿಮೆ ಮಾಡಿ. ತೀವ್ರವಾದರೆ ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ.',
      tomatoSeptoriaLeafSpot: 'ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಮಣ್ಣು ಚಿಮ್ಮುವಿಕೆ ತಡೆಯಲು ಮಲ್ಚ್ ಮಾಡಿ.',
      tomatoSpiderMites: 'ಹುಳುಗಳನ್ನು ತೆಗೆದುಹಾಕಲು ನೀರು ಸಿಂಪಡಿಸಿ. ಬೇವಿನ ಎಣ್ಣೆ ಅಥವಾ ಕೀಟನಾಶಕ ಸಾಬೂನು ಅನ್ವಯಿಸಿ.',
      tomatoTargetSpot: 'ಶಿಲೀಂಧ್ರನಾಶಕ (ಕ್ಲೋರೋಥಲೋನಿಲ್) ಅನ್ವಯಿಸಿ. ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಗಾಳಿ ಸಂಚಾರ ಸುಧಾರಿಸಿ.',
      tomatoYellowLeafCurl: 'ಚಿಕಿತ್ಸೆ ಲಭ್ಯವಿಲ್ಲ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಬಿಳಿ ನೊಣಗಳನ್ನು ನಿಯಂತ್ರಿಸಿ.',
      tomatoMosaicVirus: 'ಚಿಕಿತ್ಸೆ ಲಭ್ಯವಿಲ್ಲ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಉಪಕರಣಗಳನ್ನು ಸೋಂಕುನಿವಾರಣೆ ಮಾಡಿ.',
      tomatoHealthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
    },
    
    // Loading states
    initializingNeuralNet: 'ನ್ಯೂರಲ್ ನೆಟ್‌ವರ್ಕ್ ಪ್ರಾರಂಭಿಸಲಾಗುತ್ತಿದೆ...',
    settingUpTensorflow: 'TensorFlow.js ಸೆಟಪ್ ಆಗುತ್ತಿದೆ...',
    loadingModel: 'MobileNetV2 ಮಾಡೆಲ್ ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
    modelLoaded: 'ಮಾಡೆಲ್ ಯಶಸ್ವಿಯಾಗಿ ಲೋಡ್ ಆಯಿತು!',
    demoMode: 'ಡೆಮೊ ಮೋಡ್: AI ಪತ್ತೆ ಸಿಮ್ಯುಲೇಟ್ ಆಗುತ್ತಿದೆ...',
    warmingUp: 'ನ್ಯೂರಲ್ ನೆಟ್‌ವರ್ಕ್ ವಾರ್ಮ್ ಅಪ್ ಆಗುತ್ತಿದೆ...',
    readyForDiagnosis: 'ರೋಗನಿರ್ಣಯಕ್ಕೆ ಸಿದ್ಧ!',
    
    // Errors
    initError: 'AI ಎಂಜಿನ್ ಪ್ರಾರಂಭಿಸಲು ವಿಫಲವಾಯಿತು. ದಯವಿಟ್ಟು ರಿಫ್ರೆಶ್ ಮಾಡಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
    retry: 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',
    
    // Footer
    footerText: 'ಫಾರ್ಮ್‌ಗಾರ್ಡ್ AI — ರೈತರಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ, ಎಡ್ಜ್ AI ಮೂಲಕ ಶಕ್ತಿ',
    hackathon: 'ಹ್ಯಾಕಥಾನ್ 2025 | ಅತ್ಯುತ್ತಮ ನಾವೀನ್ಯತೆ ಎಂಟ್ರಿ',
    
    // Language selector
    selectLanguage: 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ',
    english: 'English',
    hindi: 'हिंदी',
    telugu: 'తెలుగు',
    tamil: 'தமிழ்',
    punjabi: 'ਪੰਜਾਬੀ',
    kannada: 'ಕನ್ನಡ',
  }
};

// Get translation by key path (e.g., 'treatments.healthy')
export function getTranslation(lang, key) {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return value || key;
}

// Get all available languages
export const availableLanguages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
];
