'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Star, Navigation, ExternalLink, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { DEMO_STORES } from '@/lib/cropDiseaseDatabase';

export default function NearbyStores({ disease }) {
  const { t } = useLanguage();
  const [stores, setStores] = useState(DEMO_STORES);
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  // Get user location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log('Location access denied:', error);
        }
      );
    }
  }, []);

  const handleGetDirections = (store) => {
    // Open Google Maps with directions
    const destination = encodeURIComponent(store.address);
    const url = userLocation 
      ? `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${destination}`
      : `https://www.google.com/maps/search/${destination}`;
    window.open(url, '_blank');
  };

  const handleCall = (phone) => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  if (!disease || disease.severityLevel === 'none') return null;

  return (
    <div className="cyber-card cyber-card-glow rounded-xl p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-neon-green/20 border border-neon-green flex items-center justify-center">
          <MapPin className="w-5 h-5 text-neon-green" />
        </div>
        <div>
          <h3 className="font-bold text-white">{t('nearbyStores') || 'Nearby Agri Stores'}</h3>
          <p className="text-gray-400 text-sm">{t('buyTreatment') || 'Buy treatment products'}</p>
        </div>
      </div>

      {/* Product Needed */}
      {disease.treatment?.dosage && (
        <div className="mb-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-400 text-sm">
            <span className="font-semibold">🔍 {t('lookingFor') || 'Looking for'}: </span>
            {disease.treatment.dosage.split(':')[0]}
          </p>
        </div>
      )}

      {/* Store List */}
      <div className="space-y-3">
        {stores.map((store) => (
          <div 
            key={store.id}
            className={`
              p-4 rounded-lg border transition-all duration-300 hover:border-neon-green/50
              ${store.hasStock ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-900/50 border-gray-800 opacity-60'}
            `}
          >
            {/* Store Header */}
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-semibold text-white flex items-center gap-2">
                  {store.name}
                  {store.hasStock ? (
                    <span className="flex items-center gap-1 text-xs text-neon-green">
                      <CheckCircle className="w-3 h-3" />
                      {t('inStock') || 'In Stock'}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-red-400">
                      <XCircle className="w-3 h-3" />
                      {t('outOfStock') || 'Out of Stock'}
                    </span>
                  )}
                </h4>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {store.address}
                </p>
              </div>
              
              {/* Distance Badge */}
              <div className="flex flex-col items-end">
                <span className="px-2 py-1 rounded bg-neon-green/20 text-neon-green text-sm font-bold">
                  {store.distance} km
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-400 text-sm">{store.rating}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleCall(store.phone)}
                className="flex-1 py-2 px-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t('call') || 'Call'}
              </button>
              <button
                onClick={() => handleGetDirections(store)}
                className="flex-1 py-2 px-3 rounded-lg bg-neon-green/20 hover:bg-neon-green/30 text-neon-green text-sm flex items-center justify-center gap-2 transition-colors border border-neon-green/30"
              >
                <Navigation className="w-4 h-4" />
                {t('directions') || 'Directions'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Google Maps Link */}
      <button
        onClick={() => {
          const query = encodeURIComponent('agricultural store near me');
          const url = userLocation 
            ? `https://www.google.com/maps/search/${query}/@${userLocation.lat},${userLocation.lng},14z`
            : `https://www.google.com/maps/search/${query}`;
          window.open(url, '_blank');
        }}
        className="mt-4 w-full py-3 rounded-lg border border-gray-600 hover:border-neon-green text-gray-300 hover:text-neon-green text-sm flex items-center justify-center gap-2 transition-all duration-300"
      >
        <ExternalLink className="w-4 h-4" />
        {t('viewAllOnMaps') || 'View All Stores on Google Maps'}
      </button>

      {/* Location Permission Note */}
      {!userLocation && (
        <p className="mt-3 text-center text-gray-500 text-xs">
          📍 {t('enableLocation') || 'Enable location for accurate distances'}
        </p>
      )}
    </div>
  );
}
