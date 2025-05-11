
import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "BuilderToWeb completely transformed our online presence. We launched our new website in just a week, and the results have been incredible.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "GrowthTech",
      stars: 5
    },
    {
      quote: "As someone with zero coding experience, I never thought I could create a professional website. BuilderToWeb made it not just possible, but enjoyable.",
      name: "Michael Chen",
      title: "Small Business Owner",
      company: "Artisan Coffee",
      stars: 5
    },
    {
      quote: "The templates are beautiful and so easy to customize. Our website looks like we hired an expensive design agency, but we did it all ourselves.",
      name: "Jessica Williams",
      title: "Founder",
      company: "Wellness Studio",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What our customers say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've built amazing websites with BuilderToWeb
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
              <div className="text-blue-400 font-semibold mb-2">TRUSTED BY BUSINESSES</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Join over 10,000+ companies using BuilderToWeb</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4'].map((brand, i) => (
                <div key={i} className="h-12 bg-gray-800/50 rounded flex items-center justify-center px-6">
                  <span className="text-gray-400 font-semibold">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
