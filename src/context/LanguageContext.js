'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, availableLanguages } from '@/lib/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved language preference on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('farmguard-language');
      if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
      } else {
        // Try to detect browser language
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) {
          setLanguage(browserLang);
        }
      }
    } catch (e) {
      // localStorage not available
    }
    setIsLoaded(true);
  }, []);

  // Save language preference
  const changeLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      try {
        localStorage.setItem('farmguard-language', lang);
      } catch (e) {
        // localStorage not available
      }
    }
  }, []);

  // Get translation function
  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // Fallback to English
        value = translations['en'];
        for (const ek of keys) {
          if (value && typeof value === 'object') {
            value = value[ek];
          } else {
            return key;
          }
        }
        return value || key;
      }
    }
    
    return value || key;
  }, [language]);

  // Voice synthesis for multilingual alerts
  const speak = useCallback((text, options = {}) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Map language codes to speech synthesis language codes
    const langMap = {
      en: 'en-US',
      hi: 'hi-IN',
      pa: 'pa-IN',
      te: 'te-IN',
      ta: 'ta-IN',
      kn: 'kn-IN'
    };
    
    utterance.lang = langMap[language] || 'en-US';
    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;

    // Get available voices and try to find a matching one
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(voice => 
      voice.lang.startsWith(langMap[language]?.split('-')[0] || 'en')
    );
    
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    window.speechSynthesis.speak(utterance);
  }, [language]);

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, []);

  // Check if speech synthesis is supported
  const isSpeechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const value = {
    language,
    changeLanguage,
    t,
    speak,
    stopSpeaking,
    isSpeechSupported,
    availableLanguages,
    isLoaded
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
