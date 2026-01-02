import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Search } from 'lucide-react';
import ProfileHero from '../components/CloudBot';
import TechGarden from '../components/TechGarden';
import { PageView } from '../types';
import { chatWithCloudBot } from '../services/geminiService'; // Import if you want direct chat, or just trigger the modal

interface LaunchpadProps {
  setPage: (page: PageView) => void;
}

const Launchpad: React.FC<LaunchpadProps> = ({ setPage }) => {
  const [query, setQuery] = useState('');

  // This mimics a "Product Hunt" or "SaaS" style landing page
  return (
    <div className="space-y-16 pb-12">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-6 text-center max-w-4xl mx-auto z-10">
        
        {/* Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-600 text-xs font-bold mb-8"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Available for Hire & Projects
        </motion.div>

        {/* Headline */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
        >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Operating System</span> <br className="hidden md:block"/> for Modern Security.
        </motion.h1>

        {/* Subtext */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
            Prerak Chavda is a Cybersecurity Analyst & SysAdmin. <br className="hidden md:block" />
            Specializing in Defense-in-Depth, Identity Governance, and Cloud Infrastructure.
        </motion.p>

        {/* "Quick Ask" Input (Fake Chat Trigger) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-indigo-200 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-white p-2 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2">
                <div className="p-2 bg-slate-100 rounded-xl text-slate-400">
                    <Search size={20} />
                </div>
                <input 
                    type="text" 
                    placeholder="Ask CloudBot about my Azure skills..." 
                    className="flex-1 bg-transparent border-none focus:ring-0 text-slate-800 placeholder:text-slate-400"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled // Disabled visually here, intended to prompt user to use the main chat
                />
                <button 
                    onClick={() => document.querySelector('button[class*="fixed bottom-6"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))}
                    className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors"
                >
                    Ask AI <Sparkles size={14} />
                </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-3 font-mono">Powered by Google Gemini 2.0 Flash</p>
        </motion.div>
      </section>

      {/* "Product Shot" / Tech Garden */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Floating Hero (CloudBot) positioned nicely */}
        <div className="absolute -top-12 -right-4 md:-right-12 z-20 pointer-events-none md:pointer-events-auto scale-75 md:scale-100">
            <ProfileHero />
        </div>

        {/* The "App Interface" Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200 overflow-hidden relative z-10">
            {/* Fake Browser Header */}
            <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest">
                    Skill_Matrix_v2.0
                </div>
                <div className="w-16" />
            </div>

            {/* The Tech Garden Content */}
            <div className="h-[450px] bg-slate-50/50 p-2">
                <TechGarden setPage={setPage} />
            </div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-sky-100/50 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />
      </motion.section>

      {/* Footer / Value Props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12">
        <div className="text-center px-4">
            <h3 className="font-bold text-slate-900 mb-2">Cloud Native</h3>
            <p className="text-sm text-slate-500">Deep expertise in Azure infrastructure, Entra ID governance, and hybrid networking.</p>
        </div>
        <div className="text-center px-4">
            <h3 className="font-bold text-slate-900 mb-2">Security First</h3>
            <p className="text-sm text-slate-500">From SentinelOne EDR to strict firewall policies, security is baked into every layer.</p>
        </div>
        <div className="text-center px-4">
            <h3 className="font-bold text-slate-900 mb-2">Automation</h3>
            <p className="text-sm text-slate-500">Reducing toil with PowerShell scripting and efficient ServiceNow workflows.</p>
        </div>
      </div>

    </div>
  );
};

export default Launchpad;