# FarmGuard AI 🌱

> **Offline-First Crop Disease Detector** — Edge AI that works without internet!

![FarmGuard Banner](https://img.shields.io/badge/FarmGuard-Edge_AI-39FF14?style=for-the-badge&logo=tensorflow&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-4.x-FF6F00?style=for-the-badge&logo=tensorflow)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)

---

## 🎯 The Problem

Farmers in rural areas face a critical challenge:
- **Unreliable internet connectivity** makes cloud-based AI solutions useless
- **Delayed disease detection** leads to crop loss and financial hardship
- **Complex apps** aren't accessible to all farmers

## 💡 The Solution: Edge AI

**FarmGuard** runs a TensorFlow.js neural network **directly in your browser**:
- ✅ **100% Offline** — No internet required after initial load
- ✅ **Real-time Detection** — Results in ~200ms
- ✅ **Privacy First** — Your images never leave your device
- ✅ **Cross-platform** — Works on any device with a camera

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
farmguard-ai/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with metadata
│   │   ├── page.js            # Main dashboard
│   │   └── globals.css        # Cyberpunk theme styles
│   └── components/
│       └── FarmGuardScanner.js # AI Scanner component
├── public/
│   ├── model/                  # TensorFlow.js model files
│   └── manifest.json           # PWA manifest
├── package.json
├── tailwind.config.js
└── next.config.js
```

---

## 🎨 Features

### Dashboard
- **Offline Mode Toggle** — Simulate offline for demo
- **System Status** — Neural engine status, latency, model size
- **Start Diagnosis** — Launch the AI scanner

### AI Scanner
- **Live Camera Feed** — Real-time video processing
- **Disease Detection** — MobileNetV2-powered classification
- **Confidence Scores** — Probability for each disease class
- **Treatment Recommendations** — Actionable advice

### Cyberpunk UI
- Neon green accents on black
- Animated scan lines
- Glowing borders and text
- Responsive design

---

## 🧠 AI Model

The scanner uses **MobileNetV2** architecture optimized for:
- **Input**: 224×224 RGB images
- **Output**: 10 disease classes
- **Size**: ~4.2 MB (optimized for mobile)

### Disease Classes:
1. Healthy
2. Early Blight
3. Late Blight
4. Leaf Mold
5. Septoria Leaf Spot
6. Spider Mites
7. Target Spot
8. Mosaic Virus
9. Yellow Leaf Curl
10. Bacterial Spot

### Adding Your Own Model:
Place your converted TensorFlow.js model in `/public/model/`:
- `model.json`
- `group1-shard*.bin`

---

## 🔧 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TensorFlow.js** | Client-side neural network inference |
| **react-webcam** | Camera access and video capture |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | Modern icon library |

---

## 📱 PWA Installation

FarmGuard is a Progressive Web App! Install it on:
- **Mobile**: Tap "Add to Home Screen" in browser menu
- **Desktop**: Click install icon in address bar

---

## 🏆 Hackathon 2025

This project was built for the **Best Innovation** category.

**Key Innovation Points:**
1. **Edge AI** — No cloud dependency
2. **Offline-First** — Works anywhere
3. **Real-time** — Sub-second inference
4. **Accessible** — Simple, intuitive UI

---

## 📜 License

MIT License — Built with 💚 for farmers everywhere.

---

## 🙏 Acknowledgments

- TensorFlow.js Team
- PlantVillage Dataset
- Next.js Community
