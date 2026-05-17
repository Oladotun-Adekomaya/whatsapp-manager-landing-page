"use client";

interface BrowserMockupProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

export default function BrowserMockup({ children, className = "", url = "app.wamanager.io" }: BrowserMockupProps) {
  return (
    <div className={`relative rounded-[12px] overflow-hidden border border-[#2a2a2a] shadow-2xl ${className}`}
      style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)" }}>
      {/* Browser chrome */}
      <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-3 border-b border-[#2a2a2a]">
        {/* Traffic lights */}
        <div className="flex items-center gap-[6px]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        {/* URL bar */}
        <div className="flex-1 bg-[#0a0a0a] rounded-md px-3 py-1.5 flex items-center gap-2 max-w-xs mx-auto">
          <div className="w-2 h-2 rounded-full bg-[#25D366]" />
          <span className="text-[#737373] text-xs font-mono truncate">{url}</span>
        </div>
        <div className="w-16" />
      </div>
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
