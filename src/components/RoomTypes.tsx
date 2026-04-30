import { motion } from 'motion/react';
import { Users } from 'lucide-react';

const roomTypes = [
  {
    type: '3 Sharing',
    description: 'Spacious shared living with premium amenities.',
    image: 'https://iili.io/Bs1kdaR.jpg',
    popular: true
  },
  {
    type: '4 Sharing',
    description: 'Budget-friendly comfort for professionals and students.',
    image: 'https://iili.io/BsEGhps.jpg'
  },
  {
    type: '5 Sharing',
    description: 'Our most affordable luxury sharing option.',
    image: 'https://iili.io/BsEwWiJ.jpg'
  }
];

interface RoomTypesProps {
  onInquireClick: (room: string) => void;
}

export default function RoomTypes({ onInquireClick }: RoomTypesProps) {
  return (
    <section id="rooms" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Accommodation</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Explore Room Options</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the sharing option that best fits your budget and lifestyle. All rooms come with our standard luxury features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {roomTypes.map((room, i) => (
            <motion.div
              key={room.type}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border transition-transform hover:-translate-y-2 ${
                room.popular ? 'border-brand-500' : 'border-slate-100'
              }`}
            >
              {room.popular && (
                <div className="absolute top-6 right-6 z-10 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Top Choice
                </div>
              )}
              <div className="h-64 relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.type}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{room.type}</h3>
                  <p className="text-slate-500 text-sm mt-1">{room.description}</p>
                </div>

                <div className="mb-8">
                  <span className="text-brand-600 font-bold">Contact for Pricing</span>
                </div>

                {/* Features removed as requested */}
                
                <button
                  onClick={() => onInquireClick(room.type)}
                  className={`w-full py-4 rounded-2xl font-bold transition-all ${
                    room.popular
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/30'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Inquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
