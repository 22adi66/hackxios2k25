'use client';

import { useState } from 'react';
import { ChevronDown, Check, Leaf } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CROPS } from '@/lib/cropDiseaseDatabase';

export default function CropSelector({ selectedCrop, onCropSelect }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const selectedCropData = CROPS.find(c => c.id === selectedCrop);

  return (
    <div className="relative mb-4">
      <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
        <Leaf className="w-4 h-4 text-neon-green" />
        {t('selectCrop') || 'Select Your Crop'}
      </label>
      
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between
          ${isOpen 
            ? 'border-neon-green bg-neon-green/10' 
            : 'border-gray-700 bg-cyber-gray hover:border-gray-500'
          }
        `}
      >
        <div className="flex items-center gap-3">
          {selectedCropData ? (
            <>
              <span className="text-2xl">{selectedCropData.emoji}</span>
              <span className="text-white font-semibold">{selectedCropData.name}</span>
            </>
          ) : (
            <>
              <span className="text-2xl">🌱</span>
              <span className="text-gray-400">{t('chooseCrop') || 'Choose a crop...'}</span>
            </>
          )}
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 py-2 rounded-xl border-2 border-neon-green/50 bg-cyber-black shadow-xl shadow-neon-green/10 max-h-80 overflow-y-auto">
          {CROPS.map((crop) => {
            const isSelected = selectedCrop === crop.id;
            return (
              <button
                key={crop.id}
                onClick={() => {
                  onCropSelect(crop.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full px-4 py-3 flex items-center gap-3 transition-all duration-200
                  ${isSelected 
                    ? 'bg-neon-green/20 text-neon-green' 
                    : 'hover:bg-gray-800 text-white'
                  }
                `}
              >
                <span className="text-2xl">{crop.emoji}</span>
                <span className="font-medium flex-1 text-left">{crop.name}</span>
                {isSelected && <Check className="w-5 h-5 text-neon-green" />}
              </button>
            );
          })}
        </div>
      )}

      {/* Crop Grid (Alternative View) */}
      <div className="mt-4 grid grid-cols-4 md:grid-cols-8 gap-2">
        {CROPS.map((crop) => {
          const isSelected = selectedCrop === crop.id;
          return (
            <button
              key={crop.id}
              onClick={() => onCropSelect(crop.id)}
              className={`
                p-3 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-1
                ${isSelected 
                  ? 'border-neon-green bg-neon-green/20 scale-105' 
                  : 'border-gray-700 bg-cyber-gray hover:border-gray-500 hover:scale-105'
                }
              `}
              title={crop.name}
            >
              <span className="text-2xl">{crop.emoji}</span>
              <span className={`text-xs ${isSelected ? 'text-neon-green' : 'text-gray-400'}`}>
                {crop.name.split('/')[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
