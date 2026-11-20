import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

const SPEND_TIERS = ['₹2L–₹5L / mo', '₹5L–₹15L / mo', '₹15L–₹50L / mo', '₹50L–₹1Cr+ / mo'];
const BOTTLENECKS = ['High CAC', 'High RTO & Returns', 'Creative Fatigue', 'Stuck Scaling'];

export default function StrategyModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    contact: '',
    website: '',
    spend: '₹5L–₹15L / mo',
    bottleneck: 'High CAC',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#09090B] border border-[#262631] text-white p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={resetAndClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF551A]/15 text-[#FF551A] text-[11px] font-extrabold uppercase tracking-wider">
              D2C Growth Strategy Call
            </div>

            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold leading-tight">
              Let&apos;s Diagnose Your <span className="text-[#FF551A]">Scaling Bottleneck</span>
            </h3>
            <p className="mt-1.5 text-sm text-slate-400">
              Share a few details about your brand so Rahul can review your funnel before the call.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full rounded-xl bg-[#14141B] border border-[#262631] focus:border-[#FF551A] focus:outline-none px-4 py-3 text-sm text-white placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Work Email or WhatsApp Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="founder@yourbrand.com or +91 98XXXXXXXX"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full rounded-xl bg-[#14141B] border border-[#262631] focus:border-[#FF551A] focus:outline-none px-4 py-3 text-sm text-white placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Brand Website URL *
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://yourd2cbrand.com"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  className="w-full rounded-xl bg-[#14141B] border border-[#262631] focus:border-[#FF551A] focus:outline-none px-4 py-3 text-sm text-white placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Current Monthly Meta Ads Spend
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SPEND_TIERS.map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setForm({ ...form, spend: tier })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        form.spend === tier
                          ? 'bg-[#FF551A] border-[#FF551A] text-white'
                          : 'bg-[#14141B] border-[#262631] text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Biggest Growth Bottleneck
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BOTTLENECKS.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setForm({ ...form, bottleneck: item })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        form.bottleneck === item
                          ? 'bg-white text-slate-950 border-white'
                          : 'bg-[#14141B] border-[#262631] text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm py-4 px-6 rounded-xl shadow-glow transition-all"
              >
                <span>CONFIRM MY STRATEGY CALL</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your brand metrics stay 100% confidential.</span>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold">Strategy Call Request Received</h3>
            <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{form.fullName}</strong>. Rahul Bhatiya will
              review <strong className="text-white">{form.website}</strong> ({form.spend}) and reach
              out via <strong className="text-white">{form.contact}</strong> shortly.
            </p>
            <button
              onClick={resetAndClose}
              className="mt-7 inline-flex items-center justify-center bg-white text-slate-950 font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-slate-200 transition-colors"
            >
              Back to Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
