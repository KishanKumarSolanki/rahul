import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { trackMetaLead } from '../utils/metaPixel';

export const LEAD_FORM_URL =
  'https://lead365.in/f/only-for-brands-spending-atleast-inr-60-80k-per-month-wzTsvik8';

const REVENUE_OPTIONS = [
  'Below ₹5 Lakh',
  '₹5–10 Lakh',
  '₹10–25 Lakh',
  '₹25–50 Lakh',
  '₹50 Lakh–₹1 Crore',
  '₹1 Crore+',
];

const SPEND_OPTIONS = [
  'Below ₹1 Lakh',
  '₹1–3 Lakh',
  '₹3–5 Lakh',
  '₹5–10 Lakh',
  '₹10 Lakh+',
];

const PROBLEM_OPTIONS = [
  'High Customer Acquisition Cost (CAC)',
  'Low ROAS (2X–3X)',
  'Inconsistent Daily Sales',
  'Unable to Scale Ad Spend',
  'Creative Fatigue',
  'Stagnant Revenue Growth',
  'Multiple Challenges',
];

const inputClass =
  'w-full rounded-xl bg-slate-50 border border-slate-200 focus:border-[#FF551A] focus:ring-2 focus:ring-[#FF551A]/20 focus:outline-none px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors';

const labelClass =
  'block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1';

export default function StrategyModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    revenue: '',
    adSpend: '',
    problem: '',
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    trackMetaLead(form);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={resetAndClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book a D2C strategy call"
        className="relative w-full max-w-xl my-auto rounded-3xl bg-white border border-slate-200 text-slate-900 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-[#FF551A]/10 blur-[90px] rounded-full"
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div className="relative">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF551A]/10 text-[#FF551A] text-[11px] font-extrabold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" />
              <span>D2C GROWTH STRATEGY CALL</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold leading-snug text-slate-950 pr-10">
              Only For Brands Spending Atleast{' '}
              <span className="text-[#FF551A]">INR 60–80K/Month</span>
            </h3>

            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Fill in your brand details below to apply for a 1-on-1 performance diagnostic with Rahul Bhatiya.
            </p>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              {/* Full Name */}
              <div>
                <label className={labelClass}>
                  Full Name <span className="text-[#FF551A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              {/* Phone & Email in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>
                    Phone (10 digits) <span className="text-[#FF551A]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Email <span className="text-[#FF551A]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Revenue Last Month Dropdown */}
              <div>
                <label className={labelClass}>
                  What was your revenue last month? <span className="text-[#FF551A]">*</span>
                </label>
                <select
                  required
                  value={form.revenue}
                  onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                  className={inputClass}
                >
                  <option value="" className="bg-white text-slate-400">
                    Select revenue range...
                  </option>
                  {REVENUE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-slate-900">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Monthly Ad Spend Budget Dropdown */}
              <div>
                <label className={labelClass}>
                  What is your monthly budget for ad spend? <span className="text-[#FF551A]">*</span>
                </label>
                <select
                  required
                  value={form.adSpend}
                  onChange={(e) => setForm({ ...form, adSpend: e.target.value })}
                  className={inputClass}
                >
                  <option value="" className="bg-white text-slate-400">
                    Select ad spend budget...
                  </option>
                  {SPEND_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-slate-900">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Problem Faced Dropdown */}
              <div>
                <label className={labelClass}>
                  What are the problems you are facing? <span className="text-[#FF551A]">*</span>
                </label>
                <select
                  required
                  value={form.problem}
                  onChange={(e) => setForm({ ...form, problem: e.target.value })}
                  className={inputClass}
                >
                  <option value="" className="bg-white text-slate-400">
                    Select your biggest challenge...
                  </option>
                  {PROBLEM_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-slate-900">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Website Link */}
              <div>
                <label className={labelClass}>
                  Website-Link <span className="text-[#FF551A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://yourbrand.com"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  className={inputClass}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-[#FF551A]/25 transition-all"
              >
                <span>CONFIRM MY STRATEGY CALL</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Your brand metrics stay 100% confidential.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="relative py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold text-slate-950">
              Strategy Call Request Received!
            </h3>

            <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{form.name}</strong>. Rahul Bhatiya will review{' '}
              <strong className="text-slate-900">{form.website}</strong> and get in touch with you at{' '}
              <strong className="text-slate-900">{form.phone}</strong> /{' '}
              <strong className="text-slate-900">{form.email}</strong> shortly.
            </p>

            <div className="mt-7 flex items-center justify-center">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-8 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm transition-colors shadow-lg"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}