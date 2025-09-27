import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A complete online marketplace with advanced filtering, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Healthcare Portal',
      description: 'Patient management system with appointment booking, medical records, and telemedicine features.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Restaurant Chain App',
      description: 'Multi-location restaurant management with online ordering, delivery tracking, and analytics.',
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Express', 'Firebase', 'Maps API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'SaaS Analytics Dashboard',
      description: 'Real-time data visualization platform with custom charts, reports, and user management.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'D3.js', 'Python', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Recent Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of the successful projects we've delivered for our clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;