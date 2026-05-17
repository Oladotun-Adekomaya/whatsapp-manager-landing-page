"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Will my WhatsApp number get banned?",
    a: "Our built-in warmup scheduler gradually increases your send volume so you stay within WhatsApp's limits. Additionally, send-window controls ensure you never blast at unusual hours. Following best practices with our platform significantly reduces ban risk.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Not at all. The visual workflow builder uses drag-and-drop. If you can use Canva or Google Slides, you can build automations here. Everything is point-and-click — no coding knowledge required.",
  },
  {
    q: "Where is my data stored?",
    a: "Everywhere you deploy it — your own server, your own database. We never have access to your contacts, messages, or business data. You own 100% of everything, always.",
  },
  {
    q: "How many contacts can I manage?",
    a: "You can import up to 50,000 contacts per import, with no hard cap on total contacts per account. Your database grows with your business.",
  },
  {
    q: "Can I manage multiple WhatsApp numbers?",
    a: "Yes. Connect as many numbers as your plan allows, switch between them instantly, and run different campaigns from different numbers simultaneously. Each number gets its own isolated session storage.",
  },
  {
    q: "What apps can I connect to in the workflow builder?",
    a: "The workflow builder is powered by n8n, which supports 400+ integrations out of the box — including Google Sheets, Notion, Stripe, OpenAI, Slack, and any REST API. If it has an API, you can connect it.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`border rounded-[12px] overflow-hidden transition-colors duration-200 ${
        open ? "border-[#25D366]/30 bg-[#0d1a12]" : "border-[#2a2a2a] bg-[#1a1a1a]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold text-white text-sm leading-relaxed">{q}</span>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-200 ${
            open
              ? "bg-[#25D366]/15 border-[#25D366]/40"
              : "bg-[#1a1a1a] border-[#2a2a2a]"
          }`}
        >
          {open ? (
            <Minus size={12} className="text-[#25D366]" />
          ) : (
            <Plus size={12} className="text-[#737373]" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-5 pb-5 text-sm text-[#A3A3A3] leading-relaxed border-t border-[#25D366]/10 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium mb-4">
            <HelpCircle size={12} />
            Frequently Asked
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Got Questions?
          </h2>
          <p className="mt-3 text-[#737373]">
            Everything you need to know before you start.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
