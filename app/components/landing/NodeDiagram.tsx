"use client";

import { motion } from "framer-motion";

interface Node {
  id: string;
  label: string;
  sublabel?: string;
  type: "trigger" | "message" | "wait" | "action" | "condition" | "tag" | "http";
  x: number;
  y: number;
}

interface Edge {
  from: string;
  to: string;
  label?: string;
  branch?: "yes" | "no";
}

interface NodeDiagramProps {
  nodes: Node[];
  edges: Edge[];
}

const nodeColors: Record<Node["type"], { bg: string; border: string; dot: string; text: string }> = {
  trigger:   { bg: "#1a2e1a", border: "#25D366", dot: "#25D366", text: "#25D366" },
  message:   { bg: "#1a1f2e", border: "#3b82f6", dot: "#3b82f6", text: "#60a5fa" },
  wait:      { bg: "#2a1f1a", border: "#f59e0b", dot: "#f59e0b", text: "#fbbf24" },
  action:    { bg: "#1a2a2e", border: "#06b6d4", dot: "#06b6d4", text: "#22d3ee" },
  condition: { bg: "#2e1a2e", border: "#a855f7", dot: "#a855f7", text: "#c084fc" },
  tag:       { bg: "#1a2e24", border: "#10b981", dot: "#10b981", text: "#34d399" },
  http:      { bg: "#2e2a1a", border: "#f97316", dot: "#f97316", text: "#fb923c" },
};

const nodeIcons: Record<Node["type"], string> = {
  trigger:   "⚡",
  message:   "💬",
  wait:      "⏳",
  action:    "▶",
  condition: "◆",
  tag:       "🏷",
  http:      "🔗",
};

export default function NodeDiagram({ nodes, edges }: NodeDiagramProps) {
  // Calculate SVG dimensions
  const maxX = Math.max(...nodes.map(n => n.x)) + 180;
  const maxY = Math.max(...nodes.map(n => n.y)) + 60;

  const getNode = (id: string) => nodes.find(n => n.id === id);

  return (
    <div className="relative w-full overflow-x-auto">
      <svg
        width="100%"
        viewBox={`-20 -20 ${maxX + 40} ${maxY + 40}`}
        className="min-w-[500px]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {/* Grid dots */}
        <defs>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.8" fill="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>
        <rect x="-20" y="-20" width={maxX + 80} height={maxY + 80} fill="url(#smallGrid)" />

        {/* Edges */}
        {edges.map((edge, i) => {
          const from = getNode(edge.from);
          const to = getNode(edge.to);
          if (!from || !to) return null;

          const x1 = from.x + 140;
          const y1 = from.y + 24;
          const x2 = to.x;
          const y2 = to.y + 24;

          const mx = (x1 + x2) / 2;

          return (
            <g key={i}>
              <path
                d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`}
                fill="none"
                stroke={edge.branch === "yes" ? "#25D366" : edge.branch === "no" ? "#ef4444" : "#3a3a3a"}
                strokeWidth="1.5"
                strokeDasharray={edge.branch ? "none" : "none"}
                markerEnd="url(#arrowhead)"
              />
              {edge.label && (
                <text x={mx} y={(y1 + y2) / 2 - 6} textAnchor="middle" fontSize="9" fill="#737373">
                  {edge.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Arrowhead marker */}
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#3a3a3a" />
          </marker>
        </defs>

        {/* Nodes */}
        {nodes.map((node) => {
          const colors = nodeColors[node.type];
          return (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              <rect
                width="140"
                height="48"
                rx="8"
                fill={colors.bg}
                stroke={colors.border}
                strokeWidth="1.5"
                style={{ filter: `drop-shadow(0 0 8px ${colors.border}30)` }}
              />
              <text x="12" y="16" fontSize="11" fill={colors.text} fontWeight="600">
                {nodeIcons[node.type]} {node.label}
              </text>
              {node.sublabel && (
                <text x="12" y="32" fontSize="9" fill="#737373">
                  {node.sublabel}
                </text>
              )}
              <circle cx="7" cy="24" r="3" fill={colors.dot} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
