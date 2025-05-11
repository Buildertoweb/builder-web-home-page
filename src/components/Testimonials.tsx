
import React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      quote: "As someone with limited technical background, I never thought I could create a professional website. BuilderToWeb made it not just possible, but enjoyable.",
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
    },
    {
      quote: "BuilderToWeb's customer support is exceptional. Any time I had a question, they were quick to respond with helpful solutions.",
      name: "David Rodriguez",
      title: "CEO",
      company: "InnoTech Solutions",
      stars: 5
    },
    {
      quote: "I was able to create a fully functioning e-commerce site in days instead of months. The platform's simplicity is its greatest strength.",
      name: "Emma Thompson",
      title: "Online Store Owner",
      company: "Rustic Home Goods",
      stars: 5
    },
    {
      quote: "The SEO tools integrated into BuilderToWeb helped us achieve first page rankings within weeks of launching our new site.",
      name: "Robert Clark",
      title: "Digital Marketing Specialist",
      company: "OptimizeNow",
      stars: 5
    },
    {
      quote: "We've tried many website builders before, but none compare to the flexibility and professional results we get with BuilderToWeb.",
      name: "Sophia Kim",
      title: "Creative Director",
      company: "Design Collective",
      stars: 5
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-md h-full flex flex-col">
      <div className="flex mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-lg text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</blockquote>
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
  );

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What our customers say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've built amazing websites with BuilderToWeb
          </p>
        </div>

        <div className="mb-16">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious className="relative static left-auto transform-none" />
              <CarouselNext className="relative static right-auto transform-none" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
              <div className="text-blue-400 font-semibold mb-2">ELEVATE YOUR WEB PRESENCE</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Join the professionals who trust BuilderToWeb</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="h-16 bg-gray-800/50 rounded-lg flex items-center justify-center px-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-400">98%</span>
                </div>
                <span className="ml-3 text-white text-sm">Customer<br/>Satisfaction</span>
              </div>
              <div className="h-16 bg-gray-800/50 rounded-lg flex items-center justify-center px-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-purple-400">24/7</span>
                </div>
                <span className="ml-3 text-white text-sm">Expert<br/>Support</span>
              </div>
              <div className="h-16 bg-gray-800/50 rounded-lg flex items-center justify-center px-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-green-400">7+</span>
                </div>
                <span className="ml-3 text-white text-sm">Years<br/>Experience</span>
              </div>
              <div className="h-16 bg-gray-800/50 rounded-lg flex items-center justify-center px-4">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-yellow-400">500+</span>
                </div>
                <span className="ml-3 text-white text-sm">Projects<br/>Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
