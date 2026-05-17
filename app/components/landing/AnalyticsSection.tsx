"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3 } from "lucide-react";
import BrowserMockup from "./BrowserMockup";

function useCountUp(target: number, duration: number = 2000, active: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.floor(start));
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function MetricCard({ value, suffix = "", label, description, color, index, active }: {
  value: number; suffix?: string; label: string; description: string; color: string; index: number; active: boolean;
}) {
  const count = useCountUp(value, 1800 + index * 200, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1a1a1a] rounded-[12px] border border-[#2a2a2a] p-5 relative overflow-hidden"
    >
      <div className="absolute inset-0 rounded-[12px] opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at top left, ${color}08 0%, transparent 60%)` }} />
      <div className="text-3xl font-black mb-1" style={{ color }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-semibold text-white mb-1">{label}</div>
      <div className="text-xs text-[#555] leading-relaxed">{description}</div>
    </motion.div>
  );
}

function CampaignDetailMockup() {
  const bars = [30, 55, 80, 45, 92, 68, 100, 75, 88, 95, 60, 82];
  return (
    <div className="bg-[#0d0d0d] p-4">
      {/* Campaign header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[11px] font-bold text-white">End-of-Year Flash Sale</div>
          <div className="text-[9px] text-[#555]">Completed · Dec 12 · 5,000 contacts</div>
        </div>
        <div className="px-2 py-0.5 bg-[#3b82f6]/15 border border-[#3b82f6]/30 rounded text-[#3b82f6] text-[9px] font-semibold">Completed</div>
      </div>

      {/* Progress bar 100% */}
      <div className="mb-4">
        <div className="flex justify-between text-[9px] mb-1">
          <span className="text-[#555]">Delivery Progress</span>
          <span className="text-[#25D366] font-bold">100% Complete</span>
        </div>
        <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #25D366, #2EE571)" }}
          />
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { l: "Total Sent", v: "5,000", c: "#A3A3A3" },
          { l: "Delivered", v: "4,891", c: "#25D366" },
          { l: "Replies", v: "1,712", c: "#3b82f6" },
          { l: "Failed", v: "109", c: "#ef4444" },
        ].map(s => (
          <div key={s.l} className="bg-[#111] rounded-lg p-2 text-center border border-[#1a1a1a]">
            <div className="text-sm font-bold" style={{ color: s.c }}>{s.v}</div>
            <div className="text-[8px] text-[#444] mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-[#111] rounded-lg p-3 border border-[#1a1a1a]">
        <div className="text-[9px] text-[#555] mb-2">Hourly Delivery Rate</div>
        <div className="flex items-end gap-0.5 h-10">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="flex-1 rounded-t"
              style={{ background: `linear-gradient(to top, #25D366, #2EE571)`, opacity: 0.5 + (h / 200) }}
            />
          ))}
        </div>
      </div>

      {/* Contact list sample */}
      <div className="mt-3">
        <div className="text-[9px] text-[#555] mb-1.5">Contact Delivery Log</div>
        {[
          { name: "Adaeze Obi", status: "Delivered", replied: true },
          { name: "Emeka Ch.", status: "Delivered", replied: false },
          { name: "Bola Ade.", status: "Failed", replied: false },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-2 py-1 border-b border-[#111] last:border-0">
            <div className="w-4 h-4 rounded-full bg-[#1a1a1a] text-[8px] flex items-center justify-center text-[#25D366] font-bold">{c.name[0]}</div>
            <span className="text-[9px] text-[#A3A3A3] flex-1">{c.name}</span>
            <span className="text-[8px] font-semibold" style={{ color: c.status === "Delivered" ? "#25D366" : "#ef4444" }}>{c.status}</span>
            {c.replied && <span className="text-[8px] text-[#3b82f6]">↩ Replied</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

const metrics = [
  { value: 34, suffix: "%", label: "Average Reply Rate", description: "Track reply rates per campaign and identify your highest-performing segments.", color: "#25D366" },
  { value: 97, suffix: "%", label: "Delivery Success Rate", description: "See per-contact delivery success and get alerts when numbers underperform.", color: "#3b82f6" },
  { value: 1247, suffix: "", label: "Workflow Executions", description: "Monitor workflow execution logs to see exactly what happened at every step.", color: "#a855f7" },
];

export default function AnalyticsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium mb-4">
            <BarChart3 size={12} />
            Analytics & Reporting
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Know Exactly{" "}
            <span className="green-gradient-text">What's Working</span>
          </h2>
          <p className="mt-4 text-[#737373] max-w-xl mx-auto">
            Stop guessing. Every campaign tells you exactly who received it, who replied, and what drove the result.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Metrics */}
          <div ref={ref} className="space-y-4">
            {metrics.map((m, i) => (
              <MetricCard key={i} {...m} index={i} active={inView} />
            ))}
          </div>

          {/* Campaign Detail Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <BrowserMockup url="app.wamanager.io/campaigns/end-of-year-sale">
              <CampaignDetailMockup />
            </BrowserMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
