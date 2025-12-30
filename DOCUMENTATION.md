# FarmGuard AI
## Edge AI Crop Disease Detection System

---

# 📋 Table of Contents

1. [Problem Statement](#problem-statement)
2. [Solution Overview](#solution-overview)
3. [Technologies Used](#technologies-used)
4. [System Architecture](#system-architecture)
5. [Features](#features)
6. [Screenshots](#screenshots)
7. [Challenges & Learnings](#challenges--learnings)
8. [Future Scope](#future-scope)
9. [Team & Credits](#team--credits)

---

# 1. Problem Statement

## The Agricultural Crisis

Agriculture is the backbone of India's economy, employing over **42% of the workforce** and contributing **18% to GDP**. However, farmers face a silent crisis that threatens their livelihoods every season: **crop diseases**.

### Key Challenges:

**🌾 Delayed Detection**
- Farmers often identify diseases only after significant damage has occurred
- By the time visible symptoms appear, 20-40% of the crop may already be affected
- Late detection leads to reduced yield and income loss

**🏥 Limited Access to Experts**
- Agricultural experts are concentrated in cities
- Rural farmers must travel long distances for diagnosis
- Expert consultations are expensive and time-consuming
- Language barriers prevent effective communication

**📡 Connectivity Issues**
- 65% of India's rural areas have unreliable internet
- Cloud-based solutions fail when farmers need them most
- Network outages during critical farming seasons are common

**💰 Economic Impact**
- Crop diseases cause estimated losses of ₹50,000+ crores annually in India
- Small farmers (< 2 hectares) are disproportionately affected
- Incorrect treatment wastes money on ineffective pesticides

**📖 Literacy Barriers**
- Many farmers cannot read complex disease reports
- Technical agricultural terminology is confusing
- Information is often only available in English

---

# 2. Solution Overview

## Introducing FarmGuard AI

**FarmGuard AI** is a revolutionary **offline-first, multilingual crop disease detection system** that brings expert-level agricultural diagnostics directly to farmers' smartphones — **without requiring internet connectivity**.

### How It Works:

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   📸 Capture    │ ──▶ │   🧠 AI Analysis  │ ──▶ │  💊 Treatment   │
│   Crop Image    │     │   (On-Device)     │     │  Recommendation │
└─────────────────┘     └──────────────────┘     └─────────────────┘
         │                       │                        │
         ▼                       ▼                        ▼
    Camera/Upload         MobileNetV2 CNN          Voice + Text
    in Browser            runs in Browser          in 6 Languages
```

### Core Concept: Edge AI

Unlike traditional cloud-based solutions, FarmGuard AI runs **entirely in the browser** using **TensorFlow.js**. The neural network model is downloaded once and then works completely offline.

| Traditional Apps | FarmGuard AI |
|-----------------|--------------|
| Requires constant internet | Works 100% offline |
| Uploads images to cloud | Images never leave device |
| Server processing delays | Instant results (<100ms) |
| Privacy concerns | Complete data privacy |
| Subscription fees | Free forever |

### Key Innovation: Accessibility First

- **6 Languages**: English, Hindi, Telugu, Tamil, Kannada, Punjabi
- **Voice Output**: For farmers who cannot read
- **Simple UI**: One-tap diagnosis with clear visual indicators
- **WhatsApp Sharing**: Easy sharing with family/experts

---

# 3. Technologies Used

## Frontend Framework

| Technology | Purpose | Why Chosen |
|-----------|---------|------------|
| **Next.js 14** | React Framework | Server-side rendering, optimal performance |
| **React 18** | UI Library | Component-based architecture |
| **Tailwind CSS** | Styling | Rapid UI development, responsive design |
| **Lucide Icons** | Iconography | Lightweight, consistent icons |

## AI/ML Stack

| Technology | Purpose | Why Chosen |
|-----------|---------|------------|
| **TensorFlow.js** | Browser ML Runtime | Enables offline AI inference |
| **MobileNetV2** | Base Architecture | Optimized for mobile devices |
| **Keras** | Model Training | Easy transfer learning |
| **PlantVillage Dataset** | Training Data | 54,000+ labeled plant images |

## Progressive Web App (PWA)

| Technology | Purpose | Why Chosen |
|-----------|---------|------------|
| **Service Workers** | Offline Caching | Full offline functionality |
| **Web App Manifest** | Installability | Native app-like experience |
| **IndexedDB** | Local Storage | Store scan history offline |

## Accessibility Features

| Technology | Purpose | Why Chosen |
|-----------|---------|------------|
| **Web Speech API** | Text-to-Speech | Voice output in regional languages |
| **Web Share API** | Sharing | Native WhatsApp/SMS integration |
| **Responsive Design** | Mobile First | Works on any screen size |

## Development Tools

| Tool | Purpose |
|------|---------|
| **VS Code** | IDE |
| **Git/GitHub** | Version Control |
| **Kaggle** | Model Training (GPU) |
| **Vercel** | Deployment |

---

# 4. System Architecture

## High-Level Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        USER'S DEVICE                              │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                     NEXT.JS APPLICATION                     │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │  │
│  │  │   Camera     │  │   Upload     │  │   Language       │  │  │
│  │  │   Module     │  │   Module     │  │   Selector       │  │  │
│  │  └──────┬───────┘  └──────┬───────┘  └────────┬─────────┘  │  │
│  │         │                 │                    │            │  │
│  │         ▼                 ▼                    ▼            │  │
│  │  ┌─────────────────────────────────────────────────────┐   │  │
│  │  │              IMAGE PREPROCESSING                     │   │  │
│  │  │         (Resize 224x224, Normalize [0,1])           │   │  │
│  │  └────────────────────────┬────────────────────────────┘   │  │
│  │                           │                                 │  │
│  │                           ▼                                 │  │
│  │  ┌─────────────────────────────────────────────────────┐   │  │
│  │  │              TENSORFLOW.JS ENGINE                    │   │  │
│  │  │  ┌───────────────────────────────────────────────┐  │   │  │
│  │  │  │           MobileNetV2 Model (~9MB)            │  │   │  │
│  │  │  │    ┌─────────────────────────────────────┐    │  │   │  │
│  │  │  │    │  Convolutional Layers (Frozen)      │    │  │   │  │
│  │  │  │    │  Global Average Pooling             │    │  │   │  │
│  │  │  │    │  Dense Layer (128 neurons)          │    │  │   │  │
│  │  │  │    │  Softmax Output (15 classes)        │    │  │   │  │
│  │  │  │    └─────────────────────────────────────┘    │  │   │  │
│  │  │  └───────────────────────────────────────────────┘  │   │  │
│  │  └────────────────────────┬────────────────────────────┘   │  │
│  │                           │                                 │  │
│  │                           ▼                                 │  │
│  │  ┌─────────────────────────────────────────────────────┐   │  │
│  │  │              RESULTS & RECOMMENDATIONS               │   │  │
│  │  │  • Disease Name (Translated)                        │   │  │
│  │  │  • Confidence Score                                 │   │  │
│  │  │  • Severity Level                                   │   │  │
│  │  │  • Treatment Plan (Translated)                      │   │  │
│  │  │  • Voice Announcement                               │   │  │
│  │  └─────────────────────────────────────────────────────┘   │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                    SERVICE WORKER                           │  │
│  │  • Caches all assets for offline use                       │  │
│  │  • Caches AI model files                                   │  │
│  │  • Enables "Add to Home Screen"                            │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

```
┌─────────┐    ┌──────────┐    ┌───────────┐    ┌──────────────┐
│  User   │───▶│  Camera  │───▶│  Canvas   │───▶│  TF Tensor   │
│ Action  │    │  Stream  │    │  Element  │    │  (224x224x3) │
└─────────┘    └──────────┘    └───────────┘    └──────┬───────┘
                                                       │
                                                       ▼
┌─────────┐    ┌──────────┐    ┌───────────┐    ┌──────────────┐
│ Display │◀───│ Translate│◀───│  Lookup   │◀───│   Model      │
│ Results │    │ Treatment│    │  Disease  │    │  Prediction  │
└─────────┘    └──────────┘    └───────────┘    └──────────────┘
     │
     ▼
┌─────────────────────────────────────┐
│  Share via WhatsApp/SMS/Copy        │
│  Voice Announcement (TTS)           │
└─────────────────────────────────────┘
```

## Model Architecture

```
Input Image (224 x 224 x 3)
         │
         ▼
┌─────────────────────────────┐
│      MobileNetV2 Base       │
│   (ImageNet Pre-trained)    │
│   • Depthwise Separable     │
│   • Inverted Residuals      │
│   • Linear Bottlenecks      │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│   Global Average Pooling    │
│        (1280 features)      │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│      Dropout (0.3)          │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│   Dense Layer (128 ReLU)    │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│      Dropout (0.2)          │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│  Dense Layer (15 Softmax)   │
│     (Disease Classes)       │
└─────────────────────────────┘
```

---

# 5. Features

## 🎯 Core Features

### 1. Offline-First AI Detection
- **100% browser-based** neural network
- Works without any internet connection
- Model cached for instant subsequent loads
- No data ever leaves the user's device

### 2. Real-Time Camera Scanning
- Live camera feed with disease detection
- Works with both front and rear cameras
- Auto-focus and exposure optimization
- Visual scanning indicators

### 3. Image Upload Analysis
- Support for JPG, PNG, WebP formats
- Drag-and-drop interface
- Gallery selection on mobile
- Instant analysis on upload

### 4. Multilingual Support (6 Languages)
- 🇬🇧 English
- 🇮🇳 Hindi (हिंदी)
- 🇮🇳 Telugu (తెలుగు)
- 🇮🇳 Tamil (தமிழ்)
- 🇮🇳 Kannada (ಕನ್ನಡ)
- 🇮🇳 Punjabi (ਪੰਜਾਬੀ)

All UI elements, disease names, and treatment recommendations are fully translated.

### 5. Voice Accessibility
- **Text-to-Speech** in all 6 languages
- Reads disease name, severity, and treatment
- Essential for farmers with limited literacy
- Voice button on main page for instructions

### 6. Smart Treatment Recommendations
- Disease-specific treatment plans
- Fungicide/pesticide recommendations
- Preventive measures
- All translated to user's language

### 7. Easy Sharing
- **WhatsApp** direct sharing
- **SMS** sharing for basic phones
- **Copy to clipboard** option
- **Share with image** using native share

### 8. Confidence Scoring
- Shows prediction confidence (%)
- Color-coded severity levels
  - 🟢 Green: Healthy
  - 🟡 Yellow: Medium severity
  - 🔴 Red: High severity (urgent)

## 🌱 Supported Crops & Diseases

| Crop | Diseases Detected |
|------|-------------------|
| **Pepper** | Bacterial Spot, Healthy |
| **Potato** | Early Blight, Late Blight, Healthy |
| **Tomato** | Bacterial Spot, Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Yellow Leaf Curl Virus, Mosaic Virus, Healthy |

**Total: 15 classes with 90%+ accuracy**

---

# 6. Screenshots

## Main Dashboard
```
┌────────────────────────────────────────┐
│  🌿 FARMGUARD                    🔊 ✕  │
│                                        │
│     ╭──────────────────────────╮       │
│     │    ◉ AI Engine Ready     │       │
│     ╰──────────────────────────╯       │
│                                        │
│         CROP DISEASE DETECTION         │
│                                        │
│    Point your camera at any crop       │
│    leaf. AI will detect diseases       │
│    instantly — completely offline.     │
│                                        │
│         🔊 Listen (వినండి)              │
│                                        │
│     ┌────────────────────────────┐     │
│     │  📷 START DIAGNOSIS    ▶  │     │
│     └────────────────────────────┘     │
│                                        │
│  ✓ No upload required                  │
│  ✓ Instant results                     │
│  ✓ Works offline                       │
└────────────────────────────────────────┘
```

## AI Scanner
```
┌────────────────────────────────────────┐
│  ⚙️ AI SCANNER                   🔊 ✕  │
│     MobileNetV2 Neural Network         │
│                                        │
│  ┌─────────────────┬──────────────┐    │
│  │  📷 Live Camera │ 📤 Upload   │    │
│  └─────────────────┴──────────────┘    │
│                                        │
│  ┌────────────────────────────────┐    │
│  │                                │    │
│  │     [CAMERA PREVIEW]           │    │
│  │                                │    │
│  │  📷 IMAGE LOADED  Latency: 45ms│    │
│  └────────────────────────────────┘    │
│                                        │
│  ┌──────────────┐ ┌──────────────┐     │
│  │ 🔍 ANALYZE   │ │ 🗑️ CLEAR    │     │
│  └──────────────┘ └──────────────┘     │
│                                        │
│  ┌────────────────────────────────┐    │
│  │ 🔗 DETECTION RESULT            │    │
│  │                                │    │
│  │ 🍅 Tomato Late Blight    🔴    │    │
│  │    Confidence: 94.5%           │    │
│  │ ████████████████████░░░░       │    │
│  └────────────────────────────────┘    │
│                                        │
│  ┌────────────────────────────────┐    │
│  │ ⚙️ TREATMENT                   │    │
│  │ URGENT: Apply fungicide        │    │
│  │ immediately. Remove infected   │    │
│  │ plants. Avoid overhead water.  │    │
│  │                                │    │
│  │ ┌────────────────────────────┐ │    │
│  │ │  🔊 Read Aloud              │ │    │
│  │ └────────────────────────────┘ │    │
│  └────────────────────────────────┘    │
│                                        │
│  ┌────────────────────────────────┐    │
│  │ ↗️ SHARE RESULTS               │    │
│  │ ┌────────┐┌────────┐┌────────┐ │    │
│  │ │WhatsApp││  SMS   ││  Copy  │ │    │
│  │ └────────┘└────────┘└────────┘ │    │
│  │ ┌────────────────────────────┐ │    │
│  │ │    📤 Share with Image     │ │    │
│  │ └────────────────────────────┘ │    │
│  └────────────────────────────────┘    │
└────────────────────────────────────────┘
```

## Language Selection
```
┌────────────────────────────────────────┐
│  Select Language                       │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │  🇬🇧  English                    │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  🇮🇳  हिंदी (Hindi)              ✓ │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  🇮🇳  తెలుగు (Telugu)              │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  🇮🇳  தமிழ் (Tamil)               │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  🇮🇳  ਪੰਜਾਬੀ (Punjabi)             │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  🇮🇳  ಕನ್ನಡ (Kannada)              │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

---

# 7. Challenges & Learnings

## 🔴 Challenge 1: Model Preprocessing Mismatch

**Problem:** 
The trained model expected images normalized to [0,1] range, but the app was using [-1,1] normalization (MobileNetV2 default). This caused predictions to be random with very low confidence.

**Solution:**
- Investigated model training parameters
- Matched preprocessing in app: `tensor.div(255.0)` instead of `tensor.div(127.5).sub(1)`
- Validated with test images

**Learning:** Always document preprocessing steps during training and ensure consistency in inference.

---

## 🔴 Challenge 2: Large Model Size

**Problem:**
Full 38-class PlantVillage model was 2.18GB and took 6+ hours to train.

**Solution:**
- Used smaller 15-class subset (Pepper, Potato, Tomato)
- Applied transfer learning with frozen base layers
- Final model size: ~9MB

**Learning:** Start with a focused scope and expand later. Transfer learning dramatically reduces training time.

---

## 🔴 Challenge 3: Multilingual Text-to-Speech

**Problem:**
Web Speech API voice quality varies across devices and languages. Some languages had no voices available.

**Solution:**
- Implemented fallback chain for voice selection
- Hindi voice fallback for Punjabi (similar phonetics)
- Graceful degradation when TTS unavailable

**Learning:** Always provide fallbacks for browser APIs that vary across devices.

---

## 🔴 Challenge 4: Offline Functionality

**Problem:**
TensorFlow.js model files needed to be cached for offline use, but standard caching didn't work for binary `.bin` files.

**Solution:**
- Custom service worker with proper MIME types
- Pre-caching strategy for model files
- Network-first with cache fallback strategy

**Learning:** PWA caching for ML models requires special consideration for binary assets.

---

## 🔴 Challenge 5: WhatsApp Share Not Opening

**Problem:**
Web Share API was intercepting WhatsApp button clicks and showing the Windows share dialog.

**Solution:**
- Used direct `web.whatsapp.com/send?text=` URL for WhatsApp
- Separate "Share with Image" button for native share
- Different URLs for mobile (`api.whatsapp.com`) vs desktop

**Learning:** Native share APIs are great but sometimes direct links provide better UX.

---

## 🟢 Key Learnings

1. **Edge AI is Production-Ready**: TensorFlow.js can run complex CNNs in browsers with acceptable latency (<100ms).

2. **Accessibility is Crucial**: Voice features transformed the app from "useful" to "essential" for non-literate users.

3. **Offline-First Design**: Caching strategy should be planned from day one, not retrofitted.

4. **Transfer Learning Power**: Pre-trained models (ImageNet) dramatically reduce training data and time requirements.

5. **Localization Matters**: Language support increased potential user base by 10x in India.

---

# 8. Future Scope

## Short-Term (3-6 months)

- [ ] Add more crops: Rice, Wheat, Cotton, Sugarcane
- [ ] Expand to 50+ disease classes
- [ ] Add disease progression timeline
- [ ] Integrate with weather APIs for preventive alerts
- [ ] Add more languages: Bengali, Marathi, Gujarati

## Medium-Term (6-12 months)

- [ ] Build native Android app for better performance
- [ ] Add offline history with sync when online
- [ ] Integrate with government agricultural portals
- [ ] Add nearby pesticide shop locator
- [ ] Community feature for farmer discussions

## Long-Term (1-2 years)

- [ ] Drone integration for large-scale farm scanning
- [ ] Satellite imagery analysis for crop health
- [ ] Yield prediction based on disease data
- [ ] Integration with crop insurance systems
- [ ] Multi-disease detection in single image

---

# 9. Team & Credits

## Team Members

| Name | Role | Contribution |
|------|------|--------------|
| [Your Name] | Full Stack Developer | App development, ML integration |
| [Team Member] | ML Engineer | Model training, optimization |
| [Team Member] | UI/UX Designer | Interface design, accessibility |

## Acknowledgements

- **PlantVillage Dataset**: Penn State University
- **TensorFlow.js Team**: Google
- **Next.js Team**: Vercel
- **Hackathon Organizers**: [Hackathon Name]

## Repository

- **GitHub**: [https://github.com/22adi66/hackxios2k25](https://github.com/22adi66/hackxios2k25)
- **Live Demo**: [Deployed URL]

---

# 📄 License

This project is open-source under the MIT License.

---

**FarmGuard AI** — *Built for Farmers, Powered by Edge AI* 🌿

*Hackathon 2025 Submission*
