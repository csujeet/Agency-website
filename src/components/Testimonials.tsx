import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'DevCraft transformed our outdated website into a modern, high-performing platform that increased our conversions by 250%. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GreenEats',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with DevCraft was a game-changer for our restaurant chain. They built us a comprehensive ordering system that streamlined our operations and improved customer satisfaction.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, HealthPlus',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The team delivered exactly what we needed - a secure, HIPAA-compliant patient portal that our users love. Their professionalism and communication throughout the project was excellent.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped grow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <Quote className="h-10 w-10 text-blue-600 mb-4" />
                <p className="text-gray-700 leading-relaxed text-lg">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;