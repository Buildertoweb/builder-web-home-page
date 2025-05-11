
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                BuilderToWeb
              </span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">How it works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex flex-col space-y-4 py-4">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-2 rounded-md">
              Features
            </a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-2 rounded-md">
              How it works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-2 rounded-md">
              Testimonials
            </a>
            <Button variant="outline" className="border-blue-600 text-blue-600 justify-start">
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white justify-start">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
