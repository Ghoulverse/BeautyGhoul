/**
 * Ghoul Site Configuration
 */

export interface CrossLink {
  id: string;
  name: string;
  domain: string;
  icon: string;
  color: string;
  realm: string;
  live: boolean;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  category: 'core' | 'pro' | 'tool' | 'refill' | 'limited';
  volume: string;
  price: string;
  features: string[];
  heroIngredient?: string;
}

export interface GhoulConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  icon: string;
  isLeader: boolean;
  products: Product[];
  crossLinks: CrossLink[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    placeholderText: string;
  };
  gameUrl: string;
  social: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  science: {
    title: string;
    subtitle: string;
    description: string;
    adaptation: string;
    stats: { label: string; value: string }[];
  };
}

export const config: GhoulConfig = {
  id: "beauty",
  name: "BEAUTY GHOUL",
  tagline: "Glamour Without The Grime",
  description:
    "Beauty is chaos refined. BEAUTY GHOUL transforms your vanity from battlefield to sanctuary.",
  domain: "https://www.beautyghoul.com",
  icon: "💄",
  isLeader: false,

  products: [
    {
      name: "Makeup Brush Purifier",
      tagline: "Surgical-grade brush hygiene",
      description: "Deep-cleans natural and synthetic brush fibres without stripping softness. Removes pigment buildup, oils, and bacteria in a single soak.",
      category: "core",
      volume: "250ml",
      price: "$22.99 AUD",
      features: ["Kills 99.9% bacteria", "Softens bristles", "Rinses residue-free"],
      heroIngredient: "pH-Balanced Ectoplasm™",
    },
    {
      name: "Cosmetic Sanitizer Spray",
      tagline: "Kill bacteria, save the palette",
      description: "A fine-mist sanitiser for powder palettes, cream products, and applicators. Dries in seconds without altering texture or pigment.",
      category: "core",
      volume: "200ml",
      price: "$18.99 AUD",
      features: ["Alcohol-free", "No colour alteration", "Fast-drying mist"],
      heroIngredient: "pH-Balanced Ectoplasm™",
    },
    {
      name: "Vanity Surface Polish",
      tagline: "Mirror finish for your mirror",
      description: "Streak-free polish for glass, marble, acrylic, and metal vanity surfaces. Removes fingerprints, powder dust, and product overspray.",
      category: "core",
      volume: "500ml",
      price: "$16.99 AUD",
      features: ["Streak-free formula", "Safe on acrylic", "Anti-fog finish"],
      heroIngredient: "pH-Balanced Ectoplasm™",
    },
    {
      name: "Hair Tool Deep Cleaner",
      tagline: "Removes years of product buildup",
      description: "Professional-grade dissolver for flat irons, curling wands, and dryer vents. Breaks down heat-caked polymer residue without scratching ceramic.",
      category: "pro",
      volume: "300ml",
      price: "$29.99 AUD",
      features: ["Ceramic-safe", "Heat-resistant formula", "Extends tool lifespan"],
      heroIngredient: "pH-Balanced Ectoplasm™",
    },
    {
      name: "Beauty Organizer Spray",
      tagline: "Dust-free display in one mist",
      description: "Anti-static dust repellent for makeup storage, drawers, and display units. Keeps products pristine between uses.",
      category: "pro",
      volume: "400ml",
      price: "$24.99 AUD",
      features: ["Anti-static barrier", "Non-greasy", "Lasts 14 days"],
      heroIngredient: "pH-Balanced Ectoplasm™",
    },
    {
      name: "Lash Comb & Sanitizer Set",
      tagline: "Precision meets purity",
      description: "Stainless steel lash comb with integrated UV sanitising chamber. Cleans and separates in one tool.",
      category: "tool",
      volume: "Kit",
      price: "$34.99 AUD",
      features: ["UV-C sanitising", "Surgical steel", "Travel case included"],
    },
    {
      name: "The Vanity Caddy",
      tagline: "Organized glamour",
      description: "Rotating acrylic organiser with antimicrobial coating. Holds 30+ products with adjustable compartments.",
      category: "tool",
      volume: "Organiser",
      price: "$49.99 AUD",
      features: ["360° rotation", "Antimicrobial coating", "Adjustable tiers"],
    },
    {
      name: "Brush Purifier Concentrate",
      tagline: "Make 3 bottles from one",
      description: "3x concentrate refill for the Makeup Brush Purifier. Same formula, less packaging, lower cost per clean.",
      category: "refill",
      volume: "250ml",
      price: "$15.99 AUD",
      features: ["3x dilution ratio", "Glass bottle", "Makes 750ml total"],
      heroIngredient: "pH-Balanced Ectoplasm™",
    },
    {
      name: "Holiday Glow Set",
      tagline: "Festive season limited edition",
      description: "A curated trio of travel-size essentials in exclusive rose-gold packaging. The perfect introduction to the Beauty Ghoul ritual.",
      category: "limited",
      volume: "Kit",
      price: "$59.99 AUD",
      features: ["3 travel sizes", "Rose-gold packaging", "Gift-ready box"],
      heroIngredient: "pH-Balanced Ectoplasm™",
    },
  ],

  crossLinks: [
    {
      id: "ghoulverse",
      name: "GHOULVERSE",
      domain: "https://www.ghoulverse.com",
      icon: "🌌",
      color: "#00f0ff",
      realm: "The Universe",
      live: true,
    },
    {
      id: "zen",
      name: "ZEN GHOUL",
      domain: "https://www.zenghoul.com",
      icon: "🧘",
      color: "#a855f7",
      realm: "The Tranquil Gardens",
      live: true,
    },
    {
      id: "party",
      name: "PARTY GHOUL",
      domain: "https://www.partyghoul.com",
      icon: "🎉",
      color: "#ff00ff",
      realm: "The Neon District",
      live: true,
    },
    {
      id: "tradie",
      name: "TRADIE GHOUL",
      domain: "https://www.tradieghoul.com",
      icon: "🔧",
      color: "#eab308",
      realm: "The Industrial Wastes",
      live: true,
    },
    {
      id: "garden",
      name: "GARDEN GHOUL",
      domain: "https://www.gardenghoul.com",
      icon: "🌿",
      color: "#22c55e",
      realm: "The Verdant Wilds",
      live: true,
    },
    {
      id: "beauty",
      name: "BEAUTY GHOUL",
      domain: "https://www.beautyghoul.com",
      icon: "💄",
      color: "#ec4899",
      realm: "The Glamour Dimension",
      live: true,
    },
    {
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.scholarghoul.com",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
    {
      id: "toddler",
      name: "TODDLER GHOUL",
      domain: "https://www.toddlerghoul.com",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Playful Realm",
      live: false,
    },
  ],

  cta: {
    headline: "Investor Inquiries",
    subheadline: "Join the GHOULVERSE portfolio. Request the full product deck and financial projections.",
    buttonText: "Request Deck",
    placeholderText: "Enter your email...",
  },

  gameUrl: "https://www.ghoulverse.com/play/",

  social: {
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },

  science: {
    title: "The Science",
    subtitle: "pH-Balanced Ectoplasm™",
    description: "Every BEAUTY GHOUL product is powered by pH-Balanced Ectoplasm™ — a proprietary enzyme complex calibrated to the skin's natural acidity. This ensures effective cleansing without compromising the delicate surfaces of cosmetics, tools, and vanity materials.",
    adaptation: "For the glamour dimension, we developed a gentle variant that respects pH-sensitive materials — natural bristles, cosmetic pigments, and delicate stone — while delivering surgical-grade sanitation.",
    stats: [
      { label: "pH Calibration", value: "5.5" },
      { label: "Bacteria Elimination", value: "99.9%" },
      { label: "Surface Safe Materials", value: "25+" },
      { label: "Dermatologist Tested", value: "Yes" },
    ],
  },
};
