import BeautyMascot from '@/components/BeautyMascot';
import BeautyParticles from '@/components/BeautyParticles';
import Home from '@/pages/Home';
import CookieBanner from '@/components/CookieBanner';

export default function App() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Ambient beauty particles (sparkles, hearts, petals) */}
      <BeautyParticles />

      {/* The interactive beauty mascot */}
      <BeautyMascot />

      {/* Page content */}
      <Home />
      <CookieBanner />
</>
  );
}
