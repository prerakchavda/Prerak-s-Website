import React from 'react';
import ServerRack from '../components/ServerRack';
import { EXPERIENCES } from '../constants';

const SecurityOps: React.FC = () => {
  return (
    <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Security Operations Center</h2>
            <p className="text-slate-500">
                My operational experience in Blue Team tactics, Incident Response, and Systems Administration.
            </p>
        </div>

        <div className="h-[500px]">
            <ServerRack />
        </div>

        <div className="mt-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6 px-2">Operational History</h3>
            <div className="grid grid-cols-1 gap-6">
                {EXPERIENCES.map((exp, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6">
                         <div className="md:w-1/4">
                            <h4 className="font-bold text-slate-900 text-lg">{exp.company}</h4>
                            <p className="text-sky-600 font-medium text-sm">{exp.role}</p>
                            <p className="text-slate-400 text-xs mt-2 font-mono uppercase">{exp.period}</p>
                         </div>
                         <div className="md:w-3/4">
                            <ul className="space-y-2">
                                {exp.description.map((d, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                                        <span className="text-emerald-500 mt-1">➜</span> {d}
                                    </li>
                                ))}
                            </ul>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default SecurityOps;