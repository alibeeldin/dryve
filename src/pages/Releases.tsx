import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const Releases = () => {
  const releases = [
    {
      id: 1,
      title: 'Montreal Bass Vol. 1',
      artist: 'DRYVE Collective',
      artwork: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
      year: '2024',
      genre: 'Baile Funk',
      status: 'Available',
      links: {
        spotify: '#',
        soundcloud: '#',
        bandcamp: '#'
      }
    },
    {
      id: 2,
      title: 'Jersey Edits',
      artist: 'Various Artists',
      artwork: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      year: '2024',
      genre: 'Jersey Club',
      status: 'Available',
      links: {
        spotify: '#',
        soundcloud: '#'
      }
    },
    {
      id: 3,
      title: 'Global Frequencies',
      artist: 'DRYVE',
      artwork: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
      year: '2025',
      genre: 'Miami Bass',
      status: 'Coming Soon',
      links: {}
    },
    {
      id: 4,
      title: 'Underground Sessions',
      artist: 'Collective',
      artwork: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      year: '2025',
      genre: 'Global',
      status: 'TBA',
      links: {}
    }
  ];

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
              Releases
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Curated selections and original productions from the DRYVE collective
            </p>
          </motion.div>
        </div>
      </section>

      {/* Releases Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {releases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    {/* Artwork */}
                    <div className="md:w-64 aspect-square md:aspect-auto relative overflow-hidden">
                      <img 
                        src={release.artwork} 
                        alt={release.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {release.status === 'Available' && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform duration-300">
                            <Play size={24} fill="currentColor" />
                          </button>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-medium mb-1 group-hover:text-cyan-500 transition-colors duration-300">
                              {release.title}
                            </h3>
                            <p className="text-gray-600">{release.artist}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">{release.year}</p>
                            <span className={`inline-block px-3 py-1 text-xs font-medium mt-1 ${
                              release.status === 'Available' 
                                ? 'bg-green-100 text-green-800'
                                : release.status === 'Coming Soon'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {release.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium">
                            {release.genre}
                          </span>
                        </div>
                      </div>
                      
                      {/* Links */}
                      {Object.keys(release.links).length > 0 && (
                        <div className="flex items-center space-x-4">
                          {release.links.spotify && (
                            <a 
                              href={release.links.spotify}
                              className="flex items-center space-x-2 text-gray-600 hover:text-cyan-500 transition-colors duration-300"
                            >
                              <ExternalLink size={16} />
                              <span className="text-sm font-medium">Spotify</span>
                            </a>
                          )}
                          {release.links.soundcloud && (
                            <a 
                              href={release.links.soundcloud}
                              className="flex items-center space-x-2 text-gray-600 hover:text-cyan-500 transition-colors duration-300"
                            >
                              <ExternalLink size={16} />
                              <span className="text-sm font-medium">SoundCloud</span>
                            </a>
                          )}
                          {release.links.bandcamp && (
                            <a 
                              href={release.links.bandcamp}
                              className="flex items-center space-x-2 text-gray-600 hover:text-cyan-500 transition-colors duration-300"
                            >
                              <ExternalLink size={16} />
                              <span className="text-sm font-medium">Bandcamp</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Releases;