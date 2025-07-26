import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
              About DRYVE
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white p-12 space-y-8">
              <p className="text-2xl font-light leading-relaxed text-gray-800">
                DRYVE is rooted in Montreal and connected to the world. We curate genre-bending nights built on baile funk, bass-heavy sound, and raw energy from the global underground.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                Born from Montreal's diverse cultural landscape, DRYVE represents a new wave of underground music culture that transcends geographical boundaries. We bring together artists, producers, and music lovers who share a passion for authentic, uncompromising sound.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                Our events are more than parties—they're cultural experiences that celebrate the intersection of global bass music, local talent, and community. From intimate warehouse gatherings to larger venue takeovers, each DRYVE event is carefully curated to showcase the depth and diversity of contemporary underground music.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                We champion artists who push boundaries, whether they're exploring the rhythmic complexity of baile funk, the bounce of Jersey club, or the deep pulse of Miami bass. DRYVE is a platform for voices that might otherwise go unheard in mainstream music culture.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-medium mb-4">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize genuine artistic expression over commercial trends, supporting artists who stay true to their vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-medium mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Building connections between artists, audiences, and the broader Montreal music scene through shared experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-medium mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Constantly exploring new sounds, formats, and ways to present underground music culture to diverse audiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-video overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="DRYVE Culture"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;