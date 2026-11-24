import React, { useRef, useEffect, useState } from 'react';

const TESTIMONIALS = [
  {
    name: 'Rajmal Chouhan',
    initials: 'R',
    color: 'from-orange-500 to-rose-500',
    reviews: '3 reviews',
    time: 'a year ago',
    rating: 5,
    text: 'Best ecommerce digital marketing agency in India for real results. Rahul and his team truly understand D2C performance marketing — our ROAS improved significantly within the first month.',
    source: 'Google Review',
    tag: 'Performance Marketing',
  },
  {
    name: 'Rajmal Chouhan',
    initials: 'R',
    color: 'from-emerald-500 to-teal-600',
    reviews: '2 reviews',
    time: '11 months ago',
    rating: 5,
    text: 'Best Digital marketing agency For E-commerce Specially. The expertise they bring to ad creatives and audience targeting is unmatched. Highly recommend for any D2C brand.',
    source: 'Google Review',
    tag: 'Creatives & Targeting',
  },
  {
    name: 'Disha V',
    initials: 'D',
    color: 'from-violet-500 to-purple-700',
    reviews: '1 review',
    time: 'a year ago',
    rating: 5,
    text: 'One of the best digital Marketing agency In india. Definitely helps to grow your business. Highly recommended — their strategy calls alone are worth more than what most agencies charge.',
    source: 'Google Review',
    tag: 'Strategy',
  },
  {
    name: 'Arjun Mehta',
    initials: 'A',
    color: 'from-sky-500 to-blue-700',
    reviews: '4 reviews',
    time: '8 months ago',
    rating: 5,
    text: "Rahul's team scaled our skincare brand from ₹8L to ₹22L monthly revenue in just 3 months. The CAC dropped by 38% and our ROAS crossed 4.2X consistently. Best investment we made.",
    source: 'Google Review',
    tag: 'Skincare · Scale',
  },
  {
    name: 'Priya Sharma',
    initials: 'P',
    color: 'from-rose-500 to-pink-700',
    reviews: '2 reviews',
    time: '6 months ago',
    rating: 5,
    text: 'Finally a D2C growth partner who actually understands unit economics! We were burning money on ads before. After working with Rahul, our contribution margin improved drastically.',
    source: 'Google Review',
    tag: 'Unit Economics',
  },
];

const STATS = [
  { value: '4.2X', label: 'Average ROAS' },
  { value: '38%', label: 'CAC reduction' },
  { value: '5.0', label: 'Average rating' },
];

const SPEED = 0.6;

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function TestimonialCard({ t }) {
  return (
    <article className="group relative flex-shrink-0 w-[330px] sm:w-[400px] mx-3 rounded-3xl bg-white border border-slate-200/60 shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.18)] hover:-translate-y-1 transition-all duration-500 p-7 overflow-hidden">
      {/* Decorative quote mark */}
      <span className="pointer-events-none absolute -top-4 -right-2 text-[120px] leading-none font-serif text-slate-100 select-none">
        “
      </span>

      <div className="relative">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-slate-900/10`}>
              {t.initials}
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-[15px] leading-tight">{t.name}</p>
              <p className="text-xs text-slate-400 mt-1">{t.reviews}</p>
            </div>
          </div>
          <GoogleG />
        </div>

        <div className="flex items-center gap-2.5 mb-4">
          <StarRating count={t.rating} />
          <span className="text-[11px] uppercase tracking-wider text-slate-400">{t.time}</span>
        </div>

        <p className="text-slate-700 text-[15px] leading-relaxed">“{t.text}”</p>

        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
            {t.tag}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {t.source}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduceMotion) return;

    const animate = () => {
      const totalWidth = track.scrollWidth / 2;
      if (!pausedRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= totalWidth) posRef.current = 0;
        track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [reduceMotion]);

  return (
    <section className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#FF551A]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-300 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6 backdrop-blur">
            <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Verified Client Reviews
          </div>

          <h2 className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.3] tracking-tight">
            What D2C Founders Say
            <span className="block mt-6 sm:mt-8 pb-3 bg-gradient-to-r from-[#FF551A] via-orange-400 to-amber-300 bg-clip-text text-transparent">
              About Working With Rahul
            </span>
          </h2>

          <p className="mt-8 text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Real reviews from founders who scaled their brands profitably.
          </p>

          {/* Stats strip */}
          <div className="mt-10 inline-grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 sm:px-10 py-4">
                <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{s.value}</p>
                <p className="text-[11px] uppercase tracking-wider text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auto-scroll track */}
      <div
        className="relative"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-48 z-10"
          style={{ background: 'linear-gradient(to right, #020617, transparent)' }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-48 z-10"
          style={{ background: 'linear-gradient(to left, #020617, transparent)' }}
        />

        <div className="overflow-x-auto sm:overflow-hidden py-6 scrollbar-none">
          <div ref={trackRef} className="flex will-change-transform" style={{ width: 'max-content' }}>
            {doubled.map((t, idx) => (
              <TestimonialCard key={idx} t={t} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}