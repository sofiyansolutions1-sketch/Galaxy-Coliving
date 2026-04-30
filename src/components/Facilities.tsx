import { 
  Wifi, 
  Wind, 
  Utensils, 
  WashingMachine, 
  Bed, 
  Waves, 
  Refrigerator, 
  Droplets, 
  Lock, 
  Sparkles, 
  ChefHat, 
  HandPlatter, 
  Cctv, 
  Car 
} from 'lucide-react';
import { motion } from 'motion/react';

const facilities = [
  { icon: Bed, name: 'Fully Furnished', desc: 'Premium beds, cupboards & study units.' },
  { icon: Wind, name: 'AC & Non-AC', desc: 'Flexible options for your comfort.' },
  { icon: Waves, name: 'Geyser', desc: '24/7 hot water supply in all bathrooms.' },
  { icon: WashingMachine, name: 'Washing Machine', desc: 'State-of-the-art laundry facilities.' },
  { icon: Refrigerator, name: 'Refrigerator', desc: 'Common fridge for storing essentials.' },
  { icon: Droplets, name: 'Water Purifier', desc: 'RO purified drinking water available.' },
  { icon: Lock, name: 'Personal Locker', desc: 'Secure storage for your valuables.' },
  { icon: Wifi, name: 'High-Speed WiFi', desc: 'Fiber-optic internet for work & study.' },
  { icon: Sparkles, name: 'Daily Cleaning', desc: 'Professional housekeeping services.' },
  { icon: ChefHat, name: 'Self Cooking', desc: '1st time in Warangal - fully equipped kitchen.' },
  { icon: Utensils, name: 'Mess Facility', desc: 'Nutritious & delicious home-style food.' },
  { icon: HandPlatter, name: 'Kitchen Porter', desc: 'Dedicated staff for dishwashing.' },
  { icon: Cctv, name: 'CCTV Security', desc: 'Advanced surveillance for your safety.' },
  { icon: Car, name: 'Parking', desc: 'Ample parking space (Owner’s Risk).' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Premium Amenities</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Everything you need for a hassle-free, luxury lifestyle in the heart of the city.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {facilities.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 md:p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-brand-50 hover:border-brand-200 transition-all group group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all">
                <f.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm md:text-base font-bold mb-2 text-slate-900">{f.name}</h3>
              <p className="text-[10px] md:text-xs text-slate-500 leading-tight md:leading-relaxed group-hover:text-slate-600 transition-colors hidden sm:block">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
