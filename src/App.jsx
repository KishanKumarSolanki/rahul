import React, { useState } from 'react';
import TopTicker from './components/TopTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Methodology from './components/Methodology';
import Differentiation from './components/Differentiation';
import CampaignProof from './components/CampaignProof';
import AboutPartner from './components/AboutPartner';
import Qualification from './components/Qualification';
import FinalCta from './components/FinalCta';
import StickyBottomBar from './components/StickyBottomBar';
import StrategyModal from './components/StrategyModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <TopTicker />
      {/* <Navbar onOpenModal={() => setIsBookingOpen(true)} /> */}

      <main className="flex-1">
        <Hero onOpenModal={() => setIsBookingOpen(true)} />
        <PainPoints onOpenModal={() => setIsBookingOpen(true)} />
        <Methodology onOpenModal={() => setIsBookingOpen(true)} />
        <Differentiation onOpenModal={() => setIsBookingOpen(true)} />
        <CampaignProof onOpenModal={() => setIsBookingOpen(true)} />
        <AboutPartner onOpenModal={() => setIsBookingOpen(true)} />
        <Qualification onOpenModal={() => setIsBookingOpen(true)} />
        <FinalCta onOpenModal={() => setIsBookingOpen(true)} />
      </main>

      <StickyBottomBar onOpenModal={() => setIsBookingOpen(true)} />

      <StrategyModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onBookCall={() => setIsBookingOpen(true)}
      />
    </div>
  );
}
