"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const problems = [
  "Manually typing the same message to hundreds of contacts",
  "Switching between 3 phones to manage different numbers",
  "No idea who actually read your message or replied",
  "Losing leads because you couldn't respond fast enough",
  "Copying group member numbers one by one into a spreadsheet",
  "Getting your number banned from sending too many messages at once",
];

const solutions = [
  "Send to thousands with one click, personalised for each contact",
  "Manage all your numbers from one dashboard",
  "Live delivery and reply-rate analytics per campaign",
  "Chatbots that reply instantly, 24/7, even while you sleep",
  "Extract every group member into your database in minutes",
  "Built-in warmup scheduler keeps your numbers safe",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-medium mb-4">
            The Old Way Is Broken
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Stop Doing It the Hard Way
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Problems */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#1a1a1a] rounded-[12px] border border-[#2a2a2a] p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <X size={12} className="text-red-400" />
              </div>
              <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">Before WAManager</span>
            </div>
            <div className="space-y-3">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#111] border border-[#222] hover:border-red-500/20 transition-colors"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                    <X size={10} className="text-red-400" />
                  </div>
                  <span className="text-sm text-[#A3A3A3] leading-relaxed">{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0d1a12] rounded-[12px] border border-[#25D366]/20 p-6 relative overflow-hidden"
            style={{ boxShadow: "0 0 40px rgba(37,211,102,0.05)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#25D366]/40 to-transparent" />
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center">
                <Check size={12} className="text-[#25D366]" />
              </div>
              <span className="text-sm font-semibold text-[#25D366] uppercase tracking-wider">After WAManager</span>
            </div>
            <div className="space-y-3">
              {solutions.map((s, i) => (
                <motion.div
                  key={i}
                  variants={{ ...itemVariants, hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } } }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#0a1a0f] border border-[#25D366]/10 hover:border-[#25D366]/30 transition-colors"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-[#25D366]" />
                  </div>
                  <span className="text-sm text-[#A3A3A3] leading-relaxed">{s}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
