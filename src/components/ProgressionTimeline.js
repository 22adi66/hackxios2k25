'use client';

import { Clock, TrendingUp, AlertTriangle, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ProgressionTimeline({ disease }) {
  const { t } = useLanguage();

  if (!disease || !disease.progression) return null;

  const days = disease.progression.days;
  const isUrgent = days <= 3;
  const isModerate = days > 3 && days <= 7;

  const getTimelineColor = () => {
    if (isUrgent) return '#ef4444'; // Red
    if (isModerate) return '#f97316'; // Orange
    return '#eab308'; // Yellow
  };

  const color = getTimelineColor();

  // Generate timeline stages
  const stages = [
    { day: 0, label: t('today') || 'Today', status: 'current' },
    { day: Math.ceil(days / 3), label: `${t('day') || 'Day'} ${Math.ceil(days / 3)}`, status: 'warning' },
    { day: Math.ceil(days / 1.5), label: `${t('day') || 'Day'} ${Math.ceil(days / 1.5)}`, status: 'danger' },
    { day: days, label: `${t('day') || 'Day'} ${days}`, status: 'critical' },
  ];

  return (
    <div className="cyber-card cyber-card-glow rounded-xl p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}20`, borderColor: color, borderWidth: 1 }}
        >
          <TrendingUp className="w-5 h-5" style={{ color }} />
        </div>
        <div>
          <h3 className="font-bold text-white">{t('diseaseProgression') || 'Disease Progression'}</h3>
          <p className="text-gray-400 text-sm">{t('predictedTimeline') || 'Predicted timeline if untreated'}</p>
        </div>
      </div>

      {/* Urgency Alert */}
      {isUrgent && (
        <div 
          className="mb-4 p-3 rounded-lg border flex items-center gap-3 animate-pulse"
          style={{ backgroundColor: `${color}20`, borderColor: color }}
        >
          <AlertTriangle className="w-6 h-6" style={{ color }} />
          <div>
            <p className="font-bold" style={{ color }}>
              ⚠️ {t('urgentAction') || 'URGENT ACTION REQUIRED'}
            </p>
            <p className="text-sm text-gray-300">
              {t('actWithin') || 'Act within'} {days} {t('days') || 'days'} {t('toPreventSpread') || 'to prevent spread'}
            </p>
          </div>
        </div>
      )}

      {/* Timeline Visual */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-700" />

        {/* Timeline Stages */}
        <div className="space-y-6">
          {stages.map((stage, idx) => {
            const stageColor = 
              stage.status === 'current' ? '#39ff14' :
              stage.status === 'warning' ? '#eab308' :
              stage.status === 'danger' ? '#f97316' : '#ef4444';

            return (
              <div key={idx} className="relative flex items-start gap-4 pl-3">
                {/* Dot */}
                <div 
                  className={`
                    relative z-10 w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${stage.status === 'current' ? 'animate-pulse' : ''}
                  `}
                  style={{ 
                    borderColor: stageColor,
                    backgroundColor: stage.status === 'current' ? stageColor : 'transparent',
                  }}
                >
                  {stage.status === 'current' && (
                    <div className="w-2 h-2 rounded-full bg-black" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span 
                      className="font-semibold"
                      style={{ color: stageColor }}
                    >
                      {stage.label}
                    </span>
                    {stage.status === 'current' && (
                      <span className="px-2 py-0.5 rounded text-xs bg-neon-green/20 text-neon-green">
                        {t('currentState') || 'Current'}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    {stage.status === 'current' && (t('diseaseDetected') || 'Disease detected - Treatment possible')}
                    {stage.status === 'warning' && (t('earlySpread') || 'Early spread to adjacent leaves')}
                    {stage.status === 'danger' && (t('significantDamage') || 'Significant damage, spread accelerating')}
                    {stage.status === 'critical' && (t('criticalDamage') || 'Critical damage, may affect yield')}
                  </p>
                </div>

                {/* Progress Arrow */}
                {idx < stages.length - 1 && (
                  <div className="absolute left-[1.1rem] top-6 bottom-0">
                    <div 
                      className="w-0.5 h-full"
                      style={{ 
                        background: `linear-gradient(to bottom, ${stageColor}, ${
                          stages[idx + 1].status === 'warning' ? '#eab308' :
                          stages[idx + 1].status === 'danger' ? '#f97316' : '#ef4444'
                        })` 
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-300 text-sm">{disease.progression.description}</p>
        </div>
      </div>

      {/* Action Recommendation */}
      <div className="mt-4 flex items-center gap-3 p-3 rounded-lg bg-neon-green/10 border border-neon-green/30">
        <Shield className="w-5 h-5 text-neon-green" />
        <p className="text-neon-green text-sm font-medium">
          {t('treatNow') || 'Treat now to prevent spread and protect your yield'}
        </p>
      </div>
    </div>
  );
}
