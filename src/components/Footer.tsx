import { ArrowRight, Mail, Phone, MessageCircle, Youtube, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-1 md:gap-1.5 mb-6 group shrink-0">
              <div className="flex flex-col items-start justify-center shrink-0">
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black leading-none tracking-tight text-white uppercase whitespace-nowrap">
                  GALAXY
                </span>
                <div className="bg-[#1e73be] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full mt-1 border border-[#1e73be] shadow-sm shrink-0">
                  <span className="block font-display text-[10px] sm:text-xs md:text-sm font-black leading-none tracking-widest text-white whitespace-nowrap uppercase">
                    CO-LIVING & BOYS HOSTEL
                  </span>
                </div>
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
              <a href="https://wa.me/917793939365" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-brand-400 transition-all text-sm">
                <MessageCircle size={16} className="text-green-500" /> WhatsApp: +91 77939 39365
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@GALAXYCO-LIVINGBOYSHOSTEL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-all text-slate-300 hover:text-white">
                <Youtube size={20} />
              </a>
              <a href="https://www.google.com/maps/place/GALAXY+CO-LIVING+%26+BOYS+HOSTEL/@18.0096393,79.5549822,664m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a334f1f3c8b6ae9:0xff5a39e5312e80c6!8m2!3d18.0096393!4d79.5549822!16s%2Fg%2F11xv2z5063" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-all text-slate-300 hover:text-white">
                <MapPin size={20} />
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
              {['Professional Co-living', 'Student Housing', 'Corporate Stays', 'Long-term Rentals', 'Guest Suites'].map((link) => (
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
