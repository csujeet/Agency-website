import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { sendEmail } from '../utils/email';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // send email via utils/sendEmail
    setStatus({ sending: true, success: null, message: '' });
    sendEmail(formData)
      .then(() => {
        setStatus({ sending: false, success: true, message: 'Message sent successfully.' });
        setFormData({ name: '', email: '', company: '', message: '' });
      })
      .catch((err: unknown) => {
        console.error('Send email error:', err);
        setStatus({ sending: false, success: false, message: String((err as Error)?.message || err) });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [status, setStatus] = useState({ sending: false, success: null as null | boolean, message: '' });

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your digital presence to the next level? Get in touch with us today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-gray-300">csujeet157@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-gray-300">+9779823524348</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <p className="text-gray-300">Ramgram 10 parasi manjhariya nepal</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose DevCraft?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">5+ years of proven experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">100% custom development approach</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Ongoing support and maintenance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Transparent pricing and communication</span>
                </li>
              </ul>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status.sending}
                className={`w-full ${status.sending ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white px-8 py-4 rounded-lg transition-colors duration-200 font-semibold flex items-center justify-center space-x-2`}
              >
                <Send className="h-5 w-5" />
                <span>{status.sending ? 'Sending...' : 'Send Message'}</span>
              </button>

              {status.success === true && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="text-green-800 font-semibold">Thanks for reaching out!</h4>
                  <p className="text-green-700">Your message has been received. Our team will get back to you within 24 hours to discuss your project and next steps.</p>
                </div>
              )}
              {status.success === false && (
                <div className="text-red-600 font-medium">Failed to send: {status.message}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;