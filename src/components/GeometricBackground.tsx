import { motion } from "framer-motion";

const circles = [
  { size: "w-72 h-72", top: "5%", left: "10%", duration: 50, x: [0, 40, -30, 0], y: [0, -35, 25, 0], scale: [1, 1.04, 0.97, 1] },
  { size: "w-96 h-96", top: "20%", left: "65%", duration: 55, x: [0, -45, 20, 0], y: [0, 30, -40, 0], scale: [1, 0.96, 1.03, 1] },
  { size: "w-64 h-64", top: "55%", left: "5%", duration: 52, x: [0, 35, -25, 0], y: [0, -25, 45, 0], scale: [1, 1.05, 0.96, 1] },
  { size: "w-80 h-80", top: "60%", left: "70%", duration: 58, x: [0, -35, 30, 0], y: [0, 20, -30, 0], scale: [1, 0.97, 1.04, 1] },
  { size: "w-56 h-56", top: "35%", left: "40%", duration: 48, x: [0, 25, -40, 0], y: [0, -40, 15, 0], scale: [1, 1.03, 0.98, 1] },
  { size: "w-72 h-72", top: "75%", left: "35%", duration: 54, x: [0, -22, 35, 0], y: [0, 32, -20, 0], scale: [1, 0.95, 1.05, 1] },
  { size: "w-48 h-48", top: "10%", left: "85%", duration: 50, x: [0, -30, 15, 0], y: [0, 22, -35, 0], scale: [1, 1.04, 0.97, 1] },
];

const GeometricBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(251,146,60,0.35)_0%,_rgba(255,237,213,0.25)_35%,_rgba(255,255,255,1)_70%)]" />
    {circles.map((c, i) => (
      <motion.div
        key={i}
        className={`absolute ${c.size} rounded-full border border-orange-400/30 bg-transparent`}
        style={{ top: c.top, left: c.left }}
        animate={{ x: c.x, y: c.y, scale: c.scale, rotate: [0, 180, 360] }}
        transition={{ duration: c.duration, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

export default GeometricBackground;
