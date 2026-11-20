import React from 'react';
import { BarChart2, Play, ShieldAlert, TrendingUp } from 'lucide-react';
import { CAMPAIGN_PROOFS } from '../data/landingData';

export default function CampaignProof({ onOpenVideo }) {
  return (
    <section id="proof" className="py-16 sm:py-24 bg-[#0E0E14] text-white border-t border-[#262631]">
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

        {/* Meta Ads Dashboard Cards Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {CAMPAIGN_PROOFS.map((proof) => (
            <div
              key={proof.id}
              className="rounded-3xl bg-[#14141B] border border-[#262631] hover:border-[#0668E1]/60 transition-all overflow-hidden flex flex-col shadow-xl"
            >
              {/* Top Meta Ads Manager Simulated Header */}
              <div className="bg-[#1A1D26] px-5 py-3.5 border-b border-[#262631] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0668E1]" />
                  <span className="text-xs font-bold text-slate-200">Meta Ads Manager</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  {proof.status}
                </span>
              </div>

              {/* Screenshot Placeholder / Live Telemetry Preview */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {proof.label}
                  </div>
                  <div className="text-sm font-bold text-white mt-1 truncate">
                    {proof.campaignName}
                  </div>

                  {/* Highlight ROAS Banner */}
                  <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#0668E1]/20 to-emerald-500/10 border border-[#0668E1]/30 p-4 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-slate-300 uppercase">
                        Blended ROAS
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                        {proof.roas}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>Profitable Scale</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {proof.reportingPeriod}
                      </div>
                    </div>
                  </div>
                </div>

                {/* All 6 Required Metrics */}
                <div className="mt-5 grid grid-cols-2 gap-2.5 text-xs">
                  <div className="rounded-xl bg-[#0E0E14] border border-[#262631] p-3">
                    <div className="text-slate-400">Total Advertising Spend</div>
                    <div className="font-extrabold text-white text-sm mt-0.5">
                      {proof.totalSpend}
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#0E0E14] border border-[#262631] p-3">
                    <div className="text-slate-400">Purchases Generated</div>
                    <div className="font-extrabold text-white text-sm mt-0.5">
                      {proof.purchases}
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#0E0E14] border border-[#262631] p-3">
                    <div className="text-slate-400">Purchase Conv. Value</div>
                    <div className="font-extrabold text-emerald-400 text-sm mt-0.5">
                      {proof.conversionValue}
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#0E0E14] border border-[#262631] p-3">
                    <div className="text-slate-400">Cost Per Purchase</div>
                    <div className="font-extrabold text-white text-sm mt-0.5">
                      {proof.costPerPurchase}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-[#262631] flex items-center justify-between text-[11px] text-slate-400">
                  <span>ROAS: <strong className="text-white">{proof.roas}</strong></span>
                  <span>Period: <strong className="text-white">{proof.reportingPeriod}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 16:9 Campaign Result Video Showcase */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div
            onClick={onOpenVideo}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenVideo()}
            className="group relative aspect-video rounded-3xl bg-gradient-to-br from-[#16161F] via-[#111118] to-[#09090B] border border-[#262631] hover:border-[#FF551A]/60 shadow-2xl overflow-hidden cursor-pointer flex flex-col items-center justify-center p-6 text-center"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,85,26,0.16),transparent_65%)] opacity-80 group-hover:opacity-100 transition-opacity"
            />

            {/* Top Video Header Bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-slate-400">
              <span className="px-3 py-1 rounded-full bg-black/50 border border-white/10 font-semibold text-white">
                LIVE AD ACCOUNT WALKTHROUGH
              </span>
              <span className="px-3 py-1 rounded-full bg-black/50 border border-white/10 font-mono">
                08:42 HD
              </span>
            </div>

            {/* Play Button */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-[#FF551A] group-hover:scale-110 transition-transform duration-200 flex items-center justify-center shadow-glow">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>

            <h3 className="relative z-10 mt-5 text-lg sm:text-2xl font-extrabold text-white max-w-xl">
              Watch the actual campaign breakdown, creative testing process and performance analysis.
            </h3>
            <p className="relative z-10 mt-2 text-xs sm:text-sm text-slate-400">
              Click to preview the inside-account walkthrough
            </p>

            {/* Bottom Simulated Timeline */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
              <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-[#FF551A]" />
              </div>
              <span className="text-[11px] font-mono text-slate-400">02:54 / 08:42</span>
            </div>
          </div>

          {/* Compliance Disclaimer */}
          <p className="mt-4 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
            <span>Past campaign results are not guarantees of future performance.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
