
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from '@/components/ui/card';

export const Footer = () => {
  const products = [
    {
      title: "Landing Page",
      description: "Create impactful first impressions with professionally designed landing pages. Perfect for promotions, events, product launches, and lead generation. Our custom designs combine eye-catching visuals with compelling messaging for maximum conversion rates and business growth.",
      price: "200 AED",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Freelancer Website",
      description: "Showcase your professional skills and expertise with a custom website designed specifically for freelancers. Whether you're a designer, writer, developer, or consultant, our SEO-optimized websites help you stand out in a competitive market. Build your personal brand and attract more clients.",
      price: "450 AED",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Restaurant Website",
      description: "Bring your restaurant online with a stunning website that attracts customers and boosts reservations. Our restaurant websites are tailored to showcase your menu, location, and special offers in an engaging way. Increase foot traffic and online orders with mobile-friendly, visually appealing designs.",
      price: "850 AED",
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">BuilderToWeb</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your ideas into beautiful websites without writing a single line of code.
            </p>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Digital Products</h3>
            <div className="grid grid-cols-1 gap-4">
              {products.map((product, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1 relative">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={product.image} 
                          alt={`${product.title} - Professional web design service`} 
                          className="object-cover w-full h-full rounded-l-lg"
                        />
                      </AspectRatio>
                    </div>
                    <div className="sm:col-span-2 p-4">
                      <h4 className="font-bold text-white mb-2">{product.title}</h4>
                      <p className="text-sm text-gray-400 mb-2">{product.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-semibold text-blue-400">{product.price}</span>
                        <a href="#" className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md transition-colors">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Product</h3>
            <ul className="space-y-4">
              {['Features', 'Templates', 'Integrations', 'Pricing', 'Updates'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {['About', 'Careers', 'Blog', 'Press', 'Partners'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              {['Documentation', 'Tutorials', 'Support', 'API', 'Community'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BuilderToWeb. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
