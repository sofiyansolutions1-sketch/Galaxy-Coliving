import { motion } from 'motion/react';
import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Users, 
  LayoutGrid, 
  Star, 
  Banknote,
  Navigation
} from 'lucide-react';

const reasons = [
  {
    icon: Banknote,
    title: 'Flexible Payment Plans',
    desc: 'Daily, Weekly, Monthly, and Yearly.'
  },
  {
    icon: Users,
    title: 'Separate Floors',
    desc: 'For Students & Working Professionals.'
  },
  {
    icon: LayoutGrid,
    title: 'Smart Sharing',
    desc: 'Perfect balance of privacy and comfort.'
  },
  {
    icon: Sparkles,
    title: 'Value That Makes Sense',
    desc: 'Premium experience, practical pricing.'
  },
  {
    icon: Star,
    title: 'Google Rating',
    desc: 'Top-rated based on verified feedback.'
  },
  {
    icon: Smile,
    title: '98% Satisfaction',
    desc: 'Consistent top resident experiences.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    desc: '24/7 CCTV and biometric access.'
  },
  {
    icon: Navigation,
    title: 'Prime Location',
    desc: 'Access to transport and work hubs.'
  }
];

export default function WhyChoiceGalaxy() {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden" id="why-us">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-brand-600 rounded-full blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[120px] opacity-10 translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5"
          >
            <span className="text-brand-400 font-bold tracking-widest uppercase text-xs">Not Just a Stay. A Better Way to Live.</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-6 leading-tight tracking-tighter">
              Why Choose <br />
              <span className="text-brand-400">Galaxy Co-Living?</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              At Galaxy Co-Living, we redefine everyday living by combining comfort, convenience, and community into one seamless experience.
            </p>

          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 xl:col-span-7">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-4 sm:p-5 rounded-2xl flex flex-col justify-center aspect-square transition-all bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 bg-brand-500/20 text-brand-400">
                  <reason.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-black mb-1 sm:mb-2 tracking-tight line-clamp-2">{reason.title}</h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

