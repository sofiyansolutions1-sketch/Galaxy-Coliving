import React from 'react';
import { motion } from 'motion/react';

const exteriorImages = [
  'https://i.postimg.cc/XJYZNnvG/Chat-GPT-Image-Apr-30-2026-12-01-40-PM.png',
  'https://i.postimg.cc/HkwXpQ53/Chat-GPT-Image-May-1-2026-12-06-28-AM.png',
  'https://i.postimg.cc/wxPtH8YL/Chat-GPT-Image-Apr-30-2026-12-01-46-PM.png',
  'https://i.postimg.cc/SQgZ4pqN/Chat-GPT-Image-May-1-2026-12-03-19-AM.png',
  'https://i.postimg.cc/CKp77hHV/Chat-GPT-Image-May-1-2026-12-02-57-AM.png',
  'https://i.postimg.cc/N0t8TNYd/Chat-GPT-Image-May-1-2026-12-05-07-AM.png',
  'https://i.postimg.cc/6Ts4K3QK/Chat-GPT-Image-May-1-2026-12-07-39-AM.png'
];

const roomImages = [
  'https://i.postimg.cc/dt6V1zz8/Chat-GPT-Image-Apr-30-2026-05-45-24-PM.png',
  'https://i.postimg.cc/ZnqDLv53/Chat-GPT-Image-Apr-30-2026-05-17-55-PM.png',
  'https://i.postimg.cc/0Q47LzCX/Chat-GPT-Image-Apr-30-2026-05-17-02-PM.png',
  'https://i.postimg.cc/fyX5C7hV/Chat-GPT-Image-Apr-30-2026-12-01-51-PM.png'
];

const facilityImages = [
  'https://i.postimg.cc/bw9g6XmM/Chat-GPT-Image-Apr-30-2026-12-02-40-PM.png',
  'https://i.postimg.cc/qRSxtp71/Chat-GPT-Image-Apr-30-2026-12-02-36-PM.png',
  'https://i.postimg.cc/3R4gQzZv/Chat-GPT-Image-Apr-30-2026-12-02-31-PM.png',
  'https://i.postimg.cc/Nf7Rt6R8/Chat-GPT-Image-Apr-30-2026-12-02-26-PM.png',
  'https://i.postimg.cc/Df1XQrjt/Chat-GPT-Image-Apr-30-2026-12-02-10-PM.png'
];

// Duplicate images to create a seamless loop
const rowExterior = [...exteriorImages, ...exteriorImages];
const rowRooms = [...roomImages, ...roomImages];
const rowFacilities = [...facilityImages, ...facilityImages];

export default function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Tour Our Spaces</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Explore Galaxy Co-Living</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Take a virtual tour of our premium building, comfortable rooms, and top-tier facilities.
        </p>
      </div>

      <div className="flex flex-col gap-12 md:gap-16">
        {/* Section 1: Co-Living Out-of-Area / Exterior (Left scrolling) */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-600 rounded-full"></span>
              Co-Living Area View
            </h3>
          </div>
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-6 md:gap-8 whitespace-nowrap"
              animate={{ x: [0, -1500] }}
              transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {rowExterior.map((src, i) => (
                <div key={`ext-${i}`} className="w-[300px] h-[200px] md:w-[450px] md:h-[300px] rounded-3xl overflow-hidden flex-shrink-0 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <img 
                    src={src} 
                    alt="Co-Living Exterior" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Section 2: Co-Living Rooms (Right scrolling) */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-600 rounded-full"></span>
              Our Premium Rooms
            </h3>
          </div>
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-6 md:gap-8 whitespace-nowrap"
              animate={{ x: [-1500, 0] }}
              transition={{ 
                duration: 45,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {rowRooms.map((src, i) => (
                <div key={`room-${i}`} className="w-[300px] h-[200px] md:w-[450px] md:h-[300px] rounded-3xl overflow-hidden flex-shrink-0 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <img 
                    src={src} 
                    alt="Premium Room" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Section 3: Facilities (Left scrolling) */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-600 rounded-full"></span>
              Modern Facilities
            </h3>
          </div>
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-6 md:gap-8 whitespace-nowrap"
              animate={{ x: [0, -1800] }}
              transition={{ 
                duration: 50,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {rowFacilities.map((src, i) => (
                <div key={`fac-${i}`} className="w-[300px] h-[200px] md:w-[450px] md:h-[300px] rounded-3xl overflow-hidden flex-shrink-0 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <img 
                    src={src} 
                    alt="Facility" 
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
