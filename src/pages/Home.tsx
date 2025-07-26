import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-12"
          >
            <img 
              src="/dryve.svg" 
              alt="DRYVE" 
              className="h-20 md:h-28 w-auto mx-auto mb-8"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 leading-tight"
          >
            Montreal Movement.<br />
            <span className="font-medium">Global Energy.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 font-light tracking-wide opacity-90"
          >
            Baile Funk. Jersey. Miami Bass.<br />
            Culture rewired.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="/artists"
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:bg-gray-100 hover:scale-105 group"
            >
              <span>Explore Artists</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-medium mb-4">Artists</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover the voices shaping Montreal's underground scene
              </p>
              <Link
                to="/artists"
                className="text-cyan-500 hover:text-cyan-600 font-medium transition-colors duration-300"
              >
                View All →
              </Link>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-medium mb-4">Releases</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Latest drops and curated selections from the collective
              </p>
              <Link
                to="/releases"
                className="text-cyan-500 hover:text-cyan-600 font-medium transition-colors duration-300"
              >
                Listen Now →
              </Link>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-medium mb-4">Events</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Upcoming nights and cultural experiences
              </p>
              <Link
                to="/events"
                className="text-cyan-500 hover:text-cyan-600 font-medium transition-colors duration-300"
              >
                See Events →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;