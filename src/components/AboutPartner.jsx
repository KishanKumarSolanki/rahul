import React, { useState } from 'react';
import { CheckCircle2, UserCheck, Target, ArrowRight } from 'lucide-react';
import { DELIVERABLES } from '../data/landingData';

export default function AboutPartner({ onOpenModal }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Studio Portrait Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-100 to-slate-200/70 p-4 border border-slate-200 shadow-card">
              <div className="rounded-2xl overflow-hidden bg-slate-900">
                {!imgError ? (
                  <img
                    src="/rahul-bhatiya.png"
                    alt="Rahul Bhatiya — Performance Marketer & D2C Growth Partner"
                    onError={() => setImgError(true)}
                    className="w-full h-[420px] sm:h-[470px] object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-[420px] bg-slate-900 flex flex-col items-center justify-center text-white">
                    <div className="w-24 h-24 rounded-full bg-[#FF551A] flex items-center justify-center text-3xl font-extrabold">
                      RB
                    </div>
                    <p className="mt-3 font-bold text-lg">Rahul Bhatiya</p>
                  </div>
                )}
              </div>

              {/* Floating Credential Pill */}
              <div className="mt-4 bg-slate-950 text-white rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-base">Rahul Bhatiya</div>
                  <div className="text-xs text-slate-400">
                    Performance Marketer | D2C Growth Partner
                  </div>
                </div>
                <span className="px-3 py-1 rounded-xl bg-[#FF551A]/15 border border-[#FF551A]/30 text-[#FF551A] text-xs font-extrabold">
                  ₹2L–₹1Cr/Mo
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Deliverables & Objective */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF551A]/10 text-[#FF551A] text-xs font-extrabold uppercase tracking-wider mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>MEET YOUR D2C GROWTH PARTNER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 leading-tight">
              Meet <span className="text-[#FF551A]">Rahul Bhatiya</span>
            </h2>

            <p className="mt-1 text-base sm:text-lg font-bold text-slate-700">
              Performance Marketer | D2C Growth Partner
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#FF551A]/25 bg-[#FF551A]/5 p-4">
                <div className="text-2xl font-extrabold text-[#FF551A]">3+ Years</div>
                <div className="mt-1 text-sm font-bold text-slate-800">
                  Meta Ads experience with D2C brands
                </div>
              </div>
              <div className="rounded-2xl border border-[#FF551A]/25 bg-[#FF551A]/5 p-4">
                <div className="text-2xl font-extrabold text-[#FF551A]">₹20L+/Month</div>
                <div className="mt-1 text-sm font-bold text-slate-800">
                  D2C ad spend managed
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                I help established D2C brands improve their Meta Ads performance through customer
                research, creative strategy, campaign management and data-driven optimisation.
              </p>
              <p>
                My approach goes beyond launching advertisements. I focus on understanding your
                business, identifying growth bottlenecks and building a structured customer
                acquisition strategy.
              </p>
            </div>

            {/* What I Deliver */}
            <div className="mt-8">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-950 mb-4">
                What I Deliver
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {DELIVERABLES.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-200/80 rounded-xl px-4 py-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF551A] shrink-0" />
                    <span className="text-sm font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objective Callout Box */}
            <div className="mt-8 rounded-2xl bg-[#FF551A]/5 border-l-4 border-[#FF551A] p-5">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#FF551A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF551A]">
                    My Objective
                  </span>
                  <p className="mt-1 text-sm sm:text-base font-bold text-slate-900">
                    Help your brand make smarter advertising decisions and build a more sustainable
                    customer acquisition system.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center justify-center gap-3 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm sm:text-base tracking-wide px-7 py-4 rounded-2xl shadow-glow transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>BOOK A STRATEGY CALL WITH RAHUL</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
