import React from 'react';
import { Award, CheckCircle2, X, Check, ArrowRight } from 'lucide-react';
import { MARKETER_TRAITS } from '../data/landingData';

export default function Differentiation({ onOpenModal }) {
  return (
    <section className="py-16 sm:py-24 bg-[#09090B] bg-dark-grid text-white relative overflow-hidden">
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-0 w-[480px] h-[480px] bg-[#FF551A]/10 blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Headline + Comparison Card */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF551A]/15 border border-[#FF551A]/30 text-[#FF551A] text-xs font-extrabold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>MINDSET &amp; EXECUTION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight">
              What Makes a Real{' '}
              <span className="text-[#FF551A]">Performance Marketer?</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              A real performance marketer doesn&apos;t just launch campaigns and wait for purchases.
              They understand the business behind the numbers.
            </p>

            {/* Comparison Matrix */}
            <div className="mt-8 rounded-3xl bg-[#14141B] border border-[#262631] p-6 shadow-xl">
              <div className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
                The Core Difference
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4">
                  <div className="font-extrabold text-slate-400 mb-3">
                    Media Buyer <span className="block text-[11px] font-normal">(Runs Ads)</span>
                  </div>
                  <ul className="space-y-2.5 text-slate-400">
                    <li className="flex items-start gap-1.5">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>Chases vanity ROAS</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>Ignores RTO &amp; margins</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>Guesses ad changes</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#FF551A]/10 border border-[#FF551A]/35 p-4">
                  <div className="font-extrabold text-white mb-3">
                    Growth Partner <span className="block text-[11px] font-normal text-[#FF551A]">(Scales Profit)</span>
                  </div>
                  <ul className="space-y-2.5 text-slate-200">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Optimises net profit</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Tracks CAC, AOV &amp; RTO</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Tests systematically</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Trait Cards */}
          <div className="lg:col-span-7 space-y-4">
            {MARKETER_TRAITS.map((trait, index) => (
              <div
                key={index}
                className="bg-[#14141B] hover:bg-[#191922] border border-[#262631] hover:border-[#FF551A]/40 rounded-2xl p-5 sm:p-6 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#FF551A]/15 border border-[#FF551A]/30 text-[#FF551A] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">{trait.title}</h3>
                    <p className="mt-1 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Highlight Banner */}
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#FF551A]/20 via-[#FF551A]/10 to-transparent border border-[#FF551A]/35 p-5 sm:p-6">
              <p className="text-base sm:text-lg font-extrabold text-white leading-snug">
                That&apos;s the difference between someone who runs ads and someone who understands
                performance marketing.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center justify-center gap-3 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm sm:text-base tracking-wide px-7 py-4 rounded-2xl shadow-glow transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>PARTNER FOR PROFITABLE SCALE</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
