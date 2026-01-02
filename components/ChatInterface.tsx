import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageSquare, Loader2, Sparkles } from 'lucide-react';
import { chatWithCloudBot } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Prerak's AI assistant. Ask me about his Azure projects, security skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await chatWithCloudBot(history, userMsg.text);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-sky-500 text-white rounded-2xl shadow-xl shadow-sky-200 flex items-center justify-center hover:bg-sky-600 z-50 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="bg-white p-4 border-b border-slate-100 flex items-center gap-3 shadow-sm z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-inner">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Prerak AI</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-sky-500 text-white rounded-br-none shadow-md shadow-sky-100'
                        : 'bg-white text-slate-700 rounded-bl-none shadow-sm border border-slate-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                 <div className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none border border-slate-100 flex gap-2 items-center text-slate-400 text-xs shadow-sm">
                    <Loader2 className="animate-spin" size={14} /> AI is thinking...
                  </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-100">
              <div className="flex gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my experience..."
                  className="flex-1 bg-slate-50 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 transition-all text-slate-800 placeholder:text-slate-400"
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="bg-sky-500 text-white p-3 rounded-xl hover:bg-sky-600 disabled:opacity-50 disabled:hover:bg-sky-500 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatInterface;