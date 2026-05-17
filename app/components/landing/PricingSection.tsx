"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    tagline: "Perfect for solo operators getting started",
    price: null,
    accent: "#A3A3A3",
    features: [
      "1 WhatsApp number",
      "Basic bulk campaigns",
      "CSV/VCF contact import",
      "Up to 5,000 contacts",
      "Basic delivery analytics",
      "Media library (1GB)",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    tagline: "For businesses ready to scale their outreach",
    price: null,
    accent: "#25D366",
    features: [
      "Up to 5 WhatsApp numbers",
      "Visual workflow builder (n8n)",
      "Advanced campaign engine",
      "Group member extraction",
      "Up to 25,000 contacts",
      "Full delivery & reply analytics",
      "Status automation",
      "Scheduled broadcasts",
      "Media library (10GB)",
      "Priority email support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Pro",
    tagline: "Unlimited power for serious operations",
    price: null,
    accent: "#2EE571",
    features: [
      "Unlimited WhatsApp numbers",
      "All workflow features",
      "Account warmup scheduler",
      "Channel auto-share",
      "Unlimited contacts",
      "Advanced segmentation",
      "Workflow execution logs",
      "Multi-user team access",
      "Unlimited media storage",
      "Dedicated priority support",
      "Custom integrations",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(37,211,102,0.04) 0%, transparent 60%)"
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium mb-4">
            <Zap size={12} />
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#737373] max-w-xl mx-auto">
            No per-contact fees that grow as your list grows. Pay once, own it forever. All plans are self-hosted on your own server.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-[12px] p-6 flex flex-col ${
                tier.popular
                  ? "border-2 bg-[#0d1a12]"
                  : "border border-[#2a2a2a] bg-[#1a1a1a]"
              }`}
              style={tier.popular ? {
                borderColor: `${tier.accent}50`,
                boxShadow: `0 0 40px ${tier.accent}15, 0 0 0 1px ${tier.accent}20`
              } : {}}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 rounded-full text-[11px] font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${tier.accent}, #2EE571)` }}>
                    Most Popular
                  </div>
                </div>
              )}

              {/* Tier header */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-xs text-[#737373] leading-relaxed">{tier.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
                <div className="text-3xl font-black text-white mb-1">
                  Contact Us
                </div>
                <div className="text-xs text-[#555]">Self-hosted · One-time or subscription</div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${tier.accent}15`, border: `1px solid ${tier.accent}40` }}>
                      <Check size={9} style={{ color: tier.accent }} />
                    </div>
                    <span className="text-sm text-[#A3A3A3]">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="block text-center py-3 rounded-[8px] font-bold text-sm transition-all duration-200"
                style={tier.popular ? {
                  background: `linear-gradient(135deg, ${tier.accent}, #2EE571)`,
                  color: "white",
                  boxShadow: `0 0 20px ${tier.accent}30`
                } : {
                  background: "#1a1a1a",
                  border: `1px solid ${tier.accent}30`,
                  color: tier.accent,
                }}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-[#555] mt-10"
        >
          All plans include: self-hosted deployment · full data ownership · no per-contact fees · unlimited team members on Pro
        </motion.p>
      </div>
    </section>
  );
}
