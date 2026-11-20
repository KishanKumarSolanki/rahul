import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyBottomBar({ onOpenModal }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#09090B]/95 backdrop-blur-md border-t border-[#27272A] px-4 py-3 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-slate-200 font-medium">
          <span className="hidden sm:inline">
            Spending <strong className="text-white">₹2L–₹1Cr/mo</strong> on Meta Ads? Let&apos;s fix your scaling bottleneck.
          </span>
          <span className="sm:hidden font-bold text-white">
            Spending ₹2L–₹1Cr/mo on Meta Ads?
          </span>
        </div>

        <button
          onClick={onOpenModal}
          className="shrink-0 inline-flex items-center gap-2 bg-[#FF551A] hover:bg-[#E0440E] text-white font-extrabold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-xl shadow-glow transition-all"
        >
          <span>Book Strategy Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
