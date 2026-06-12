import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, ExternalLink, Sparkles, Gem, Crown, Diamond,
  Briefcase, Building2,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';
import BeautyParticles from '@/components/BeautyParticles';
import EcosystemMap from '@/components/EcosystemMap';
import MarketStats from '@/components/MarketStats';
import IPBadge from '@/components/IPBadge';
import RoadmapTimeline from '@/components/RoadmapTimeline';
import InvestorCTA from '@/components/InvestorCTA';

gsap.registerPlugin(ScrollTrigger);

const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');
const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');

const PRODUCT_ICONS = [Sparkles, Gem, Crown, Diamond, Diamond];
const TABS = [
  { key: 'core' as const, label: 'Core' },
  { key: 'pro' as const, label: 'Pro' },
  { key: 'tool' as const, label: 'Tools' },
  { key: 'refill' as const, label: 'Refills' },
  { key: 'limited' as const, label: 'Limited' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'core' | 'pro' | 'tool' | 'refill' | 'limited'>('core');
  const heroRef = useRef<HTMLDivElement>(null);
  const editorialRef = useRef<HTMLDivElement>(null);
  const scienceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const maisonRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);
  const ipRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.from('.hero-word', {
        y: 80,
        opacity: 0,
        duration: 1.4,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from('.hero-accent', {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.8,
      });

      // Editorial parallax
      if (editorialRef.current) {
        gsap.to('.editorial-img', {
          y: -60,
          scrollTrigger: {
            trigger: editorialRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Reveals
      [editorialRef, ecosystemRef, scienceRef, productRef, maisonRef, gameRef, marketRef, ipRef, roadmapRef, portfolioRef, ctaRef].forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
          });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const filtered = config.products.filter((p) => p.category === activeTab);

  return (
    <div className="relative font-cormorant min-h-screen overflow-x-hidden" style={{ background: '#faf7f2' }}>
      <BeautyParticles />
      {/* Gold shimmer overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 30%, rgba(251,191,36,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(236,72,153,0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Monogram watermark */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.015] select-none">
        <span className="font-playfair text-[40vw] text-[#292524]">B</span>
      </div>

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-5 px-6 md:px-12"
        style={{ background: 'rgba(250,247,242,0.9)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/ghoul_logo.png" alt={config.name} className="w-10 h-10 object-contain" draggable={false} />
            <div>
              <span className="font-playfair text-sm tracking-[0.25em] text-[#292524] block">{config.name}</span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#78716c]">Paris</span>
            </div>
          </div>
          <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#78716c] hover:text-[#a855f7] transition-colors">
            GHOULVERSE <ExternalLink className="w-3 h-3" />
          </a>
          <a href="#ecosystem" className="hidden md:flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#78716c] hover:text-[#ec4899] transition-colors">
            <Briefcase className="w-3 h-3" /> Investors
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-24">
          <div className="lg:col-span-7 relative z-10">
            <div className="hero-accent mb-6 flex flex-col gap-3">
              <a href="https://www.ghoulverse.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold tracking-[0.4em] uppercase border-2 border-[#f59e0b]/40 text-[#f59e0b] hover:border-[#f59e0b] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                <Building2 className="w-3 h-3" />
                House of GHOUL
              </a>
              <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase text-[#ec4899] px-3 py-1.5 border border-[#ec4899]/20">
                La Collection de Beauté
              </span>
            </div>

            <h1 className="font-playfair leading-[0.9] mb-8">
              <span className="hero-word block text-[15vw] lg:text-[11rem] text-[#292524]">Beauty</span>
              <span className="hero-word block text-[15vw] lg:text-[11rem] text-[#a855f7] italic -mt-2 lg:-mt-6">Ghoul</span>
            </h1>

            <p className="hero-word text-[#78716c] text-lg max-w-md mb-10 leading-relaxed font-cormorant">
              Where darkness meets glamour. Our collection brings supernatural radiance to every ritual, every night, every transformation.
            </p>

            <div className="hero-word flex items-center gap-6">
              <a href="#collection" className="group inline-flex items-center gap-3 px-7 py-3.5 font-playfair text-sm tracking-wider uppercase text-white transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)', boxShadow: '0 8px 30px rgba(236,72,153,0.25)' }}>
                Explore La Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-[#78716c]/40 text-xs tracking-wider">Est. 2025</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="hero-accent aspect-[3/4] relative overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(168,85,247,0.08))' }}>
              <div className="absolute inset-8 border" style={{ borderColor: '#ec489920' }} />
              <div className="w-56 h-56 md:w-72 md:h-72">
                <img src="/ghoul_mascot.png" alt="BeautyGhoul mascot" className="w-full h-full object-contain" draggable={false} style={{ animation: 'ghost-bob 2.5s ease-in-out infinite, ghost-sway 3.5s ease-in-out infinite' }} />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-playfair text-xs text-[#78716c]/60 tracking-wider uppercase">No. 001</p>
                <p className="font-playfair text-lg text-[#292524]">The Signature Collection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL ===== */}
      <section ref={editorialRef} className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="editorial-img aspect-[4/5] relative overflow-hidden"
              style={{ background: 'linear-gradient(180deg, rgba(236,72,153,0.1), rgba(168,85,247,0.05))' }}>
              <div className="absolute top-4 left-4 right-4 bottom-4 border" style={{ borderColor: '#ec489915' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10rem] opacity-[0.08]">{config.icon}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="reveal mb-6">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ec4899]">The Philosophy</span>
            </div>
            <h2 className="reveal font-playfair text-4xl md:text-5xl text-[#292524] mb-8 leading-tight">
              The ritual ends.<br />
              <span className="italic text-[#a855f7]">The transformation begins.</span>
            </h2>
            <p className="reveal text-[#78716c] text-base leading-relaxed mb-8 max-w-md font-cormorant">
              Smudged liner at 3am. Glitter in your coffee. A tube of crimson lipstick that won't come off your collar. We don't judge the aftermath. We perfect it.
            </p>

            <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '100%', label: 'Radiance', color: '#ec4899' },
                { value: '0', label: 'Stains Left', color: '#a855f7' },
                { value: '∞', label: 'Transformations', color: '#fbbf24' },
                { value: '6', label: 'HOUSE OF GHOUL', color: '#f59e0b', sub: 'Live brands' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-playfair text-3xl text-[#292524] mb-1">{stat.value}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#78716c]">{stat.label}</div>
                  {stat.sub && <div className="text-[9px] tracking-wider text-[#78716c]/60 mt-1">{stat.sub}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ECOSYSTEM ===== */}
      <section ref={ecosystemRef} id="ecosystem" className="relative py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ec4899] mb-4 block">The Portfolio</span>
            <h2 className="font-playfair text-4xl md:text-6xl text-[#292524] mb-4">THE ECOSYSTEM</h2>
            <p className="text-[#78716c] max-w-lg mx-auto font-cormorant">6 independent brands. 54 products. 1 universe. 1 game. Built on shared IP.</p>
          </div>
          <div className="reveal"><EcosystemMap /></div>
        </div>
      </section>

      {/* ===== SCIENCE ===== */}
      <section ref={scienceRef} className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ec4899] mb-4 block">Proprietary Technology</span>
            <h2 className="font-playfair text-4xl md:text-6xl text-[#292524] mb-3">The Science</h2>
            <p className="font-playfair text-xl text-[#a855f7] italic">{config.science.subtitle}</p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="p-10" style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(236,72,153,0.1)' }}>
              <p className="text-[#78716c] leading-relaxed font-cormorant text-base">{config.science.description}</p>
            </div>
            <div className="p-10" style={{ background: 'rgba(255,255,255,0.4)', border: '1px solid rgba(168,85,247,0.1)' }}>
              <p className="text-[#78716c]/70 leading-relaxed font-cormorant text-sm">{config.science.adaptation}</p>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.science.stats.map((stat, i) => (
              <div key={i} className="p-8 text-center" style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(236,72,153,0.08)' }}>
                <div className="font-playfair text-3xl text-[#ec4899] mb-2">{stat.value}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#78716c]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IP PORTFOLIO ===== */}
      <section ref={ipRef} id="ip" className="relative">
        <div className="reveal"><IPBadge /></div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section ref={productRef} id="collection" className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ec4899] mb-4 block">Product Architecture</span>
            <h2 className="font-playfair text-4xl md:text-6xl text-[#292524] mb-3">La Collection</h2>
            <p className="text-[#78716c] font-cormorant max-w-md mx-auto">Five lines. Nine formulations. Supernatural beauty, effortlessly.</p>
          </div>

          {/* Tabs */}
          <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              const count = config.products.filter((p) => p.category === tab.key).length;
              return (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                  className="px-6 py-2.5 text-xs font-bold tracking-wider uppercase transition-all min-h-11"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #ec4899, #a855f7)' : 'transparent',
                    color: isActive ? '#fff' : '#78716c',
                    border: isActive ? 'none' : '1px solid rgba(236,72,153,0.2)',
                    boxShadow: isActive ? '0 4px 20px rgba(236,72,153,0.2)' : 'none',
                  }}>
                  {tab.label} <span className="opacity-50">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Product Grid - Asymmetric editorial */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#ec4899', '#a855f7', '#fbbf24'];
              const color = colors[i % colors.length];

              return (
                <div key={i} className="reveal group relative p-8 transition-all duration-500 hover:-translate-y-2"
                  style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(236,72,153,0.08)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${color}30`; e.currentTarget.style.boxShadow = `0 20px 40px ${color}08`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}>

                  {/* Wax seal */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border-2 flex items-center justify-center bg-[#faf7f2]"
                    style={{ borderColor: `${color}25` }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>

                  <div className="mb-6">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#78716c]/50">{product.category}</span>
                  </div>

                  <h3 className="font-playfair text-xl text-[#292524] mb-2 break-words">{product.name}</h3>
                  <p className="text-[#ec4899] text-xs font-bold mb-4 italic">{product.tagline}</p>
                  <p className="text-[#78716c] text-sm leading-relaxed mb-6 font-cormorant">{product.description}</p>

                  {product.heroIngredient && (
                    <div className="mb-4 pb-4 border-b" style={{ borderColor: `${color}15` }}>
                      <span className="text-[9px] tracking-wider uppercase text-[#78716c]/40">Powered by </span>
                      <span className="text-[10px] font-bold" style={{ color }}>{product.heroIngredient}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feat, fi) => (
                      <span key={fi} className="text-[10px] px-3 py-1" style={{ color: '#78716c', background: `${color}08` }}>{feat}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: `${color}10` }}>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716c]/40">{product.volume}</span>
                    <span className="font-playfair text-lg" style={{ color }}>{product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MARKET & TRACTION ===== */}
      <section ref={marketRef} id="market" className="relative">
        <div className="reveal"><MarketStats /></div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section ref={roadmapRef} id="roadmap" className="relative">
        <div className="reveal"><RoadmapTimeline /></div>
      </section>

      {/* ===== MAISON (LINEUP) ===== */}
      <section ref={maisonRef} className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#a855f7] mb-4 block">La Maison Universelle</span>
            <h2 className="font-playfair text-4xl md:text-6xl text-[#292524] mb-3">The Ghoulverse</h2>
            <p className="text-[#78716c] font-cormorant max-w-lg mx-auto">Eight legendary houses. One infinite universe.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {OTHER_GHOULS.map((g) => (
              <a key={g.id}
                href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                target="_blank" rel="noopener noreferrer"
                className="reveal group p-6 text-center transition-all duration-500 hover:-translate-y-2"
                style={{ background: 'rgba(255,255,255,0.5)', border: `1px solid ${g.color}15` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${g.color}40`; e.currentTarget.style.boxShadow = `0 12px 30px ${g.color}08`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${g.color}15`; e.currentTarget.style.boxShadow = 'none'; }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">{g.icon}</div>
                <h3 className="font-playfair text-sm text-[#292524] tracking-wide">{g.name}</h3>
                <p className="text-[#78716c]/50 text-[10px] uppercase tracking-wider mt-1 font-cormorant">{g.realm}</p>
                {!g.live && <span className="text-[9px] text-[#78716c]/30 mt-1 block">TBA</span>}
              </a>
            ))}
          </div>

          <div className="reveal text-center">
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-playfair text-sm tracking-wider uppercase text-white transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)', boxShadow: '0 8px 30px rgba(236,72,153,0.25)' }}>
              Enter the GHOULVERSE <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="reveal relative p-12 md:p-20 text-center"
            style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(236,72,153,0.1)' }}>
            <div className="absolute top-6 left-6 right-6 bottom-6 border pointer-events-none" style={{ borderColor: '#ec489910' }} />
            <Gamepad2 className="w-10 h-10 text-[#ec4899] mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl text-[#292524] mb-4">Play GHOULVERSE</h2>
            <p className="text-[#78716c] font-cormorant max-w-md mx-auto mb-8">Pilot {config.name} through the Void. Race through the Void, unlock every ghoul, claim the leaderboard.</p>
            <a href={config.gameUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-playfair text-sm tracking-wider uppercase text-white transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)', boxShadow: '0 8px 30px rgba(236,72,153,0.25)' }}>
              <Gamepad2 className="w-4 h-4" /> Play Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section ref={portfolioRef} className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#78716c]/30 mb-2 block">The House of GHOUL</span>
            <h3 className="font-playfair text-2xl text-[#292524]">The Portfolio</h3>
          </div>
          <div className="reveal grid grid-cols-4 md:grid-cols-8 gap-3">
            {config.crossLinks.map((g) => {
              const isActive = g.id === config.id;
              return (
                <a key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank" rel="noopener noreferrer"
                  className="group text-center p-4 transition-all duration-300"
                  style={{ background: isActive ? `${g.color}08` : 'rgba(255,255,255,0.4)', border: isActive ? `1px solid ${g.color}` : '1px solid transparent' }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.borderColor = `${g.color}25`; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'transparent'; }}>
                  <div className="text-2xl group-hover:scale-110 transition-transform">{g.icon}</div>
                  <p className="text-[9px] font-bold tracking-wider uppercase text-[#292524] mt-1">{g.name.replace(' GHOUL', '')}</p>
                  {isActive && <span className="text-[8px] mt-0.5 inline-block" style={{ color: g.color }}>{config.products.length} Products</span>}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INVESTOR CTA ===== */}
      <InvestorCTA />

      {/* ===== CTA / FOOTER ===== */}
      <section ref={ctaRef} className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal mb-10">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ec4899] mb-4 block">Stay in the Loop</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#292524] mb-4">{config.cta.headline}</h2>
            <p className="text-[#78716c] font-cormorant">{config.cta.subheadline}</p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input type="email" placeholder={config.cta.placeholderText}
              className="flex-1 px-6 py-4 font-cormorant text-sm text-[#292524] placeholder:text-[#78716c]/30 outline-none bg-transparent border transition-all focus:border-[#ec4899]"
              style={{ borderColor: 'rgba(236,72,153,0.15)' }} />
            <button className="px-8 py-4 font-playfair text-sm tracking-wider uppercase text-white transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)', boxShadow: '0 8px 25px rgba(236,72,153,0.2)' }}>
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-4 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#ec4899', '#a855f7', '#fbbf24'];
              return (
                <div title="Coming soon" key={i} className="w-11 h-11 flex items-center justify-center transition-all hover:scale-110 border"
                  style={{ borderColor: `${colors[i]}20`, background: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors[i]; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${colors[i]}20`; }}>
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </div>
              );
            })}
          </div>

          <div className="reveal mb-8 flex items-center justify-center gap-4 text-xs font-cormorant">
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="text-[#78716c] hover:text-[#ec4899] transition-colors flex items-center gap-1 py-2 px-3 min-h-11">
              <Ghost className="w-3 h-3" /> Explore GHOULVERSE
            </a>
            <span className="text-[#78716c]/15">|</span>
            <a href={config.gameUrl} target="_blank" rel="noopener noreferrer"
              className="text-[#78716c] hover:text-[#a855f7] transition-colors flex items-center gap-1 py-2 px-3 min-h-11">
              <Gamepad2 className="w-3 h-3" /> Play GHOULVERSE
            </a>
            <span className="text-[#78716c]/15">|</span>
            <a href="#ecosystem" className="text-[#78716c] hover:text-[#f59e0b] transition-colors flex items-center gap-1 tracking-wider py-2 px-3 min-h-11">
              <Briefcase className="w-3 h-3" /> Investors
            </a>
          </div>

          <div className="reveal mb-4 flex items-center justify-center gap-3 text-[10px] tracking-wider uppercase text-[#78716c]/30">
            <a href="/privacy.html" className="hover:text-[#ec4899] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms.html" className="hover:text-[#ec4899] transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="/cookies.html" className="hover:text-[#ec4899] transition-colors">Cookie Policy</a>
          </div>

          <p className="reveal text-[#78716c]/20 text-xs tracking-wider font-cormorant">
            &copy; 2025 <span className="font-playfair text-[#ec4899]/40">{config.name}</span> — Part of the{' '}
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-[#ec4899] transition-colors">GHOULVERSE</a>
          </p>
        </div>
      </section>
    </div>
  );
}
