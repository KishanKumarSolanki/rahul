import React from 'react';
import { CheckCircle2, XCircle, Filter, ArrowRight } from 'lucide-react';
import { GOOD_FIT_CRITERIA, NOT_FOR_CRITERIA } from '../data/landingData';

export default function Qualification({ onOpenModal }) {
  return (
    <section id="fit" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF551A]/10 text-[#FF551A] text-xs font-extrabold uppercase tracking-wider mb-4">
            <Filter className="w-3.5 h-3.5" />
            <span>PARTNERSHIP QUALIFICATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 leading-tight">
            Is Your Brand a <span className="text-[#FF551A]">Good Fit?</span>
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Good Fit */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/30 shadow-card">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              Ideal Partner Profile
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              I work with D2C brands that:
            </h3>
            <ul className="mt-6 space-y-4">
              {GOOD_FIT_CRITERIA.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Not a Fit */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-extrabold uppercase tracking-wider mb-4">
              Strict Exclusion
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              Who This Is NOT For:
            </h3>
            <ul className="mt-6 space-y-4">
              {NOT_FOR_CRITERIA.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center flex flex-col items-center">
          <p className="text-base sm:text-lg font-extrabold text-slate-900 mb-4">
            Meet the criteria? Let&apos;s build your scaling roadmap.
          </p>
          <button
            onClick={onOpenModal}
            className="group inline-flex items-center justify-center gap-3 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm sm:text-base tracking-wide px-8 py-4 sm:py-4.5 rounded-2xl shadow-glow transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>APPLY FOR YOUR STRATEGY CALL</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <span className="mt-2.5 text-xs text-slate-500 font-medium">
            Strictly for D2C brands spending ₹2L–₹1Cr/month on Meta Ads
          </span>
        </div>
      </div>
    </section>
  );
}
