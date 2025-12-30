# FarmGuard AI - Model Folder

## 📁 This folder should contain your trained TensorFlow.js model files:

### Required Files:
1. `model.json` - The model architecture and weights manifest
2. `group1-shard1of1.bin` (or multiple shard files) - The model weights

---

## 🚀 Quick Start Options:

### Option 1: Use a Pre-trained Plant Disease Model
Download a plant disease detection model from Kaggle or TensorFlow Hub and convert it:

```bash
# Install tensorflowjs converter
pip install tensorflowjs

# Convert a Keras model to TensorFlow.js format
tensorflowjs_converter --input_format=keras \
    path/to/your/model.h5 \
    public/model/
```

### Option 2: Use MobileNetV2 for Demo
For hackathon demo purposes, you can use a pre-trained MobileNetV2:

```javascript
// The scanner component has a built-in demo mode that creates
// a simple model when no custom model is found.
```

### Option 3: Train Your Own Model
1. Collect crop disease images (healthy + various diseases)
2. Train using transfer learning with MobileNetV2 base
3. Export to TensorFlow.js format

---

## 📊 Recommended Model Architecture:

```
Base: MobileNetV2 (pre-trained on ImageNet)
Input: 224 x 224 x 3 (RGB images)
Output: 10 classes (Healthy + 9 diseases)
```

## 🔗 Useful Resources:
- PlantVillage Dataset: https://www.kaggle.com/datasets/emmarex/plantdisease
- TensorFlow.js Converter: https://www.tensorflow.org/js/guide/conversion
- MobileNetV2: https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification
