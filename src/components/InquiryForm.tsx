import React, { useState } from 'react';
import { X, Send, User, Phone, Bed, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom?: string;
}

export default function InquiryForm({ isOpen, onClose, selectedRoom }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    room: selectedRoom || '3 Sharing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const adminPhone = "+917793939365"; 
    const text = `*New Inquiry for Galaxy Coliving*\n\n` +
                 `*Name:* ${formData.name}\n` +
                 `*Phone:* ${formData.phone}\n` +
                 `*Preferred Room:* ${formData.room}\n` +
                 `*Message:* ${formData.message}`;
                 
    const whatsappUrl = `https://wa.me/${adminPhone.replace('+', '')}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Header Area */}
            <div className="bg-brand-600 p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <span className="text-brand-200 text-xs font-bold uppercase tracking-widest">Connect with us</span>
              <h2 className="text-3xl font-bold mt-2">Personal Inquiry</h2>
              <p className="text-brand-100/80 text-sm mt-2">Join our premium community today</p>
            </div>

            {/* Form Area */}
            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase ml-1">
                    <User size={14} className="text-brand-500" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase ml-1">
                    <Phone size={14} className="text-brand-500" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 77939 39365"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase ml-1">
                    <Bed size={14} className="text-brand-500" /> Room Preference
                  </label>
                  <div className="relative">
                    <select 
                      name="room"
                      value={formData.room}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option>3 Sharing</option>
                      <option>4 Sharing</option>
                      <option>5 Sharing</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <Bed size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase ml-1">
                    <MessageSquare size={14} className="text-brand-500" /> Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us any specific requirements..."
                    rows={3}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-500/25 active:scale-[0.98]"
                >
                  Confirm on WhatsApp <Send className="w-5 h-5" />
                </button>
                
                <p className="text-center text-[10px] text-slate-400 mt-4">
                  By submitting, you will be redirected to WhatsApp to chat with our <strong>Admin</strong> regarding your stay.<br/>
                  Alternative contact: <a href="mailto:galaxycoliving@gmail.com" className="text-brand-500 hover:underline">galaxycoliving@gmail.com</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
