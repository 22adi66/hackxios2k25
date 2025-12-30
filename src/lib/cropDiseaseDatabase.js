// Comprehensive Crop Disease Database for FarmGuard AI
// Covers 8 crops with 38+ diseases, treatments, and severity data

export const CROPS = [
  { id: 'tomato', name: 'Tomato', emoji: '🍅', icon: 'tomato' },
  { id: 'potato', name: 'Potato', emoji: '🥔', icon: 'potato' },
  { id: 'corn', name: 'Corn/Maize', emoji: '🌽', icon: 'corn' },
  { id: 'apple', name: 'Apple', emoji: '🍎', icon: 'apple' },
  { id: 'grape', name: 'Grape', emoji: '🍇', icon: 'grape' },
  { id: 'rice', name: 'Rice', emoji: '🌾', icon: 'rice' },
  { id: 'wheat', name: 'Wheat', emoji: '🌿', icon: 'wheat' },
  { id: 'cotton', name: 'Cotton', emoji: '🌿', icon: 'cotton' },
];

// Visual feature patterns for disease matching
export const VISUAL_PATTERNS = {
  brownSpots: ['brown', 'dark spots', 'necrotic', 'lesions'],
  yellowEdges: ['yellow', 'chlorosis', 'yellowing', 'pale'],
  whiteMold: ['white', 'powdery', 'fuzzy', 'mildew'],
  blackSpots: ['black', 'dark', 'sooty'],
  wilting: ['wilting', 'droopy', 'curled'],
  holesLeaves: ['holes', 'eaten', 'damaged'],
  rustColor: ['rust', 'orange', 'reddish-brown'],
  waterSoaked: ['water-soaked', 'wet', 'soggy'],
};

// Disease Database by Crop
export const DISEASE_DATABASE = {
  tomato: [
    {
      id: 'tomato_healthy',
      name: 'Healthy',
      severity: 0,
      severityLevel: 'none',
      color: '#22c55e',
      symptoms: ['green leaves', 'no spots', 'normal growth'],
      visualPatterns: [],
      treatment: {
        organic: 'Continue regular care. Ensure proper watering and sunlight.',
        chemical: 'No treatment needed.',
        dosage: null,
        frequency: null,
      },
      progression: null,
      preventionTips: ['Regular inspection', 'Proper spacing', 'Good drainage'],
    },
    {
      id: 'tomato_early_blight',
      name: 'Early Blight',
      severity: 6,
      severityLevel: 'medium',
      color: '#eab308',
      symptoms: ['dark spots with concentric rings', 'yellowing around spots', 'lower leaves affected first'],
      visualPatterns: ['brownSpots', 'yellowEdges'],
      treatment: {
        organic: 'Remove infected leaves. Apply neem oil spray. Use copper-based fungicide.',
        chemical: 'Apply Mancozeb or Chlorothalonil fungicide.',
        dosage: 'Mancozeb: 2.5g per liter of water',
        frequency: 'Every 7-10 days until symptoms subside',
      },
      progression: {
        days: 5,
        description: 'Disease will spread to upper leaves in 3-5 days if untreated',
      },
      preventionTips: ['Crop rotation', 'Avoid overhead watering', 'Mulching'],
    },
    {
      id: 'tomato_late_blight',
      name: 'Late Blight',
      severity: 9,
      severityLevel: 'high',
      color: '#ef4444',
      symptoms: ['large water-soaked lesions', 'white fuzzy growth on underside', 'rapid plant death'],
      visualPatterns: ['brownSpots', 'whiteMold', 'waterSoaked'],
      treatment: {
        organic: 'Remove and destroy infected plants immediately. Apply copper fungicide.',
        chemical: 'Apply Metalaxyl + Mancozeb (Ridomil Gold).',
        dosage: 'Ridomil Gold: 2g per liter of water',
        frequency: 'Every 5-7 days, start preventively in humid conditions',
      },
      progression: {
        days: 3,
        description: 'URGENT: Can destroy entire crop in 3-4 days. Act immediately!',
      },
      preventionTips: ['Avoid wet foliage', 'Good air circulation', 'Resistant varieties'],
    },
    {
      id: 'tomato_leaf_mold',
      name: 'Leaf Mold',
      severity: 5,
      severityLevel: 'medium',
      color: '#f97316',
      symptoms: ['yellow patches on upper leaf', 'olive-green fuzzy mold underneath', 'in greenhouses'],
      visualPatterns: ['yellowEdges', 'whiteMold'],
      treatment: {
        organic: 'Improve ventilation. Remove infected leaves. Apply sulfur spray.',
        chemical: 'Apply Chlorothalonil or Mancozeb.',
        dosage: 'Chlorothalonil: 2g per liter of water',
        frequency: 'Every 7-14 days',
      },
      progression: {
        days: 7,
        description: 'Spreads slowly but reduces yield significantly over 1-2 weeks',
      },
      preventionTips: ['Reduce humidity', 'Space plants properly', 'Avoid evening watering'],
    },
    {
      id: 'tomato_septoria',
      name: 'Septoria Leaf Spot',
      severity: 5,
      severityLevel: 'medium',
      color: '#eab308',
      symptoms: ['small circular spots with dark borders', 'gray centers with tiny black dots', 'starts on lower leaves'],
      visualPatterns: ['brownSpots', 'blackSpots'],
      treatment: {
        organic: 'Remove infected leaves. Apply copper fungicide. Mulch around base.',
        chemical: 'Apply Mancozeb or Chlorothalonil.',
        dosage: 'Mancozeb: 2g per liter of water',
        frequency: 'Every 7-10 days',
      },
      progression: {
        days: 10,
        description: 'Spreads upward through plant over 7-10 days',
      },
      preventionTips: ['Avoid splashing water', 'Remove plant debris', 'Crop rotation'],
    },
    {
      id: 'tomato_spider_mites',
      name: 'Spider Mites',
      severity: 4,
      severityLevel: 'low',
      color: '#f59e0b',
      symptoms: ['tiny yellow/white stippling', 'fine webbing on leaves', 'dusty appearance'],
      visualPatterns: ['yellowEdges'],
      treatment: {
        organic: 'Spray with strong water jet. Apply neem oil or insecticidal soap.',
        chemical: 'Apply Abamectin or Spiromesifen.',
        dosage: 'Abamectin: 0.5ml per liter of water',
        frequency: 'Every 5-7 days, 3 applications',
      },
      progression: {
        days: 14,
        description: 'Population doubles every 3-5 days in hot weather',
      },
      preventionTips: ['Maintain humidity', 'Regular inspection', 'Avoid dusty conditions'],
    },
    {
      id: 'tomato_target_spot',
      name: 'Target Spot',
      severity: 5,
      severityLevel: 'medium',
      color: '#f97316',
      symptoms: ['brown spots with target-like rings', 'affects leaves, stems, fruit', 'spots may crack'],
      visualPatterns: ['brownSpots'],
      treatment: {
        organic: 'Remove infected parts. Apply copper-based fungicide.',
        chemical: 'Apply Azoxystrobin or Chlorothalonil.',
        dosage: 'Azoxystrobin: 1ml per liter of water',
        frequency: 'Every 7-14 days',
      },
      progression: {
        days: 7,
        description: 'Spreads to fruit in 5-7 days, reducing marketability',
      },
      preventionTips: ['Stake plants', 'Improve air flow', 'Avoid overhead irrigation'],
    },
    {
      id: 'tomato_mosaic_virus',
      name: 'Mosaic Virus',
      severity: 7,
      severityLevel: 'high',
      color: '#ef4444',
      symptoms: ['mottled light/dark green pattern', 'distorted leaves', 'stunted growth'],
      visualPatterns: ['yellowEdges'],
      treatment: {
        organic: 'No cure. Remove and destroy infected plants. Wash hands after handling.',
        chemical: 'No chemical treatment available for viruses.',
        dosage: null,
        frequency: null,
      },
      progression: {
        days: 0,
        description: 'No cure - remove plant immediately to prevent spread',
      },
      preventionTips: ['Use resistant varieties', 'Control aphids', 'Disinfect tools'],
    },
    {
      id: 'tomato_yellow_leaf_curl',
      name: 'Yellow Leaf Curl Virus',
      severity: 8,
      severityLevel: 'high',
      color: '#ef4444',
      symptoms: ['upward curling leaves', 'yellow leaf margins', 'stunted bushy growth'],
      visualPatterns: ['yellowEdges', 'wilting'],
      treatment: {
        organic: 'Control whiteflies with yellow sticky traps. Remove infected plants.',
        chemical: 'Apply Imidacloprid to control whitefly vectors.',
        dosage: 'Imidacloprid: 0.5ml per liter of water',
        frequency: 'Weekly application to control vectors',
      },
      progression: {
        days: 0,
        description: 'No cure - focus on preventing spread via whitefly control',
      },
      preventionTips: ['Use reflective mulches', 'Screen greenhouse vents', 'Resistant varieties'],
    },
    {
      id: 'tomato_bacterial_spot',
      name: 'Bacterial Spot',
      severity: 6,
      severityLevel: 'medium',
      color: '#f97316',
      symptoms: ['small dark raised spots', 'water-soaked appearance', 'spots on fruit'],
      visualPatterns: ['brownSpots', 'blackSpots', 'waterSoaked'],
      treatment: {
        organic: 'Apply copper hydroxide. Remove infected leaves. Avoid overhead watering.',
        chemical: 'Apply Copper + Mancozeb combination.',
        dosage: 'Copper hydroxide: 2g per liter of water',
        frequency: 'Every 5-7 days during wet weather',
      },
      progression: {
        days: 5,
        description: 'Spreads rapidly in wet conditions, affects fruit in 4-5 days',
      },
      preventionTips: ['Use disease-free seeds', 'Avoid working with wet plants', 'Crop rotation'],
    },
  ],

  potato: [
    {
      id: 'potato_healthy',
      name: 'Healthy',
      severity: 0,
      severityLevel: 'none',
      color: '#22c55e',
      symptoms: ['green leaves', 'normal growth', 'no spots or wilting'],
      visualPatterns: [],
      treatment: {
        organic: 'Continue regular care with proper hilling and watering.',
        chemical: 'No treatment needed.',
        dosage: null,
        frequency: null,
      },
      progression: null,
      preventionTips: ['Regular hilling', 'Proper drainage', 'Certified seed potatoes'],
    },
    {
      id: 'potato_early_blight',
      name: 'Early Blight',
      severity: 6,
      severityLevel: 'medium',
      color: '#eab308',
      symptoms: ['dark brown spots with rings', 'yellowing leaves', 'lower leaves first'],
      visualPatterns: ['brownSpots', 'yellowEdges'],
      treatment: {
        organic: 'Remove infected foliage. Apply copper fungicide. Mulch heavily.',
        chemical: 'Apply Mancozeb or Chlorothalonil.',
        dosage: 'Mancozeb: 2.5g per liter of water',
        frequency: 'Every 7-10 days',
      },
      progression: {
        days: 7,
        description: 'Reduces tuber yield by 20-30% if left untreated for a week',
      },
      preventionTips: ['Crop rotation (3 years)', 'Resistant varieties', 'Good air circulation'],
    },
    {
      id: 'potato_late_blight',
      name: 'Late Blight',
      severity: 10,
      severityLevel: 'high',
      color: '#ef4444',
      symptoms: ['water-soaked lesions', 'white mold on leaf undersides', 'rapid browning'],
      visualPatterns: ['brownSpots', 'whiteMold', 'waterSoaked'],
      treatment: {
        organic: 'URGENT: Remove and destroy all infected plants. Apply copper fungicide preventively.',
        chemical: 'Apply Metalaxyl + Mancozeb (Ridomil Gold) immediately.',
        dosage: 'Ridomil Gold: 2.5g per liter of water',
        frequency: 'Every 5 days during outbreak',
      },
      progression: {
        days: 2,
        description: 'EMERGENCY: Can destroy entire field in 2-3 days! Act NOW!',
      },
      preventionTips: ['Weather monitoring', 'Preventive sprays in humid weather', 'Resistant varieties'],
    },
    {
      id: 'potato_black_scurf',
      name: 'Black Scurf (Rhizoctonia)',
      severity: 4,
      severityLevel: 'low',
      color: '#78716c',
      symptoms: ['black lumps on tuber surface', 'cankers on stems', 'delayed emergence'],
      visualPatterns: ['blackSpots'],
      treatment: {
        organic: 'Use certified seed. Warm soil before planting. Add compost.',
        chemical: 'Seed treatment with Pencycuron before planting.',
        dosage: 'Pencycuron: 1.25ml per kg of seed',
        frequency: 'One-time seed treatment',
      },
      progression: {
        days: 30,
        description: 'Affects tuber quality at harvest, reduces marketability',
      },
      preventionTips: ['Certified seed', 'Crop rotation', 'Proper soil temperature'],
    },
  ],

  corn: [
    {
      id: 'corn_healthy',
      name: 'Healthy',
      severity: 0,
      severityLevel: 'none',
      color: '#22c55e',
      symptoms: ['green leaves', 'normal tassel', 'good ear development'],
      visualPatterns: [],
      treatment: {
        organic: 'Continue regular care with proper fertilization.',
        chemical: 'No treatment needed.',
        dosage: null,
        frequency: null,
      },
      progression: null,
      preventionTips: ['Proper spacing', 'Adequate nitrogen', 'Weed control'],
    },
    {
      id: 'corn_gray_leaf_spot',
      name: 'Gray Leaf Spot',
      severity: 6,
      severityLevel: 'medium',
      color: '#9ca3af',
      symptoms: ['rectangular gray-brown lesions', 'lesions follow leaf veins', 'lower leaves first'],
      visualPatterns: ['brownSpots'],
      treatment: {
        organic: 'Crop rotation. Remove crop residue. Improve air flow.',
        chemical: 'Apply Azoxystrobin or Pyraclostrobin fungicide.',
        dosage: 'Azoxystrobin: 1ml per liter of water',
        frequency: 'Every 14 days, 2-3 applications',
      },
      progression: {
        days: 10,
        description: 'Can reduce yield by 30-50% if infection reaches ear leaves',
      },
      preventionTips: ['Resistant hybrids', 'Tillage to bury residue', 'Avoid continuous corn'],
    },
    {
      id: 'corn_common_rust',
      name: 'Common Rust',
      severity: 5,
      severityLevel: 'medium',
      color: '#b45309',
      symptoms: ['orange-brown pustules', 'pustules on both leaf surfaces', 'dusty spores'],
      visualPatterns: ['rustColor'],
      treatment: {
        organic: 'Usually self-limiting. Ensure good nutrition.',
        chemical: 'Apply Propiconazole or Tebuconazole if severe.',
        dosage: 'Propiconazole: 1ml per liter of water',
        frequency: 'One application at first sign',
      },
      progression: {
        days: 14,
        description: 'Moderate impact, more severe in cool, humid conditions',
      },
      preventionTips: ['Resistant varieties', 'Early planting', 'Balanced fertilization'],
    },
    {
      id: 'corn_northern_leaf_blight',
      name: 'Northern Leaf Blight',
      severity: 7,
      severityLevel: 'high',
      color: '#78716c',
      symptoms: ['long cigar-shaped gray-green lesions', 'lesions up to 15cm', 'starts on lower leaves'],
      visualPatterns: ['brownSpots'],
      treatment: {
        organic: 'Crop rotation. Incorporate residue. Use resistant hybrids.',
        chemical: 'Apply Mancozeb or Propiconazole fungicide.',
        dosage: 'Mancozeb: 2.5g per liter of water',
        frequency: 'Every 10-14 days',
      },
      progression: {
        days: 7,
        description: 'Can cause 30-50% yield loss if it reaches ear before grain fill',
      },
      preventionTips: ['Resistant hybrids', 'Crop rotation', 'Residue management'],
    },
    {
      id: 'corn_southern_leaf_blight',
      name: 'Southern Leaf Blight',
      severity: 6,
      severityLevel: 'medium',
      color: '#92400e',
      symptoms: ['tan elongated lesions', 'parallel-sided spots', 'affects lower leaves'],
      visualPatterns: ['brownSpots', 'yellowEdges'],
      treatment: {
        organic: 'Remove infected leaves. Improve air circulation.',
        chemical: 'Apply Chlorothalonil or Mancozeb.',
        dosage: 'Chlorothalonil: 2g per liter of water',
        frequency: 'Every 7-10 days',
      },
      progression: {
        days: 10,
        description: 'Moderate yield impact, worse in hot humid weather',
      },
      preventionTips: ['Resistant varieties', 'Balanced nutrition', 'Avoid dense planting'],
    },
  ],

  apple: [
    {
      id: 'apple_healthy',
      name: 'Healthy',
      severity: 0,
      severityLevel: 'none',
      color: '#22c55e',
      symptoms: ['green leaves', 'no spots', 'good fruit development'],
      visualPatterns: [],
      treatment: {
        organic: 'Continue regular care. Prune for good air flow.',
        chemical: 'No treatment needed.',
        dosage: null,
        frequency: null,
      },
      progression: null,
      preventionTips: ['Regular pruning', 'Balanced fertilization', 'Clean orchard floor'],
    },
    {
      id: 'apple_scab',
      name: 'Apple Scab',
      severity: 7,
      severityLevel: 'high',
      color: '#78716c',
      symptoms: ['olive-brown spots on leaves', 'scabby spots on fruit', 'premature leaf drop'],
      visualPatterns: ['brownSpots', 'blackSpots'],
      treatment: {
        organic: 'Remove fallen leaves. Apply sulfur or lime-sulfur.',
        chemical: 'Apply Captan or Myclobutanil fungicide.',
        dosage: 'Captan: 2g per liter of water',
        frequency: 'Every 7 days during wet spring weather',
      },
      progression: {
        days: 7,
        description: 'Spreads rapidly in spring rains, affects fruit marketability',
      },
      preventionTips: ['Resistant varieties', 'Remove fallen leaves', 'Prune for air flow'],
    },
    {
      id: 'apple_cedar_rust',
      name: 'Cedar Apple Rust',
      severity: 5,
      severityLevel: 'medium',
      color: '#f97316',
      symptoms: ['yellow-orange spots on leaves', 'orange spore tubes on underside', 'fruit lesions'],
      visualPatterns: ['rustColor', 'yellowEdges'],
      treatment: {
        organic: 'Remove nearby junipers/cedars. Apply sulfur early season.',
        chemical: 'Apply Myclobutanil or Mancozeb.',
        dosage: 'Myclobutanil: 0.5ml per liter of water',
        frequency: 'Every 7-10 days from pink bud to 3 weeks after bloom',
      },
      progression: {
        days: 14,
        description: 'Limited spread after initial infection in spring',
      },
      preventionTips: ['Remove juniper hosts', 'Resistant varieties', 'Preventive sprays'],
    },
    {
      id: 'apple_black_rot',
      name: 'Black Rot',
      severity: 6,
      severityLevel: 'medium',
      color: '#1f2937',
      symptoms: ['frogeye leaf spots', 'brown to black fruit rot', 'limb cankers'],
      visualPatterns: ['brownSpots', 'blackSpots'],
      treatment: {
        organic: 'Prune out cankers. Remove mummified fruit. Apply copper.',
        chemical: 'Apply Captan or Thiophanate-methyl.',
        dosage: 'Captan: 2.5g per liter of water',
        frequency: 'Every 10-14 days during growing season',
      },
      progression: {
        days: 10,
        description: 'Can cause significant fruit loss if untreated',
      },
      preventionTips: ['Remove dead wood', 'Clean up fallen fruit', 'Good sanitation'],
    },
    {
      id: 'apple_powdery_mildew',
      name: 'Powdery Mildew',
      severity: 5,
      severityLevel: 'medium',
      color: '#e5e7eb',
      symptoms: ['white powdery coating', 'curled leaves', 'stunted shoots'],
      visualPatterns: ['whiteMold'],
      treatment: {
        organic: 'Apply potassium bicarbonate or sulfur.',
        chemical: 'Apply Myclobutanil or Trifloxystrobin.',
        dosage: 'Myclobutanil: 0.5ml per liter of water',
        frequency: 'Every 7-10 days from bud break to mid-summer',
      },
      progression: {
        days: 7,
        description: 'Reduces fruit size and quality over season',
      },
      preventionTips: ['Resistant varieties', 'Prune for air flow', 'Avoid excessive nitrogen'],
    },
  ],

  grape: [
    {
      id: 'grape_healthy',
      name: 'Healthy',
      severity: 0,
      severityLevel: 'none',
      color: '#22c55e',
      symptoms: ['green leaves', 'normal cane growth', 'good fruit set'],
      visualPatterns: [],
      treatment: {
        organic: 'Continue regular care. Train and prune properly.',
        chemical: 'No treatment needed.',
        dosage: null,
        frequency: null,
      },
      progression: null,
      preventionTips: ['Proper training', 'Balanced fertilization', 'Good air flow'],
    },
    {
      id: 'grape_black_rot',
      name: 'Black Rot',
      severity: 8,
      severityLevel: 'high',
      color: '#1f2937',
      symptoms: ['brown circular leaf spots', 'black shriveled fruit (mummies)', 'tan lesions on shoots'],
      visualPatterns: ['brownSpots', 'blackSpots'],
      treatment: {
        organic: 'Remove mummies and infected canes. Apply copper at bud break.',
        chemical: 'Apply Mancozeb or Myclobutanil.',
        dosage: 'Mancozeb: 2.5g per liter of water',
        frequency: 'Every 7-10 days from bud break to veraison',
      },
      progression: {
        days: 7,
        description: 'Fruit infection is irreversible - act before fruit set',
      },
      preventionTips: ['Remove mummies', 'Prune for air flow', 'Canopy management'],
    },
    {
      id: 'grape_downy_mildew',
      name: 'Downy Mildew',
      severity: 7,
      severityLevel: 'high',
      color: '#fbbf24',
      symptoms: ['yellow oily spots on leaves', 'white fuzzy growth underneath', 'brown dried tissue'],
      visualPatterns: ['yellowEdges', 'whiteMold'],
      treatment: {
        organic: 'Improve air circulation. Apply copper-based fungicide.',
        chemical: 'Apply Metalaxyl + Mancozeb or Fosetyl-Al.',
        dosage: 'Ridomil Gold: 2g per liter of water',
        frequency: 'Every 7-10 days during wet weather',
      },
      progression: {
        days: 5,
        description: 'Spreads explosively in wet weather - can defoliate vines',
      },
      preventionTips: ['Good drainage', 'Prune suckers', 'Preventive sprays in spring'],
    },
    {
      id: 'grape_powdery_mildew',
      name: 'Powdery Mildew',
      severity: 6,
      severityLevel: 'medium',
      color: '#e5e7eb',
      symptoms: ['white powdery coating', 'distorted growth', 'split berries'],
      visualPatterns: ['whiteMold'],
      treatment: {
        organic: 'Apply sulfur (not on sulfur-sensitive varieties) or potassium bicarbonate.',
        chemical: 'Apply Myclobutanil or Trifloxystrobin.',
        dosage: 'Sulfur: 3g per liter of water',
        frequency: 'Every 7-14 days from shoot growth to harvest',
      },
      progression: {
        days: 7,
        description: 'Berry infection causes cracking and secondary rots',
      },
      preventionTips: ['Canopy management', 'Leaf removal', 'Avoid excessive vigor'],
    },
    {
      id: 'grape_leaf_blight',
      name: 'Isariopsis Leaf Spot',
      severity: 5,
      severityLevel: 'medium',
      color: '#92400e',
      symptoms: ['brown spots with yellow halo', 'irregular shaped lesions', 'premature defoliation'],
      visualPatterns: ['brownSpots', 'yellowEdges'],
      treatment: {
        organic: 'Remove infected leaves. Apply neem oil.',
        chemical: 'Apply Mancozeb or Copper oxychloride.',
        dosage: 'Mancozeb: 2g per liter of water',
        frequency: 'Every 10-14 days',
      },
      progression: {
        days: 14,
        description: 'Can cause early defoliation affecting fruit ripening',
      },
      preventionTips: ['Remove fallen leaves', 'Prune for air flow', 'Avoid overhead irrigation'],
    },
  ],

  rice: [
    {
      id: 'rice_healthy',
      name: 'Healthy',
      severity: 0,
      severityLevel: 'none',
      color: '#22c55e',
      symptoms: ['green leaves', 'normal tillering', 'good panicle development'],
      visualPatterns: [],
      treatment: {
        organic: 'Continue proper water and nutrient management.',
        chemical: 'No treatment needed.',
        dosage: null,
        frequency: null,
      },
      progression: null,
      preventionTips: ['Proper water management', 'Balanced fertilization', 'Good seed selection'],
    },
    {
      id: 'rice_blast',
      name: 'Rice Blast',
      severity: 9,
      severityLevel: 'high',
      color: '#ef4444',
      symptoms: ['diamond-shaped lesions', 'gray center with brown border', 'neck rot at panicle'],
      visualPatterns: ['brownSpots'],
      treatment: {
        organic: 'Use resistant varieties. Apply Trichoderma as biocontrol.',
        chemical: 'Apply Tricyclazole or Isoprothiolane.',
        dosage: 'Tricyclazole: 0.6g per liter of water',
        frequency: 'Every 10-15 days, especially during flowering',
      },
      progression: {
        days: 5,
        description: 'Neck blast can cause 100% yield loss in affected panicles',
      },
      preventionTips: ['Resistant varieties', 'Avoid excess nitrogen', 'Seed treatment'],
    },
    {
      id: 'rice_brown_spot',
      name: 'Brown Spot',
      severity: 5,
      severityLevel: 'medium',
      color: '#92400e',
      symptoms: ['oval brown spots', 'dark brown margin', 'affects weak plants'],
      visualPatterns: ['brownSpots'],
      treatment: {
        organic: 'Improve soil fertility. Apply potassium. Use Pseudomonas fluorescens.',
        chemical: 'Apply Mancozeb or Propiconazole.',
        dosage: 'Mancozeb: 2.5g per liter of water',
        frequency: 'Every 10-15 days',
      },
      progression: {
        days: 14,
        description: 'Reduces grain quality and weight',
      },
      preventionTips: ['Balanced fertilization', 'Good drainage', 'Healthy seed'],
    },
    {
      id: 'rice_sheath_blight',
      name: 'Sheath Blight',
      severity: 7,
      severityLevel: 'high',
      color: '#78716c',
      symptoms: ['irregular lesions on sheath', 'gray-white with dark border', 'spreads upward'],
      visualPatterns: ['brownSpots', 'whiteMold'],
      treatment: {
        organic: 'Reduce plant density. Apply Trichoderma viride.',
        chemical: 'Apply Hexaconazole or Validamycin.',
        dosage: 'Hexaconazole: 2ml per liter of water',
        frequency: 'Every 10-15 days during tillering to heading',
      },
      progression: {
        days: 7,
        description: 'Can reduce yield by 20-40% if reaches flag leaf',
      },
      preventionTips: ['Proper spacing', 'Avoid excess nitrogen', 'Water management'],
    },
  ],

  wheat: [
    {
      id: 'wheat_healthy',
      name: 'Healthy',
      severity: 0,
      severityLevel: 'none',
      color: '#22c55e',
      symptoms: ['green leaves', 'normal tillering', 'good head development'],
      visualPatterns: [],
      treatment: {
        organic: 'Continue proper fertilization and irrigation.',
        chemical: 'No treatment needed.',
        dosage: null,
        frequency: null,
      },
      progression: null,
      preventionTips: ['Certified seed', 'Proper sowing time', 'Balanced nutrition'],
    },
    {
      id: 'wheat_rust',
      name: 'Wheat Rust (Yellow/Brown/Black)',
      severity: 8,
      severityLevel: 'high',
      color: '#b45309',
      symptoms: ['orange-brown pustules', 'yellow stripes (yellow rust)', 'dark pustules (stem rust)'],
      visualPatterns: ['rustColor'],
      treatment: {
        organic: 'Use resistant varieties. Remove volunteer wheat.',
        chemical: 'Apply Propiconazole or Tebuconazole.',
        dosage: 'Propiconazole: 1ml per liter of water',
        frequency: 'At first sign, repeat after 15 days if needed',
      },
      progression: {
        days: 7,
        description: 'Can cause 30-70% yield loss depending on rust type and timing',
      },
      preventionTips: ['Resistant varieties', 'Early sowing', 'Avoid late nitrogen'],
    },
    {
      id: 'wheat_powdery_mildew',
      name: 'Powdery Mildew',
      severity: 5,
      severityLevel: 'medium',
      color: '#e5e7eb',
      symptoms: ['white powdery patches', 'starts on lower leaves', 'gray as it ages'],
      visualPatterns: ['whiteMold'],
      treatment: {
        organic: 'Good air circulation. Apply potassium silicate.',
        chemical: 'Apply Sulfur or Propiconazole.',
        dosage: 'Sulfur WP: 3g per liter of water',
        frequency: 'Every 10-15 days during cool humid weather',
      },
      progression: {
        days: 10,
        description: 'Moderate yield impact, worse under irrigation',
      },
      preventionTips: ['Resistant varieties', 'Avoid dense sowing', 'Balanced nitrogen'],
    },
    {
      id: 'wheat_septoria',
      name: 'Septoria Leaf Blotch',
      severity: 6,
      severityLevel: 'medium',
      color: '#78716c',
      symptoms: ['tan lesions with dark specks', 'irregular blotches', 'progresses up plant'],
      visualPatterns: ['brownSpots', 'blackSpots'],
      treatment: {
        organic: 'Crop rotation. Remove infected residue.',
        chemical: 'Apply Azoxystrobin + Cyproconazole.',
        dosage: 'Azoxystrobin: 1ml per liter of water',
        frequency: 'At flag leaf emergence, repeat if needed',
      },
      progression: {
        days: 14,
        description: 'Spreads upward during wet weather, protects flag leaf',
      },
      preventionTips: ['Crop rotation', 'Resistant varieties', 'Residue management'],
    },
  ],

  cotton: [
    {
      id: 'cotton_healthy',
      name: 'Healthy',
      severity: 0,
      severityLevel: 'none',
      color: '#22c55e',
      symptoms: ['green leaves', 'normal squares and bolls', 'good plant structure'],
      visualPatterns: [],
      treatment: {
        organic: 'Continue balanced nutrition and pest management.',
        chemical: 'No treatment needed.',
        dosage: null,
        frequency: null,
      },
      progression: null,
      preventionTips: ['Proper spacing', 'Balanced fertilization', 'Integrated pest management'],
    },
    {
      id: 'cotton_bacterial_blight',
      name: 'Bacterial Blight',
      severity: 7,
      severityLevel: 'high',
      color: '#1f2937',
      symptoms: ['angular water-soaked spots', 'black arm on stems', 'boll rot'],
      visualPatterns: ['brownSpots', 'blackSpots', 'waterSoaked'],
      treatment: {
        organic: 'Use disease-free seed. Apply copper fungicide.',
        chemical: 'Seed treatment with Streptocycline. Apply copper oxychloride.',
        dosage: 'Streptocycline: 0.5g + Copper: 2.5g per liter',
        frequency: 'Every 7-10 days during wet weather',
      },
      progression: {
        days: 5,
        description: 'Black arm can cause severe stem damage and plant death',
      },
      preventionTips: ['Acid-delinted treated seed', 'Crop rotation', 'Avoid overhead irrigation'],
    },
    {
      id: 'cotton_alternaria_leaf_spot',
      name: 'Alternaria Leaf Spot',
      severity: 5,
      severityLevel: 'medium',
      color: '#92400e',
      symptoms: ['circular brown spots', 'concentric rings', 'premature defoliation'],
      visualPatterns: ['brownSpots'],
      treatment: {
        organic: 'Remove infected leaves. Apply neem-based products.',
        chemical: 'Apply Mancozeb or Propiconazole.',
        dosage: 'Mancozeb: 2.5g per liter of water',
        frequency: 'Every 10-15 days',
      },
      progression: {
        days: 14,
        description: 'Heavy defoliation affects boll development',
      },
      preventionTips: ['Crop rotation', 'Adequate potassium', 'Avoid water stress'],
    },
    {
      id: 'cotton_grey_mildew',
      name: 'Grey Mildew',
      severity: 6,
      severityLevel: 'medium',
      color: '#9ca3af',
      symptoms: ['angular gray spots', 'powdery growth on underside', 'yellow upper surface'],
      visualPatterns: ['yellowEdges', 'whiteMold'],
      treatment: {
        organic: 'Improve air circulation. Apply sulfur.',
        chemical: 'Apply Carbendazim or Thiophanate-methyl.',
        dosage: 'Carbendazim: 1g per liter of water',
        frequency: 'Every 10-15 days',
      },
      progression: {
        days: 10,
        description: 'Reduces photosynthesis and boll weight',
      },
      preventionTips: ['Proper spacing', 'Avoid excess nitrogen', 'Resistant varieties'],
    },
    {
      id: 'cotton_root_rot',
      name: 'Root Rot',
      severity: 8,
      severityLevel: 'high',
      color: '#1f2937',
      symptoms: ['wilting despite moisture', 'yellow leaves', 'black rotted roots'],
      visualPatterns: ['wilting', 'yellowEdges'],
      treatment: {
        organic: 'Improve drainage. Apply Trichoderma viride to soil.',
        chemical: 'Soil drenching with Carbendazim.',
        dosage: 'Carbendazim: 2g per liter for soil drench',
        frequency: 'At planting and repeat after 30 days',
      },
      progression: {
        days: 10,
        description: 'Can kill plants rapidly, spread through field',
      },
      preventionTips: ['Good drainage', 'Crop rotation', 'Avoid waterlogging'],
    },
  ],
};

// Get all diseases for a specific crop
export const getDiseasesForCrop = (cropId) => {
  return DISEASE_DATABASE[cropId] || [];
};

// Get disease by ID
export const getDiseaseById = (diseaseId) => {
  for (const crop of Object.keys(DISEASE_DATABASE)) {
    const disease = DISEASE_DATABASE[crop].find(d => d.id === diseaseId);
    if (disease) return { ...disease, crop };
  }
  return null;
};

// Calculate match score between visual features and disease patterns
export const calculateDiseaseMatch = (visualFeatures, disease) => {
  if (!disease.visualPatterns || disease.visualPatterns.length === 0) {
    // Healthy plant - match if no concerning features detected
    const hasIssues = Object.values(visualFeatures).some(v => v > 0.3);
    return hasIssues ? 0.1 : 0.9;
  }
  
  let matchScore = 0;
  let maxPossible = disease.visualPatterns.length;
  
  for (const pattern of disease.visualPatterns) {
    if (visualFeatures[pattern] && visualFeatures[pattern] > 0.3) {
      matchScore += visualFeatures[pattern];
    }
  }
  
  return maxPossible > 0 ? matchScore / maxPossible : 0;
};

// Find best matching diseases for given features
export const findMatchingDiseases = (cropId, visualFeatures, topN = 3) => {
  const diseases = getDiseasesForCrop(cropId);
  
  const scoredDiseases = diseases.map(disease => ({
    ...disease,
    matchScore: calculateDiseaseMatch(visualFeatures, disease),
    confidence: Math.round(calculateDiseaseMatch(visualFeatures, disease) * 100),
  }));
  
  return scoredDiseases
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, topN);
};

// Demo stores data for nearby store feature
export const DEMO_STORES = [
  {
    id: 1,
    name: 'Kisan Agro Center',
    distance: 1.2,
    address: 'Main Market Road, Near Bus Stand',
    phone: '+91 98765 43210',
    rating: 4.5,
    hasStock: true,
  },
  {
    id: 2,
    name: 'Bharat Krishi Seva',
    distance: 2.5,
    address: 'Agricultural Zone, Shop No. 15',
    phone: '+91 98765 43211',
    rating: 4.2,
    hasStock: true,
  },
  {
    id: 3,
    name: 'Green Harvest Supplies',
    distance: 3.8,
    address: 'Industrial Area, Warehouse Complex',
    phone: '+91 98765 43212',
    rating: 4.7,
    hasStock: true,
  },
  {
    id: 4,
    name: 'Farmers Friend Store',
    distance: 5.1,
    address: 'Highway Junction, Petrol Pump Road',
    phone: '+91 98765 43213',
    rating: 4.0,
    hasStock: false,
  },
];
