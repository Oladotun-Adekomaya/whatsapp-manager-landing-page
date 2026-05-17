"use client";

import { motion } from "framer-motion";
import {
  Users2, Download, Tags, Clock, ImageIcon, Radio,
  Zap, Share2, Shield, TrendingUp, Thermometer, Bot, Workflow
} from "lucide-react";
import BrowserMockup from "./BrowserMockup";

function WorkflowMockup() {
  const nodes = [
    { label: "WA: Trigger", color: "#25D366", x: 20 },
    { label: "WA: Send Message", color: "#3b82f6", x: 200 },
    { label: "WA: Wait For Reply", color: "#f59e0b", x: 380 },
    { label: "WA: Tag Contact", color: "#10b981", x: 560 },
  ];

  return (
    <div className="bg-[#0d0d0d] p-4 min-h-[160px] relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />
      <div className="relative flex items-center justify-around py-6 overflow-x-auto">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="px-3 py-2 rounded-lg border text-xs font-semibold whitespace-nowrap"
                style={{
                  borderColor: `${node.color}50`,
                  background: `${node.color}15`,
                  color: node.color,
                  boxShadow: `0 0 12px ${node.color}20`
                }}
              >
                {node.label}
              </div>
            </div>
            {i < nodes.length - 1 && (
              <div className="flex items-center mx-2">
                <div className="h-px w-6 bg-[#333]" />
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[#333]" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
        <span className="text-[10px] text-[#333] font-mono">4 nodes · 0 errors · Last run: 2s ago</span>
        <div className="flex gap-1">
          {["Execute", "Save"].map(b => (
            <div key={b} className="px-2 py-0.5 text-[9px] rounded border border-[#222] text-[#444] font-medium">{b}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CampaignMockup() {
  return (
    <div className="bg-[#0d0d0d] p-4 min-h-[160px]">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-[11px] font-bold text-white">Black Friday Campaign</div>
          <div className="text-[10px] text-[#555]">Started 2 hours ago · 3,000 contacts</div>
        </div>
        <div className="px-2 py-0.5 bg-[#25D366]/15 border border-[#25D366]/30 rounded text-[#25D366] text-[10px] font-semibold">Running</div>
      </div>
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-[9px] text-[#555] mb-1">
          <span>Progress</span><span>71% complete</span>
        </div>
        <div className="h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "71%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="h-full bg-gradient-to-r from-[#25D366] to-[#2EE571] rounded-full"
          />
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Delivered", val: "2,100", color: "#25D366" },
          { label: "Failed", val: "23", color: "#ef4444" },
          { label: "Pending", val: "877", color: "#f59e0b" },
        ].map((s, i) => (
          <div key={i} className="bg-[#111] rounded-lg p-2 text-center border border-[#1a1a1a]">
            <div className="text-sm font-bold" style={{ color: s.color }}>{s.val}</div>
            <div className="text-[9px] text-[#444] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const smallFeatures = [
  { icon: Users2, title: "Multi-Account Management", copy: "Control every WhatsApp number from one place. Auto-reconnects on restart.", accent: "#25D366" },
  { icon: Download, title: "Group Member Extraction", copy: "Extract full member lists from any group and turn them into campaigns instantly.", accent: "#3b82f6" },
  { icon: Tags, title: "Smart Contact Segmentation", copy: "Tag, filter, and organise up to 50,000 contacts. Target the right people every time.", accent: "#a855f7" },
  { icon: Clock, title: "Scheduled Broadcasts", copy: "Queue messages days ahead. Sends at exactly the right time, in any timezone.", accent: "#f59e0b" },
  { icon: ImageIcon, title: "Media Library", copy: "Upload once. Reuse across every campaign, chatbot, and broadcast forever.", accent: "#06b6d4" },
  { icon: Radio, title: "Status Automation", copy: "Schedule status posts across all accounts. Your content goes live without lifting a finger.", accent: "#ec4899" },
  { icon: Zap, title: "Chatbot Triggers", copy: "Reply to keyword messages instantly — 24/7 — with intelligent, multi-step conversation flows.", accent: "#f59e0b" },
  { icon: Share2, title: "Channel Auto-Share", copy: "Auto-blast channel posts to your status and groups the moment they're published.", accent: "#10b981" },
  { icon: Shield, title: "Self-Hosted & Private", copy: "Your data never leaves your servers. No per-contact fees. No data mining.", accent: "#25D366" },
  { icon: TrendingUp, title: "Engagement Analytics", copy: "See reply rates, delivery rates, and which contacts are most engaged.", accent: "#3b82f6" },
  { icon: Thermometer, title: "Account Warmup", copy: "New number? Gradually ramp up sending to stay off WhatsApp's radar.", accent: "#f97316" },
  { icon: Bot, title: "13 Automation Nodes", copy: "Purpose-built WhatsApp nodes: send, receive, wait, tag, segment, verify — and more.", accent: "#25D366" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium mb-4">
            <Workflow size={12} />
            Full Feature Suite
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Everything You Need to{" "}
            <span className="green-gradient-text">Dominate</span> on WhatsApp
          </h2>
          <p className="mt-4 text-[#737373] max-w-2xl mx-auto">
            One platform. Every tool you need to turn WhatsApp into a revenue machine.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Large card: Visual Workflow Builder */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 bg-[#1a1a1a] rounded-[12px] border border-[#2a2a2a] overflow-hidden hover:border-[#25D366]/30 transition-colors group"
          >
            <div className="p-5">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center">
                  <Workflow size={16} className="text-[#25D366]" />
                </div>
                <h3 className="text-base font-bold text-white">Visual Workflow Builder</h3>
              </div>
              <p className="text-sm text-[#737373] mb-4 leading-relaxed">
                Build chatbots and automation flows with drag-and-drop. No code. Connect WhatsApp to your CRM, payment system, Google Sheets, or AI in minutes.
              </p>
            </div>
            <BrowserMockup url="app.wamanager.io/workflows/editor">
              <WorkflowMockup />
            </BrowserMockup>
          </motion.div>

          {/* Large card: Campaign Engine */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 bg-[#1a1a1a] rounded-[12px] border border-[#2a2a2a] overflow-hidden hover:border-[#3b82f6]/30 transition-colors group"
          >
            <div className="p-5">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center">
                  <TrendingUp size={16} className="text-[#3b82f6]" />
                </div>
                <h3 className="text-base font-bold text-white">Campaign Engine</h3>
              </div>
              <p className="text-sm text-[#737373] mb-4 leading-relaxed">
                Launch personalised bulk campaigns with send-time controls, daily limits, and real-time delivery tracking. Pause, resume, and optimise mid-flight.
              </p>
            </div>
            <BrowserMockup url="app.wamanager.io/campaigns/detail">
              <CampaignMockup />
            </BrowserMockup>
          </motion.div>

          {/* Small cards */}
          {smallFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#1a1a1a] rounded-[12px] border border-[#2a2a2a] p-5 hover:border-[#2a2a2a] hover:bg-[#1f1f1f] transition-all group relative overflow-hidden"
                style={{ "--accent": feat.accent } as React.CSSProperties}
              >
                <div className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${feat.accent}15, transparent 70%)`, transform: "translate(25%, -25%)" }} />
                <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center border transition-colors"
                  style={{ background: `${feat.accent}15`, borderColor: `${feat.accent}30` }}>
                  <Icon size={16} style={{ color: feat.accent }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{feat.title}</h3>
                <p className="text-xs text-[#737373] leading-relaxed">{feat.copy}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
