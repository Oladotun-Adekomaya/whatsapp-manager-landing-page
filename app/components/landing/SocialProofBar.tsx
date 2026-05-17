"use client";

import {
  ShoppingBag, Home, Mic2, GraduationCap, Shirt,
  Wrench, BarChart3, Utensils, Car, Landmark
} from "lucide-react";

const items = [
  { icon: ShoppingBag, label: "E-commerce Brands" },
  { icon: Home, label: "Real Estate Agencies" },
  { icon: Mic2, label: "Event Promoters" },
  { icon: GraduationCap, label: "Coaches & Consultants" },
  { icon: Shirt, label: "Fashion Businesses" },
  { icon: Wrench, label: "Service Providers" },
  { icon: BarChart3, label: "Digital Marketers" },
  { icon: Utensils, label: "Food & Restaurant" },
  { icon: Car, label: "Auto Dealers" },
  { icon: Landmark, label: "Financial Services" },
];

// Duplicate for seamless loop
const allItems = [...items, ...items];

export default function SocialProofBar() {
  return (
    <section className="py-8 border-y border-[#1a1a1a] overflow-hidden bg-[#0d0d0d] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />

      <div className="mb-4 text-center">
        <span className="text-xs font-medium text-[#555] uppercase tracking-widest">
          Trusted by businesses across Africa
        </span>
      </div>

      <div className="flex animate-ticker w-max">
        {allItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 mx-6 px-4 py-2 rounded-full border border-[#222] bg-[#111] text-[#555] hover:text-[#A3A3A3] hover:border-[#2a2a2a] transition-colors whitespace-nowrap"
            >
              <Icon size={14} className="text-[#25D366]" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
