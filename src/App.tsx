/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Facilities from './components/Facilities';
import WhyChoiceGalaxy from './components/WhyChoiceGalaxy';
import RoomTypes from './components/RoomTypes';
import Gallery from './components/Gallery';
import InquiryForm from './components/InquiryForm';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>(undefined);

  const openInquiry = (room?: string) => {
    setSelectedRoom(room);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onBookClick={() => openInquiry()} />
      <main>
        <HeroCarousel />
        
        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">
              Welcome to <span className="text-brand-600">Galaxy Co-Living & Boys Hostel</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed border-l-4 border-brand-500 pl-6 md:pl-10 py-2 italic md:not-italic">
              A perfect place for students and working professionals looking for a clean, safe, and budget-friendly stay. 
              We provide fully furnished rooms with all luxury amenities for a hassle-free lifestyle.
            </p>
          </div>
        </section>

        <RoomTypes onInquireClick={openInquiry} />
        <Gallery />
        <Facilities />
        <WhyChoiceGalaxy />
        <Location />
        
        {/* Global Inquiry Modal */}
        <InquiryForm 
          isOpen={isInquiryOpen} 
          onClose={() => setIsInquiryOpen(false)} 
          selectedRoom={selectedRoom}
        />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
