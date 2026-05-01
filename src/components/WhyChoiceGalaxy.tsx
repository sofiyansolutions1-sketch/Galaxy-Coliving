import { motion } from 'motion/react';
import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  CheckCircle2, 
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
    desc: 'Daily, Weekly, Monthly, and Yearly packages designed for your convenience.'
  },
  {
    icon: Users,
    title: 'Separate Floors',
    desc: 'Dedicated sectors for Students & Working Professionals for a peaceful stay.'
  },
  {
    icon: LayoutGrid,
    title: 'Smart Sharing',
    desc: 'Flexible room options offering the perfect balance of privacy and comfort.'
  },
  {
    icon: Sparkles,
    title: 'Value That Makes Sense',
    desc: 'Premium co-living experience at pricing that’s practical and affordable.'
  },
  {
    icon: Star,
    title: '98% Satisfaction Rate',
    desc: 'Top-rated experience based on consistent resident feedback.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    desc: '24/7 CCTV and biometric access for your complete peace of mind.'
  },
  {
    icon: Navigation,
    title: 'Prime Location',
    desc: 'Strategic access to transport, education, and work hubs.'
  }
];

export default function WhyChoiceGalaxy() {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden" id="why-us">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-brand-600 rounded-full blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[120px] opacity-10 translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-400 font-bold tracking-widest uppercase text-xs">Not Just a Stay. A Better Way to Live.</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-6 leading-tight tracking-tighter">
              Why Choose <br />
              <span className="text-brand-400">Galaxy Co-Living?</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              At Galaxy Co-Living, we redefine everyday living by combining comfort, convenience, and community into one seamless experience.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle2 className="text-brand-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold">Google Rating & 98% Satisfaction</p>
                  <p className="text-slate-400 text-xs">Based on verified resident feedback</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle2 className="text-brand-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold">Separate Floors Available</p>
                  <p className="text-slate-400 text-xs">For Students & Working Professionals</p>
                </div>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-brand-400 font-display font-bold text-sm italic"
            >
              Galaxy Co-Living — Where Comfort Meets Convenience.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/30 transition-all ${
                  i === 0 ? 'col-span-2 bg-gradient-to-r from-brand-600/20 to-transparent' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center mb-4">
                  <reason.icon className="text-brand-400 w-5 h-5" />
                </div>
                <h3 className="text-base font-black mb-2 tracking-tight">{reason.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
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

