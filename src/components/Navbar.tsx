import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-sm py-2`}
    >
      <div className="w-full px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="relative shrink-0">
            <img 
              src="https://i.postimg.cc/LX3ZSR12/Chat-GPT-Image-May-1-2026-12-26-07-AM.png" 
              alt="Galaxy Logo" 
              className="h-9 sm:h-10 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col items-center justify-center shrink-0">
            <span className="font-display text-xl sm:text-2xl md:text-3xl font-black leading-none tracking-tight text-slate-900 uppercase whitespace-nowrap">
              GALAXY
            </span>
            <div className="bg-[#1e73be] px-1.5 sm:px-2 py-0.5 rounded-full mt-0.5 sm:mt-1 border border-[#1e73be] shadow-sm shrink-0">
              <span className="block font-display text-[6px] sm:text-[8px] md:text-[10px] font-black leading-none tracking-widest text-white whitespace-nowrap uppercase">
                CO-LIVING & BOYS HOSTEL
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onBookClick}
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-500/20"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-900 hover:text-brand-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onBookClick();
                }}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white text-center py-4 rounded-xl font-bold transition-all"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
