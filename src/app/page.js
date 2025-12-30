'use client';

import { useState, useEffect } from 'react';
import { 
  Leaf, 
  Wifi, 
  WifiOff, 
  Zap, 
  Shield, 
  Activity,
  Cpu,
  Camera,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  ChevronRight,
  Volume2,
} from 'lucide-react';
import FarmGuardScanner from '@/components/FarmGuardScanner';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const [isOffline, setIsOffline] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [modelStatus, setModelStatus] = useState('ready');
  const [currentTime, setCurrentTime] = useState('');
  const { t, isLoaded, language, speak, isSpeechSupported } = useLanguage();

  // Read page description aloud
  const readPageDescription = () => {
    const message = `${t('cropDiseaseDetection')}. ${t('scanDescription')}`;
    speak(message);
  };

  // Update time display
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStartDiagnosis = () => {
    setShowScanner(true);
  };

  const handleCloseScanner = () => {
    setShowScanner(false);
  };

  const stats = [
    { 
      icon: Cpu, 
      label: t('neuralEngine'), 
      value: t(modelStatus),
      color: 'text-neon-green' 
    },
    { 
      icon: Clock, 
      label: t('inferenceLatency'), 
      value: '~200ms',
      color: 'text-neon-green' 
    },
    { 
      icon: Database, 
      label: t('modelSize'), 
      value: '4.2 MB',
      color: 'text-neon-green' 
    },
    { 
      icon: Shield, 
      label: t('privacy'), 
      value: t('local'),
      color: 'text-neon-green' 
    },
  ];

  // Show loading state until language is loaded
  if (!isLoaded) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-neon-green/30 border-t-neon-green rounded-full animate-spin mx-auto mb-4" />
          <p className="text-neon-green">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* HEADER */}
      <header className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-green/20 to-transparent border-2 border-neon-green flex items-center justify-center box-glow">
                <Leaf className="w-8 h-8 text-neon-green" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-green rounded-full animate-pulse" />
            </div>
            <div>
              <h1 
                className="text-3xl md:text-4xl font-bold tracking-wider text-glow"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {t('appName')}
              </h1>
              <p className="text-neon-green/70 text-sm tracking-widest uppercase">
                {t('tagline')}
              </p>
            </div>
          </div>

          {/* Language Selector & System Time */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <div className="cyber-card cyber-card-glow rounded-lg px-4 py-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider">{t('systemTime')}</p>
              <p 
                className="text-xl text-neon-green font-mono"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {currentTime}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* OFFLINE MODE TOGGLE */}
      <section className="mb-8">
        <div className="cyber-card cyber-card-glow rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className={`status-dot ${isOffline ? 'offline' : 'online'}`} />
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  {isOffline ? (
                    <>
                      <WifiOff className="w-5 h-5 text-alert-red" />
                      <span className="text-alert-red">{t('offlineActive')}</span>
                    </>
                  ) : (
                    <>
                      <Wifi className="w-5 h-5 text-neon-green" />
                      <span className="text-neon-green">{t('onlineMode')}</span>
                    </>
                  )}
                </h3>
                <p className="text-gray-400 text-sm">
                  {isOffline 
                    ? t('offlineDescription')
                    : t('toggleOfflineDesc')}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOffline(!isOffline)}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-lg font-semibold
                transition-all duration-300 border-2
                ${isOffline 
                  ? 'bg-alert-red/20 border-alert-red text-alert-red hover:bg-alert-red/30' 
                  : 'bg-neon-green/20 border-neon-green text-neon-green hover:bg-neon-green/30'
                }
              `}
            >
              <span className="text-xl">{isOffline ? '📴' : '📶'}</span>
              <span>{t('simulateOffline')}</span>
            </button>
          </div>

          {/* Offline Banner */}
          {isOffline && (
            <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-alert-red/10 to-transparent border border-alert-red/30 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-alert-red flex-shrink-0" />
              <div>
                <p className="text-alert-red font-semibold">{t('offlineActive')}</p>
                <p className="text-gray-400 text-sm">
                  {t('offlineDescription')}
                </p>
              </div>
              <CheckCircle className="w-6 h-6 text-neon-green ml-auto flex-shrink-0" />
            </div>
          )}
        </div>
      </section>

      {/* MAIN ACTION */}
      <section className="mb-8">
        <div className="cyber-card cyber-card-glow rounded-xl p-8 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-neon-green" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-neon-green" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-neon-green" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/30 mb-6">
              <Activity className="w-4 h-4 text-neon-green animate-pulse" />
              <span className="text-neon-green text-sm font-medium">{t('aiEngineStandby')}</span>
            </div>

            <h2 
              className="text-2xl md:text-3xl font-bold mb-4 text-glow-sm"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              {t('cropDiseaseDetection')}
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              {t('scanDescription')}
            </p>

            <button
              onClick={handleStartDiagnosis}
              className="btn-neon text-lg md:text-xl px-8 md:px-12 py-4 rounded-lg inline-flex items-center gap-4"
            >
              <Camera className="w-6 h-6" />
              <span>{t('startDiagnosis')}</span>
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Voice Button for Accessibility - Below Start Button */}
            {isSpeechSupported && (
              <button
                onClick={readPageDescription}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green hover:bg-neon-green/20 transition-all duration-300"
                title={language === 'en' ? 'Listen to instructions' : language === 'hi' ? 'निर्देश सुनें' : language === 'te' ? 'సూచనలు వినండి' : language === 'ta' ? 'வழிமுறைகளைக் கேளுங்கள்' : language === 'pa' ? 'ਹਦਾਇਤਾਂ ਸੁਣੋ' : language === 'kn' ? 'ಸೂಚನೆಗಳನ್ನು ಕೇಳಿ' : 'Listen'}
              >
                <Volume2 className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {language === 'en' ? '🔊 Listen' : language === 'hi' ? '🔊 सुनें' : language === 'te' ? '🔊 వినండి' : language === 'ta' ? '🔊 கேளுங்கள்' : language === 'pa' ? '🔊 ਸੁਣੋ' : language === 'kn' ? '🔊 ಕೇಳಿ' : '🔊 Listen'}
                </span>
              </button>
            )}

            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500 flex-wrap">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-neon-green" />
                {t('noUploadRequired')}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-neon-green" />
                {t('instantResults')}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-neon-green" />
                {t('worksOffline')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mb-8">
        <h2 
          className="text-xl font-bold mb-4 tracking-wider text-gray-300"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          {t('whyFarmguard')}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <FeatureCard 
            icon={WifiOff}
            title={t('offlineFeature')}
            description={t('offlineFeatureDesc')}
          />
          <FeatureCard 
            icon={Zap}
            title={t('instantDetection')}
            description={t('instantDetectionDesc')}
          />
          <FeatureCard 
            icon={Shield}
            title={t('privacyFirst')}
            description={t('privacyFirstDesc')}
          />
        </div>
      </section>



      {/* SCANNER MODAL */}
      {showScanner && (
        <FarmGuardScanner 
          onClose={handleCloseScanner}
          isOfflineMode={isOffline}
        />
      )}
    </main>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="cyber-card cyber-card-glow rounded-xl p-6 hover:border-neon-green/50 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-lg bg-neon-green/10 border border-neon-green/30 flex items-center justify-center mb-4 group-hover:box-glow transition-all duration-300">
        <Icon className="w-6 h-6 text-neon-green" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
