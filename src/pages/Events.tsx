import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'DRYVE: Global Frequencies',
      date: '2025-02-15',
      time: '22:00',
      venue: 'Underground Montreal',
      location: 'Montreal, QC',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Upcoming',
      genres: ['Baile Funk', 'Jersey', 'Bass'],
      description: 'An immersive night celebrating global club culture with local and international artists.'
    },
    {
      id: 2,
      title: 'Bass Culture Sessions',
      date: '2025-03-08',
      time: '21:30',
      venue: 'Secret Location',
      location: 'Montreal, QC',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'TBA',
      genres: ['Miami Bass', 'Global'],
      description: 'Deep bass explorations in an intimate setting.'
    },
    {
      id: 3,
      title: 'Jersey Club Night',
      date: '2024-12-20',
      time: '23:00',
      venue: 'Club Soda',
      location: 'Montreal, QC',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Past',
      genres: ['Jersey', 'Club'],
      description: 'High-energy Jersey club sounds that kept the dance floor moving all night.'
    },
    {
      id: 4,
      title: 'Underground Collective',
      date: '2024-11-15',
      time: '22:30',
      venue: 'Warehouse Space',
      location: 'Montreal, QC',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Past',
      genres: ['Baile Funk', 'Experimental'],
      description: 'Raw warehouse energy with cutting-edge sounds from the underground.'
    }
  ];

  const upcomingEvents = events.filter(event => event.status === 'Upcoming' || event.status === 'TBA');
  const pastEvents = events.filter(event => event.status === 'Past');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const EventCard = ({ event, index }: { event: any, index: number }) => (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Image */}
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-xs font-medium ${
              event.status === 'Upcoming' 
                ? 'bg-green-500 text-white'
                : event.status === 'TBA'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-500 text-white'
            }`}>
              {event.status}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 group-hover:text-cyan-500 transition-colors duration-300">
            {event.title}
          </h3>
          
          <div className="space-y-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>{event.venue}, {event.location}</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {event.description}
          </p>
          
          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {event.genres.map((genre) => (
              <span 
                key={genre}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 font-medium"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

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
              Events
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Immersive nights celebrating global club culture and underground sounds
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8">Upcoming</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default Events;