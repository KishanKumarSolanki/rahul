import React from 'react';
import { Layers, RefreshCw, ArrowRight, Check } from 'lucide-react';
import { SCALING_STEPS } from '../data/landingData';

export default function Methodology({ onOpenModal }) {
  return (
    <section id="framework" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF551A]/10 text-[#FF551A] text-xs font-extrabold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>THE GROWTH FRAMEWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 leading-tight">
            The Right Way to <span className="text-[#FF551A]">Scale</span> Your D2C Brand
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Scaling isn&apos;t about increasing your daily budget. It&apos;s about building a system that
            makes every marketing decision count.
          </p>
        </div>

        {/* 2-Column Roadmap + Sticky Flywheel */}
        <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* 7 Step Cards */}
          <div className="lg:col-span-7 space-y-4">
            {SCALING_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-slate-200/90 hover:border-[#FF551A]/40 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-card transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex flex-col items-center">
                    <span className="px-3 py-1.5 rounded-xl bg-[#FF551A] text-white font-extrabold text-xs tracking-wider shadow-sm">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF551A] bg-[#FF551A]/10 px-2.5 py-0.5 rounded-md">
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sticky Flywheel Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#09090B] text-white rounded-3xl p-6 sm:p-8 border border-[#262631] shadow-2xl relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 bg-[#FF551A]/20 blur-[80px] rounded-full"
              />

              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#FF551A] mb-3">
                <RefreshCw className="w-4 h-4" />
                <span>D2C SCALING FLYWHEEL</span>
              </div>

              <h3 className="text-2xl font-extrabold leading-snug">
                3 Pillars Behind Profitable Scale
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Every step feeds data back into the next cycle so CAC stays controlled as spend grows.
              </p>

              <div className="mt-6 space-y-3.5">
                <div className="rounded-2xl bg-[#14141B] border border-[#262631] p-4">
                  <div className="text-xs font-extrabold text-[#FF551A] uppercase tracking-wider">
                    Phase 01 • Steps 01–02
                  </div>
                  <div className="text-base font-extrabold text-white mt-0.5">
                    Research &amp; Creative Engine
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Buyer psychology + structured hook &amp; angle testing to find repeatable winners.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#14141B] border border-[#262631] p-4">
                  <div className="text-xs font-extrabold text-[#0668E1] uppercase tracking-wider">
                    Phase 02 • Steps 03–05
                  </div>
                  <div className="text-base font-extrabold text-white mt-0.5">
                    Media Buying &amp; Strategic Scaling
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Data-backed Meta Ads optimisation and disciplined budget scaling on proven winners.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#14141B] border border-[#262631] p-4">
                  <div className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
                    Phase 03 • Steps 06–07
                  </div>
                  <div className="text-base font-extrabold text-white mt-0.5">
                    Funnel CRO &amp; RTO Control
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Checkout bottleneck fixes + purchase quality &amp; RTO monitoring to protect net margins.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Check className="w-4 h-4" /> Built for ₹2L–₹1Cr/Mo Brands
                </span>
              </div>

              <button
                onClick={onOpenModal}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm py-3.5 px-5 rounded-xl transition-all shadow-glow"
              >
                <span>Deploy This System For My Brand</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
