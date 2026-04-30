import React from 'react';
import { motion } from 'motion/react';

const bedImages = [
  'https://iili.io/BsVnu9I.jpg',
  'https://iili.io/Bs1kdaR.jpg',
  'https://iili.io/BsEGhps.jpg',
  'https://iili.io/BsEwWiJ.jpg',
  'https://iili.io/Bs1jJVf.jpg',
  'https://iili.io/Bs1NbHB.jpg',
  'https://iili.io/Bs1Unb2.jpg',
  'https://iili.io/BPyb7t9.jpg',
  'https://iili.io/Bs7UNlp.jpg'
];

const facilityImages = [
  'https://iili.io/Bs74v5B.jpg',
  'https://iili.io/Bs74QJp.jpg',
  'https://iili.io/Bs76nLu.jpg',
  'https://iili.io/Bs7t0wQ.jpg',
  'https://iili.io/Bs7DE5G.jpg',
  'https://iili.io/Bs7ptku.jpg',
  'https://iili.io/BsY93Ml.jpg',
  'https://iili.io/BsYJ5yF.jpg'
];

// Duplicate images to create a seamless loop
const row1 = [...bedImages, ...bedImages];
const row2 = [...facilityImages, ...facilityImages];

export default function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Gallery</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Explore Our Spaces</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Premium room options and world-class facilities designed for your comfort.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {/* Row 1: Bed Room Options (Left scrolling) */}
        <div className="relative">
          <div className="absolute left-6 top-6 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-brand-600 font-bold text-xs uppercase tracking-wider">Premium Beds</span>
          </div>
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-6 md:gap-8 whitespace-nowrap"
              animate={{ x: [0, -1920] }}
              transition={{ 
                duration: 45,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {row1.map((src, i) => (
                <div key={`r1-${i}`} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-3xl overflow-hidden flex-shrink-0 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <img 
                    src={src} 
                    alt="Living Space" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2: Facilities & Community (Right scrolling) */}
        <div className="relative">
          <div className="absolute right-6 top-6 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-brand-600 font-bold text-xs uppercase tracking-wider">World-Class Facilities</span>
          </div>
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-6 md:gap-8 whitespace-nowrap"
              animate={{ x: [-1920, 0] }}
              transition={{ 
                duration: 50,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {row2.map((src, i) => (
                <div key={`r2-${i}`} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-3xl overflow-hidden flex-shrink-0 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <img 
                    src={src} 
                    alt="Facilities" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
