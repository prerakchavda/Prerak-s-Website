import React from 'react';
import { PageView } from '../types';
import { Home, Cloud, Shield, Award, User } from 'lucide-react';

interface NavigationProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  
  const navItems: { id: PageView; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Launchpad', icon: <Home size={18} /> },
    { id: 'about', label: 'About Me', icon: <User size={18} /> },
    { id: 'lab', label: 'Cloud Lab', icon: <Cloud size={18} /> },
    { id: 'ops', label: 'Security Ops', icon: <Shield size={18} /> },
    { id: 'certs', label: 'Cert Wall', icon: <Award size={18} /> },
  ];

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-6 max-w-7xl mx-auto gap-4 px-4 md:px-8">
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setPage('home')}
      >
        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-slate-300">
          PC
        </div>
        <span className="font-bold text-lg tracking-tight text-slate-800">Prerak<span className="text-sky-500">.io</span></span>
      </div>
      
      <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto max-w-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap
              ${currentPage === item.id 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'text-slate-500 hover:text-sky-600 hover:bg-slate-50'}
            `}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;