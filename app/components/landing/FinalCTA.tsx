"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Server, Lock } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a1a0f 0%, #0a0a0a 40%, #0d0a1a 100%)"
        }}
      />
      {/* Green radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,211,102,0.12) 0%, transparent 70%)" }} />
      </div>
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Ready to Get Started?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            Ready to Turn WhatsApp Into{" "}
            <span className="green-gradient-text">Your Biggest Revenue Channel?</span>
          </h2>

          <p className="text-lg text-[#A3A3A3] max-w-2xl mx-auto mb-10 leading-relaxed">
            Join businesses already automating their sales, support, and marketing on WhatsApp. Deploy in minutes on your own server.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href="#"
              className="group flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#2EE571] text-white font-bold text-base rounded-[8px] transition-all duration-200 hover:shadow-[0_0_40px_rgba(37,211,102,0.5)]"
            >
              Get Started Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-8 py-4 border border-[#2a2a2a] hover:border-[#25D366]/30 text-white font-semibold text-base rounded-[8px] transition-all duration-200 hover:bg-[#1a1a1a]"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#555]"
          >
            {[
              { icon: Shield, text: "No credit card required" },
              { icon: Server, text: "Self-hosted on your server" },
              { icon: Lock, text: "Full data ownership" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-1.5">
                  <Icon size={14} className="text-[#25D366]" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
