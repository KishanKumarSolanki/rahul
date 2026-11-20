import React, { useState } from 'react';
import { AlertTriangle, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { PAIN_POINTS } from '../data/landingData';

export default function PainPoints({ onOpenModal }) {
  const [viewMode, setViewMode] = useState('compare');

  return (
    <section id="bottlenecks" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading + 6 Pain Cards */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF551A]/10 text-[#FF551A] text-xs font-extrabold uppercase tracking-wider mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>THE REAL BOTTLENECK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 leading-tight">
              What&apos;s Slowly <span className="text-[#FF551A]">Killing</span> Your D2C Brand?
            </h2>

            <p className="mt-3 text-base sm:text-lg font-semibold text-slate-600">
              Your business might be generating orders, but is it actually making money?
            </p>

            <div className="mt-8 space-y-4">
              {PAIN_POINTS.map((point) => (
                <div
                  key={point.number}
                  className="group bg-[#FAFAFA] hover:bg-white border border-slate-200/90 hover:border-[#FF551A]/40 rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-sm hover:shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-[#FF551A]/10 text-[#FF551A] font-extrabold text-sm flex items-center justify-center border border-[#FF551A]/20 group-hover:bg-[#FF551A] group-hover:text-white transition-colors">
                      {point.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-extrabold text-slate-950">
                          {point.title}
                        </h3>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200/70">
                          {point.metricTag}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Diagnostic Comparison Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF551A]">
                    Funnel Diagnostic
                  </span>
                  <h3 className="text-xl font-extrabold mt-0.5">
                    Why Ad Spend Leaks Profit
                  </h3>
                </div>
                <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-bold">
                  <button
                    onClick={() => setViewMode('compare')}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      viewMode === 'compare'
                        ? 'bg-[#FF551A] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Compare
                  </button>
                  <button
                    onClick={() => setViewMode('leak')}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      viewMode === 'leak'
                        ? 'bg-[#FF551A] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Unit Math
                  </button>
                </div>
              </div>

              {viewMode === 'compare' ? (
                <div className="mt-6 space-y-4">
                  {/* Random Ad Boosting Box */}
                  <div className="rounded-2xl bg-red-950/30 border border-red-500/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                        Random Ad Boosting
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300">
                        Unprofitable
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>Scaling budgets without creative testing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>High COD impulse orders → 30%+ RTO loss</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>Vanity dashboard ROAS hiding net losses</span>
                      </li>
                    </ul>
                  </div>

                  {/* Structured D2C Growth System Box */}
                  <div className="rounded-2xl bg-emerald-950/30 border border-emerald-500/35 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                        Structured D2C Growth System
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        Contribution Profit
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Hook &amp; angle testing before budget scale</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>High-intent buyers + prepaid &amp; RTO filtering</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Predictable CAC within unit-economic guardrails</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Typical ₹10L/Mo Ad Spend Breakdown
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-red-400">Unoptimized Funnel (RTO + High CAC)</span>
                          <span className="text-red-400">-₹1.4L Net Loss</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full w-[82%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-emerald-400">Profit-Engineered D2C System</span>
                          <span className="text-emerald-400">+₹4.8L Net Profit</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[42%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Fixing creative fatigue, checkout drop-offs, and RTO rates often unlocks more profit than doubling ad spend.
                  </p>
                </div>
              )}

              <button
                onClick={onOpenModal}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm py-3.5 px-5 rounded-xl transition-all shadow-glow"
              >
                <span>Audit My Funnel &amp; Ad Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
