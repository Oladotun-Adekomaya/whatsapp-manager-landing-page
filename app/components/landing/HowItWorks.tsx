"use client";

import { motion } from "framer-motion";
import { Smartphone, Upload, Rocket } from "lucide-react";
import BrowserMockup from "./BrowserMockup";

function QRMockup() {
  return (
    <div className="bg-[#0d0d0d] p-5 flex flex-col items-center">
      <div className="text-xs text-[#555] mb-3 font-medium">Scan with your WhatsApp</div>
      {/* QR code placeholder */}
      <div className="w-28 h-28 bg-white rounded-lg p-2 mb-3">
        <div className="w-full h-full grid grid-cols-7 gap-0.5">
          {Array.from({ length: 49 }).map((_, i) => {
            const pos = [0,1,2,3,4,5,6,7,13,14,20,21,27,28,34,35,41,42,48,47,46,45,44,43,8,15,22,29,36,11,12,18,19,25,26,32,33,39,40];
            return (
              <div key={i} className={`rounded-[1px] ${pos.includes(i) ? "bg-black" : i % 3 === 0 && i % 7 !== 0 ? "bg-black" : "bg-white"}`} />
            );
          })}
        </div>
      </div>
      <div className="text-[10px] text-[#444] text-center">
        Or enter pairing code: <span className="text-[#25D366] font-mono font-bold">●●●●-●●●●</span>
      </div>
      <div className="mt-3 w-full h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "65%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="h-full bg-[#25D366] rounded-full"
        />
      </div>
      <div className="text-[10px] text-[#444] mt-1">Waiting for scan…</div>
    </div>
  );
}

function ContactsMockup() {
  const contacts = [
    { name: "Adaeze Obi", phone: "+234 801 234 5678", tags: ["Hot Lead", "VIP"], replies: 12 },
    { name: "Emeka Chukwu", phone: "+234 812 345 6789", tags: ["Pending"], replies: 3 },
    { name: "Fatima Abdull.", phone: "+234 903 456 7890", tags: ["E-commerce"], replies: 8 },
    { name: "Bola Tinubu Jr", phone: "+234 814 567 8901", tags: ["Cold"], replies: 0 },
    { name: "Ngozi Okonkwo", phone: "+234 905 678 9012", tags: ["Hot Lead"], replies: 21 },
  ];
  const tagColors: Record<string, string> = {
    "Hot Lead": "#25D366", "VIP": "#f59e0b", "Pending": "#3b82f6",
    "E-commerce": "#a855f7", "Cold": "#6b7280",
  };
  return (
    <div className="bg-[#0d0d0d] p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold text-[#A3A3A3]">All Contacts (12,847)</span>
        <div className="flex gap-1">
          <div className="px-2 py-0.5 bg-[#25D366] rounded text-white text-[9px] font-semibold">Import CSV</div>
          <div className="px-2 py-0.5 bg-[#1a1a1a] border border-[#222] rounded text-[#555] text-[9px]">Filter</div>
        </div>
      </div>
      <div className="space-y-1">
        {contacts.map((c, i) => (
          <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#111] border border-[#1a1a1a]">
            <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#222] flex items-center justify-center text-[10px] font-bold text-[#25D366]">
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold text-white truncate">{c.name}</div>
              <div className="text-[9px] text-[#444] font-mono">{c.phone}</div>
            </div>
            <div className="flex gap-1">
              {c.tags.map(t => (
                <span key={t} className="text-[8px] px-1.5 py-0.5 rounded font-semibold"
                  style={{ color: tagColors[t], background: `${tagColors[t]}20` }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="text-[9px] text-[#555] ml-1">{c.replies}↩</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const bars = [45, 72, 58, 90, 65, 88, 71];
  return (
    <div className="bg-[#0d0d0d] p-4">
      <div className="flex justify-between items-center mb-3">
        <div>
          <div className="text-[11px] font-bold text-white">Campaign Analytics</div>
          <div className="text-[9px] text-[#555]">Black Friday Promo · Completed</div>
        </div>
        <div className="text-[10px] text-[#25D366] font-bold">100% ✓</div>
      </div>
      <div className="flex items-end gap-1 h-16 mb-3">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            className="flex-1 rounded-t"
            style={{ background: `linear-gradient(to top, #25D366, #2EE571)`, opacity: 0.6 + (i / bars.length) * 0.4 }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[{ l: "Delivered", v: "5,000", c: "#25D366" }, { l: "Reply Rate", v: "34%", c: "#3b82f6" }, { l: "Failed", v: "0", c: "#ef4444" }].map(s => (
          <div key={s.l} className="bg-[#111] rounded p-1.5 text-center border border-[#1a1a1a]">
            <div className="text-xs font-bold" style={{ color: s.c }}>{s.v}</div>
            <div className="text-[8px] text-[#444]">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Connect Your Number",
    copy: "Scan a QR code or use a pairing code to link any WhatsApp number. Connect multiple numbers in minutes.",
    mockup: <QRMockup />,
    url: "app.wamanager.io/settings/accounts",
    accent: "#25D366",
  },
  {
    number: "02",
    icon: Upload,
    title: "Import Your Contacts",
    copy: "Upload a CSV or VCF file, extract from WhatsApp groups, or let your chatbots capture leads automatically.",
    mockup: <ContactsMockup />,
    url: "app.wamanager.io/contacts",
    accent: "#3b82f6",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Build Your Flow & Launch",
    copy: "Design your campaign or chatbot in the visual editor, set your send window, and hit launch. Watch the results roll in live.",
    mockup: <AnalyticsMockup />,
    url: "app.wamanager.io/campaigns/analytics",
    accent: "#a855f7",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium mb-4">
            Simple 3-Step Setup
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            From Zero to Campaigns{" "}
            <span className="green-gradient-text">in Minutes</span>
          </h2>
          <p className="mt-4 text-[#737373] max-w-xl mx-auto">
            No developer needed. No complex setup. Just connect, import, and launch.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #25D366, #3b82f6, #a855f7, transparent)" }} />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col"
              >
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-black z-10"
                    style={{
                      borderColor: step.accent,
                      background: `${step.accent}15`,
                      color: step.accent,
                      boxShadow: `0 0 20px ${step.accent}30`
                    }}
                  >
                    {step.number}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon size={18} style={{ color: step.accent }} />
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#737373] leading-relaxed mb-4">{step.copy}</p>
                <div className="rounded-[12px] overflow-hidden border border-[#2a2a2a] flex-1">
                  <div className="bg-[#1a1a1a] px-3 py-2 flex items-center gap-2 border-b border-[#222]">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                      <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                      <div className="w-2 h-2 rounded-full bg-[#28C840]" />
                    </div>
                    <span className="text-[9px] text-[#444] font-mono truncate">{step.url}</span>
                  </div>
                  {step.mockup}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
