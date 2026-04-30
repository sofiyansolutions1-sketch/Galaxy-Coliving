import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <img 
                src="https://iili.io/BsV0men.png" 
                alt="Galaxy Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-brand-400 font-display text-2xl md:text-3xl font-black leading-none tracking-tighter">GALAXY</span>
                <span className="text-slate-500 text-[10px] font-bold leading-none tracking-[0.15em] uppercase mt-1">Co-Living & Boys Hostel</span>
              </div>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Comfortable Living | Affordable Pricing
            </p>
            <div className="flex flex-col gap-3 mb-8">
              <a href="mailto:galaxycoliving@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-brand-400 transition-all text-sm">
                <Mail size={16} /> galaxycoliving@gmail.com
              </a>
              <a href="tel:+917793939365" className="flex items-center gap-2 text-slate-300 hover:text-brand-400 transition-all text-sm">
                <Phone size={16} /> Admin: +91 77939 39365
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-all text-slate-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-all text-slate-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-all text-slate-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Rooms', 'Facilities', 'Gallery', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-brand-400 transition-all flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Professional PG', 'Student Housing', 'Corporate Stays', 'Long-term Rentals', 'Guest Suites'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-brand-400 transition-all flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Join our community for updates and special offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-brand-700 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Galaxy Co-Living & Boys Hostel. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
