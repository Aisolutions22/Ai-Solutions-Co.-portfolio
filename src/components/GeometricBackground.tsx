import { motion } from "framer-motion";

const hexagonPath = (cx: number, cy: number, r: number) => {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  });
  return `M${pts.join("L")}Z`;
};

const shapes = [
  { type: "hex" as const, cx: 120, cy: 150, r: 80, duration: 25, delay: 0 },
  { type: "hex" as const, cx: 900, cy: 100, r: 60, duration: 30, delay: 2 },
  { type: "hex" as const, cx: 400, cy: 500, r: 100, duration: 35, delay: 1 },
  { type: "hex" as const, cx: 1100, cy: 450, r: 70, duration: 28, delay: 3 },
  { type: "hex" as const, cx: 700, cy: 300, r: 90, duration: 32, delay: 0.5 },
  { type: "hex" as const, cx: 200, cy: 700, r: 50, duration: 26, delay: 1.5 },
  { type: "hex" as const, cx: 1000, cy: 700, r: 75, duration: 29, delay: 2.5 },
  { type: "line" as const, x1: 50, y1: 200, x2: 350, y2: 100, duration: 20, delay: 0 },
  { type: "line" as const, x1: 800, y1: 50, x2: 1100, y2: 250, duration: 24, delay: 1 },
  { type: "line" as const, x1: 300, y1: 600, x2: 600, y2: 500, duration: 22, delay: 2 },
  { type: "line" as const, x1: 900, y1: 550, x2: 1200, y2: 650, duration: 27, delay: 0.5 },
];

const GeometricBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
    <svg className="w-full h-full" viewBox="0 0 1280 900" preserveAspectRatio="xMidYMid slice">
      {shapes.map((s, i) =>
        s.type === "hex" ? (
          <motion.path
            key={i}
            d={hexagonPath(s.cx, s.cy, s.r)}
            fill="none"
            stroke="hsl(24, 90%, 60%)"
            strokeWidth="1"
            opacity="0.04"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: s.duration, repeat: Infinity, ease: "linear" },
              scale: { duration: s.duration / 2, repeat: Infinity, ease: "easeInOut", delay: s.delay },
            }}
            style={{ transformOrigin: `${s.cx}px ${s.cy}px` }}
          />
        ) : (
          <motion.line
            key={i}
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
            stroke="hsl(340, 80%, 60%)"
            strokeWidth="0.8"
            opacity="0.035"
            animate={{
              y1: [s.y1!, s.y1! - 20, s.y1!],
              y2: [s.y2!, s.y2! + 20, s.y2!],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
          />
        )
      )}
    </svg>
  </div>
);

export default GeometricBackground;
