import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Wifi, Server, Terminal, Cpu, Database, Activity } from 'lucide-react';
import { RackPort } from '../types';

const ServerRack: React.FC = () => {
  const [activePort, setActivePort] = useState<RackPort | null>(null);

  // Detailed Data Structure for "Deep Dive" info
  const portData = {
    Security: {
      icon: <Shield className="text-rose-500" />,
      title: 'Security Operations (SecOps)',
      description: "My primary domain. I focus on reducing attack surfaces and ensuring rapid incident response.",
      competencies: [
        { label: "Endpoint Defense", value: "Expert in deploying SentinelOne policies to detect behavioral anomalies (Ransomware/Malware)." },
        { label: "Vulnerability Mgmt", value: "Regular scanning and patching of critical CVEs across 500+ endpoints." },
        { label: "Incident Response", value: "Executed containment protocols for malware alerts, isolating hosts via API." }
      ],
      techStack: ["SentinelOne", "Deep Instinct", "CrowdStrike", "Kali Linux", "Wireshark"],
      context: "At Realnets, I reduced false positive rates by tuning EDR sensitivity policies."
    },
    Cloud: {
      icon: <Lock className="text-sky-500" />,
      title: 'Identity & Access (IAM)',
      description: "Governance of user identities in a hybrid environment, ensuring least-privilege access.",
      competencies: [
        { label: "Entra ID (Azure AD)", value: "Managing Hybrid Join, SSO configurations, and Enterprise Applications." },
        { label: "Conditional Access", value: "Authoring policies requiring MFA and Compliant Devices for admin portals." },
        { label: "Intune MDM", value: "Packaging Win32 apps and enforcing BitLocker encryption policies." }
      ],
      techStack: ["Entra ID", "Azure Portal", "Intune", "Autopilot", "M365 Admin"],
      context: "Led the migration of legacy GPO policies to modern Intune Configuration Profiles."
    },
    Network: {
      icon: <Wifi className="text-emerald-500" />,
      title: 'Network Infrastructure',
      description: "Designing resilient and secure pathways for data flow across on-prem and cloud.",
      competencies: [
        { label: "Firewall Admin", value: "Configuring OPNsense/Pfsense rules (Allow/Deny) and analyzing traffic logs." },
        { label: "VPN Architecture", value: "Setting up WireGuard tunnels for secure remote administration of cloud assets." },
        { label: "Segmentation", value: "Implementing VLANs to isolate Guest, IoT, and Corporate traffic." }
      ],
      techStack: ["OPNsense", "Cisco Meraki", "WireGuard", "Nmap", "TCP/IP"],
      context: "Designed the defense-in-depth network topology for the Azure Secure Infra Lab."
    },
    Ops: {
      icon: <Server className="text-amber-500" />,
      title: 'Systems Administration',
      description: "The backbone of IT. Ensuring 99.9% uptime and efficient day-to-day operations.",
      competencies: [
        { label: "Automation", value: "Writing PowerShell scripts for user onboarding and bulk AD attribute updates." },
        { label: "ServiceNow", value: "Building ITSM workflows to automate ticket routing and SLA tracking." },
        { label: "Disaster Recovery", value: "Managing Veeam backup jobs and testing restore integrity quarterly." }
      ],
      techStack: ["PowerShell", "Active Directory", "ServiceNow", "Veeam", "Windows Server"],
      context: "Automated clinical workflows at HSHS to reduce manual ticket handling time by 40%."
    }
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-700 text-slate-200 font-mono relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-rose-500 to-slate-800 opacity-50" />
      
      <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
        <h3 className="text-lg font-bold flex items-center gap-2 text-sky-400">
          <Terminal size={18} /> Ops Center / Knowledge Base
        </h3>
        <span className="text-xs text-emerald-400 flex items-center gap-1 border border-emerald-900 bg-emerald-900/20 px-2 py-0.5 rounded">
          <Activity size={10} className="animate-pulse" /> LIVE CONNECTION
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 h-full">
        {/* The Patch Panel (Sidebar) */}
        <div className="w-full md:w-64 flex flex-col gap-3 shrink-0 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-inner h-fit">
          <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest mb-2 font-bold">Select Module</p>
          {(Object.keys(portData) as RackPort[]).map((port) => (
            <button
              key={port}
              onClick={() => setActivePort(port)}
              className={`
                group relative flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200
                ${activePort === port 
                  ? 'bg-slate-800 border-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.2)]' 
                  : 'bg-slate-900/50 border-slate-700 hover:border-slate-500 hover:bg-slate-800'}
              `}
            >
              <span className={`text-xs font-bold uppercase ${activePort === port ? 'text-white' : 'text-slate-400'}`}>{port}</span>
              <div className={`w-2 h-2 rounded-full ${activePort === port ? 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,1)]' : 'bg-slate-800'}`} />
              
              {/* Cable Visual */}
              <AnimatePresence>
                {activePort === port && (
                  <motion.div 
                    layoutId="cable"
                    className="absolute right-[-20px] top-1/2 w-5 h-0.5 bg-sky-500 z-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                  />
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        {/* The Console Screen (Main Content) */}
        <div className="flex-1 bg-slate-950 rounded-xl border-4 border-slate-800 p-6 relative shadow-inner flex flex-col min-h-[400px] overflow-hidden">
          {/* Scanlines Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%] opacity-10" />
          
          <AnimatePresence mode="wait">
            {activePort ? (
              <motion.div
                key={activePort}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative z-10 h-full flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-700">
                    {portData[activePort].icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white tracking-tight">{portData[activePort].title}</h4>
                    <p className="text-xs text-slate-400 font-mono mt-1">{portData[activePort].description}</p>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Competencies List */}
                    <div className="space-y-4">
                        <h5 className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Cpu size={12} /> Core Competencies
                        </h5>
                        {portData[activePort].competencies.map((comp, idx) => (
                            <div key={idx} className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
                                <div className="text-xs font-bold text-slate-300 mb-1">{comp.label}</div>
                                <div className="text-xs text-slate-500 leading-relaxed">{comp.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Context & Stack */}
                    <div className="space-y-6">
                        <div>
                            <h5 className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Database size={12} /> Tech Stack
                            </h5>
                            <div className="flex flex-wrap gap-2">
                                {portData[activePort].techStack.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-300 font-bold font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                            <h5 className="text-[10px] font-bold text-slate-500 uppercase mb-2">Real-World Experience</h5>
                            <p className="text-sm text-slate-300 italic leading-relaxed">
                                "{portData[activePort].context}"
                            </p>
                        </div>
                    </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center text-slate-600 h-full relative z-10 font-mono"
              >
                <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center mb-6 relative">
                    <div className="w-12 h-12 bg-slate-800 rounded-full animate-pulse" />
                    <div className="absolute inset-0 border-t-2 border-sky-500 rounded-full animate-spin" />
                </div>
                <p className="text-lg font-bold text-slate-500 tracking-widest">SYSTEM READY</p>
                <p className="text-xs mt-2 text-center text-slate-600 max-w-xs">
                    Select a module from the left panel (or the Tech Garden) to inspect detailed configuration and experience.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServerRack;