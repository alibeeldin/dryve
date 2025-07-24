import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { Calendar, MapPin, Music, Ticket, Heart, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UserTicket {
  id: string;
  event_id: string;
  tier: string;
  price: number;
  status: string;
  created_at: string;
  events: {
    title: string;
    date: string;
    venue: string;
    flyer_url: string;
  };
}

interface SavedSet {
  id: string;
  title: string;
  artist: string;
  youtube_url: string | null;
  soundcloud_url: string | null;
  events: {
    title: string;
    flyer_url: string;
  };
}

const DashboardPage = () => {
  const { user, signOut } = useAuth();
  const [tickets, setTickets] = useState<UserTicket[]>([]);
  const [savedSets, setSavedSets] = useState<SavedSet[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('tickets');

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      // Fetch user tickets
      const { data: ticketsData } = await supabase
        .from('tickets')
        .select(`
          *,
          events (title, date, venue, flyer_url)
        `)
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (ticketsData) {
        setTickets(ticketsData);
      }

      // For now, we'll use mock data for saved sets since the feature isn't fully implemented
      setSavedSets([]);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="alcatraz-pulse">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="alcatraz-title text-white mb-2">
                WELCOME BACK
              </h1>
              <p className="alcatraz-body text-white/70 text-lg">
                {user?.email}
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/tickets"
                className="alcatraz-button bg-red-600 hover:bg-red-700 text-white px-6 py-3 alcatraz-subheading text-sm transition-all duration-300"
              >
                BUY TICKETS
              </Link>
              <button
                onClick={handleSignOut}
                className="alcatraz-button border border-white/20 text-white hover:bg-white hover:text-black px-6 py-3 alcatraz-subheading text-sm transition-all duration-300"
              >
                SIGN OUT
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex gap-8 border-b border-white/20">
            <button
              onClick={() => setActiveTab('tickets')}
              className={`pb-4 alcatraz-subheading text-sm transition-all duration-300 ${
                activeTab === 'tickets' 
                  ? 'text-red-500 border-b-2 border-red-500' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Ticket className="inline w-4 h-4 mr-2" />
              MY TICKETS
            </button>
            <button
              onClick={() => setActiveTab('sets')}
              className={`pb-4 alcatraz-subheading text-sm transition-all duration-300 ${
                activeTab === 'sets' 
                  ? 'text-red-500 border-b-2 border-red-500' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Heart className="inline w-4 h-4 mr-2" />
              SAVED SETS
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`pb-4 alcatraz-subheading text-sm transition-all duration-300 ${
                activeTab === 'profile' 
                  ? 'text-red-500 border-b-2 border-red-500' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Settings className="inline w-4 h-4 mr-2" />
              PROFILE
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'tickets' && (
          <div>
            <h2 className="alcatraz-subheading text-xl text-white mb-8">
              YOUR TICKETS
            </h2>
            
            {tickets.length === 0 ? (
              <div className="alcatraz-card rounded-lg p-12 text-center">
                <Ticket className="w-16 h-16 text-white/30 mx-auto mb-6" />
                <h3 className="alcatraz-subheading text-white mb-4">
                  NO TICKETS YET
                </h3>
                <p className="alcatraz-body text-white/70 mb-8">
                  You haven't purchased any tickets yet. Get your tickets for DRYVE 001 now!
                </p>
                <Link
                  to="/tickets"
                  className="alcatraz-button bg-red-600 hover:bg-red-700 text-white px-8 py-4 alcatraz-subheading transition-all duration-300"
                >
                  BUY TICKETS
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="alcatraz-card alcatraz-hover rounded-lg p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden alcatraz-image-hover">
                        <img 
                          src={ticket.events.flyer_url} 
                          alt={ticket.events.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="alcatraz-subheading text-white mb-2">
                              {ticket.events.title}
                            </h3>
                            <div className="space-y-2 text-white/70">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-red-500" />
                                <span className="alcatraz-body text-sm">
                                  {new Date(ticket.events.date).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-red-500" />
                                <span className="alcatraz-body text-sm">
                                  {ticket.events.venue}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="alcatraz-subheading text-red-500 mb-1">
                              {ticket.tier.toUpperCase()}
                            </div>
                            <div className="alcatraz-body text-white text-lg font-bold">
                              ${ticket.price}
                            </div>
                            <div className={`text-xs px-2 py-1 rounded ${
                              ticket.status === 'confirmed' 
                                ? 'bg-green-600/20 text-green-400' 
                                : 'bg-yellow-600/20 text-yellow-400'
                            }`}>
                              {ticket.status.toUpperCase()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'sets' && (
          <div>
            <h2 className="alcatraz-subheading text-xl text-white mb-8">
              SAVED SETS
            </h2>
            
            <div className="alcatraz-card rounded-lg p-12 text-center">
              <Heart className="w-16 h-16 text-white/30 mx-auto mb-6" />
              <h3 className="alcatraz-subheading text-white mb-4">
                NO SAVED SETS YET
              </h3>
              <p className="alcatraz-body text-white/70 mb-8">
                Start building your collection by saving sets from past DRYVE events.
              </p>
              <Link
                to="/sets"
                className="alcatraz-button bg-red-600 hover:bg-red-700 text-white px-8 py-4 alcatraz-subheading transition-all duration-300"
              >
                EXPLORE SETS
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <h2 className="alcatraz-subheading text-xl text-white mb-8">
              PROFILE SETTINGS
            </h2>
            
            <div className="alcatraz-card rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <label className="block alcatraz-subheading text-sm text-white mb-3">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white/70 cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label className="block alcatraz-subheading text-sm text-white mb-3">
                    MEMBER SINCE
                  </label>
                  <input
                    type="text"
                    value={user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                    disabled
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white/70 cursor-not-allowed"
                  />
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h3 className="alcatraz-subheading text-white mb-4">
                    ACCOUNT ACTIONS
                  </h3>
                  <div className="space-y-4">
                    <button className="alcatraz-button border border-white/20 text-white hover:bg-white hover:text-black px-6 py-3 alcatraz-subheading text-sm transition-all duration-300">
                      CHANGE PASSWORD
                    </button>
                    <button className="alcatraz-button border border-red-600/50 text-red-400 hover:bg-red-600 hover:text-white px-6 py-3 alcatraz-subheading text-sm transition-all duration-300">
                      DELETE ACCOUNT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;