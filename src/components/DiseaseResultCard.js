'use client';

import { AlertTriangle, CheckCircle, Activity, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function DiseaseResultCard({ disease, confidence }) {
  const { t } = useLanguage();

  if (!disease) return null;

  const isHealthy = disease.severityLevel === 'none';
  
  // Severity meter colors
  const getSeverityColor = (severity) => {
    if (severity === 0) return '#22c55e'; // Green
    if (severity <= 3) return '#84cc16'; // Light green
    if (severity <= 5) return '#eab308'; // Yellow
    if (severity <= 7) return '#f97316'; // Orange
    return '#ef4444'; // Red
  };

  const severityColor = getSeverityColor(disease.severity);
  const severityPercent = (disease.severity / 10) * 100;

  return (
    <div className={`
      rounded-xl p-5 border-2 transition-all duration-300
      ${isHealthy 
        ? 'border-neon-green bg-neon-green/10' 
        : disease.severityLevel === 'high' 
          ? 'border-red-500 bg-red-500/10 alert-card' 
          : 'border-yellow-500 bg-yellow-500/10'
      }
    `}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {isHealthy ? (
            <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-neon-green" />
            </div>
          ) : (
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${severityColor}20` }}
            >
              <AlertTriangle className="w-6 h-6" style={{ color: severityColor }} />
            </div>
          )}
          <div>
            <h3 
              className="text-xl font-bold"
              style={{ color: isHealthy ? '#39ff14' : severityColor }}
            >
              {disease.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {isHealthy ? t('noIssuesDetected') || 'No issues detected' : t('diseaseDetected') || 'Disease detected'}
            </p>
          </div>
        </div>
        
        {/* Confidence Badge */}
        <div 
          className="px-3 py-1 rounded-full text-sm font-bold"
          style={{ 
            backgroundColor: `${isHealthy ? '#39ff14' : severityColor}20`,
            color: isHealthy ? '#39ff14' : severityColor,
          }}
        >
          {Math.round(confidence)}% {t('confidence') || 'confidence'}
        </div>
      </div>

      {/* Severity Meter */}
      {!isHealthy && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4" />
              {t('severity') || 'Severity Level'}
            </span>
            <span 
              className="font-bold text-lg"
              style={{ color: severityColor }}
            >
              {disease.severity}/10
            </span>
          </div>
          
          {/* Meter Bar */}
          <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
            {/* Background segments */}
            <div className="absolute inset-0 flex">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 border-r border-gray-700 last:border-r-0"
                />
              ))}
            </div>
            
            {/* Fill */}
            <div 
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
              style={{ 
                width: `${severityPercent}%`,
                background: `linear-gradient(90deg, #22c55e 0%, #eab308 50%, #ef4444 100%)`,
              }}
            />
            
            {/* Indicator */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-500"
              style={{ 
                left: `calc(${severityPercent}% - 8px)`,
                backgroundColor: severityColor,
              }}
            />
          </div>
          
          {/* Labels */}
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>{t('mild') || 'Mild'}</span>
            <span>{t('moderate') || 'Moderate'}</span>
            <span>{t('severe') || 'Severe'}</span>
          </div>
        </div>
      )}

      {/* Symptoms */}
      {disease.symptoms && disease.symptoms.length > 0 && (
        <div className="mt-4">
          <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
            {t('symptoms') || 'Symptoms'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {disease.symptoms.map((symptom, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-full text-sm border"
                style={{ 
                  borderColor: isHealthy ? '#39ff14' : severityColor,
                  color: isHealthy ? '#39ff14' : severityColor,
                  backgroundColor: `${isHealthy ? '#39ff14' : severityColor}10`,
                }}
              >
                {symptom}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Progression Warning */}
      {disease.progression && (
        <div 
          className="mt-4 p-3 rounded-lg border flex items-start gap-3"
          style={{ 
            borderColor: severityColor,
            backgroundColor: `${severityColor}10`,
          }}
        >
          <TrendingUp className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: severityColor }} />
          <div>
            <p className="text-sm font-semibold" style={{ color: severityColor }}>
              {t('spreadWarning') || 'Spread Warning'}
            </p>
            <p className="text-gray-300 text-sm">{disease.progression.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
