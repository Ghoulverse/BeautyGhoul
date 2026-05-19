import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, ExternalLink, Sparkles, Heart, Star, Gem,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';

gsap.registerPlugin(ScrollTrigger);

const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');
const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');

const PRODUCT_ICONS = [Sparkles, Heart, Star, Gem, Sparkles];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.4,
        });
      }

      const sections = [philosophyRef, productRef, circleRef, gameRef, ctaRef];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
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

  return (
    <div className="relative font-inter">
      {/* Soft noise overlay */}
      <div className="noise-overlay" />

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8"
        style={{ background: 'linear-gradient(180deg, rgba(250,245,240,0.9), transparent)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{config.icon}</span>
            <span className="font-playfair text-base tracking-widest text-[#4a1c2a]">
              {config.name}
            </span>
          </div>
          <a
            href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase text-[#9ca3af] hover:text-[#ec4899] transition-colors"
          >
            Enter the GHOULVERSE
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center px-4 md:px-8 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div ref={heroTextRef} className="md:col-span-3 z-10 pt-20 md:pt-0">
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] uppercase text-[#b76e79] border border-[#b76e79]/30 bg-[#faf5f0]">
                The Glamour Dimension
              </span>
            </div>

            <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6 text-[#4a1c2a]">
              Beauty
              <br />
              <span className="italic" style={{ color: '#ec4899' }}>Ghoul</span>
            </h1>

            <p className="text-[#9ca3af] text-base md:text-lg max-w-md mb-8 leading-relaxed font-light">
              {config.tagline}. Transform your vanity from battlefield to sanctuary.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 px-6 py-3 font-playfair text-sm tracking-wider transition-all hover:scale-105 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #b76e79)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(236,72,153,0.3)',
                }}
              >
                Discover
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[#9ca3af]/60 text-xs tracking-wider">
                Click the ghoul for a touch of glamour
              </span>
            </div>
          </div>

          {/* Right side decorative space */}
          <div className="hidden md:col-span-2 md:flex items-center justify-center h-[50vh] relative">
            <div
              className="absolute w-56 h-56 rounded-full opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(circle, #ec4899, transparent 70%)' }}
            />
            <div
              className="absolute w-40 h-40 rounded-full opacity-15 blur-3xl"
              style={{ background: 'radial-gradient(circle, #d4a574, transparent 70%)', animation: 'float-around 10s ease-in-out infinite' }}
            />
            {/* Decorative serif letter */}
            <div className="font-playfair text-[12rem] text-[#ec4899] opacity-[0.04] select-none">
              B
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section id="philosophy" ref={philosophyRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1 hidden md:flex justify-center">
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#ec4899]/30 to-transparent" />
            </div>

            <div className="md:col-span-10">
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#b76e79] mb-6 block">
                Our Philosophy
              </span>
              <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-8 text-[#4a1c2a]">
                Beauty is chaos
                <span className="italic" style={{ color: '#ec4899' }}> refined</span>.
              </h2>
              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-xl mb-6">
                Every masterpiece begins with a mess. Behind every flawless face is a vanity
                that has seen battle. We don't just clean — we curate, we refine, we transform.
              </p>
              <p className="text-[#9ca3af] leading-relaxed max-w-lg text-sm">
                From brush purifiers to surface polishes, our collection is designed for those
                who understand that true glamour begins with the ritual of preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE COLLECTION (PRODUCTS) ===== */}
      <section ref={productRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12 md:mb-16 text-center">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#b76e79] mb-4 block">
              La Collection
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#4a1c2a] mb-4">
              The Collection
            </h2>
            <p className="text-[#9ca3af] max-w-md mx-auto text-sm">
              Premium beauty essentials, crafted for the discerning ghoul.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {config.products.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#ec4899', '#b76e79', '#d4a574', '#ff69b4', '#c9a227'];
              const color = colors[i % colors.length];

              return (
                <div
                  key={i}
                  className="reveal group relative p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'rgba(250, 245, 240, 0.8)',
                    border: '1px solid rgba(236, 72, 153, 0.08)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}25`;
                    e.currentTarget.style.boxShadow = `0 8px 40px ${color}12`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.08)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.04)';
                  }}
                >
                  {/* Wax seal for coming soon */}
                  {product.comingSoon && (
                    <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
                        border: `2px solid ${color}30`,
                      }}>
                      <span className="text-[8px] font-bold tracking-[0.15em] uppercase text-center leading-tight"
                        style={{ color }}>
                        Coming<br/>Soon
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: `${color}12` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="font-playfair text-2xl text-[#4a1c2a]/10">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-playfair text-lg text-[#4a1c2a] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#9ca3af] text-xs leading-relaxed">
                    {product.description || 'Luxury formulation for the modern beauty ritual.'}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#ec4899]/8 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af]/50">
                      Beauty Essential
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== THE CIRCLE (UNIVERSE) ===== */}
      <section ref={circleRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#b76e79] mb-4 block">
              The Inner Circle
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#4a1c2a] mb-4">
              The GHOULVERSE
            </h2>
            <p className="text-[#9ca3af] max-w-lg mx-auto text-sm">
              Eight legendary souls. One exquisite universe.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 mb-12">
            {OTHER_GHOULS.map((g) => {
              const isVip = ['beauty', 'goo'].includes(g.id);

              return (
                <a
                  key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group relative p-5 md:p-6 rounded-2xl text-center transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: isVip
                      ? `linear-gradient(135deg, ${g.color}08, transparent)`
                      : 'rgba(250, 245, 240, 0.6)',
                    border: `1px solid ${isVip ? g.color + '25' : 'rgba(236, 72, 153, 0.06)'}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${g.color}35`;
                    e.currentTarget.style.boxShadow = `0 8px 30px ${g.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isVip ? `${g.color}25` : 'rgba(236, 72, 153, 0.06)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isVip && (
                    <span className="absolute top-2 right-2 text-[8px] font-medium tracking-wider uppercase px-1.5 py-0.5 rounded-full"
                      style={{ color: g.color, background: `${g.color}10` }}>
                      VIP
                    </span>
                  )}

                  <div className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform duration-500">
                    {g.icon}
                  </div>

                  <h3 className="font-playfair text-sm text-[#4a1c2a] mb-0.5">
                    {g.name}
                  </h3>
                  <p className="text-[#9ca3af]/60 text-[10px] uppercase tracking-wider">
                    {g.realm}
                  </p>
                  {!g.live && (
                    <span className="text-[9px] text-[#9ca3af]/40 uppercase tracking-wider block mt-1">
                      By Invitation
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
              className="inline-flex items-center gap-2 px-8 py-3.5 font-playfair text-sm tracking-wider rounded-full transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #b76e79)',
                color: '#fff',
                boxShadow: '0 4px 24px rgba(236,72,153,0.25)',
              }}
            >
              Enter the GHOULVERSE
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="reveal relative p-10 md:p-16 text-center overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(236,72,153,0.05), rgba(212,165,116,0.05))',
              border: '1px solid rgba(236, 72, 153, 0.1)',
            }}
          >
            <div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: '#ec4899' }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: '#d4a574' }}
            />

            <Gamepad2 className="reveal w-10 h-10 text-[#ec4899] mx-auto mb-6" />

            <h2 className="reveal font-playfair text-3xl md:text-5xl text-[#4a1c2a] mb-4 relative z-10">
              Play GHOULVERSE
            </h2>

            <p className="reveal text-[#9ca3af] max-w-lg mx-auto mb-8 relative z-10 text-sm">
              Pilot {config.name} through the Void in this epic endless runner.
              Battle bacteria, unlock all 8 ghouls, and claim your place on the leaderboard.
            </p>

            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative z-10 inline-flex items-center gap-2 px-8 py-3.5 font-playfair text-sm tracking-wider rounded-full transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #b76e79)',
                color: '#fff',
                boxShadow: '0 4px 24px rgba(236,72,153,0.3)',
              }}
            >
              <Gamepad2 className="w-4 h-4" />
              Play Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER / CTA ===== */}
      <section ref={ctaRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <div className="reveal mb-8">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#b76e79] mb-4 block">
              Exclusive Access
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#4a1c2a] mb-4">
              {config.cta.headline}
            </h2>
            <p className="text-[#9ca3af] text-sm">
              {config.cta.subheadline}
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input
              type="email"
              placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-3.5 text-sm text-[#4a1c2a] placeholder:text-[#9ca3af]/50 outline-none transition-all bg-white/60 rounded-full border border-[#ec4899]/10 focus:border-[#ec4899]/30"
            />
            <button
              className="px-8 py-3.5 font-playfair text-sm tracking-wider rounded-full transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #b76e79)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(236,72,153,0.25)',
              }}
            >
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-3 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#ec4899', '#b76e79', '#d4a574'];
              return (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: 'rgba(250, 245, 240, 0.8)',
                    border: `1px solid ${colors[i]}20`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${colors[i]}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${colors[i]}20`;
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </a>
              );
            })}
          </div>

          <div className="reveal mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-[#ec4899] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Ghost className="w-3 h-3" />
              Explore the GHOULVERSE
            </a>
            <span className="text-[#9ca3af]/20 hidden sm:inline">|</span>
            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-[#b76e79] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Gamepad2 className="w-3 h-3" />
              Play GHOULVERSE
            </a>
          </div>

          <p className="reveal text-[#9ca3af]/30 text-xs tracking-wider">
            &copy; 2025 <span className="font-playfair text-[#ec4899]/50">{config.name}</span> — All rights reserved.
          </p>
          <p className="reveal text-[#9ca3af]/20 text-[10px] mt-2 tracking-wider">
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
