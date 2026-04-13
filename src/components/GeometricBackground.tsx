import { motion } from "framer-motion";

const circles = [
  { size: "w-72 h-72", top: "5%", left: "10%", duration: 35, x: [0, 80, -60, 0], y: [0, -70, 50, 0], scale: [1, 1.08, 0.95, 1] },
  { size: "w-96 h-96", top: "20%", left: "65%", duration: 40, x: [0, -90, 40, 0], y: [0, 60, -80, 0], scale: [1, 0.93, 1.06, 1] },
  { size: "w-64 h-64", top: "55%", left: "5%", duration: 38, x: [0, 70, -50, 0], y: [0, -50, 90, 0], scale: [1, 1.1, 0.92, 1] },
  { size: "w-80 h-80", top: "60%", left: "70%", duration: 42, x: [0, -70, 60, 0], y: [0, 40, -60, 0], scale: [1, 0.94, 1.08, 1] },
  { size: "w-56 h-56", top: "35%", left: "40%", duration: 30, x: [0, 50, -80, 0], y: [0, -80, 30, 0], scale: [1, 1.05, 0.97, 1] },
  { size: "w-72 h-72", top: "75%", left: "35%", duration: 36, x: [0, -45, 70, 0], y: [0, 65, -40, 0], scale: [1, 0.92, 1.1, 1] },
  { size: "w-48 h-48", top: "10%", left: "85%", duration: 33, x: [0, -60, 30, 0], y: [0, 45, -70, 0], scale: [1, 1.07, 0.94, 1] },
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
