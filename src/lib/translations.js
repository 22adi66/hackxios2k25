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
    
    // Treatments
    treatments: {
      healthy: 'No treatment needed. Continue regular care and monitoring.',
      earlyBlight: 'Apply copper-based fungicide. Remove affected leaves. Ensure proper spacing.',
      lateBlight: 'URGENT: Apply fungicide immediately. Remove and destroy infected plants. Avoid overhead watering.',
      leafMold: 'Improve air circulation. Apply fungicide. Reduce humidity levels.',
      septoriaLeafSpot: 'Remove infected leaves. Apply fungicide. Avoid wetting foliage.',
      spiderMites: 'Spray with neem oil or insecticidal soap. Increase humidity around plants.',
      targetSpot: 'Apply fungicide. Remove debris. Practice crop rotation.',
      mosaicVirus: 'No cure available. Remove infected plants. Control aphids that spread the virus.',
      yellowLeafCurl: 'Control whitefly population. Remove infected plants. Use resistant varieties.',
      bacterialSpot: 'Apply copper spray. Avoid overhead irrigation. Remove infected material.',
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
    
    // Treatments
    treatments: {
      healthy: 'उपचार की आवश्यकता नहीं। नियमित देखभाल और निगरानी जारी रखें।',
      earlyBlight: 'कॉपर-आधारित फफूंदनाशक लगाएं। प्रभावित पत्तियों को हटा दें। उचित दूरी सुनिश्चित करें।',
      lateBlight: 'तत्काल: तुरंत फफूंदनाशक लगाएं। संक्रमित पौधों को हटाएं और नष्ट करें। ऊपर से पानी देने से बचें।',
      leafMold: 'वायु संचार में सुधार करें। फफूंदनाशक लगाएं। आर्द्रता के स्तर को कम करें।',
      septoriaLeafSpot: 'संक्रमित पत्तियों को हटा दें। फफूंदनाशक लगाएं। पत्तियों को गीला करने से बचें।',
      spiderMites: 'नीम तेल या कीटनाशक साबुन से स्प्रे करें। पौधों के आसपास नमी बढ़ाएं।',
      targetSpot: 'फफूंदनाशक लगाएं। मलबा हटाएं। फसल चक्र का अभ्यास करें।',
      mosaicVirus: 'कोई इलाज उपलब्ध नहीं। संक्रमित पौधों को हटा दें। वायरस फैलाने वाले एफिड्स को नियंत्रित करें।',
      yellowLeafCurl: 'व्हाइटफ्लाई आबादी को नियंत्रित करें। संक्रमित पौधों को हटा दें। प्रतिरोधी किस्मों का उपयोग करें।',
      bacterialSpot: 'कॉपर स्प्रे लगाएं। ऊपर से सिंचाई से बचें। संक्रमित सामग्री हटाएं।',
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
    
    // Treatments
    treatments: {
      healthy: 'చికిత్స అవసరం లేదు. సాధారణ సంరక్షణ మరియు పర్యవేక్షణ కొనసాగించండి.',
      earlyBlight: 'రాగి-ఆధారిత శిలీంద్ర నాశిని వర్తించండి. ప్రభావిత ఆకులను తొలగించండి. సరైన దూరం నిర్ధారించండి.',
      lateBlight: 'అత్యవసరం: వెంటనే శిలీంద్ర నాశిని వర్తించండి. సంక్రమిత మొక్కలను తొలగించి నాశనం చేయండి. పైన నుండి నీరు పోయడం మానుకోండి.',
      leafMold: 'గాలి ప్రసరణ మెరుగుపరచండి. శిలీంద్ర నాశిని వర్తించండి. తేమ స్థాయిలు తగ్గించండి.',
      septoriaLeafSpot: 'సంక్రమిత ఆకులను తొలగించండి. శిలీంద్ర నాశిని వర్తించండి. ఆకులను తడపడం మానుకోండి.',
      spiderMites: 'వేప నూనె లేదా కీటక నాశక సబ్బుతో స్ప్రే చేయండి. మొక్కల చుట్టూ తేమ పెంచండి.',
      targetSpot: 'శిలీంద్ర నాశిని వర్తించండి. చెత్త తొలగించండి. పంట భ్రమణం పాటించండి.',
      mosaicVirus: 'నివారణ అందుబాటులో లేదు. సంక్రమిత మొక్కలను తొలగించండి. వైరస్ వ్యాప్తి చేసే ఆఫిడ్లను నియంత్రించండి.',
      yellowLeafCurl: 'వైట్‌ఫ్లై జనాభాను నియంత్రించండి. సంక్రమిత మొక్కలను తొలగించండి. నిరోధక రకాలను ఉపయోగించండి.',
      bacterialSpot: 'రాగి స్ప్రే వర్తించండి. పైన నుండి నీటిపారుదల మానుకోండి. సంక్రమిత పదార్థాన్ని తొలగించండి.',
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
    
    // Treatments
    treatments: {
      healthy: 'சிகிச்சை தேவையில்லை. வழக்கமான பராமரிப்பு மற்றும் கண்காணிப்பைத் தொடரவும்.',
      earlyBlight: 'செம்பு அடிப்படையிலான பூஞ்சைக்கொல்லியை பயன்படுத்தவும். பாதிக்கப்பட்ட இலைகளை அகற்றவும். சரியான இடைவெளியை உறுதிப்படுத்தவும்.',
      lateBlight: 'அவசரம்: உடனடியாக பூஞ்சைக்கொல்லியை பயன்படுத்தவும். தொற்று தாவரங்களை அகற்றி அழிக்கவும். மேலே இருந்து நீர் ஊற்றுவதை தவிர்க்கவும்.',
      leafMold: 'காற்று சுழற்சியை மேம்படுத்தவும். பூஞ்சைக்கொல்லியை பயன்படுத்தவும். ஈரப்பத அளவை குறைக்கவும்.',
      septoriaLeafSpot: 'தொற்று இலைகளை அகற்றவும். பூஞ்சைக்கொல்லியை பயன்படுத்தவும். இலைகளை நனைப்பதை தவிர்க்கவும்.',
      spiderMites: 'வேப்ப எண்ணெய் அல்லது பூச்சிக்கொல்லி சோப்பு தெளிக்கவும். தாவரங்களைச் சுற்றி ஈரப்பதத்தை அதிகரிக்கவும்.',
      targetSpot: 'பூஞ்சைக்கொல்லியை பயன்படுத்தவும். குப்பைகளை அகற்றவும். பயிர் சுழற்சியை பின்பற்றவும்.',
      mosaicVirus: 'சிகிச்சை இல்லை. தொற்று தாவரங்களை அகற்றவும். வைரஸ் பரப்பும் அசுவினிகளை கட்டுப்படுத்தவும்.',
      yellowLeafCurl: 'வெள்ளை ஈ மக்கள்தொகையை கட்டுப்படுத்தவும். தொற்று தாவரங்களை அகற்றவும். எதிர்ப்பு வகைகளை பயன்படுத்தவும்.',
      bacterialSpot: 'செம்பு தெளிப்பான் பயன்படுத்தவும். மேலே இருந்து நீர்ப்பாசனத்தை தவிர்க்கவும். தொற்று பொருட்களை அகற்றவும்.',
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
    
    // Treatments
    treatments: {
      healthy: 'ਕਿਸੇ ਇਲਾਜ ਦੀ ਲੋੜ ਨਹੀਂ। ਨਿਯਮਿਤ ਦੇਖਭਾਲ ਅਤੇ ਨਿਗਰਾਨੀ ਜਾਰੀ ਰੱਖੋ।',
      earlyBlight: 'ਕਾਪਰ-ਆਧਾਰਿਤ ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਪ੍ਰਭਾਵਿਤ ਪੱਤੇ ਹਟਾਓ। ਸਹੀ ਦੂਰੀ ਯਕੀਨੀ ਬਣਾਓ।',
      lateBlight: 'ਤੁਰੰਤ: ਫੌਰੀ ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਸੰਕਰਮਿਤ ਬੂਟੇ ਹਟਾਓ ਅਤੇ ਨਸ਼ਟ ਕਰੋ। ਉੱਪਰੋਂ ਪਾਣੀ ਦੇਣ ਤੋਂ ਬਚੋ।',
      leafMold: 'ਹਵਾ ਦੀ ਆਵਾਜਾਈ ਸੁਧਾਰੋ। ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਨਮੀ ਦੇ ਪੱਧਰ ਘਟਾਓ।',
      septoriaLeafSpot: 'ਸੰਕਰਮਿਤ ਪੱਤੇ ਹਟਾਓ। ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਪੱਤਿਆਂ ਨੂੰ ਗਿੱਲਾ ਕਰਨ ਤੋਂ ਬਚੋ।',
      spiderMites: 'ਨਿੰਮ ਤੇਲ ਜਾਂ ਕੀਟਨਾਸ਼ਕ ਸਾਬਣ ਨਾਲ ਸਪਰੇਅ ਕਰੋ। ਬੂਟਿਆਂ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਨਮੀ ਵਧਾਓ।',
      targetSpot: 'ਉੱਲੀਨਾਸ਼ਕ ਲਗਾਓ। ਕੂੜਾ ਹਟਾਓ। ਫਸਲ ਚੱਕਰ ਦਾ ਅਭਿਆਸ ਕਰੋ।',
      mosaicVirus: 'ਕੋਈ ਇਲਾਜ ਉਪਲਬਧ ਨਹੀਂ। ਸੰਕਰਮਿਤ ਬੂਟੇ ਹਟਾਓ। ਵਾਇਰਸ ਫੈਲਾਉਣ ਵਾਲੇ ਐਫਿਡ ਕੰਟਰੋਲ ਕਰੋ।',
      yellowLeafCurl: 'ਵਾਈਟਫਲਾਈ ਆਬਾਦੀ ਕੰਟਰੋਲ ਕਰੋ। ਸੰਕਰਮਿਤ ਬੂਟੇ ਹਟਾਓ। ਰੋਧਕ ਕਿਸਮਾਂ ਵਰਤੋ।',
      bacterialSpot: 'ਕਾਪਰ ਸਪਰੇਅ ਲਗਾਓ। ਉੱਪਰੋਂ ਸਿੰਚਾਈ ਤੋਂ ਬਚੋ। ਸੰਕਰਮਿਤ ਸਮੱਗਰੀ ਹਟਾਓ।',
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
    
    // Treatments
    treatments: {
      healthy: 'ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿಲ್ಲ. ನಿಯಮಿತ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮುಂದುವರಿಸಿ.',
      earlyBlight: 'ತಾಮ್ರ-ಆಧಾರಿತ ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಪ್ರಭಾವಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಸರಿಯಾದ ಅಂತರ ಖಚಿತಪಡಿಸಿ.',
      lateBlight: 'ತುರ್ತು: ತಕ್ಷಣ ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ನಾಶಪಡಿಸಿ. ಮೇಲಿನಿಂದ ನೀರು ಹಾಕುವುದನ್ನು ತಪ್ಪಿಸಿ.',
      leafMold: 'ಗಾಳಿ ಸಂಚಾರ ಸುಧಾರಿಸಿ. ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ತೇವಾಂಶ ಮಟ್ಟ ಕಡಿಮೆ ಮಾಡಿ.',
      septoriaLeafSpot: 'ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಎಲೆಗಳನ್ನು ಒದ್ದೆ ಮಾಡುವುದನ್ನು ತಪ್ಪಿಸಿ.',
      spiderMites: 'ಬೇವಿನ ಎಣ್ಣೆ ಅಥವಾ ಕೀಟನಾಶಕ ಸಾಬೂನು ಸಿಂಪಡಿಸಿ. ಸಸ್ಯಗಳ ಸುತ್ತ ತೇವಾಂಶ ಹೆಚ್ಚಿಸಿ.',
      targetSpot: 'ಶಿಲೀಂಧ್ರನಾಶಕ ಅನ್ವಯಿಸಿ. ಅವಶೇಷಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಬೆಳೆ ಸರದಿ ಅಭ್ಯಾಸ ಮಾಡಿ.',
      mosaicVirus: 'ಯಾವುದೇ ಚಿಕಿತ್ಸೆ ಲಭ್ಯವಿಲ್ಲ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ವೈರಸ್ ಹರಡುವ ಅಫಿಡ್‌ಗಳನ್ನು ನಿಯಂತ್ರಿಸಿ.',
      yellowLeafCurl: 'ಬಿಳಿ ನೊಣ ಜನಸಂಖ್ಯೆ ನಿಯಂತ್ರಿಸಿ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ನಿರೋಧಕ ತಳಿಗಳನ್ನು ಬಳಸಿ.',
      bacterialSpot: 'ತಾಮ್ರ ಸಿಂಪಡಣೆ ಅನ್ವಯಿಸಿ. ಮೇಲಿನಿಂದ ನೀರಾವರಿ ತಪ್ಪಿಸಿ. ಸೋಂಕಿತ ವಸ್ತುವನ್ನು ತೆಗೆದುಹಾಕಿ.',
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
