import React from 'react';
import { X, PlayCircle, ArrowRight } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, onBookCall }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#09090B] border border-[#262631] text-white p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close video modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-xs font-extrabold uppercase tracking-wider text-[#FF551A] mb-2">
          Campaign Result Walkthrough
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold">
          Creative Testing, CAC Control &amp; Scaling Breakdown
        </h3>

        {/* Replace this placeholder container with your YouTube/Loom/Vimeo iframe embed */}
        <div className="mt-5 aspect-video rounded-2xl bg-[#14141B] border border-[#262631] flex flex-col items-center justify-center p-6 text-center">
          <PlayCircle className="w-14 h-14 text-[#FF551A] mb-3" />
          <p className="text-base font-bold text-white">
            Embed Your Loom / YouTube / Vimeo Breakdown Here
          </p>
          <p className="mt-1 text-xs text-slate-400 max-w-md">
            Swap this block inside <code className="text-orange-400">src/components/VideoModal.jsx</code> with your actual campaign video embed URL.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Want a similar creative &amp; funnel breakdown for your D2C brand?
          </p>
          <button
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="inline-flex items-center gap-2 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-glow"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
