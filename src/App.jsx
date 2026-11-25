import React, { useState, useEffect } from 'react';
import TopTicker from './components/TopTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Methodology from './components/Methodology';
import Differentiation from './components/Differentiation';
import CampaignProof from './components/CampaignProof';
import AboutPartner from './components/AboutPartner';
import Qualification from './components/Qualification';
import Testimonials from './components/Testimonials';
import FinalCta from './components/FinalCta';
import StickyBottomBar from './components/StickyBottomBar';
import StrategyModal from './components/StrategyModal';
import VideoModal from './components/VideoModal';
import { trackMetaCtaClick, trackViewContent } from './utils/metaPixel';

export const LEAD_FORM_URL =
  'https://lead365.in/f/only-for-brands-spending-atleast-inr-60-80k-per-month-wzTsvik8';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // ViewContent — fires once when page loads
  useEffect(() => {
    trackViewContent();
  }, []);

  const handleOpenBooking = (source = 'CTA Button') => {
    trackMetaCtaClick(source);
    window.open(LEAD_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <TopTicker />
      {/* <Navbar onOpenModal={() => handleOpenBooking('Navbar')} /> */}

      <main className="flex-1">
        <Hero onOpenModal={() => handleOpenBooking('Hero')} />
        <PainPoints onOpenModal={() => handleOpenBooking('PainPoints')} />
        <Methodology onOpenModal={() => handleOpenBooking('Methodology')} />
        <Differentiation onOpenModal={() => handleOpenBooking('Differentiation')} />
        <CampaignProof onOpenModal={() => handleOpenBooking('CampaignProof')} />
        <AboutPartner onOpenModal={() => handleOpenBooking('AboutPartner')} />
        <Qualification onOpenModal={() => handleOpenBooking('Qualification')} />
        <Testimonials />
        <FinalCta onOpenModal={() => handleOpenBooking('FinalCta')} />
      </main>

      <StickyBottomBar onOpenModal={() => handleOpenBooking('StickyBottomBar')} />

      <StrategyModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onBookCall={() => handleOpenBooking('VideoModal')}
      />
    </div>
  );
}
