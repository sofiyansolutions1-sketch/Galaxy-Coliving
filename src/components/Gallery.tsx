import React from 'react';
import { motion } from 'motion/react';

const images = [
  'https://iili.io/BPyb7t9.jpg',
  'https://iili.io/Bs7UNlp.jpg',
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
const row1 = [...images, ...images];
const row2 = [...images.reverse(), ...images];
const row3 = [...images, ...images];

export default function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Gallery</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Life at Galaxy</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Take a peek into our premium living spaces and vibrant community lifestyle.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {/* Row 1: Left scrolling */}
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex gap-6 md:gap-8 whitespace-nowrap"
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {row1.map((src, i) => (
              <div key={`r1-${i}`} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-3xl overflow-hidden flex-shrink-0 shadow-xl shadow-slate-200/50 border border-slate-100">
                <img 
                  src={src} 
                  alt="Gallery Image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right scrolling */}
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex gap-6 md:gap-8 whitespace-nowrap"
            animate={{ x: [-1920, 0] }}
            transition={{ 
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {row2.map((src, i) => (
              <div key={`r2-${i}`} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-3xl overflow-hidden flex-shrink-0 shadow-xl shadow-slate-200/50 border border-slate-100">
                <img 
                  src={src} 
                  alt="Gallery Image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 3: Left scrolling */}
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex gap-6 md:gap-8 whitespace-nowrap"
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {row3.map((src, i) => (
              <div key={`r3-${i}`} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-3xl overflow-hidden flex-shrink-0 shadow-xl shadow-slate-200/50 border border-slate-100">
                <img 
                  src={src} 
                  alt="Gallery Image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
