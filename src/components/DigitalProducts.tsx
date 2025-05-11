
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from '@/components/ui/card';

export const DigitalProducts = () => {
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
    <section id="digital-products" className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Digital Products</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional website solutions designed to boost your online presence and drive results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden h-full">
              <div className="flex flex-col h-full">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={product.image} 
                      alt={`${product.title} - Professional web design service`} 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-bold text-xl text-white mb-3">{product.title}</h4>
                  <p className="text-gray-400 mb-6 flex-grow">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-semibold text-blue-400">{product.price}</span>
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
