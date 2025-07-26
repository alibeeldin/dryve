import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Connect with DRYVE for collaborations, bookings, or general inquiries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8">
                <h2 className="text-2xl font-medium mb-8">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8">
                <h2 className="text-2xl font-medium mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-cyan-500 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a 
                        href="mailto:hello@dryvemtl.com"
                        className="text-gray-600 hover:text-cyan-500 transition-colors duration-300"
                      >
                        hello@dryvemtl.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Instagram className="text-cyan-500 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Instagram</h3>
                      <a 
                        href="https://instagram.com/dryvemtl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-cyan-500 transition-colors duration-300"
                      >
                        @dryvemtl
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-cyan-500 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-gray-600">Montreal, Quebec</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-black text-white p-8">
                <h3 className="text-xl font-medium mb-4">Booking Inquiries</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Interested in booking DRYVE for your event or venue? We're always open to collaborations that align with our vision of authentic underground culture.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  For artist submissions and demo inquiries, please include links to your work and a brief description of your sound.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;