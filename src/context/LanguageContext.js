'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { translations, availableLanguages } from '@/lib/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const [availableVoices, setAvailableVoices] = useState([]);
  const voicesLoadedRef = useRef(false);

  // Language to speech synthesis mapping
  const langMap = {
    en: ['en-US', 'en-GB', 'en-IN', 'en'],
    hi: ['hi-IN', 'hi'],
    pa: ['pa-IN', 'pa', 'hi-IN'], // Fallback to Hindi if Punjabi not available
    te: ['te-IN', 'te'],
    ta: ['ta-IN', 'ta'],
    kn: ['kn-IN', 'kn']
  };

  // Load voices
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkSpeechSupport = () => {
      setIsSpeechSupported('speechSynthesis' in window);
    };
    
    checkSpeechSupport();
    
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          setAvailableVoices(voices);
          voicesLoadedRef.current = true;
        }
      };

      // Load voices immediately if available
      loadVoices();
      
      // Also listen for voiceschanged event (Chrome loads voices async)
      window.speechSynthesis.onvoiceschanged = loadVoices;
      
      return () => {
        window.speechSynthesis.onvoiceschanged = null;
      };
    }
  }, []);

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

  // Find best matching voice for a language
  const findVoice = useCallback((langCode) => {
    const voices = availableVoices.length > 0 ? availableVoices : window.speechSynthesis?.getVoices() || [];
    const langOptions = langMap[langCode] || ['en-US'];
    
    // Try each language option in order
    for (const lang of langOptions) {
      // Exact match
      const exactMatch = voices.find(v => v.lang === lang);
      if (exactMatch) return exactMatch;
      
      // Partial match (e.g., 'hi' matches 'hi-IN')
      const partialMatch = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
      if (partialMatch) return partialMatch;
    }
    
    // Fallback to first English voice or any available voice
    return voices.find(v => v.lang.startsWith('en')) || voices[0] || null;
  }, [availableVoices]);

  // Voice synthesis for multilingual alerts
  const speak = useCallback((text, options = {}) => {
    if (typeof window === 'undefined' || !window.speechSynthesis || !text) {
      console.log('Speech synthesis not available');
      return false;
    }

    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set language
      const langOptions = langMap[language] || ['en-US'];
      utterance.lang = langOptions[0];
      
      // Find and set the best voice
      const voice = findVoice(language);
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      }
      
      // Set speech parameters
      utterance.rate = options.rate || 0.85;
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;

      // Error handling
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
      };

      // Speak the text
      window.speechSynthesis.speak(utterance);
      return true;
    } catch (error) {
      console.error('Speech error:', error);
      return false;
    }
  }, [language, findVoice]);

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, []);

  // Get list of supported languages for speech
  const getSupportedSpeechLanguages = useCallback(() => {
    const voices = availableVoices.length > 0 ? availableVoices : [];
    const supported = {};
    
    Object.keys(langMap).forEach(lang => {
      const voice = findVoice(lang);
      supported[lang] = {
        available: !!voice,
        voiceName: voice?.name || null,
        voiceLang: voice?.lang || null
      };
    });
    
    return supported;
  }, [availableVoices, findVoice]);

  const value = {
    language,
    changeLanguage,
    t,
    speak,
    stopSpeaking,
    isSpeechSupported,
    availableLanguages,
    availableVoices,
    getSupportedSpeechLanguages,
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
