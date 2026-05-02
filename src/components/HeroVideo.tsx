import { motion } from 'motion/react';

export default function HeroVideo() {
  return (
    <div className="relative w-full aspect-video overflow-hidden bg-black" id="home">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/tNoXlntpd_g?autoplay=1&mute=1&loop=1&playlist=tNoXlntpd_g&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playsinline=1"
          className="w-full h-full scale-[1.1] pointer-events-none"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Galaxy Co-Living Aerial View"
        ></iframe>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end pb-4 sm:pb-8 px-4 sm:px-8 md:px-12 z-10 h-32 md:h-40">
        <div className="w-full flex flex-col sm:flex-row items-baseline gap-2 sm:gap-4 md:gap-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-white drop-shadow-lg shrink-0"
          >
            Galaxy Co-Living
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base text-slate-200 drop-shadow-md truncate"
          >
            <span className="hidden sm:inline">— </span>Luxury accommodation in the heart of the city.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
