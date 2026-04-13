import { motion } from "framer-motion";

const circles = [
  { size: "w-72 h-72", top: "5%", left: "10%", duration: 18, x: [0, 180, -120, 0], y: [0, -150, 100, 0], scale: [1, 1.2, 0.9, 1] },
  { size: "w-96 h-96", top: "20%", left: "65%", duration: 22, x: [0, -200, 80, 0], y: [0, 120, -180, 0], scale: [1, 0.85, 1.15, 1] },
  { size: "w-64 h-64", top: "55%", left: "5%", duration: 20, x: [0, 150, -100, 0], y: [0, -100, 200, 0], scale: [1, 1.3, 0.8, 1] },
  { size: "w-80 h-80", top: "60%", left: "70%", duration: 25, x: [0, -160, 140, 0], y: [0, 80, -120, 0], scale: [1, 0.9, 1.2, 1] },
  { size: "w-56 h-56", top: "35%", left: "40%", duration: 16, x: [0, 120, -200, 0], y: [0, -180, 60, 0], scale: [1, 1.1, 0.95, 1] },
  { size: "w-72 h-72", top: "75%", left: "35%", duration: 21, x: [0, -100, 180, 0], y: [0, 150, -80, 0], scale: [1, 0.85, 1.25, 1] },
  { size: "w-48 h-48", top: "10%", left: "85%", duration: 19, x: [0, -140, 60, 0], y: [0, 100, -160, 0], scale: [1, 1.2, 0.9, 1] },
];

const GeometricBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
    {/* Radiant orange glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(251,146,60,0.35)_0%,_rgba(255,237,213,0.25)_35%,_rgba(255,255,255,1)_70%)]" />

    {/* Animated circles */}
    {circles.map((c, i) => (
      <motion.div
        key={i}
        className={`absolute ${c.size} rounded-full border-[3px] border-orange-500/60 bg-transparent`}
        style={{ top: c.top, left: c.left }}
        animate={{ x: c.x, y: c.y, scale: c.scale, rotate: [0, 180, 360] }}
        transition={{ duration: c.duration, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

export default GeometricBackground;
