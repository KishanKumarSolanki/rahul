import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-extrabold text-sm tracking-tight group-hover:bg-[#FF551A] transition-colors">
            RB
          </div>
          <div>
            <div className="font-extrabold text-slate-950 text-sm sm:text-base tracking-tight leading-none">
              RAHUL BHATIYA
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#FF551A] mt-1">
              D2C Growth Partner
            </div>
          </div>
        </a>

        {/* Quick Anchor Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#bottlenecks" className="hover:text-slate-950 transition-colors">
            Bottlenecks
          </a>
          <a href="#framework" className="hover:text-slate-950 transition-colors">
            7-Step System
          </a>
          <a href="#proof" className="hover:text-slate-950 transition-colors">
            Real Data
          </a>
          <a href="#about" className="hover:text-slate-950 transition-colors">
            About
          </a>
          <a href="#fit" className="hover:text-slate-950 transition-colors">
            Good Fit?
          </a>
        </nav>

        {/* Action Button */}
        <button
          onClick={onOpenModal}
          className="inline-flex items-center gap-1.5 bg-slate-950 hover:bg-[#FF551A] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-glow"
        >
          <TrendingUp className="w-4 h-4 text-[#FF551A] group-hover:text-white hidden sm:inline" />
          <span>Book Strategy Call</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
