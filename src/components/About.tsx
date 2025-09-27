import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '150+' },
    { icon: Award, label: 'Projects Completed', value: '300+' },
    { icon: Clock, label: 'Years Experience', value: '5+' },
    { icon: Target, label: 'Success Rate', value: '98%' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About DevCraft
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're a passionate team of developers, designers, and digital strategists dedicated 
                to creating exceptional web experiences that drive business growth.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Founded in 2020, DevCraft has grown from a small startup to a trusted web 
                development partner for businesses of all sizes. We combine technical expertise 
                with creative vision to deliver solutions that not only look great but perform exceptionally.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team specializes in modern web technologies and follows industry best practices 
                to ensure your project is scalable, secure, and future-proof. We believe in transparent 
                communication and collaborative partnerships with our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Development team working"
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with cutting-edge web solutions that create lasting 
                  value and drive sustainable growth in the digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;