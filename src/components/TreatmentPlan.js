'use client';

import { useState } from 'react';
import { Pill, Leaf, FlaskConical, Calculator, AlertCircle, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TreatmentPlan({ disease }) {
  const { t } = useLanguage();
  const [treatmentType, setTreatmentType] = useState('chemical'); // 'organic' or 'chemical'
  const [fieldSize, setFieldSize] = useState(1); // in acres

  if (!disease || !disease.treatment) return null;

  const isHealthy = disease.severityLevel === 'none';
  
  if (isHealthy) {
    return (
      <div className="cyber-card cyber-card-glow rounded-xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-neon-green/20 border border-neon-green flex items-center justify-center">
            <Check className="w-5 h-5 text-neon-green" />
          </div>
          <div>
            <h3 className="font-bold text-white">{t('noTreatmentNeeded') || 'No Treatment Needed'}</h3>
            <p className="text-gray-400 text-sm">{t('cropIsHealthy') || 'Your crop is healthy!'}</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm">{disease.treatment.organic}</p>
        
        {/* Prevention Tips */}
        {disease.preventionTips && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
              {t('preventionTips') || 'Prevention Tips'}
            </h4>
            <ul className="space-y-2">
              {disease.preventionTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-2" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="cyber-card cyber-card-glow rounded-xl p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-neon-green/20 border border-neon-green flex items-center justify-center">
          <Pill className="w-5 h-5 text-neon-green" />
        </div>
        <div>
          <h3 className="font-bold text-white">{t('treatmentPlan') || 'Treatment Plan'}</h3>
          <p className="text-gray-400 text-sm">{t('recommendedActions') || 'Recommended actions'}</p>
        </div>
      </div>

      {/* Treatment Type Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setTreatmentType('organic')}
          className={`
            flex-1 py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300
            ${treatmentType === 'organic' 
              ? 'bg-green-500/20 border-2 border-green-500 text-green-400' 
              : 'bg-gray-800 border-2 border-gray-700 text-gray-400 hover:border-gray-500'
            }
          `}
        >
          <Leaf className="w-4 h-4" />
          {t('organic') || 'Organic'}
        </button>
        <button
          onClick={() => setTreatmentType('chemical')}
          className={`
            flex-1 py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300
            ${treatmentType === 'chemical' 
              ? 'bg-blue-500/20 border-2 border-blue-500 text-blue-400' 
              : 'bg-gray-800 border-2 border-gray-700 text-gray-400 hover:border-gray-500'
            }
          `}
        >
          <FlaskConical className="w-4 h-4" />
          {t('chemical') || 'Chemical'}
        </button>
      </div>

      {/* Treatment Info */}
      <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 mb-4">
        <p className="text-gray-200 text-sm leading-relaxed">
          {treatmentType === 'organic' ? disease.treatment.organic : disease.treatment.chemical}
        </p>
      </div>

      {/* Dosage Calculator */}
      {disease.treatment.dosage && (
        <div className="border-t border-gray-700 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-4 h-4 text-neon-green" />
            <h4 className="text-white font-semibold">{t('dosageCalculator') || 'Dosage Calculator'}</h4>
          </div>

          {/* Field Size Input */}
          <div className="flex items-center gap-4 mb-4">
            <label className="text-gray-400 text-sm">{t('fieldSize') || 'Field Size'}:</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFieldSize(Math.max(0.5, fieldSize - 0.5))}
                className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-600 text-white hover:border-neon-green transition-colors"
              >
                -
              </button>
              <input
                type="number"
                value={fieldSize}
                onChange={(e) => setFieldSize(Math.max(0.1, parseFloat(e.target.value) || 1))}
                className="w-20 text-center py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-neon-green focus:outline-none"
                step="0.5"
                min="0.1"
              />
              <button
                onClick={() => setFieldSize(fieldSize + 0.5)}
                className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-600 text-white hover:border-neon-green transition-colors"
              >
                +
              </button>
              <span className="text-gray-400">{t('acres') || 'acres'}</span>
            </div>
          </div>

          {/* Calculated Dosage */}
          <div className="p-4 rounded-lg bg-neon-green/10 border border-neon-green/30">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">{t('dosagePerLiter') || 'Dosage (per liter)'}</p>
                <p className="text-neon-green font-bold">{disease.treatment.dosage}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">{t('forYourField') || 'For your field'}</p>
                <p className="text-neon-green font-bold">
                  ~{Math.round(fieldSize * 200)} L {t('sprayMix') || 'spray mix'}
                </p>
              </div>
            </div>
          </div>

          {/* Frequency */}
          {disease.treatment.frequency && (
            <div className="mt-4 flex items-start gap-2 text-sm">
              <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300">
                <span className="text-yellow-500 font-medium">{t('frequency') || 'Frequency'}: </span>
                {disease.treatment.frequency}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Prevention Tips */}
      {disease.preventionTips && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
            {t('preventionTips') || 'Prevention Tips'}
          </h4>
          <ul className="space-y-2">
            {disease.preventionTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-2" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
