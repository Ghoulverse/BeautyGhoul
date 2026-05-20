import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, ExternalLink, Sparkles, Gem, Crown, Diamond,
  FlaskConical, Leaf, Hammer, Package, Star,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';

gsap.registerPlugin(ScrollTrigger);

const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');
const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');

const PRODUCT_ICONS = [Sparkles, Gem, Crown, Diamond, Diamond];
const CATEGORY_TABS = [
  { key: 'core' as const, label: 'Core Range', icon: Star },
  { key: 'pro' as const, label: 'Pro Range', icon: FlaskConical },
  { key: 'tool' as const, label: 'Tools', icon: Hammer },
  { key: 'refill' as const, label: 'Refills', icon: Package },
  { key: 'limited' as const, label: 'Limited Drops', icon: Leaf },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'core' | 'pro' | 'tool' | 'refill' | 'limited'>('core');
  const heroRef = useRef<HTMLDivElement>(null);
  const aftermathRef = useRef<HTMLDivElement>(null);
  const scienceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const lineupRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          x: -60,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.3,
        });
      }

      const sections = [aftermathRef, scienceRef, productRef, lineupRef, gameRef, portfolioRef, ctaRef];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const filteredProducts = config.products.filter((p) => p.category === activeTab);

  return (
    <div className="relative font-cormorant">
      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 bg-[#faf7f2]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#ec4899] flex items-center justify-center">
              <span className="text-sm">{config.icon}</span>
            </div>
            <span className="font-playfair text-sm md:text-base tracking-widest text-[#ec4899]">
              {config.name}
            </span>
          </div>
          <a
            href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#78716c] hover:text-[#a855f7] transition-colors"
          >
            Enter the GHOULVERSE
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center px-4 md:px-8 overflow-hidden bg-[#faf7f2]"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={heroTextRef} className="z-10 pt-20 md:pt-0">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.3em] uppercase border border-[#ec4899]/30 text-[#ec4899] bg-[#ec4899]/5">
                La Collection de Beauté
              </span>
            </div>

            <h1 className="font-playfair text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight mb-6"
              style={{
                color: '#ec4899',
                textShadow: '0 0 20px rgba(236,72,153,0.2)',
              }}>
              BEAUTY
              <br />
              <span style={{ color: '#a855f7' }}>GHOUL</span>
            </h1>

            <p className="text-[#78716c] text-base md:text-lg max-w-md mb-8 leading-relaxed font-cormorant">
              Where darkness meets glamour. Our collection brings supernatural radiance
              to every ritual, every night, every transformation.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#aftermath"
                className="inline-flex items-center gap-2 px-6 py-3 font-playfair text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                  boxShadow: '0 4px 20px rgba(236,72,153,0.3)',
                }}
              >
                Explore La Collection
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[#78716c]/50 text-xs tracking-wider">
                Click the ghoul to glamour!
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center h-[60vh] relative">
            <div
              className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, #ec4899, transparent 70%)' }}
            />
            <div
              className="absolute w-48 h-48 rounded-full opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)', animation: 'float-around 8s ease-in-out infinite' }}
            />
          </div>
        </div>
      </section>

      {/* ===== THE AFTERMATH ===== */}
      <section id="aftermath" ref={aftermathRef} className="relative py-24 md:py-40 px-4 md:px-8 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 md:mb-24">
            <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
              style={{ color: '#292524' }}>
              THE RITUAL ENDS.
              <br />
              <span className="text-[#ec4899]">
                THE TRANSFORMATION BEGINS.
              </span>
            </h2>
            <p className="text-[#78716c] text-lg max-w-xl font-cormorant">
              Smudged liner at 3am. Glitter in your coffee. A tube of crimson lipstick
              that won't come off your collar. We don't judge the aftermath. We perfect it.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Sparkles, value: '100%', label: 'Radiance', color: '#ec4899' },
              { icon: Diamond, value: '0', label: 'Stains Left', color: '#a855f7' },
              { icon: Gem, value: '∞', label: 'Transformations', color: '#fbbf24' },
            ].map((stat, i) => (
              <div
                key={i}
                className="reveal relative p-6 md:p-8 border"
                style={{
                  borderColor: `${stat.color}30`,
                  background: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                <div className="absolute -top-3 left-4 px-2 text-[10px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: stat.color, background: '#faf7f2' }}>
                  Certified
                </div>
                <stat.icon className="w-6 h-6 mb-4" style={{ color: stat.color }} />
                <div className="font-playfair text-3xl md:text-4xl mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-[#78716c] text-xs tracking-wider uppercase font-cormorant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE SCIENCE ===== */}
      <section ref={scienceRef} className="relative py-24 md:py-40 px-4 md:px-8 bg-[#faf7f2] border-t border-[#ec4899]/10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#ec4899]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#ec4899]">
                Proprietary Technology
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-6xl text-[#292524] mb-4">
              {config.science.title}
            </h2>
            <p className="text-[#a855f7] text-xl md:text-2xl font-playfair mb-6">
              {config.science.subtitle}
            </p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <p className="text-[#78716c] text-base leading-relaxed font-cormorant">
              {config.science.description}
            </p>
            <p className="text-[#78716c]/70 text-sm leading-relaxed font-cormorant">
              {config.science.adaptation}
            </p>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.science.stats.map((stat, i) => (
              <div key={i} className="p-5 border text-center"
                style={{ borderColor: '#ec489920', background: 'rgba(255,255,255,0.6)' }}>
                <div className="font-playfair text-2xl md:text-3xl text-[#ec4899] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#78716c] text-[10px] tracking-wider uppercase font-cormorant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS - TABBED BROWSER ===== */}
      <section ref={productRef} className="relative py-24 md:py-40 px-4 md:px-8 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-12 md:mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#ec4899] mb-4 block">
              Product Architecture
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#292524] mb-4">
              LA COLLECTION
            </h2>
            <p className="text-[#78716c] max-w-md font-cormorant">
              Five product lines. Nine formulations. One mission: supernatural beauty, effortlessly.
            </p>
          </div>

          {/* Tabs */}
          <div className="reveal flex flex-wrap gap-2 mb-8">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              const count = config.products.filter((p) => p.category === tab.key).length;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #ec4899, #a855f7)' : 'rgba(255,255,255,0.6)',
                    color: isActive ? '#fff' : '#78716c',
                    border: isActive ? 'none' : '1px solid #ec489930',
                    boxShadow: isActive ? '0 4px 15px rgba(236,72,153,0.2)' : 'none',
                  }}
                >
                  <tab.icon className="w-3 h-3" />
                  {tab.label}
                  <span className="text-[10px] opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#ec4899', '#a855f7', '#fbbf24', '#ec4899', '#a855f7'];
              const color = colors[i % colors.length];

              return (
                <div
                  key={i}
                  className="reveal group relative p-6 border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: `${color}20`,
                    background: 'rgba(255,255,255,0.7)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 8px 30px ${color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${color}20`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Wax seal */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-[#faf7f2]"
                    style={{ borderColor: `${color}30` }}>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border"
                      style={{ borderColor: `${color}30` }}>
                      <span className="text-lg">{config.icon}</span>
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-1 border"
                      style={{ color, borderColor: `${color}30` }}>
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-playfair text-lg text-[#292524] mb-1 tracking-wide">
                    {product.name.toUpperCase()}
                  </h3>
                  <p className="text-[#ec4899] text-xs font-bold mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-[#78716c] text-xs leading-relaxed mb-4 font-cormorant">
                    {product.description}
                  </p>

                  {product.heroIngredient && (
                    <div className="mb-3">
                      <span className="text-[9px] tracking-wider uppercase text-[#78716c]/50">
                        Powered by
                      </span>
                      <span className="text-[10px] font-bold ml-2" style={{ color }}>
                        {product.heroIngredient}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-1 mb-4">
                    {product.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-[10px] text-[#78716c]/70 font-cormorant">
                        <span className="w-1 h-1 rounded-full" style={{ background: color }} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: `${color}15` }}>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716c]/50">
                      {product.volume}
                    </span>
                    <span className="text-sm font-bold font-playfair" style={{ color }}>
                      {product.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LINEUP (UNIVERSE) ===== */}
      <section ref={lineupRef} className="relative py-24 md:py-40 px-4 md:px-8 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a855f7] mb-4 block">
              La Collection Universelle
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl text-[#292524] mb-4">
              THE GHOULVERSE
            </h2>
            <p className="text-[#78716c] max-w-lg mx-auto font-cormorant">
              Eight legendary houses. One infinite universe. Discover them all.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
            {OTHER_GHOULS.map((g) => {
              const isHeadliner = ['goo', 'beauty'].includes(g.id);
              const isSpecial = ['party', 'garden'].includes(g.id);

              return (
                <a
                  key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group relative p-4 md:p-6 border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  style={{
                    borderColor: isHeadliner ? `${g.color}40` : `${g.color}15`,
                    background: isHeadliner
                      ? `linear-gradient(135deg, ${g.color}08, transparent)`
                      : 'rgba(255,255,255,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = g.color;
                    e.currentTarget.style.boxShadow = `0 8px 25px ${g.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isHeadliner ? `${g.color}40` : `${g.color}15`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isHeadliner && (
                    <div className="absolute top-2 right-2 text-[8px] font-bold tracking-[0.2em] uppercase px-1.5 py-0.5"
                      style={{ color: g.color, border: `1px solid ${g.color}40` }}>
                      Signature
                    </div>
                  )}
                  {isSpecial && (
                    <div className="absolute top-2 right-2 text-[8px] font-bold tracking-[0.2em] uppercase px-1.5 py-0.5"
                      style={{ color: g.color, border: `1px solid ${g.color}30` }}>
                      Exclusive
                    </div>
                  )}

                  <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {g.icon}
                  </div>

                  <h3 className="font-playfair text-xs md:text-sm text-[#292524] tracking-wider mb-0.5">
                    {g.name}
                  </h3>
                  <p className="text-[#78716c]/60 text-[10px] uppercase tracking-wider font-cormorant">
                    {g.realm}
                  </p>
                  {!g.live && (
                    <span className="text-[9px] text-[#78716c]/40 uppercase tracking-wider block mt-1">
                      TBA
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="reveal text-center">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-playfair text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                boxShadow: '0 4px 30px rgba(236,72,153,0.3)',
              }}
            >
              Enter the GHOULVERSE
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-24 md:py-40 px-4 md:px-8 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto">
          <div
            className="reveal relative p-8 md:p-16 text-center overflow-hidden border"
            style={{
              borderColor: '#ec489930',
              background: 'linear-gradient(135deg, rgba(236,72,153,0.05), rgba(168,85,247,0.05))',
            }}
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#ec4899]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#a855f7]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#a855f7]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#ec4899]" />

            <Gamepad2 className="reveal w-12 h-12 text-[#ec4899] mx-auto mb-6" />

            <h2 className="reveal font-playfair text-4xl md:text-6xl text-[#292524] mb-4">
              PLAY GHOULVERSE
            </h2>

            <p className="reveal text-[#78716c] max-w-xl mx-auto mb-8 font-cormorant">
              Pilot {config.name} through the Void in this epic endless runner.
              Battle bacteria, unlock all 8 ghouls, and claim your place on the leaderboard.
            </p>

            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative z-10 inline-flex items-center gap-2 px-8 py-4 font-playfair text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                boxShadow: '0 4px 30px rgba(236,72,153,0.3)',
              }}
            >
              <Gamepad2 className="w-5 h-5" />
              PLAY NOW
            </a>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO STRIP ===== */}
      <section ref={portfolioRef} className="relative py-16 md:py-24 px-4 md:px-8 bg-[#faf7f2] border-t border-[#ec4899]/10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#78716c]/50 mb-2 block">
              The House of GHOUL
            </span>
            <h3 className="font-playfair text-2xl md:text-3xl text-[#292524]">
              THE GHOULVERSE PORTFOLIO
            </h3>
          </div>

          <div className="reveal grid grid-cols-4 md:grid-cols-8 gap-3">
            {config.crossLinks.map((g) => {
              const isActive = g.id === config.id;
              const productCount = g.id === config.id ? config.products.length : '-';

              return (
                <a
                  key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-center p-3 md:p-4 transition-all duration-300"
                  style={{
                    background: isActive ? `${g.color}10` : 'rgba(255,255,255,0.5)',
                    border: isActive ? `1px solid ${g.color}` : '1px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = `${g.color}30`;
                      e.currentTarget.style.background = `${g.color}05`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
                    }
                  }}
                >
                  <div className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {g.icon}
                  </div>
                  <p className="text-[9px] md:text-[10px] font-bold tracking-wider uppercase text-[#292524] mb-0.5">
                    {g.name.replace(' GHOUL', '')}
                  </p>
                  <p className="text-[8px] text-[#78716c]/40 uppercase tracking-wider font-cormorant">
                    {g.realm}
                  </p>
                  {isActive && (
                    <span className="text-[8px] mt-1 inline-block px-1.5 py-0.5"
                      style={{ color: g.color, border: `1px solid ${g.color}30` }}>
                      {productCount} Products
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FOOTER / CTA ===== */}
      <section ref={ctaRef} className="relative py-24 md:py-40 px-4 md:px-8 bg-[#faf7f2]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#ec4899] mb-4 block">
              {config.id === 'party' ? 'Guest List' : 'Investor Relations'}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#292524] mb-4">
              {config.cta.headline}
            </h2>
            <p className="text-[#78716c] font-cormorant">
              {config.cta.subheadline}
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input
              type="email"
              placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-4 font-cormorant text-sm text-[#292524] placeholder:text-[#78716c]/40 outline-none transition-all bg-transparent border"
              style={{ borderColor: '#ec489930' }}
            />
            <button
              className="px-8 py-4 font-playfair text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                boxShadow: '0 4px 20px rgba(236,72,153,0.3)',
              }}
            >
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-3 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#ec4899', '#a855f7', '#fbbf24'];
              return (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center transition-all hover:scale-110 border"
                  style={{
                    borderColor: `${colors[i]}30`,
                    background: 'rgba(255,255,255,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors[i];
                    e.currentTarget.style.boxShadow = `0 4px 15px ${colors[i]}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${colors[i]}30`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </a>
              );
            })}
          </div>

          <div className="reveal mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-cormorant">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716c] hover:text-[#ec4899] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Ghost className="w-3 h-3" />
              Explore the GHOULVERSE
            </a>
            <span className="text-[#78716c]/20 hidden sm:inline">|</span>
            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716c] hover:text-[#a855f7] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Gamepad2 className="w-3 h-3" />
              Play GHOULVERSE
            </a>
          </div>

          <p className="reveal text-[#78716c]/30 text-xs tracking-wider font-cormorant">
            &copy; 2025 <span className="font-playfair text-[#ec4899]/60">{config.name}</span> — All rights reserved.
          </p>
          <p className="reveal text-[#78716c]/20 text-[10px] mt-2 tracking-wider font-cormorant">
            {config.name} is part of the{' '}
            <a href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'} target="_blank" rel="noopener noreferrer"
              className="hover:text-[#ec4899] transition-colors">
              GHOULVERSE
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
