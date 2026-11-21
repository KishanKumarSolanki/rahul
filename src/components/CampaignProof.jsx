import React, { useEffect, useRef, useState } from 'react';
import { BarChart2, ShieldAlert, TrendingUp, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { CAMPAIGN_PROOFS } from '../data/landingData';

const campaignResultImages = [
  {
    src: '/50K%20FMCG%20Product.png',
    alt: 'Shopify sales report showing gross sales, returning customer rate, orders fulfilled and total orders',
    title: 'Store sales snapshot',
  },
  {
    src: '/70%25%20Prepaid%20and%2030%25%20COD%20FMCG.png',
    alt: 'Store orders dashboard showing order, payment, fulfilment and delivery statuses',
    title: 'Orders and fulfilment',
  },
  {
    src: '/FMCG%2016lakh%20Touch%20Within%20One%20Month%20.png',
    alt: 'Shopify sales report showing monthly gross sales and sales breakdown',
    title: 'Monthly store sales',
  },
  {
    src: '/FMCG%20Order%20Meta%20Ads.png',
    alt: 'Meta Ads Manager campaign report showing purchases, cost per result, spend and reach',
    title: 'Meta Ads campaign performance',
  },
  {
    src: '/health%20Supliment.png',
    alt: 'Meta Ads Manager results for health supplement campaigns, including purchases and ROAS',
    title: 'Health supplement campaigns',
  },
];

/*
 * Campaign walkthrough video from /public.
 * Replace the file name below with the exact name of your video file.
 * Use .mp4 (H.264) for the widest browser support.
 */
const VIDEO_SRC = '/VedberryJuice.mp4';

const AUTOPLAY_MS = 3500;

/* Number of slides visible at once, based on viewport width. */
function useItemsPerView() {
  const getValue = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 2;
    return 1;
  };
  const [perView, setPerView] = useState(getValue);

  useEffect(() => {
    const onResize = () => setPerView(getValue());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return perView;
}

function ScreenshotCarousel({ images }) {
  const perView = useItemsPerView();
  const total = images.length;
  const maxIndex = Math.max(0, total - perView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  // Keep index valid when perView changes (e.g. resize).
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Auto-scroll: moves one slide every AUTOPLAY_MS, pauses on hover / touch.
  useEffect(() => {
    if (paused || maxIndex === 0) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX !== null) {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) setIndex((i) => (i >= maxIndex ? 0 : i + 1));
        else setIndex((i) => (i <= 0 ? maxIndex : i - 1));
      }
    }
    setTouchStartX(null);
    setPaused(false);
  };

  /*
   * Track width = total slides' share of the viewport.
   * Each slide = 1/total of the track, so translating by index * (100/total)%
   * moves exactly one slide, no matter how many are visible.
   */
  const trackWidth = (total * 100) / perView;
  const slideWidth = 100 / total;
  const translate = index * slideWidth;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient glow behind carousel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-6 bg-[radial-gradient(ellipse_at_center,rgba(255,85,26,0.14),transparent_60%)] blur-2xl"
      />

      {/* Premium gradient frame */}
      <div className="relative rounded-[28px] bg-gradient-to-b from-white/20 via-white/5 to-transparent p-px shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="relative overflow-hidden rounded-[27px] bg-[#0B0B10]/95 backdrop-blur-xl p-3 sm:p-5">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0B0B10] to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0B0B10] to-transparent sm:w-16" />

          {/* Viewport */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Track: slides move right to left */}
            <div
              className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              style={{
                width: `${trackWidth}%`,
                transform: `translateX(-${translate}%)`,
              }}
            >
              {images.map((image, i) => (
                <div
                  key={image.src}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${slideWidth}%` }}
                >
                  <figure className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1A1D26] to-[#0E0E14] shadow-2xl shadow-black/50">
                    {/* Shine sweep on hover */}
                    <div className="pointer-events-none absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                    {/* Top glow line */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF551A] to-transparent" />

                    {/* Slide index badge */}
                    <div className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-extrabold tracking-wider text-white backdrop-blur-md">
                      {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </div>

                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#08080C] p-3 sm:p-4">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full rounded-lg object-contain shadow-lg transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>

                    <figcaption className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#0E0E14]/80 px-4 py-3.5">
                      <span className="text-sm font-bold text-slate-100">{image.title}</span>
                      <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                        Verified
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsStrip({ proofs }) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {proofs.map((proof) => (
        <div
          key={proof.id}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1D26] to-[#0E0E14] p-4 shadow-xl"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0668E1]/15 blur-2xl" />
          <div className="relative flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {proof.label}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400">
              <TrendingUp className="h-3.5 w-3.5" />
              {proof.status}
            </span>
          </div>
          <div className="relative mt-1.5 truncate text-sm font-bold text-slate-100">
            {proof.campaignName}
          </div>
          <div className="relative mt-4 grid grid-cols-3 gap-2">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">ROAS</div>
              <div className="text-lg font-extrabold text-white">{proof.roas}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Spend</div>
              <div className="truncate text-sm font-extrabold text-white">{proof.totalSpend}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Purchases</div>
              <div className="text-sm font-extrabold text-white">{proof.purchases}</div>
            </div>
          </div>
          <div className="relative mt-3 border-t border-white/10 pt-2.5 text-[11px] text-slate-400">
            {proof.reportingPeriod}
          </div>
        </div>
      ))}
    </div>
  );
}

/*
 * Autoplay video:
 * - Starts muted and plays automatically while it is on screen.
 * - Pauses when scrolled out of view to save bandwidth.
 * - Sound toggle: audio turns on only when the user clicks.
 */
function AutoplayVideo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // Sync the mute state to the real <video> element.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    if (!muted) {
      video.play().catch(() => {});
    }
  }, [muted]);

  // Play when visible, pause when not.
  useEffect(() => {
    const video = videoRef.current;
    const el = containerRef.current;
    if (!video || !el || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
    >
      <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl ring-1 ring-inset ring-white/10" />

      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Top badges */}
      <div className="pointer-events-none absolute left-4 right-4 top-4 z-20 flex items-center justify-between">
        <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
          LIVE AD ACCOUNT WALKTHROUGH
        </span>
        <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">
          HD
        </span>
      </div>

      {/* Sound toggle */}
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
        className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition-all hover:border-[#FF551A]/60 hover:bg-[#FF551A]/20 active:scale-95"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-[#FF551A]" />}
        <span>{muted ? 'Sound Off' : 'Sound On'}</span>
      </button>
    </div>
  );
}

export default function CampaignProof({ onOpenModal }) {
  return (
    <section id="proof" className="overflow-x-clip py-16 sm:py-24 bg-[#0E0E14] text-white border-t border-[#262631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF551A]/15 border border-[#FF551A]/30 text-[#FF551A] text-xs font-extrabold uppercase tracking-wider mb-4">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>VERIFIED CAMPAIGN BREAKDOWNS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight">
            Real Campaign Data. <span className="text-[#FF551A]">Real Performance.</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Don&apos;t take marketing promises at face value. Evaluate the actual campaign numbers.
          </p>
        </div>

        {/* Screenshot Carousel */}
        <div className="mt-12">
          <div className="mb-6 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Real Store &amp; Campaign Screenshots
            </h3>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF551A]" />
              Auto-scrolling
            </span>
          </div>
          <ScreenshotCarousel images={campaignResultImages} />
          <StatsStrip proofs={CAMPAIGN_PROOFS} />
        </div>

        {/* Autoplay Campaign Walkthrough Video */}
        <div className="mt-16 max-w-4xl mx-auto">
          <AutoplayVideo />

          <div className="mt-6 text-center">
            <h3 className="text-lg sm:text-2xl font-extrabold text-white">
              Watch the actual campaign breakdown, creative testing process and performance analysis.
            </h3>
          </div>

          {/* Action CTA Button */}
          <div className="mt-8 text-center flex flex-col items-center">
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center justify-center gap-3 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-sm sm:text-base tracking-wide px-8 py-4 rounded-2xl shadow-glow transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>GET SIMILAR RESULTS FOR YOUR BRAND</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-2.5 text-xs text-slate-400">
              Diagnostic audit of your Meta Ads campaigns &amp; unit economics
            </p>
          </div>

          {/* Compliance Disclaimer */}
          <p className="mt-6 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
            <span>Past campaign results are not guarantees of future performance.</span>
          </p>
        </div>
      </div>
    </section>
  );
}