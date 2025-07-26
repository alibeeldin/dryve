import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const Artists = () => {
  const artists = [
    {
      id: 1,
      name: 'DRYVE Collective',
      bio: 'Montreal-based collective pushing baile funk and global bass culture',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      instagram: '@dryvemtl',
      genres: ['Baile Funk', 'Jersey', 'Bass']
    },
    {
      id: 2,
      name: 'Artist Name',
      bio: 'Emerging voice in Montreal underground scene',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
      instagram: '@artist',
      genres: ['Miami Bass', 'Global']
    },
    {
      id: 3,
      name: 'Another Artist',
      bio: 'Genre-bending producer and DJ',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      instagram: '@another',
      genres: ['Jersey', 'Experimental']
    },
    {
      id: 4,
      name: 'Featured Artist',
      bio: 'International collaborator and sound designer',
      image: 'https://images.pexels.com/photos/3062400/pexels-photo-3062400.jpeg?auto=compress&cs=tinysrgb&w=600',
      instagram: '@featured',
      genres: ['Baile Funk', 'Global']
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
              Artists
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The voices and visionaries shaping Montreal's underground culture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2 group-hover:text-cyan-500 transition-colors duration-300">
                      {artist.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {artist.bio}
                    </p>
                    
                    {/* Genres */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {artist.genres.map((genre) => (
                        <span 
                          key={genre}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 font-medium"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex items-center space-x-4">
                      <a 
                        href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-500 hover:text-cyan-500 transition-colors duration-300"
                      >
                        <Instagram size={16} />
                        <span className="text-sm">{artist.instagram}</span>
                      </a>
                      <button className="text-gray-500 hover:text-cyan-500 transition-colors duration-300">
                        <ExternalLink size={16} />
                      </button>
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

export default Artists;