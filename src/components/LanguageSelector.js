'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Volume2, VolumeX, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSelector() {
  const { language, changeLanguage, t, speak, stopSpeaking, isSpeechSupported, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get current language info
  const currentLang = availableLanguages.find(l => l.code === language) || availableLanguages[0];

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
    
    // Announce language change with voice
    if (voiceEnabled && isSpeechSupported) {
      const langName = availableLanguages.find(l => l.code === langCode)?.nativeName;
      setTimeout(() => {
        speak(getWelcomeMessage(langCode));
      }, 100);
    }
  };

  const getWelcomeMessage = (langCode) => {
    const messages = {
      en: 'Language changed to English. Welcome to FarmGuard AI!',
      hi: 'भाषा हिंदी में बदल गई। फार्मगार्ड एआई में आपका स्वागत है!',
      te: 'భాష తెలుగులోకి మారింది. ఫార్మ్‌గార్డ్ AIకి స్వాగతం!',
      ta: 'மொழி தமிழுக்கு மாற்றப்பட்டது. பார்ம்கார்டு AIக்கு வரவேற்கிறோம்!'
    };
    return messages[langCode] || messages.en;
  };

  const toggleVoice = (e) => {
    e.stopPropagation();
    if (voiceEnabled) {
      stopSpeaking();
    }
    setVoiceEnabled(!voiceEnabled);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Button */}
      <div className="flex items-center gap-2">
        {/* Voice Toggle */}
        {isSpeechSupported && (
          <button
            onClick={toggleVoice}
            className={`p-2 rounded-lg border transition-all duration-300 ${
              voiceEnabled
                ? 'border-neon-green/50 bg-neon-green/10 text-neon-green'
                : 'border-gray-700 bg-gray-900/50 text-gray-500'
            } hover:scale-105`}
            title={voiceEnabled ? 'Disable voice alerts' : 'Enable voice alerts'}
          >
            {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        )}

        {/* Language Selector Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-neon-green/30 bg-cyber-black/80 hover:border-neon-green/60 transition-all duration-300 group"
        >
          <Globe className="w-4 h-4 text-neon-green" />
          <span className="text-sm font-medium text-white">
            {currentLang.flag} {currentLang.nativeName}
          </span>
          <ChevronDown 
            className={`w-4 h-4 text-neon-green transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-neon-green/30 bg-cyber-black/95 backdrop-blur-xl shadow-[0_0_30px_rgba(57,255,20,0.15)] z-50 overflow-hidden animate-slideDown">
          {/* Header */}
          <div className="px-4 py-3 border-b border-neon-green/20">
            <p className="text-xs text-gray-400 uppercase tracking-wider">{t('selectLanguage')}</p>
          </div>

          {/* Language Options */}
          <div className="py-2">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 flex items-center justify-between hover:bg-neon-green/10 transition-all duration-200 ${
                  language === lang.code ? 'bg-neon-green/5' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{lang.flag}</span>
                  <div className="text-left">
                    <p className={`text-sm font-medium ${language === lang.code ? 'text-neon-green' : 'text-white'}`}>
                      {lang.nativeName}
                    </p>
                    <p className="text-xs text-gray-500">{lang.name}</p>
                  </div>
                </div>
                {language === lang.code && (
                  <Check className="w-4 h-4 text-neon-green" />
                )}
              </button>
            ))}
          </div>

          {/* Voice Status */}
          {isSpeechSupported && (
            <div className="px-4 py-3 border-t border-neon-green/20 bg-neon-green/5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Voice Alerts</span>
                <span className={voiceEnabled ? 'text-neon-green' : 'text-gray-500'}>
                  {voiceEnabled ? '● Enabled' : '○ Disabled'}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
