
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Transform your ideas into beautiful websites
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              BuilderToWeb helps you build stunning web experiences with expert craftsmanship. Launch your website faster with our intuitive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 text-lg py-6 px-8"
                size="lg"
              >
                Start Building 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-900/20 text-lg py-6 px-8"
                size="lg"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800">
              <div className="bg-gray-800 h-8 flex items-center px-4 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Website building interface" 
                  className="object-cover w-full h-full opacity-90"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
