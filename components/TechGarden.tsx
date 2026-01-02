import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { PageView, Skill } from '../types';
import { Leaf, Database, Cloud, Shield, Server } from 'lucide-react';

interface TechGardenProps {
  setPage: (page: PageView) => void;
}

const TechGarden: React.FC<TechGardenProps> = ({ setPage }) => {

  const handleSkillClick = (category: string) => {
    switch(category) {
        case 'cloud': setPage('lab'); break;
        case 'security': setPage('ops'); break;
        case 'network': setPage('ops'); break;
        default: setPage('ops'); break; 
    }
  };

  const getIcon = (category: string) => {
      switch(category) {
          case 'cloud': return <Cloud size={14} />;
          case 'security': return <Shield size={14} />;
          case 'network': return <Server size={14} />;
          default: return <Database size={14} />;
      }
  };

  const getColor = (category: string) => {
    switch (category) {
      case 'cloud': return 'bg-sky-100 text-sky-700 border-sky-300';
      case 'security': return 'bg-rose-100 text-rose-700 border-rose-300';
      case 'network': return 'bg-emerald-100 text-emerald-700 border-emerald-300';
      default: return 'bg-amber-100 text-amber-700 border-amber-300';
    }
  };

  // Group skills for tree layout
  const cloudSkills = SKILLS.filter(s => s.category === 'cloud');
  const secSkills = SKILLS.filter(s => s.category === 'security');
  const netSkills = SKILLS.filter(s => s.category === 'network');
  const rootSkills = SKILLS.filter(s => s.category === 'general');

  const LeafNode: React.FC<{ skill: Skill, delay: number, xOffset: string }> = ({ skill, delay, xOffset }) => (
    <motion.button
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ delay, type: "spring", stiffness: 200 }}
        onClick={() => handleSkillClick(skill.category)}
        className={`
            relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-tr-xl rounded-bl-xl border-2 shadow-sm
            font-bold text-xs md:text-sm cursor-pointer transition-all hover:shadow-md
            ${getColor(skill.category)}
        `}
        style={{ marginLeft: xOffset === 'left' ? '-10px' : '0', marginRight: xOffset === 'right' ? '-10px' : '0' }}
    >
        {getIcon(skill.category)}
        {skill.name}
    </motion.button>
  );

  return (
    <div className="relative h-full w-full bg-slate-50/50 rounded-3xl border border-slate-200 overflow-hidden flex flex-col items-center justify-end p-8">
        <h3 className="absolute top-6 left-6 text-lg font-bold text-slate-800 flex items-center gap-2 z-20">
            <div className="p-1.5 bg-green-100 text-green-600 rounded-md">
                <Leaf size={18} />
            </div>
            Tech Tree
        </h3>
        <p className="absolute top-14 left-6 text-xs text-slate-400 z-20">Click leaves to explore details</p>

        {/* The Tree Structure */}
        <div className="relative flex flex-col items-center w-full max-w-2xl">
            
            {/* Canopy (Cloud) */}
            <div className="flex justify-center gap-4 mb-4 flex-wrap w-full z-10">
                {cloudSkills.map((s, i) => (
                    <LeafNode key={s.name} skill={s} delay={0.6 + (i * 0.1)} xOffset="center" />
                ))}
            </div>

            {/* Upper Branches (Security) */}
            <div className="relative w-full flex justify-center py-4">
                 {/* SVG Branch Lines */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none text-slate-300" style={{ zIndex: 0 }}>
                    <path d="M 50% 100% Q 20% 50% 10% 20%" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M 50% 100% Q 80% 50% 90% 20%" stroke="currentColor" strokeWidth="2" fill="none" />
                 </svg>
                 
                 <div className="flex justify-between w-full px-8 md:px-24 items-end">
                    <div className="flex flex-col gap-2 items-end">
                        {secSkills.slice(0, 2).map((s, i) => <LeafNode key={s.name} skill={s} delay={0.4 + i*0.1} xOffset="left" />)}
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        {secSkills.slice(2).map((s, i) => <LeafNode key={s.name} skill={s} delay={0.4 + i*0.1} xOffset="right" />)}
                    </div>
                 </div>
            </div>

            {/* Trunk Area (Network/Ops) */}
            <div className="relative flex flex-col items-center gap-3 py-2">
                {/* Main Trunk Line */}
                <div className="absolute inset-y-0 w-2 bg-slate-300 rounded-full -z-10" />
                
                {netSkills.map((s, i) => (
                    <LeafNode key={s.name} skill={s} delay={0.2 + i*0.1} xOffset="center" />
                ))}
            </div>

            {/* Roots (General) */}
            <div className="relative w-full flex justify-center pt-6 pb-2">
                 <svg className="absolute top-0 w-full h-24 pointer-events-none text-slate-300" style={{ zIndex: 0 }}>
                    <path d="M 50% 0 Q 30% 50% 20% 100%" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M 50% 0 Q 70% 50% 80% 100%" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M 50% 0 L 50% 100%" stroke="currentColor" strokeWidth="2" fill="none" />
                 </svg>

                 <div className="flex justify-center gap-6 md:gap-12 mt-4 z-10">
                     {rootSkills.map((s, i) => (
                        <LeafNode key={s.name} skill={s} delay={0.1 + i*0.1} xOffset="center" />
                     ))}
                 </div>
            </div>
            
            {/* Ground Line */}
            <div className="w-3/4 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-2 rounded-full" />
        </div>
    </div>
  );
};

export default TechGarden;