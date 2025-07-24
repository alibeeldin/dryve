import React from 'react';
import { Play, Calendar, Users, ExternalLink } from 'lucide-react';

const SetsPage = () => {
  const pastEvents = [
    {
      id: 'dryve-001',
      title: 'DRYVE 001',
      date: 'August 1, 2025',
      location: 'Montreal, QC',
      flyer: '/image.png',
      djs: ['DJ SHADOW MONTREAL', 'BASS COLLECTIVE', 'UNDERGROUND SOUNDS'],
      setUrl: 'https://soundcloud.com/example-set-1',
      youtubeUrl: 'https://youtube.com/watch?v=example1',
      attendees: 230,
      status: 'upcoming'
    },
    // Add more past events here as they happen
  ];

  const upcomingEvent = pastEvents.find(event => event.status === 'upcoming');
  const completedEvents = pastEvents.filter(event => event.status === 'completed');

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-6xl font-black tracking-wider text-white mb-4">
            DRYVE SETS
          </h1>
          <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
            Experience the sounds that define Montreal's underground scene
          </p>
        </div>

        {/* Upcoming Event */}
        {upcomingEvent && (
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-wide text-white mb-8">
              NEXT EVENT
            </h2>
            <div className="bg-gradient-to-r from-red-900/20 to-black border border-red-500/30 rounded-lg p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={upcomingEvent.flyer} 
                    alt={upcomingEvent.title}
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black tracking-wider text-white mb-4">
                    {upcomingEvent.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-white/80">
                      <Calendar className="w-5 h-5 text-red-500" />
                      <span>{upcomingEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Users className="w-5 h-5 text-red-500" />
                      <span>{upcomingEvent.attendees} Capacity</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">LINEUP</h4>
                    <div className="space-y-2">
                      {upcomingEvent.djs.map((dj, index) => (
                        <div key={index} className="text-white/80">
                          • {dj}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="/tickets"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-bold tracking-wide transition-colors duration-300 rounded"
                    >
                      GET TICKETS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Past Events Archive */}
        {completedEvents.length > 0 && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-wide text-white mb-8">
              ARCHIVE
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300 hover:scale-105 modern-card"
                >
                  <div className="relative">
                    <img 
                      src={event.flyer} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold tracking-wide text-white mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-white/80">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">LINEUP</h4>
                      <div className="space-y-1">
                        {event.djs.slice(0, 3).map((dj, index) => (
                          <div key={index} className="text-white/70 text-sm">
                            • {dj}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {event.setUrl && (
                        <a
                          href={event.setUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded flex items-center justify-center gap-2"
                        >
                          <Play className="w-4 h-4" />
                          SOUNDCLOUD
                        </a>
                      )}
                      {event.youtubeUrl && (
                        <a
                          href={event.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          YOUTUBE
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State for Archive */}
        {completedEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-white/50" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              ARCHIVE COMING SOON
            </h3>
            <p className="text-white/70 max-w-md mx-auto">
              After our first event, you'll find all the sets and memories from past DRYVE experiences here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SetsPage;