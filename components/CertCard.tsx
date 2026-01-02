import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CertificationItem } from '../types';
import { CheckCircle } from 'lucide-react';

const CertCard: React.FC<{ cert: CertificationItem }> = ({ cert }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-64 perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div 
            className="absolute inset-0 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center"
            style={{ backfaceVisibility: 'hidden' }}
        >
            <div className={`w-16 h-16 rounded-2xl ${cert.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-4`}>
                {cert.name.substring(0, 1)}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{cert.name}</h3>
            <p className="text-sm text-slate-500 mt-1">{cert.issuer}</p>
            <div className="mt-6 text-xs font-bold text-sky-500 bg-sky-50 px-3 py-1 rounded-full flex items-center gap-1">
                Hover to reveal impact
            </div>
        </div>

        {/* Back Face */}
        <div 
            className="absolute inset-0 bg-slate-900 rounded-3xl p-6 shadow-xl flex flex-col items-center justify-center text-center"
            style={{ 
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden'
            }}
        >
            <div className="flex items-center gap-2 mb-4 text-emerald-400">
                <CheckCircle size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Verified {cert.date}</span>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed font-medium">
                "{cert.impact}"
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CertCard;