import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Briefcase, Download, Send, Mail, User, MessageSquare } from 'lucide-react';

const AboutMe: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormState('sending');
      // Simulate network request
      setTimeout(() => {
          setFormState('sent');
      }, 1500);
  };

  return (
    <div className="space-y-16">
        {/* Journey Section */}
        <section>
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">The Journey</h2>
                <p className="text-slate-500">
                    From campus life leadership to securing enterprise infrastructure. Always expanding the skill set.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 relative">
                {/* Connecting Line */}
                <div className="absolute left-[20px] top-4 bottom-4 w-1 bg-slate-200 md:left-1/2 md:-ml-0.5 rounded-full" />

                {/* Step 1: COD */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative flex flex-col md:flex-row items-center justify-between"
                >
                    <div className="md:w-[45%] bg-white p-6 rounded-3xl border border-slate-200 shadow-sm ml-12 md:ml-0 relative">
                        <div className="absolute top-6 -left-14 md:-right-14 md:left-auto w-10 h-10 bg-emerald-100 rounded-full border-4 border-slate-50 flex items-center justify-center z-10">
                            <Users size={18} className="text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">College of DuPage</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Started my journey here and got deeply involved socially. I became part of the <strong className="text-emerald-600">Activities Board Team</strong> and <strong className="text-emerald-600">Student Life</strong>. I also joined the Book Club and became a member of <strong className="text-emerald-600">Phi Theta Kappa (PTK)</strong> honor society. This period built my leadership and communication foundations.
                        </p>
                    </div>
                    <div className="md:w-[45%] hidden md:block" />
                </motion.div>

                {/* Step 2: WGU */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative flex flex-col md:flex-row-reverse items-center justify-between"
                >
                    <div className="md:w-[45%] bg-white p-6 rounded-3xl border border-slate-200 shadow-sm ml-12 md:ml-0 relative">
                        <div className="absolute top-6 -left-14 md:-left-14 w-10 h-10 bg-sky-100 rounded-full border-4 border-slate-50 flex items-center justify-center z-10">
                            <GraduationCap size={18} className="text-sky-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Western Governors University</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Transferred to WGU to pursue my BS in <strong className="text-sky-600">Cybersecurity and Information Assurance</strong>. This rigorous, self-paced environment taught me discipline and provided the technical certifications (CompTIA, ISC2) that anchor my career today.
                        </p>
                    </div>
                    <div className="md:w-[45%] hidden md:block" />
                </motion.div>

                {/* Step 3: Career HSHS -> Realnets */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative flex flex-col md:flex-row items-center justify-between"
                >
                    <div className="md:w-[45%] bg-white p-6 rounded-3xl border border-slate-200 shadow-sm ml-12 md:ml-0 relative">
                        <div className="absolute top-6 -left-14 md:-right-14 md:left-auto w-10 h-10 bg-indigo-100 rounded-full border-4 border-slate-50 flex items-center justify-center z-10">
                            <Briefcase size={18} className="text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">HSHS & Realnets</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            My professional path kicked off at <strong className="text-indigo-600">Hospital Systems Health Systems (HSHS)</strong>, focusing on ServiceNow administration. I then moved to <strong className="text-indigo-600">Realnets</strong> as a Junior Systems Administrator.
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-2 italic">
                            "Always looking to expand my skill set."
                        </p>
                    </div>
                    <div className="md:w-[45%] hidden md:block" />
                </motion.div>
            </div>
        </section>

        {/* Resume & Contact Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Resume Card */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-slate-300"
            >
                <div>
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                        <Briefcase className="text-sky-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">My Resume</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Grab a copy of my full professional history, including detailed project breakdowns and technical proficiencies.
                    </p>
                </div>
                
                <a 
                    href="#" // In a real app, link to public PDF URL
                    className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                >
                    <Download size={18} /> Download PDF
                </a>
            </motion.div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
                
                {formState === 'sent' ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center py-8"
                    >
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                            <Send className="text-emerald-600" size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-800">Message Sent!</h4>
                        <p className="text-slate-500 mt-2">Thanks for reaching out. I'll get back to you shortly.</p>
                        <button 
                            onClick={() => setFormState('idle')}
                            className="mt-6 text-sky-500 font-bold hover:underline"
                        >
                            Send another
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input 
                                    required 
                                    type="text" 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                                    placeholder="Jane Doe"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input 
                                    required 
                                    type="email" 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                                    placeholder="jane@company.com"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Message</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 text-slate-400" size={18} />
                                <textarea 
                                    required 
                                    rows={4}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                                    placeholder="Let's build something secure..."
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={formState === 'sending'}
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {formState === 'sending' ? 'Sending...' : 'Send Message'}
                            {!formState && <Send size={18} />}
                        </button>
                    </form>
                )}
            </div>

        </section>
    </div>
  );
};

export default AboutMe;