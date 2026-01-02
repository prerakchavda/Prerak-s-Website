import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

// Fix: Tooltip component moved to top to avoid 'used before declaration' TypeScript errors
const Tooltip: React.FC<{ children: React.ReactNode; text: string }> = ({ children, text }) => {
    return (
        <div className="group relative flex flex-col items-center">
            {children}
            <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center w-48 z-50">
                <div className="bg-slate-900 text-white text-xs rounded-lg py-2 px-3 shadow-xl text-center border border-slate-700">
                    {text}
                </div>
                <div className="w-2 h-2 -mt-1 bg-slate-900 border-r border-b border-slate-700 rotate-45"></div>
            </div>
        </div>
    )
}

const ArchitectureMuseum: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-sky-100/50 relative overflow-hidden group h-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Lock className="text-indigo-500" size={18} />
            Secure Cloud Lab
          </h3>
          <p className="text-xs text-slate-400 mt-1">Defense-in-Depth Architecture</p>
        </div>
        <div className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold border border-slate-200">
          Network Topology
        </div>
      </div>

      {/* Diagram Container */}
      <div className="relative h-64 w-full flex items-center justify-center perspective-1000">
        
        {/* Connection Lines (Background) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" style={{ top: '20px' }}>
            <path d="M100 150 L 250 150 L 400 150" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        <div className="flex items-center gap-4 md:gap-8 z-10">
            
            {/* Node 1: Untrusted Traffic */}
            <Tooltip text="Untrusted Internet Traffic: Filtered by perimeter rules.">
                <motion.div 
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-16 h-16 bg-rose-50 rounded-xl border-2 border-rose-200 flex items-center justify-center shadow-md cursor-pointer relative"
                >
                    <Globe size={24} className="text-rose-500" />
                    <div className="absolute -bottom-6 text-[10px] font-bold text-rose-400">Untrusted</div>
                </motion.div>
            </Tooltip>

            <ArrowRight className="text-slate-300" size={20} />

            {/* Node 2: Load Balancer */}
            <Tooltip text="Standard Load Balancer: Ensures availability and obscures backend IP structure.">
                <motion.div 
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-20 h-20 bg-sky-50 rounded-xl border-2 border-sky-200 flex items-center justify-center shadow-lg shadow-sky-100 cursor-help relative"
                >
                    <div className="text-center">
                        <span className="text-2xl">🛡️</span>
                        <div className="text-[9px] font-bold text-sky-600 mt-1">L4 LB</div>
                    </div>
                </motion.div>
            </Tooltip>

            <ArrowRight className="text-slate-300" size={20} />

            {/* Node 3: Hardened VM */}
            <Tooltip text="NGINX Web Server: Protected by NSG (Allow 443 Only). SSH restricted to VPN Jumpbox.">
                <motion.div 
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-24 h-24 bg-emerald-50 rounded-xl border-2 border-emerald-200 flex flex-col items-center justify-center shadow-lg shadow-emerald-100 cursor-help relative"
                >
                    <Server size={24} className="text-emerald-500 mb-1" />
                    <div className="text-[9px] font-bold text-emerald-600">Hardened VM</div>
                    <div className="absolute -top-3 -right-3 bg-indigo-100 p-1 rounded-md border border-indigo-200">
                        <ShieldCheck size={12} className="text-indigo-600" />
                    </div>
                </motion.div>
            </Tooltip>

        </div>
      </div>

      <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500 leading-relaxed">
        <strong className="text-slate-700">Security Control:</strong> Traffic is inspected by Network Security Groups (NSGs). Direct administrative access is blocked from public internet.
      </div>
    </div>
  );
};

export default ArchitectureMuseum;