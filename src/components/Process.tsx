
import React from 'react';

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Choose a template",
      description: "Start with one of our professionally designed templates as a foundation for your website."
    },
    {
      number: "02",
      title: "Customize design",
      description: "Personalize colors, fonts, and layout to match your brand's unique style and aesthetic."
    },
    {
      number: "03",
      title: "Add your content",
      description: "Fill in your text, upload images, and add any special features your site needs."
    },
    {
      number: "04",
      title: "Publish and grow",
      description: "Launch your site with one click and continue to improve it as your business grows."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How BuilderToWeb works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple four-step process takes you from idea to live website in no time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm h-full">
                <div className="text-4xl font-bold text-blue-600 mb-4 opacity-50">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Ready to get started?
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Create your website today</h3>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};
