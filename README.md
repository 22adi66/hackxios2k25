# 🌱 FarmGuard AI

> **Offline-First Crop Disease Detector** — Edge AI that works without internet, built for farmers!

[![FarmGuard](https://img.shields.io/badge/FarmGuard-Edge_AI-39FF14?style=for-the-badge&logo=tensorflow&logoColor=white)](https://github.com/22adi66/hackxios2k25)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-4.x-FF6F00?style=for-the-badge&logo=tensorflow)](https://www.tensorflow.org/js)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<p align="center">
  <img src="https://img.shields.io/badge/Model-MobileNetV2-blue?style=flat-square" alt="MobileNetV2"/>
  <img src="https://img.shields.io/badge/Languages-6-orange?style=flat-square" alt="6 Languages"/>
  <img src="https://img.shields.io/badge/Offline-100%25-brightgreen?style=flat-square" alt="100% Offline"/>
  <img src="https://img.shields.io/badge/Inference-~200ms-yellow?style=flat-square" alt="Fast Inference"/>
</p>

---

## 📋 Table of Contents

- [Problem Statement](#-the-problem)
- [Our Solution](#-the-solution-edge-ai)
- [Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-quick-start)
- [Project Structure](#-project-structure)
- [AI Model](#-ai-model)
- [Multilingual Support](#-multilingual-support)
- [PWA Installation](#-pwa-installation)
- [Demo](#-demo)
- [Team](#-team)
- [License](#-license)

---

## 🎯 The Problem

Farmers in rural India and around the world face critical challenges:

| Challenge | Impact |
|-----------|--------|
| 🌐 **Unreliable Internet** | Cloud-based AI solutions become useless |
| ⏰ **Delayed Disease Detection** | Crop loss and financial hardship |
| 📱 **Complex Apps** | Not accessible to all farmers |
| 🌍 **Language Barriers** | Apps only in English exclude millions |
| 💸 **Expensive Solutions** | Consulting experts is costly |

**Result:** Farmers lose up to **40% of crops** annually to preventable diseases.

---

## 💡 The Solution: Edge AI

**FarmGuard AI** runs a TensorFlow.js neural network **directly in your browser** — no server, no cloud, no internet needed!

<table>
<tr>
<td>✅ <b>100% Offline</b></td>
<td>No internet required after initial load</td>
</tr>
<tr>
<td>✅ <b>Real-time Detection</b></td>
<td>Results in ~200ms on mobile devices</td>
</tr>
<tr>
<td>✅ <b>Privacy First</b></td>
<td>Images never leave your device</td>
</tr>
<tr>
<td>✅ <b>Cross-platform</b></td>
<td>Works on any device with a camera</td>
</tr>
<tr>
<td>✅ <b>Multilingual</b></td>
<td>6 Indian languages supported</td>
</tr>
<tr>
<td>✅ <b>PWA Ready</b></td>
<td>Install like a native app</td>
</tr>
</table>

---

## ✨ Key Features

### 🔬 AI-Powered Disease Detection
- **MobileNetV2** architecture trained on plant disease dataset
- Binary classification: **Healthy** vs **Diseased**
- Treatment recommendations for detected diseases

### 📸 Multiple Input Methods
- **Live Camera** — Real-time scanning with device camera
- **Photo Upload** — Upload existing images for analysis
- **Gallery Import** — Select from device gallery

### 🌐 Multilingual Support
Full support for **6 languages**:
- 🇬🇧 English
- 🇮🇳 हिंदी (Hindi)
- 🇮🇳 తెలుగు (Telugu)
- 🇮🇳 தமிழ் (Tamil)
- 🇮🇳 ಕನ್ನಡ (Kannada)
- 🇮🇳 ਪੰਜਾਬੀ (Punjabi)

### 🎨 Cyberpunk UI
- Neon green accents on dark background
- Animated scan lines and glowing effects
- Fully responsive design
- Accessible and intuitive interface

### 📱 Progressive Web App
- Install on home screen
- Works offline after first load
- Native app-like experience
- Push notifications ready

---

## 🔧 Tech Stack

| Technology | Purpose | Why We Chose It |
|------------|---------|-----------------|
| **Next.js 14** | React Framework | App Router, SSR, optimal performance |
| **TensorFlow.js** | ML Inference | Client-side AI, no server needed |
| **MobileNetV2** | Model Architecture | Lightweight, fast, mobile-optimized |
| **Tailwind CSS** | Styling | Rapid UI development, responsive |
| **react-webcam** | Camera Access | Easy camera integration |
| **Lucide React** | Icons | Modern, lightweight icons |

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                     FarmGuard AI                        │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │   Camera    │  │   Upload    │  │     Gallery     │  │
│  └──────┬──────┘  └──────┬──────┘  └────────┬────────┘  │
│         │                │                   │          │
│         └────────────────┼───────────────────┘          │
│                          ▼                              │
│              ┌───────────────────────┐                  │
│              │   Image Preprocessing │                  │
│              │   (224x224, RGB)      │                  │
│              └───────────┬───────────┘                  │
│                          ▼                              │
│              ┌───────────────────────┐                  │
│              │   TensorFlow.js       │                  │
│              │   MobileNetV2 Model   │                  │
│              │   (~9MB, 2 classes)   │                  │
│              └───────────┬───────────┘                  │
│                          ▼                              │
│              ┌───────────────────────┐                  │
│              │   Classification      │                  │
│              │   Healthy / Diseased  │                  │
│              └───────────┬───────────┘                  │
│                          ▼                              │
│              ┌───────────────────────┐                  │
│              │   Treatment Advice    │                  │
│              │   (Multilingual)      │                  │
│              └───────────────────────┘                  │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern browser with camera access

### Installation

```bash
# Clone the repository
git clone https://github.com/22adi66/hackxios2k25.git
cd hackxios2k25

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# Navigate to http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
farmguard-ai/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── layout.js              # Root layout with metadata
│   │   ├── page.js                # Main dashboard page
│   │   └── globals.css            # Cyberpunk theme styles
│   ├── 📂 components/
│   │   └── FarmGuardScanner.js    # AI Scanner component
│   └── 📂 lib/
│       └── translations.js        # Multilingual translations
├── 📂 public/
│   ├── 📂 model/                  # TensorFlow.js model files
│   │   ├── model.json             # Model architecture
│   │   ├── group1-shard1of3.bin   # Model weights
│   │   ├── group1-shard2of3.bin   # Model weights
│   │   └── group1-shard3of3.bin   # Model weights
│   ├── 📂 icons/                  # PWA icons
│   └── manifest.json              # PWA manifest
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## 🧠 AI Model

### Model Architecture

| Property | Value |
|----------|-------|
| **Base Model** | MobileNetV2 (ImageNet pretrained) |
| **Input Shape** | 224 × 224 × 3 (RGB) |
| **Output Classes** | 2 (Healthy, Diseased) |
| **Total Size** | ~9 MB |
| **Inference Time** | ~200ms on mobile |

### Model Layers

```
MobileNetV2 (Feature Extractor)
    ↓
GlobalAveragePooling2D
    ↓
Dropout (0.3)
    ↓
Dense (128, ReLU)
    ↓
Dropout (0.2)
    ↓
Dense (2, Softmax)
```

### Classification Classes

| Class ID | Label | Description |
|----------|-------|-------------|
| 0 | **Healthy** | Plant shows no signs of disease |
| 1 | **Diseased** | Disease detected, treatment recommended |

### Training Details

- **Dataset**: PlantVillage (customized subset)
- **Training Platform**: Kaggle (GPU accelerated)
- **Preprocessing**: Rescale (1/255), Data Augmentation
- **Optimizer**: Adam
- **Loss**: Categorical Crossentropy

---

## 🌍 Multilingual Support

FarmGuard AI speaks your language! Full UI and treatment recommendations in:

| Language | Code | Region |
|----------|------|--------|
| English | `en` | Global |
| हिंदी (Hindi) | `hi` | North India |
| తెలుగు (Telugu) | `te` | Andhra Pradesh, Telangana |
| தமிழ் (Tamil) | `ta` | Tamil Nadu |
| ಕನ್ನಡ (Kannada) | `kn` | Karnataka |
| ਪੰਜਾਬੀ (Punjabi) | `pa` | Punjab |

### Adding New Languages

1. Open `src/lib/translations.js`
2. Add a new language object following the existing pattern
3. Include all translation keys

---

## 📱 PWA Installation

FarmGuard AI is a Progressive Web App! Install it for the best experience:

### On Mobile (Android/iOS)
1. Open the app in Chrome/Safari
2. Tap the **menu** (⋮ or share icon)
3. Select **"Add to Home Screen"**
4. Tap **"Install"**

### On Desktop (Chrome)
1. Open the app in Chrome
2. Click the **install icon** in the address bar
3. Click **"Install"**

### PWA Features
- ✅ Works offline after first load
- ✅ Home screen icon
- ✅ Full-screen mode
- ✅ Fast loading with caching

---

## 🎬 Demo

### How to Use

1. **Open FarmGuard AI** in your browser
2. **Select Language** from the dropdown
3. **Click "Start Diagnosis"** to open scanner
4. **Choose Input Method**:
   - 📷 Camera: Point at plant leaf
   - 📤 Upload: Select image file
5. **View Results**: See classification and treatment
6. **Follow Recommendations**: Apply suggested treatment

### Screenshots

| Dashboard | Scanner | Results |
|-----------|---------|---------|
| Main control panel | Camera/Upload interface | Disease detection results |

---

## 🏆 Hackathon 2025 — HACKXIOS

### Innovation Highlights

| Innovation | Impact |
|------------|--------|
| 🧠 **Edge AI** | No cloud dependency, works anywhere |
| 📴 **Offline-First** | Perfect for rural areas |
| ⚡ **Real-time** | Sub-second inference |
| 🌐 **Multilingual** | 6 Indian languages |
| 🔒 **Privacy-First** | Data never leaves device |
| 📱 **PWA** | Install like native app |

### Problem Solved

> "Enabling farmers in remote areas to detect crop diseases instantly, without internet, in their native language."

---

## 👥 Team

Built with 💚 for farmers everywhere.

**Repository**: [github.com/22adi66/hackxios2k25](https://github.com/22adi66/hackxios2k25)

---

## 📜 License

MIT License — Free to use, modify, and distribute.

```
MIT License

Copyright (c) 2025 FarmGuard AI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- **TensorFlow.js Team** — For making ML in the browser possible
- **PlantVillage Dataset** — For the training data
- **Next.js Community** — For the amazing framework
- **Kaggle** — For GPU-accelerated model training
- **All Farmers** — For inspiring this solution

---

<p align="center">
  <b>🌱 FarmGuard AI — Empowering Farmers with Edge AI 🌱</b>
  <br><br>
  <a href="https://github.com/22adi66/hackxios2k25">⭐ Star this repo</a> •
  <a href="https://github.com/22adi66/hackxios2k25/issues">🐛 Report Bug</a> •
  <a href="https://github.com/22adi66/hackxios2k25/pulls">🔧 Contribute</a>
</p>
