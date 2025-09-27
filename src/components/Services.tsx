import React from 'react';
import { Globe, Smartphone, ShoppingCart, Search, Palette, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Web Development',
      description: 'Tailored websites built from scratch using modern technologies like React, Node.js, and TypeScript.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that look perfect on all devices, from smartphones to desktop computers.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and user-friendly interfaces.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Search engine optimization to help your website rank higher and attract more organic traffic.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces designed to convert visitors into customers.',
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance to keep your website secure and running smoothly.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web development services to help your business thrive online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;