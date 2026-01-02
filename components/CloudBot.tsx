import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProfileHero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse interaction for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-48 h-48 md:w-64 md:h-64 cursor-pointer perspective-1000"
    >
      {/* Secure Glow Effect - Emerald/Sky gradient for Cyber vibe */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-3xl transition-opacity duration-500 -z-10 ${hovered ? 'opacity-50' : 'opacity-25'}`} 
      />
      
      {/* Profile Image Container - Dark border to match Server Rack aesthetic */}
      <motion.div
        className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl relative z-10 bg-slate-800"
        style={{ transform: "translateZ(20px)" }}
      >
        <img 
          src="/prerak.jpg" 
          alt="Prerak Chavda"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image not found
            (e.target as HTMLImageElement).src = "https://github.com/prerakchavda.png";
          }}
        />
        {/* Subtle overlay for better integration with dark theme elements */}
        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay pointer-events-none" />
      </motion.div>

      {/* Floating Elements (Security Themed) */}
      <motion.div 
        className="absolute -top-4 -right-4 bg-slate-900 p-3 rounded-2xl shadow-lg border border-slate-700 z-20"
        style={{ transform: "translateZ(50px)" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-2xl">🔐</span>
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-2 -left-2 bg-slate-900 p-2 rounded-2xl shadow-lg border border-slate-700 z-20"
        style={{ transform: "translateZ(40px)" }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="text-2xl">🛡️</span>
      </motion.div>
    </motion.div>
  );
};

export default ProfileHero;