import { ExternalLink, Navigation, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  { name: 'Ambedkar Circle', dist: '800 meters' },
  { name: 'Police Headquarters', dist: '750 meters' },
  { name: 'Shopping Mall', dist: '900 meters' },
  { name: 'Resonance', dist: '500 meters' },
  { name: 'Vagdevi College', dist: '500 meters' },
];

export default function Location() {
  return (
    <section id="location" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-6 md:p-12 lg:p-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-brand-600 font-bold tracking-widest uppercase text-xs mb-4">
                <MapPin size={16} /> 📍 Location Highlights
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 tracking-tight">Prime Location Advantage</h2>
              <p className="text-slate-500 text-base md:text-lg mb-8 leading-relaxed">
                Galaxy Coliving is strategically positioned to give you easy access to key landmarks, 
                educational institutes, and daily essentials—all within walking distance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                {highlights.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 p-3 md:p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
                    <div className="flex-shrink-0 bg-brand-50 p-2 rounded-xl group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm tracking-tight">{item.name}</p>
                      <p className="text-slate-500 text-[11px] md:text-xs font-medium">{item.dist} away</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="https://www.google.com/maps/place/GALAXY+CO-LIVING+%26+BOYS+HOSTEL/@18.0096393,79.5549822,664m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a334f1f3c8b6ae9:0xff5a39e5312e80c6!8m2!3d18.0096393!4d79.5549822!16s%2Fg%2F11xv2z5063" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3.5 md:py-4 rounded-2xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 w-full sm:w-auto text-sm md:text-base"
                >
                  <Navigation className="w-4 h-4 md:w-5 md:h-5" /> Get Directions
                </a>
                <a 
                  href="#contact"
                  className="flex items-center justify-center gap-2 border border-slate-200 text-slate-900 px-6 py-3.5 md:py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all w-full sm:w-auto text-sm md:text-base"
                >
                  Contact Concierge <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 h-80 lg:h-auto min-h-[450px] bg-slate-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.257404!2d79.552407!3d18.009639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f1f3c8b6ae9%3A0xff5a39e5312e80c6!2sGALAXY%20CO-LIVING%20%26%20BOYS%20HOSTEL!5e0!3m2!1sen!2sin!4v1714467324000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
