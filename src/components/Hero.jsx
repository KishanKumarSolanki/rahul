import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { ECOSYSTEM_PARTNERS } from '../data/landingData';

/*
 * Hover cards config.
 * Mobile: small cards pinned to the corners, may extend beyond the portrait.
 * sm and up: slightly larger cards floating around the stage.
 */
const HOVER_CARDS = [
  {
    id: 'order-quality',
    eyebrow: 'Order Quality',
    title: 'CAC & RTO Optimization',
    icon: TrendingDown,
    iconClass: 'from-[#FF7A45] to-[#FF551A] shadow-orange-500/30',
    anim: 'animate-float-delayed',
    pos: 'left-[-20px] top-[60%] sm:-right-4 sm:top-16 lg:right-2',
  },
  {
    id: 'unit-economics',
    eyebrow: 'Unit Economics',
    title: 'ROAS & Contribution Profit',
    icon: TrendingUp,
    iconClass: 'from-emerald-400 to-emerald-600 shadow-emerald-500/30',
    anim: 'animate-float',
    pos: 'right-[-20px] bottom-[100px] sm:-left-4 sm:top-24 sm:bottom-auto lg:left-2',
  },
  {
    id: 'experimentation',
    eyebrow: 'Experimentation',
    title: 'Data-Driven Creative Testing',
    icon: Sparkles,
    iconClass: 'from-[#3B8BFF] to-[#0668E1] shadow-blue-500/30',
    anim: 'animate-float',
    pos: 'left-[-20px] bottom-[35px] sm:-right-2 sm:bottom-12 lg:right-4',
  },
];

function HoverCard({ eyebrow, title, icon: Icon, iconClass, anim, pos }) {
  return (
    <div
      className={[
        'absolute z-20 flex items-center gap-2 sm:gap-3',
        'rounded-2xl whitespace-nowrap',
        'px-2.5 py-2 sm:px-4 sm:py-3 text-left',
        'bg-white/85 backdrop-blur-xl',
        'border border-white/80 ring-1 ring-slate-900/5',
        'shadow-[0_18px_40px_-12px_rgba(15,23,42,0.25)]',
        anim,
        pos,
      ].join(' ')}
    >
      <div
        className={[
          'flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl',
          'bg-gradient-to-br text-white shadow-lg',
          iconClass,
        ].join(' ')}
      >
        <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" strokeWidth={2.4} />
      </div>
      <div className="flex flex-col">
        <span className="text-[8px] sm:text-[10.5px] font-bold uppercase tracking-[0.12em] leading-none mb-1 text-[#FF551A]">
          {eyebrow}
        </span>
        <span className="text-[10px] sm:text-sm font-extrabold leading-tight text-slate-900">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function Hero({ onOpenModal }) {
  const [imgError, setImgError] = useState(false);
  const partnerStrip = [...ECOSYSTEM_PARTNERS, ...ECOSYSTEM_PARTNERS];

  return (
    <section className="relative bg-[#FAFAFA] bg-grid-pattern pt-5 sm:pt-7 pb-0 overflow-hidden border-b border-slate-200">
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-[#FF551A]/10 blur-[120px] rounded-full"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF551A]/10 border border-[#FF551A]/20 text-[#FF551A] text-xs font-extrabold tracking-widest uppercase mb-5">
          <span className="w-2 h-2 rounded-full bg-[#FF551A] animate-pulse" />
          RAHUL BHATIYA • D2C GROWTH PARTNER
        </div>

        {/* Main H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-slate-950 leading-[1.08] max-w-4xl mx-auto">
          Scale Before Your D2C Brand{' '}
          <span className="text-[#FF551A]">Goes Under.</span>
        </h1>

        {/* Sub-headline (two lines) */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-slate-800 max-w-3xl mx-auto leading-snug">
          Your rising ad spend won&apos;t save your business.
          <br />
          Profitable customer acquisition will.
        </p>

        {/* Body Copy */}
        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Burning ₹2L– ₹1Cr on Meta Ads but facing high CAC, rising RTO and low profits? Fix what&apos;s stopping your brand from scaling.
        </p>

        {/* Hero Visual Stage: Portrait + Hover Cards */}
        <div className="relative mx-auto mt-12 w-[340px] sm:w-full sm:max-w-4xl">
          {/* Hover Cards (may extend beyond the portrait edges) */}
          {HOVER_CARDS.map((card) => (
            <HoverCard key={card.id} {...card} />
          ))}

          {/* Portrait frame: all four corners rounded 18px */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[410px] md:max-w-[450px] lg:max-w-[480px] rounded-[18px] p-[1.5px] bg-gradient-to-b from-[#FF551A]/40 via-white to-slate-200 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)]">
            <div className="relative overflow-hidden rounded-[16.5px] bg-slate-100">
              {/* D2C Partner badge */}
              <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF551A]" />
                <span>D2C Partner</span>
              </div>

              {!imgError ? (
                <img
                  src="/rahul-bhatiya.png"
                  alt="Rahul Bhatiya — D2C Growth Partner"
                  onError={() => setImgError(true)}
                  className="block w-full h-auto aspect-[1122/1402] object-contain object-top"
                />
              ) : (
                <div className="w-full aspect-[1122/1402] min-h-[440px] bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center text-white p-6">
                  <div className="w-24 h-24 rounded-full bg-[#FF551A] flex items-center justify-center text-3xl font-extrabold mb-3 shadow-lg">
                    RB
                  </div>
                  <div className="font-bold text-lg">Rahul Bhatiya</div>
                  <div className="text-xs text-slate-400 mt-1">D2C Growth Partner</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA block */}
        <div className="mt-10 sm:mt-12 pb-12 sm:pb-16 flex flex-col items-center">
          <p className="text-base sm:text-lg font-extrabold text-slate-950">
            Stop burning money. Start building a profitable growth system.
          </p>

          <button
            onClick={onOpenModal}
            className="group mt-5 inline-flex items-center justify-center gap-3 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm sm:text-base tracking-wide px-7 sm:px-9 py-4 sm:py-4.5 rounded-2xl shadow-glow transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>BOOK MY STRATEGY CALL</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <span className="mt-2.5 text-xs font-medium text-slate-500">
            For established D2C brands spending ₹2L– ₹1Cr/month on Meta Ads
          </span>
        </div>
      </div>

      {/* Ecosystem Logo Strip */}
      <div className="bg-white border-t border-slate-200 py-4 overflow-hidden marquee-wrapper">
        <div className="flex whitespace-nowrap animate-marquee-slow w-max items-center">
          {partnerStrip.map((partner, index) => (
            <div
              key={index}
              className="mx-6 sm:mx-10 flex items-center gap-2.5 text-slate-400 hover:text-slate-800 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-700">
                {partner.name}
              </span>
              <span className="text-xs font-medium text-slate-400 hidden sm:inline">
                ({partner.tag})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}