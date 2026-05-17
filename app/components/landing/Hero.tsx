"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import BrowserMockup from "./BrowserMockup";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stats = [
  { value: "50,000", label: "contacts per import" },
  { value: "13", label: "automation nodes" },
  { value: "100%", label: "self-hosted" },
];

function DashboardMockup() {
  return (
    <div className="bg-[#0d0d0d] min-h-[340px] flex">
      {/* Sidebar */}
      <div className="w-14 bg-[#111] border-r border-[#1a1a1a] flex flex-col items-center py-3 gap-3">
        {["M","C","W","S","A"].map((l,i) => (
          <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${i===0 ? "bg-[#25D366] text-white" : "bg-[#1a1a1a] text-[#555]"}`}>{l}</div>
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-white font-bold text-sm">Dashboard</div>
            <div className="text-[#555] text-xs">Welcome back</div>
          </div>
          <div className="flex gap-2">
            <div className="px-2 py-1 bg-[#25D366] rounded text-white text-[10px] font-semibold">+ New Campaign</div>
          </div>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "Active Numbers", val: "4", color: "#25D366" },
            { label: "Contacts", val: "12,847", color: "#3b82f6" },
            { label: "Sent Today", val: "3,291", color: "#f59e0b" },
            { label: "Reply Rate", val: "34%", color: "#a855f7" },
          ].map((s,i) => (
            <div key={i} className="bg-[#1a1a1a] rounded-lg p-2 border border-[#222]">
              <div className="text-[10px] text-[#555] mb-1">{s.label}</div>
              <div className="text-sm font-bold" style={{ color: s.color }}>{s.val}</div>
            </div>
          ))}
        </div>
        {/* Campaigns table */}
        <div className="bg-[#1a1a1a] rounded-lg border border-[#222] overflow-hidden">
          <div className="px-3 py-2 border-b border-[#222] flex items-center justify-between">
            <span className="text-[10px] font-semibold text-[#A3A3A3]">Recent Campaigns</span>
            <span className="text-[9px] text-[#555]">View all →</span>
          </div>
          {[
            { name: "Black Friday Promo", status: "Running", sent: "2,100/3,000", rate: "71%", color: "#25D366" },
            { name: "New Product Launch", status: "Completed", sent: "5,000/5,000", rate: "89%", color: "#3b82f6" },
            { name: "Abandoned Cart Flow", status: "Running", sent: "847/1,200", rate: "58%", color: "#f59e0b" },
          ].map((c,i) => (
            <div key={i} className="px-3 py-2 flex items-center gap-3 border-b border-[#111] last:border-0">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
              <span className="text-[10px] text-white font-medium flex-1 truncate">{c.name}</span>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded" style={{ color: c.color, background: `${c.color}18` }}>{c.status}</span>
              <span className="text-[9px] text-[#555]">{c.sent}</span>
              <span className="text-[9px] font-bold" style={{ color: c.color }}>{c.rate}</span>
            </div>
          ))}
        </div>
        {/* Activity feed */}
        <div className="mt-3 bg-[#1a1a1a] rounded-lg border border-[#222] p-2">
          <div className="text-[10px] font-semibold text-[#A3A3A3] mb-2">Live Activity</div>
          {[
            "Message delivered to +234 812 ***",
            "Contact tagged: Hot Lead",
            "Campaign 'Black Friday' resumed",
            "New reply from +234 905 ***",
          ].map((a,i) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <div className="w-1 h-1 rounded-full bg-[#25D366]" />
              <span className="text-[9px] text-[#555]">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(37,211,102,0.06) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-12">
          {/* Badge */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            The WhatsApp Automation Platform for African Businesses
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
          >
            Turn WhatsApp Into Your{" "}
            <span className="relative inline-block">
              <span className="green-gradient-text">Most Powerful</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#25D366] to-[#2EE571] origin-left rounded-full"
              />
            </span>{" "}
            Sales & Marketing Engine
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-[#A3A3A3] leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Send personalised campaigns to thousands, build intelligent chatbots, manage multiple WhatsApp numbers — all from one dashboard.{" "}
            <span className="text-white font-medium">No coding required.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          >
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#2EE571] text-white font-bold rounded-[8px] transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] text-base"
            >
              Get Started Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="group flex items-center gap-2 px-6 py-3.5 border border-[#2a2a2a] hover:border-[#25D366]/40 text-white font-semibold rounded-[8px] transition-all duration-200 text-base bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]"
            >
              <div className="w-6 h-6 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <Play size={10} fill="#25D366" className="text-[#25D366] ml-0.5" />
              </div>
              See How It Works
            </a>
          </motion.div>

          {/* Micro-stats */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-0 sm:gap-0"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex items-center">
                <div className="px-4 sm:px-6 py-2 text-center">
                  <div className="text-lg font-black text-white">{s.value}</div>
                  <div className="text-[11px] text-[#737373] font-medium">{s.label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-[#2a2a2a]" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow behind mockup */}
          <div className="absolute -inset-4 rounded-2xl opacity-30"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(37,211,102,0.15) 0%, transparent 70%)" }} />
          <BrowserMockup url="app.wamanager.io/dashboard">
            <DashboardMockup />
          </BrowserMockup>
        </motion.div>
      </div>
    </section>
  );
}
