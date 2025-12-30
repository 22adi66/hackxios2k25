'use client';

import { useState } from 'react';
import { Cpu, Zap, Leaf, ChevronRight, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ModelSelector({ selectedModel, onModelSelect, onContinue }) {
  const { t } = useLanguage();
  const [hoveredModel, setHoveredModel] = useState(null);

  const models = [
    {
      id: 'lite',
      name: 'Lite Model',
      emoji: '⚡',
      icon: Zap,
      description: 'Fast detection with your trained MobileNet model',
      features: [
        'Quick scanning (< 200ms)',
        '10 tomato diseases',
        'Basic treatment info',
        'Lightweight (4.2 MB)',
      ],
      color: 'neon-green',
      recommended: false,
    },
    {
      id: 'smart',
      name: 'Smart Model',
      emoji: '🎯',
      icon: Leaf,
      description: 'Comprehensive multi-crop disease detection with detailed analysis',
      features: [
        '8 crops supported',
        '38+ diseases covered',
        'Severity scoring (1-10)',
        'Detailed treatments + dosage',
        'Disease progression prediction',
        'Nearby store locator',
      ],
      color: 'yellow-400',
      recommended: true,
    },
  ];

  return (
    <div className="cyber-card cyber-card-glow rounded-xl p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-neon-green/20 border border-neon-green flex items-center justify-center">
          <Cpu className="w-5 h-5 text-neon-green" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {t('selectAIModel') || 'SELECT AI MODEL'}
          </h2>
          <p className="text-gray-400 text-sm">{t('chooseDetectionMode') || 'Choose your detection mode'}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {models.map((model) => {
          const Icon = model.icon;
          const isSelected = selectedModel === model.id;
          const isHovered = hoveredModel === model.id;
          
          return (
            <button
              key={model.id}
              onClick={() => onModelSelect(model.id)}
              onMouseEnter={() => setHoveredModel(model.id)}
              onMouseLeave={() => setHoveredModel(null)}
              className={`
                relative text-left p-5 rounded-xl border-2 transition-all duration-300
                ${isSelected 
                  ? `border-${model.color} bg-${model.color}/10 shadow-lg shadow-${model.color}/20` 
                  : 'border-gray-700 bg-cyber-gray hover:border-gray-500'
                }
              `}
              style={{
                borderColor: isSelected ? (model.color === 'neon-green' ? '#39ff14' : '#facc15') : undefined,
                backgroundColor: isSelected ? (model.color === 'neon-green' ? 'rgba(57, 255, 20, 0.1)' : 'rgba(250, 204, 21, 0.1)') : undefined,
              }}
            >
              {/* Recommended Badge */}
              {model.recommended && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                  ⭐ RECOMMENDED
                </div>
              )}

              {/* Selection Check */}
              {isSelected && (
                <div 
                  className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center`}
                  style={{ backgroundColor: model.color === 'neon-green' ? '#39ff14' : '#facc15' }}
                >
                  <Check className="w-4 h-4 text-black" />
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300`}
                  style={{ 
                    backgroundColor: isSelected || isHovered ? (model.color === 'neon-green' ? 'rgba(57, 255, 20, 0.2)' : 'rgba(250, 204, 21, 0.2)') : 'rgba(31, 41, 55, 1)',
                    borderColor: model.color === 'neon-green' ? '#39ff14' : '#facc15',
                  }}
                >
                  <span className="text-2xl">{model.emoji}</span>
                </div>
                <div>
                  <h3 
                    className="font-bold text-lg"
                    style={{ color: isSelected ? (model.color === 'neon-green' ? '#39ff14' : '#facc15') : 'white' }}
                  >
                    {model.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{model.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: model.color === 'neon-green' ? '#39ff14' : '#facc15' }}
                    />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      {/* Continue Button */}
      <button
        onClick={onContinue}
        disabled={!selectedModel}
        className={`
          w-full py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all duration-300
          ${selectedModel 
            ? 'btn-neon' 
            : 'bg-gray-800 border-2 border-gray-700 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        <span>{t('continue') || 'CONTINUE'}</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
