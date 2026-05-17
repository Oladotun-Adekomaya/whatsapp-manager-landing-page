"use client";

import { motion } from "framer-motion";
import { Check, Layers } from "lucide-react";
import BrowserMockup from "./BrowserMockup";

const bullets = [
  "13 pre-built WhatsApp nodes — no setup required",
  "Connect to 400+ apps: Google Sheets, Notion, Slack, Stripe, OpenAI, and more",
  "Conditional logic — send different messages based on replies",
  "Wait for customer replies before continuing (even days later)",
  "Auto-tag and segment contacts based on what they say",
  "Test any workflow by sending a message to your own number",
  "Execution logs show exactly what happened at every step",
];

function ComplexWorkflowMockup() {
  // Node positions for complex 8-node flow
  const nodes = [
    { label: "WA Campaign Trigger", type: "trigger", x: 20, y: 60, color: "#25D366" },
    { label: "WA: Send Message", sublabel: "Hey {{name}}, interested?", type: "message", x: 200, y: 60, color: "#3b82f6" },
    { label: "WA: Wait For Reply", sublabel: "Timeout: 24h", type: "wait", x: 380, y: 60, color: "#f59e0b" },
    { label: "IF: Check Reply", sublabel: "contains 'yes'", type: "condition", x: 560, y: 60, color: "#a855f7" },
    { label: "WA: Tag Contact", sublabel: "Tag: Interested", type: "tag", x: 740, y: 20, color: "#10b981" },
    { label: "WA: Move To List", sublabel: "List: Hot Leads", type: "action", x: 740, y: 100, color: "#06b6d4" },
    { label: "WA: Send Message", sublabel: "Here's a follow-up…", type: "message", x: 560, y: 140, color: "#3b82f6" },
    { label: "WA: Tag Contact", sublabel: "Tag: Cold", type: "tag", x: 740, y: 180, color: "#6b7280" },
  ];

  const nodeH = 44;
  const nodeW = 155;

  const edges = [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 },
    { from: 3, to: 4, label: "Yes" }, { from: 4, to: 5 },
    { from: 3, to: 6, label: "No" }, { from: 6, to: 7 },
  ];

  return (
    <div className="bg-[#0d0d0d] overflow-auto" style={{ minHeight: 260 }}>
      <div className="p-3 flex items-center justify-between border-b border-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#25D366]" />
          <span className="text-[10px] font-semibold text-[#A3A3A3]">Lead Qualification Flow</span>
        </div>
        <div className="flex gap-2">
          {["Executions: 1,247", "Errors: 3"].map((t, i) => (
            <span key={i} className="text-[9px] px-2 py-0.5 rounded border border-[#222] text-[#444]">{t}</span>
          ))}
        </div>
      </div>
      <div className="relative overflow-x-auto" style={{ minWidth: 920 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}
        />
        <svg
          width="920"
          height="240"
          style={{ position: "relative", zIndex: 1 }}
        >
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#333" />
            </marker>
          </defs>
          {edges.map((e, i) => {
            const from = nodes[e.from];
            const to = nodes[e.to];
            const x1 = from.x + nodeW;
            const y1 = from.y + nodeH / 2;
            const x2 = to.x;
            const y2 = to.y + nodeH / 2;
            const mx = (x1 + x2) / 2;
            return (
              <g key={i}>
                <path
                  d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`}
                  fill="none"
                  stroke={e.label === "Yes" ? "#25D366" : e.label === "No" ? "#ef4444" : "#2a2a2a"}
                  strokeWidth="1.5"
                  markerEnd="url(#arrow)"
                />
                {e.label && (
                  <text x={mx} y={Math.min(y1, y2) - 4} textAnchor="middle" fontSize="8" fill={e.label === "Yes" ? "#25D366" : "#ef4444"} fontWeight="600">
                    {e.label}
                  </text>
                )}
              </g>
            );
          })}
          {nodes.map((node, i) => (
            <g key={i} transform={`translate(${node.x}, ${node.y})`}>
              <rect width={nodeW} height={nodeH} rx="7" fill={`${node.color}12`} stroke={`${node.color}50`} strokeWidth="1.5"
                style={{ filter: `drop-shadow(0 0 8px ${node.color}20)` }} />
              <rect width="3" height={nodeH} rx="1.5" fill={node.color} />
              <text x="12" y="16" fontSize="10" fill={node.color} fontWeight="700">{node.label}</text>
              {node.sublabel && <text x="12" y="30" fontSize="8" fill="#555">{node.sublabel}</text>}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default function WorkflowDeepDive() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 30% 50%, rgba(37,211,102,0.04) 0%, transparent 60%)"
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-medium mb-4">
            <Layers size={12} />
            Powered by n8n
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            The Power of n8n —{" "}
            <span className="green-gradient-text">Built Right In</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Workflow Screenshot - 60% */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="overflow-x-auto rounded-[12px]">
              <div className="min-w-[560px]">
                <BrowserMockup url="app.wamanager.io/workflows/lead-qualification">
                  <ComplexWorkflowMockup />
                </BrowserMockup>
              </div>
            </div>
          </motion.div>

          {/* Bullet points - 40% */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-4 pt-2"
          >
            {bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-[#25D366]" />
                </div>
                <span className="text-[#A3A3A3] text-sm leading-relaxed">{b}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#2EE571] text-white font-semibold rounded-[8px] transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] text-sm"
              >
                Start Building Free
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
