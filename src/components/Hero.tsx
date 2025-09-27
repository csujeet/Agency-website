import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '5.5rem' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Building Digital 
                <span className="text-blue-600"> Excellence</span> for Your Business
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We create stunning websites and powerful web applications that drive results. 
                Partner with us to transform your digital presence and accelerate your growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span className="font-semibold">Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold">
                View Our Work
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>100% Custom Development</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Mobile-First Responsive Design</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>SEO Optimized & Fast Loading</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Web development workspace"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                5+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;