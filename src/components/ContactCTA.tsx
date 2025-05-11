
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build your dream website?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start your journey today with BuilderToWeb and create a website that stands out from the competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-blue-900 hover:bg-blue-100 text-lg py-6 px-8"
              size="lg"
            >
              Contact Us Now 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg py-6 px-8"
              size="lg"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
