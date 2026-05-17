"use client";

import { MessageCircle, Twitter, Github } from "lucide-react";

const links = {
  Product: ["Features", "How It Works", "Pricing", "Changelog"],
  Resources: ["Docs", "API Reference", "Workflow Templates", "Community"],
  Company: ["About", "Privacy Policy", "Terms of Service", "Contact"],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo + tagline */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center">
                <MessageCircle size={18} className="text-white fill-white" />
              </div>
              <span className="font-bold text-[17px] tracking-tight text-white">
                WA<span className="text-[#25D366]">Manager</span>
              </span>
            </div>
            <p className="text-sm text-[#555] leading-relaxed max-w-xs">
              The complete WhatsApp automation platform for serious businesses. Deploy on your servers. Own your data.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:text-white hover:border-[#3a3a3a] transition-colors">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:text-white hover:border-[#3a3a3a] transition-colors">
                <Github size={14} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#555] hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#444]">
            © {new Date().getFullYear()} WAManager. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-[#444]">
            <span>Built for African businesses.</span>
            <span className="text-[#25D366]">🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
