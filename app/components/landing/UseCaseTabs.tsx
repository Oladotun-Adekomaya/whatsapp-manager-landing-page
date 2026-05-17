"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Users, Calendar, Headphones } from "lucide-react";
import NodeDiagram from "./NodeDiagram";

const tabs = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    label: "E-commerce & Sales",
    headline: "Turn 'How Much?' Into a Sale — Automatically",
    copy: "When a customer asks about price, your chatbot replies instantly with product details, collects their info, and sends them a payment link — all without you being online.",
    accent: "#25D366",
    nodes: [
      { id: "t1", label: "WA Trigger", sublabel: "keyword: price/order", type: "trigger" as const, x: 0, y: 80 },
      { id: "t2", label: "WA: Send Message", sublabel: "Send product details", type: "message" as const, x: 190, y: 80 },
      { id: "t3", label: "WA: Wait Reply", sublabel: "Timeout: 1h", type: "wait" as const, x: 380, y: 80 },
      { id: "t4", label: "HTTP: Payment Link", sublabel: "Generate Paystack link", type: "http" as const, x: 190, y: 160 },
      { id: "t5", label: "WA: Send Message", sublabel: "Send payment link", type: "message" as const, x: 380, y: 160 },
    ],
    edges: [
      { from: "t1", to: "t2" },
      { from: "t2", to: "t3" },
      { from: "t3", to: "t4" },
      { from: "t4", to: "t5" },
    ],
  },
  {
    id: "leads",
    icon: Users,
    label: "Lead Generation",
    headline: "Capture and Qualify Leads 24/7",
    copy: "Run ads that drive to your WhatsApp. The moment someone messages, your flow qualifies them with a few questions, tags them by interest, and adds them to the right list for follow-up.",
    accent: "#3b82f6",
    nodes: [
      { id: "l1", label: "WA Trigger", sublabel: "Any incoming message", type: "trigger" as const, x: 0, y: 40 },
      { id: "l2", label: "WA: Send Message", sublabel: "Q1: What's your budget?", type: "message" as const, x: 190, y: 40 },
      { id: "l3", label: "WA: Wait Reply", type: "wait" as const, x: 380, y: 40 },
      { id: "l4", label: "WA: Send Message", sublabel: "Q2: Which product?", type: "message" as const, x: 190, y: 120 },
      { id: "l5", label: "WA: Wait Reply", type: "wait" as const, x: 380, y: 120 },
      { id: "l6", label: "WA: Tag Contact", sublabel: "Tag by interest", type: "tag" as const, x: 190, y: 200 },
      { id: "l7", label: "WA: Move To List", sublabel: "Hot Leads / Cold", type: "action" as const, x: 380, y: 200 },
    ],
    edges: [
      { from: "l1", to: "l2" }, { from: "l2", to: "l3" },
      { from: "l3", to: "l4" }, { from: "l4", to: "l5" },
      { from: "l5", to: "l6" }, { from: "l6", to: "l7" },
    ],
  },
  {
    id: "events",
    icon: Calendar,
    label: "Event Promotion",
    headline: "Fill Your Events Without Chasing People",
    copy: "Blast your event to a segmented list, wait for RSVPs, send reminders to non-responders, and build a confirmation group — all automated.",
    accent: "#f59e0b",
    nodes: [
      { id: "e1", label: "Campaign Trigger", sublabel: "Segmented list", type: "trigger" as const, x: 0, y: 80 },
      { id: "e2", label: "WA: Send Message", sublabel: "Event invite + details", type: "message" as const, x: 190, y: 80 },
      { id: "e3", label: "WA: Wait Reply", sublabel: "48h timeout", type: "wait" as const, x: 380, y: 80 },
      { id: "e4", label: "IF: RSVP check", sublabel: "Reply contains 'yes'", type: "condition" as const, x: 570, y: 80 },
      { id: "e5", label: "WA: Tag", sublabel: "Confirmed", type: "tag" as const, x: 760, y: 40 },
      { id: "e6", label: "WA: Send Message", sublabel: "Reminder message", type: "message" as const, x: 760, y: 120 },
    ],
    edges: [
      { from: "e1", to: "e2" }, { from: "e2", to: "e3" },
      { from: "e3", to: "e4" },
      { from: "e4", to: "e5", label: "Yes" },
      { from: "e4", to: "e6", label: "No" },
    ],
  },
  {
    id: "support",
    icon: Headphones,
    label: "Customer Support",
    headline: "Never Leave a Customer on Read Again",
    copy: "Set keyword triggers for common questions. Your bot handles FAQs instantly, escalates complex issues to a human, and logs every interaction for your team.",
    accent: "#a855f7",
    nodes: [
      { id: "s1", label: "WA Trigger", sublabel: "Any keyword", type: "trigger" as const, x: 0, y: 80 },
      { id: "s2", label: "Switch: Keyword", sublabel: "Route by intent", type: "condition" as const, x: 190, y: 80 },
      { id: "s3", label: "WA: Send Message", sublabel: "FAQ auto-reply", type: "message" as const, x: 380, y: 30 },
      { id: "s4", label: "WA: Tag", sublabel: "Tag: Escalate", type: "tag" as const, x: 380, y: 110 },
      { id: "s5", label: "WA: Send Message", sublabel: "Forwarding to human", type: "message" as const, x: 570, y: 110 },
    ],
    edges: [
      { from: "s1", to: "s2" },
      { from: "s2", to: "s3", label: "FAQ" },
      { from: "s2", to: "s4", label: "Complex" },
      { from: "s4", to: "s5" },
    ],
  },
];

export default function UseCaseTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium mb-4">
            Use Cases
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Built for Every{" "}
            <span className="green-gradient-text">WhatsApp Business</span>
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t, i) => {
            const Icon = t.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[8px] text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-white border"
                    : "text-[#737373] border border-[#2a2a2a] hover:text-white hover:border-[#3a3a3a]"
                }`}
                style={isActive ? { borderColor: `${t.accent}50`, background: `${t.accent}15`, color: t.accent } : {}}
              >
                <Icon size={14} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-4"
                style={{ borderColor: `${tab.accent}30`, background: `${tab.accent}10`, color: tab.accent }}>
                {tab.label}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{tab.headline}</h3>
              <p className="text-[#A3A3A3] leading-relaxed">{tab.copy}</p>
              <a
                href="#pricing"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-[8px] text-sm transition-all duration-200"
                style={{ background: tab.accent, boxShadow: `0 0 20px ${tab.accent}30` }}
              >
                Build This Flow Free
              </a>
            </div>

            {/* Node diagram */}
            <div className="bg-[#111] rounded-[12px] border border-[#1a1a1a] p-4 overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full" style={{ background: tab.accent }} />
                <span className="text-xs font-semibold text-[#555]">Workflow Canvas</span>
              </div>
              <div className="overflow-x-auto">
                <NodeDiagram nodes={tab.nodes} edges={tab.edges} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
