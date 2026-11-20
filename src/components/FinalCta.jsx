import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function FinalCta({ onOpenModal }) {
  return (
    <section className="py-12 sm:py-20 bg-[#F8FAFC] pb-28 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] bg-[#09090B] bg-dark-grid text-white p-8 sm:p-12 lg:p-16 border border-[#262631] shadow-2xl overflow-hidden text-center">
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[560px] h-[260px] bg-[#FF551A]/20 blur-[120px] rounded-full"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Your Brand Has Already Invested in Growth.{' '}
              <span className="text-[#FF551A]">What&apos;s Holding It Back?</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              If you&apos;re spending <strong className="text-white">₹2L–₹1Cr every month</strong> on
              Meta Ads but struggling with rising CAC, declining profitability or inconsistent sales,
              let&apos;s identify what&apos;s going wrong.
            </p>

            <p className="mt-4 text-base sm:text-lg font-extrabold text-white">
              No random promises. No guaranteed ROAS. Just a serious conversation about your
              brand&apos;s growth opportunities.
            </p>

            <p className="mt-4 text-sm sm:text-base font-semibold text-[#FF551A]">
              Let&apos;s Find What&apos;s Stopping Your D2C Brand From Scaling.
            </p>

            <div className="mt-8">
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center justify-center gap-3 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm sm:text-base tracking-wide px-7 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-glow transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>BOOK YOUR D2C GROWTH STRATEGY CALL</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>1-on-1 Diagnostic Session with Rahul Bhatiya • Zero Obligation</span>
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-10 text-center text-xs text-slate-500">
          <p className="font-semibold text-slate-700">
            Rahul Bhatiya — Performance Marketer | D2C Growth Partner
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} Rahul Bhatiya. All rights reserved. Not affiliated with Meta Platforms, Inc.
          </p>
        </footer>
      </div>
    </section>
  );
}
