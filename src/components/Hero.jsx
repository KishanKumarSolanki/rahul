import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  BarChart3,
} from 'lucide-react';
import { ECOSYSTEM_PARTNERS } from '../data/landingData';

export default function Hero({ onOpenModal }) {
  const [imgError, setImgError] = useState(false);
  const partnerStrip = [...ECOSYSTEM_PARTNERS, ...ECOSYSTEM_PARTNERS];

  return (
    <section className="relative bg-[#FAFAFA] bg-grid-pattern pt-10 sm:pt-14 pb-0 overflow-hidden border-b border-slate-200">
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-[#FF551A]/10 blur-[120px] rounded-full"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF551A]/10 border border-[#FF551A]/20 text-[#FF551A] text-xs font-extrabold tracking-widest uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF551A] animate-pulse" />
          RAHUL BHATIYA • D2C GROWTH PARTNER
        </div>

        {/* Main H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-slate-950 leading-[1.08] max-w-4xl mx-auto">
          Scale Before Your D2C Brand{' '}
          <span className="text-[#FF551A]">Goes Under.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-5 text-lg sm:text-xl md:text-2xl font-bold text-slate-800 max-w-3xl mx-auto leading-snug">
          Your rising ad spend won&apos;t save your business. Profitable customer acquisition will.
        </p>

        {/* Body Copy */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Burning cash on Meta Ads, struggling with high CAC, increasing RTO and declining profits?
          If you&apos;re spending <span className="font-semibold text-slate-900">₹2L–₹1Cr every month</span> but
          your brand isn&apos;t scaling, it&apos;s time to fix what&apos;s holding your growth back.
        </p>

        {/* Bold Anchor Line */}
        <p className="mt-4 text-base sm:text-lg font-extrabold text-slate-950">
          Stop burning money. Start building a profitable growth system.
        </p>

        {/* Primary CTA */}
        <div className="mt-7 flex flex-col items-center">
          <button
            onClick={onOpenModal}
            className="group inline-flex items-center justify-center gap-3 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm sm:text-base tracking-wide px-7 sm:px-9 py-4 sm:py-4.5 rounded-2xl shadow-glow transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>FIX MY D2C BRAND&apos;S SCALING PROBLEM</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <span className="mt-2.5 text-xs font-medium text-slate-500">
            For established D2C brands spending ₹2L–₹1Cr/month on Meta Ads
          </span>
        </div>

        {/* Hero Visual Stage: Executive Portrait + Floating Performance Cards */}
        <div className="relative mt-10 sm:mt-12 max-w-4xl mx-auto pt-4">
          {/* Floating Card Top-Left */}
          <div className="hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card rounded-2xl px-4 py-3 text-left absolute left-2 lg:left-6 top-10 z-20 animate-float">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Unit Economics
              </div>
              <div className="text-sm font-extrabold text-slate-900">
                ROAS &amp; Contribution Profit
              </div>
            </div>
          </div>

          {/* Floating Card Top-Right */}
          <div className="hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card rounded-2xl px-4 py-3 text-left absolute right-2 lg:right-6 top-14 z-20 animate-float-delayed">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF551A]">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Order Quality
              </div>
              <div className="text-sm font-extrabold text-slate-900">
                CAC &amp; RTO Optimization
              </div>
            </div>
          </div>

          {/* Floating Card Bottom-Left */}
          <div className="hidden md:flex items-center gap-3 bg-slate-950 text-white border border-slate-800 shadow-xl rounded-2xl px-4 py-3 text-left absolute left-4 lg:left-10 bottom-8 z-20 animate-float-delayed">
            <div className="w-10 h-10 rounded-xl bg-[#0668E1]/20 border border-[#0668E1]/40 flex items-center justify-center text-[#3b82f6]">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Ad Spend Focus
              </div>
              <div className="text-sm font-extrabold text-white">
                ₹2L–₹1Cr/Mo Scaling
              </div>
            </div>
          </div>

          {/* Floating Card Bottom-Right */}
          <div className="hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card rounded-2xl px-4 py-3 text-left absolute right-4 lg:right-10 bottom-10 z-20 animate-float">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0668E1]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Experimentation
              </div>
              <div className="text-sm font-extrabold text-slate-900">
                Data-Driven Creative Testing
              </div>
            </div>
          </div>

          {/* Center Framed Portrait */}
          <div className="relative mx-auto w-[280px] sm:w-[330px] md:w-[360px] rounded-t-3xl bg-gradient-to-b from-slate-200/80 via-slate-100 to-white border-x border-t border-slate-300/80 shadow-2xl overflow-hidden pt-4 px-4">
            <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 bg-slate-950/90 text-white text-[11px] font-bold px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF551A]" />
              <span>D2C Partner</span>
            </div>

            {!imgError ? (
              <img
                src="/rahul-bhatiya.png"
                alt="Rahul Bhatiya — D2C Growth Partner"
                onError={() => setImgError(true)}
                className="w-full h-[330px] sm:h-[380px] object-cover object-top rounded-t-2xl"
              />
            ) : (
              <div className="w-full h-[330px] sm:h-[380px] rounded-t-2xl bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center text-white p-6">
                <div className="w-24 h-24 rounded-full bg-[#FF551A] flex items-center justify-center text-3xl font-extrabold mb-3">
                  RB
                </div>
                <div className="font-bold text-lg">Rahul Bhatiya</div>
                <div className="text-xs text-slate-400 mt-1">D2C Growth Partner</div>
              </div>
            )}
          </div>

          {/* Mobile Metric Pills */}
          <div className="grid grid-cols-2 gap-2.5 mt-4 md:hidden text-left">
            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
              <div className="text-[10px] font-bold uppercase text-slate-400">Unit Economics</div>
              <div className="text-xs font-extrabold text-slate-900 mt-0.5">
                ROAS &amp; Profit Focus
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
              <div className="text-[10px] font-bold uppercase text-slate-400">Order Quality</div>
              <div className="text-xs font-extrabold text-slate-900 mt-0.5">
                CAC &amp; RTO Control
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Logo Strip */}
      <div className="mt-8 bg-white border-t border-slate-200 py-4 overflow-hidden marquee-wrapper">
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
