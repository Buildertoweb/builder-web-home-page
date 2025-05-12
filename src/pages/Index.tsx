
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { Process } from '../components/Process';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
