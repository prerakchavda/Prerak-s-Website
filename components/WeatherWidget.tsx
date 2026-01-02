import React from 'react';
import { ShieldCheck, Activity, Lock, Server } from 'lucide-react';

const WeatherWidget: React.FC = () => {
  return (
    <div className="flex gap-4">
        {/* Metric 1: Threat Level */}
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-3 rounded-2xl flex items-center gap-3 shadow-sm">
            <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
                <ShieldCheck size={18} />
            </div>
            <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Threat Level</p>
                <p className="text-sm font-bold text-slate-700 flex items-center gap-1">
                    Low / Monitored <Lock size={12} className="text-emerald-500"/>
                </p>
            </div>
        </div>

        {/* Metric 2: System Health */}
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-3 rounded-2xl flex items-center gap-3 shadow-sm">
            <div className="bg-sky-100 text-sky-600 p-2 rounded-lg">
                <Activity size={18} />
            </div>
            <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">System Health</p>
                <p className="text-sm font-bold text-slate-700 flex items-center gap-1">
                    99.9% Uptime <Server size={12} className="text-sky-500"/>
                </p>
            </div>
        </div>
    </div>
  );
};

export default WeatherWidget;