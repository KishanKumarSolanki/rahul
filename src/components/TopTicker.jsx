import React from 'react';
import { TICKER_ITEMS } from '../data/landingData';

export default function TopTicker() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="bg-[#FF551A] text-white py-2.5 overflow-hidden border-b border-orange-600/40 marquee-wrapper relative z-40">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center text-xs sm:text-[13px] font-bold tracking-wider uppercase">
            <span className="px-4">{item}</span>
            <span className="text-orange-200">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
