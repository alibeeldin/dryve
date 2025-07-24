import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-react';

const EventPage = () => {
  const { eventNumber } = useParams();

  // This would typically come from an API or database
  const eventData = {
    '001': {
      title: 'DRYVE 001',
      subtitle: 'MONTREAL UNDERGROUND',
      date: 'Friday, August 1, 2025',
      time: '10:00 PM - 4:00 AM',
      venue: 'Venue TBA',
      location: 'Montreal, QC',
      capacity: 230,
      flyer: '/image.png',
      description: 'The inaugural DRYVE experience brings Montreal\'s underground scene to life with carefully curated sounds and an intimate venue setting.',
      lineup: [
        'DJ SHADOW MONTREAL',
        'BASS COLLECTIVE', 
        'UNDERGROUND SOUNDS',
        'SPECIAL GUESTS TBA'
      ],
      ticketsAvailable: true,
      status: 'upcoming'
    }
  };

  const event = eventData[eventNumber as keyof typeof eventData];

  if (!event) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">
            EVENT NOT FOUND
          </h1>
          <p className="text-white/70 mb-8">
            The event you're looking for doesn't exist or hasn't been announced yet.
          </p>
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-bold tracking-wide transition-colors duration-300 rounded"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO HOME
        </Link>

        {/* Event Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-black tracking-wider text-white mb-4">
              {event.title}
            </h1>
            <p className="text-xl lg:text-2xl text-red-500 font-bold mb-6">
              {event.subtitle}
            </p>
            
            <div className="space-y-4 text-white/80 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-red-500" />
                <span className="font-medium">{event.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="font-medium">{event.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="font-medium">{event.venue} - {event.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-red-500" />
                <span className="font-medium">LIMITED CAPACITY - {event.capacity} PEOPLE</span>
              </div>
            </div>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {event.description}
            </p>

            {event.ticketsAvailable && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/tickets"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold tracking-wide transition-all duration-300 hover:scale-105 text-center"
                >
                  GET TICKETS
                </Link>
                <Link
                  to="/join"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold tracking-wide transition-all duration-300 hover:scale-105 text-center"
                >
                  JOIN COMMUNITY
                </Link>
              </div>
            )}
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <img 
                src={event.flyer} 
                alt={`${event.title} Flyer`}
                className="w-full rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Lineup Section */}
        <div className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-black tracking-wider text-white mb-8">
            LINEUP
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {event.lineup.map((artist, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 modern-card"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-xl">
                    {artist.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-bold tracking-wide text-white text-sm">
                  {artist}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 lg:p-8">
            <h3 className="text-xl font-bold tracking-wide text-white mb-6">
              EVENT DETAILS
            </h3>
            <div className="space-y-4 text-white/80">
              <div>
                <h4 className="font-semibold text-white mb-2">AGE REQUIREMENT</h4>
                <p className="text-sm">18+ with valid government-issued ID required</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">DRESS CODE</h4>
                <p className="text-sm">Underground chic - express yourself</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">VENUE DETAILS</h4>
                <p className="text-sm">Exact location sent to ticket holders 24 hours before event</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 lg:p-8">
            <h3 className="text-xl font-bold tracking-wide text-white mb-6">
              TICKET INFORMATION
            </h3>
            <div className="space-y-4 text-white/80">
              <div>
                <h4 className="font-semibold text-white mb-2">PRICING</h4>
                <p className="text-sm">Early Bird: $35 • General: $45 • Last Release: $55</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">REFUND POLICY</h4>
                <p className="text-sm">No refunds or exchanges - all sales final</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">CONTACT</h4>
                <p className="text-sm">Questions? Email hello@dryve.club</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;