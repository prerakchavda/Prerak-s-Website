import React from 'react';
import ArchitectureMuseum from '../components/ArchitectureMuseum';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const CloudLab: React.FC = () => {
  return (
    <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">The Cloud Lab</h2>
            <p className="text-slate-500">
                A showcase of my technical case studies. Specifically focusing on defense-in-depth architecture within Azure.
            </p>
        </div>

        <div className="h-[400px]">
            <ArchitectureMuseum />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((proj, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-slate-800">{proj.title}</h3>
                        <a href={proj.link} target="_blank" rel="noreferrer" className="text-sky-500 hover:text-sky-700">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tech.map(t => (
                            <span key={t} className="px-2 py-1 bg-sky-50 text-sky-700 text-xs font-bold rounded-md">
                                {t}
                            </span>
                        ))}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        {proj.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default CloudLab;