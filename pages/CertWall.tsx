import React from 'react';
import CertCard from '../components/CertCard';
import { CERTIFICATIONS } from '../constants';
import { Download } from 'lucide-react';

const CertWall: React.FC = () => {
  return (
    <div className="space-y-12">
         <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">The Cert Wall</h2>
            <p className="text-slate-500">
                Verified badges and certifications. Hover over any badge to see the specific business impact and skills validated.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
                <CertCard key={cert.name} cert={cert} />
            ))}
        </div>

        <div className="flex justify-center mt-12">
            <div className="bg-white rounded-3xl p-8 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center hover:border-sky-300 hover:bg-sky-50 transition-all group max-w-md w-full">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
                    <Download className="text-slate-400 group-hover:text-sky-700" size={20} />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-1">Download Full Resume</h4>
                <p className="text-slate-500 text-xs mb-4">PDF Format (2025)</p>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-sky-600 transition-colors">
                    Get PDF
                </button>
            </div>
        </div>
    </div>
  );
};

export default CertWall;