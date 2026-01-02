import React from 'react';
import { motion } from 'framer-motion';
import { VibeMode } from '../types';
import { Sparkles, Briefcase } from 'lucide-react';

interface VibeSliderProps {
  mode: VibeMode;
  setMode: (mode: VibeMode) => void;
}

const VibeSlider: React.FC<VibeSliderProps> = ({ mode, setMode }) => {
  return (
    <div className="flex flex-col items-center gap-3 mb-8">
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Content Mode
        </span>
      </div>
      
      <div className="bg-white p-1.5 rounded-full border border-sky-100 shadow-lg shadow-sky-50 flex relative w-72">
        <motion.div
          className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-sky-500 rounded-full z-0 shadow-md"
          layoutId="highlight"
          animate={{ x: mode === VibeMode.Recruiter ? 0 : '100%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        
        <button
          onClick={() => setMode(VibeMode.Recruiter)}
          className={`relative z-10 w-1/2 py-2.5 rounded-full text-sm font-bold transition-colors flex items-center justify-center gap-2 ${
            mode === VibeMode.Recruiter ? 'text-white' : 'text-slate-400 hover:text-sky-600'
          }`}
        >
          <Briefcase size={16} /> Recruiter
        </button>
        <button
          onClick={() => setMode(VibeMode.ELI5)}
          className={`relative z-10 w-1/2 py-2.5 rounded-full text-sm font-bold transition-colors flex items-center justify-center gap-2 ${
            mode === VibeMode.ELI5 ? 'text-white' : 'text-slate-400 hover:text-sky-600'
          }`}
        >
          <Sparkles size={16} /> ELI5
        </button>
      </div>
      
      <AnimateText mode={mode} />
    </div>
  );
};

const AnimateText = ({ mode }: { mode: VibeMode }) => {
  return (
    <motion.p 
      key={mode}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-xs text-sky-600 font-medium h-4"
    >
      {mode === VibeMode.Recruiter 
        ? "Professional technical breakdown." 
        : "Explain Like I'm 5 (Simple & Fun!)"}
    </motion.p>
  )
}

export default VibeSlider;