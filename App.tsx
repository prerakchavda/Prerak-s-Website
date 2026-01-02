import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Navigation from './components/Navigation';
import ChatInterface from './components/ChatInterface';
import Launchpad from './pages/Launchpad';
import CloudLab from './pages/CloudLab';
import SecurityOps from './pages/SecurityOps';
import CertWall from './pages/CertWall';
import AboutMe from './pages/AboutMe';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // "Cloud Sweep" Transition Variants
  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, filter: 'blur(10px)', transition: { duration: 0.3, ease: "easeIn" } }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Launchpad setPage={setCurrentPage} />;
      case 'lab': return <CloudLab />;
      case 'ops': return <SecurityOps />;
      case 'certs': return <CertWall />;
      case 'about': return <AboutMe />;
      default: return <Launchpad setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen pb-24 font-sans text-slate-800 bg-slate-50 relative overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Navigation */}
      <Navigation currentPage={currentPage} setPage={setCurrentPage} />

      {/* Main Page Content with Transition */}
      <main className="max-w-7xl mx-auto mt-8 md:mt-12 px-4 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <ChatInterface />
    </div>
  );
};

export default App;