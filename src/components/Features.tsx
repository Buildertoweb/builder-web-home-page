
import React from 'react';
import { Calendar, Layout, Settings, Star } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Layout className="h-8 w-8 text-blue-400" />,
      title: "Responsive Design",
      description: "Create websites that look great on any device with our responsive design tools and templates."
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-400" />,
      title: "Easy Customization",
      description: "Customize every aspect of your website with professional tools and expert guidance."
    },
    {
      icon: <Star className="h-8 w-8 text-blue-400" />,
      title: "SEO Optimized",
      description: "Built-in SEO tools to help your website rank higher in search results."
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-400" />,
      title: "Launch in Days, Not Months",
      description: "Go from concept to live website in days with our streamlined workflow."
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powerful features to build your perfect website</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create professional websites with expert craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-md hover:shadow-lg hover:shadow-blue-900/20 transition-shadow"
            >
              <div className="bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Website builder interface" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Intuitive visual interface</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our visual editor makes website building accessible to everyone. Just design, review, and publish - it's that simple.
              </p>
              <ul className="space-y-3">
                {['Professional-grade tools', 'Real-time preview', 'Pre-built components', 'Save and reuse sections'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="bg-blue-900/30 text-blue-400 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
