import { motion } from 'motion/react';
import { Sparkles, Wallet, Smile, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Sparkles,
    title: 'Clean & Hygienic Environment',
    desc: 'Regular sanitization and daily cleaning for a healthy living space.'
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    desc: 'Luxury living that fits your budget without compromising on quality.'
  },
  {
    icon: Smile,
    title: 'Friendly Management',
    desc: 'Approachable staff dedicated to making your stay as comfortable as possible.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure Stay',
    desc: 'Biometric access and 24/7 CCTV monitoring for absolute peace of mind.'
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    desc: 'Easy access to tech parks, colleges, and central transport hubs.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-brand-600 rounded-full blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[120px] opacity-10 translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-400 font-bold tracking-widest uppercase text-[10px]">The Choice is Clear</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Why Choice Galaxy?</h2>
            <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
              We provide a community and lifestyle. Our commitment to quality makes us the top-rated PG in Warangal.
            </p>
            
            <div className="space-y-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-400 w-4 h-4 flex-shrink-0" />
                <p className="text-slate-300 text-sm font-medium">Over 500+ Happy Residents</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-400 w-4 h-4 flex-shrink-0" />
                <p className="text-slate-300 text-sm font-medium">98% Satisfaction Rating</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-400 w-4 h-4 flex-shrink-0" />
                <p className="text-slate-300 text-sm font-medium">24/7 Support Desk</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all ${
                  i === 0 ? 'col-span-2' : ''
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center mb-2">
                  <reason.icon className="text-brand-400 w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold mb-1">{reason.title}</h3>
                <p className="text-[10px] text-slate-400 leading-tight hidden sm:block">
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
