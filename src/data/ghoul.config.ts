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
  marketSize: string;
  traction: { label: string; value: string; status: 'complete' | 'in-progress' | 'upcoming' }[];
  ipStatus: string;
  ipClasses: string[];
  roadmap: { phase: string; title: string; items: string[]; status: 'complete' | 'in-progress' | 'upcoming' }[];
  fundingAsk: string;
  valuation: string;
  equityOffered: string;
  projectedRevenue: { year: string; amount: string; sources: string }[];
  roiTarget: string;
  partnerships: { type: string; description: string }[];
  revenueStreams: { stream: string; description: string; timeline: string }[];
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
      id: "goo",
      name: "GOO GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/goo/",
      icon: "👻",
      color: "#ff00ff",
      realm: "The Goo Dimension",
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
      id: "beauty",
      name: "BEAUTY GHOUL",
      domain: "https://www.beautyghoul.com",
      icon: "💄",
      color: "#ec4899",
      realm: "The Glamour Dimension",
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
      id: "zen",
      name: "ZEN GHOUL",
      domain: "https://www.zenghoul.com",
      icon: "🧘",
      color: "#a855f7",
      realm: "The Tranquil Gardens",
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
      id: "geek",
      name: "GEEK GHOUL",
      domain: "https://www.geekghoul.com",
      icon: "💻",
      color: "#00d4ff",
      realm: "The Mainframe",
      live: true,
    },
    {
      id: "sport",
      name: "SPORT GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/sport/",
      icon: "🏆",
      color: "#f97316",
      realm: "The Arena",
      live: false,
    },
    {
      id: "googoo",
      name: "GOO GOO",
      domain: "https://www.ghoulverse.com/ghouls/googoo/",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Nursery",
      live: false,
    },
    {
      id: "kid",
      name: "KID GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/kid/",
      icon: "🧒",
      color: "#ef4444",
      realm: "The Playground",
      live: false,
    },
    {
      id: "teen",
      name: "TEEN GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/teen/",
      icon: "🎧",
      color: "#8b5cf6",
      realm: "The Hangout",
      live: false,
    },
    {
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/scholar/",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
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

  marketSize: "$579B global beauty & personal care market",
  traction: [
    { label: "Character Websites", value: "6 Live", status: "complete" },
    { label: "GOO GHOUL™ Trademark", value: "IP Australia — Accepted", status: "complete" },
    { label: "GHOULVERSE Game", value: "Live", status: "complete" },
    { label: "Brand Partnerships", value: "Seeking First Deals", status: "upcoming" },
  ],
  ipStatus: "Trademark filed — Class 3 (cosmetics & beauty preparations) and Class 21 (beauty appliances & utensils).",
  ipClasses: [
    "Class 3 — Cosmetics, skincare & beauty preparations",
    "Class 21 — Beauty appliances, cosmetic utensils",
    "Class 35 — Retail store services for beauty products",
  ],
  roadmap: [
    { phase: "Phase 1", title: "Foundation", items: ["12 character websites live", "GOO GHOUL™ Class 3 (AU) filed", "GHOULVERSE game launched"], status: "complete" },
    { phase: "Phase 1.5", title: "International IP", items: ["US trademark via Madrid Protocol", "EU trademark filing", "Defensive name registrations"], status: "in-progress" },
    { phase: "Phase 2", title: "Mascot Creation", items: ["24 professional mascots (2 per ghoul)", "$120K investment across 12 characters"], status: "upcoming" },
    { phase: "Phase 3", title: "Partnerships & Revenue", items: ["Sector sponsorships", "Affiliate deals", "Event appearances", "Influencer recruitment"], status: "upcoming" },
    { phase: "Phase 4", title: "Entertainment Scale", items: ["Animated series pilot", "Convention circuit", "Merchandise licensing"], status: "upcoming" },
    { phase: "Phase 5", title: "Product Launch", items: ["GOO GHOUL household cleaners", "Vertical-specific product lines"], status: "upcoming" },
  ],

  fundingAsk: "$250,000 AUD",
  valuation: "$1,250,000 pre-money",
  equityOffered: "20%",
  projectedRevenue: [
    { year: "Year 1", amount: "$200,000", sources: "Brand sponsorships, event appearances, affiliate commissions" },
    { year: "Year 2", amount: "$560,000", sources: "Licensing, events, merch royalties, content" },
    { year: "Year 3", amount: "$1,200,000", sources: "Full licensing engine + product sales" },
  ],
  roiTarget: "5–8x over 3–5 years (40–70% IRR)",
  partnerships: [
    { type: "Brand Sponsorships", description: "Existing companies in each vertical pay to associate with our character IP at events and online." },
    { type: "Affiliate Marketing", description: "Partner products featured on ghoul websites — we earn commission on referred sales." },
    { type: "Event Appearances", description: "Mascots appear at sports events, conventions, retail launches — appearance fees + brand exposure." },
    { type: "Licensing", description: "Brands license ghoul characters for their own marketing, packaging, and promotions." },
  ],
  revenueStreams: [
    { stream: "Sponsorships", description: "Sector-specific brand deals per ghoul", timeline: "Year 1" },
    { stream: "Events", description: "Mascot appearances and activations", timeline: "Year 1" },
    { stream: "Affiliate", description: "Commission on partner product sales", timeline: "Year 1" },
    { stream: "Licensing", description: "Character IP licensing to brands", timeline: "Year 2" },
    { stream: "Merchandise", description: "Royalties on plush, apparel, accessories", timeline: "Year 2" },
    { stream: "Animation", description: "YouTube/streaming ad revenue, distribution deals", timeline: "Year 2" },
    { stream: "Products", description: "Owned product lines (GOO GHOUL cleaners first)", timeline: "Year 3" },
  ],
};
