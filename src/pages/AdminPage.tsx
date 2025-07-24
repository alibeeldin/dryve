import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Users, 
  Ticket, 
  Music, 
  Calendar,
  Download,
  Eye,
  Settings
} from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  capacity: number;
  status: string;
  ticket_tiers: any;
}

interface TicketSale {
  id: string;
  tier: string;
  price: number;
  status: string;
  created_at: string;
  profiles: {
    email: string;
    full_name: string;
  };
  events: {
    title: string;
  };
}

const AdminPage = () => {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState<Event[]>([]);
  const [tickets, setTickets] = useState<TicketSale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAdmin) {
      fetchAdminData();
    }
  }, [isAdmin]);

  const fetchAdminData = async () => {
    try {
      // Fetch events
      const { data: eventsData } = await supabase
        .from('events')
        .select('*')
        .order('created_at', { ascending: false });

      if (eventsData) {
        setEvents(eventsData);
      }

      // Fetch ticket sales
      const { data: ticketsData } = await supabase
        .from('tickets')
        .select(`
          *,
          profiles (email, full_name),
          events (title)
        `)
        .order('created_at', { ascending: false });

      if (ticketsData) {
        setTickets(ticketsData);
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportGuestList = () => {
    const csvContent = [
      ['Event', 'Name', 'Email', 'Tier', 'Price', 'Status', 'Purchase Date'],
      ...tickets.map(ticket => [
        ticket.events.title,
        ticket.profiles.full_name || 'N/A',
        ticket.profiles.email,
        ticket.tier,
        ticket.price,
        ticket.status,
        new Date(ticket.created_at).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dryve-guest-list.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="alcatraz-title text-white mb-4">
            ACCESS DENIED
          </h1>
          <p className="alcatraz-body text-white/70">
            You don't have permission to access the admin panel.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="alcatraz-pulse">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <Settings className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="alcatraz-title text-white mb-2">
            ADMIN PANEL
          </h1>
          <p className="alcatraz-body text-white/70 text-lg">
            Manage events, tickets, and community
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="alcatraz-card rounded-lg p-6 text-center">
            <Calendar className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <div className="alcatraz-subheading text-2xl text-white mb-2">
              {events.length}
            </div>
            <div className="alcatraz-body text-white/70 text-sm">
              TOTAL EVENTS
            </div>
          </div>
          
          <div className="alcatraz-card rounded-lg p-6 text-center">
            <Ticket className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <div className="alcatraz-subheading text-2xl text-white mb-2">
              {tickets.length}
            </div>
            <div className="alcatraz-body text-white/70 text-sm">
              TICKETS SOLD
            </div>
          </div>
          
          <div className="alcatraz-card rounded-lg p-6 text-center">
            <Users className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <div className="alcatraz-subheading text-2xl text-white mb-2">
              {new Set(tickets.map(t => t.profiles.email)).size}
            </div>
            <div className="alcatraz-body text-white/70 text-sm">
              UNIQUE CUSTOMERS
            </div>
          </div>
          
          <div className="alcatraz-card rounded-lg p-6 text-center">
            <Music className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <div className="alcatraz-subheading text-2xl text-white mb-2">
              ${tickets.reduce((sum, ticket) => sum + ticket.price, 0).toLocaleString()}
            </div>
            <div className="alcatraz-body text-white/70 text-sm">
              TOTAL REVENUE
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex gap-8 border-b border-white/20">
            <button
              onClick={() => setActiveTab('events')}
              className={`pb-4 alcatraz-subheading text-sm transition-all duration-300 ${
                activeTab === 'events' 
                  ? 'text-red-500 border-b-2 border-red-500' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Calendar className="inline w-4 h-4 mr-2" />
              EVENTS
            </button>
            <button
              onClick={() => setActiveTab('tickets')}
              className={`pb-4 alcatraz-subheading text-sm transition-all duration-300 ${
                activeTab === 'tickets' 
                  ? 'text-red-500 border-b-2 border-red-500' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Ticket className="inline w-4 h-4 mr-2" />
              TICKET SALES
            </button>
            <button
              onClick={() => setActiveTab('sets')}
              className={`pb-4 alcatraz-subheading text-sm transition-all duration-300 ${
                activeTab === 'sets' 
                  ? 'text-red-500 border-b-2 border-red-500' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Music className="inline w-4 h-4 mr-2" />
              SETS
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'events' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="alcatraz-subheading text-xl text-white">
                MANAGE EVENTS
              </h2>
              <button className="alcatraz-button bg-red-600 hover:bg-red-700 text-white px-6 py-3 alcatraz-subheading text-sm transition-all duration-300 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                CREATE EVENT
              </button>
            </div>

            <div className="space-y-6">
              {events.map((event) => (
                <div key={event.id} className="alcatraz-card rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="alcatraz-subheading text-white mb-2">
                        {event.title}
                      </h3>
                      <div className="space-y-1 text-white/70">
                        <p className="alcatraz-body text-sm">
                          {new Date(event.date).toLocaleDateString()} • {event.venue}
                        </p>
                        <p className="alcatraz-body text-sm">
                          Capacity: {event.capacity} • Status: {event.status.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="alcatraz-button border border-white/20 text-white hover:bg-white hover:text-black px-4 py-2 text-sm transition-all duration-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="alcatraz-button border border-white/20 text-white hover:bg-white hover:text-black px-4 py-2 text-sm transition-all duration-300">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="alcatraz-button border border-red-600/50 text-red-400 hover:bg-red-600 hover:text-white px-4 py-2 text-sm transition-all duration-300">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tickets' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="alcatraz-subheading text-xl text-white">
                TICKET SALES
              </h2>
              <button 
                onClick={exportGuestList}
                className="alcatraz-button bg-red-600 hover:bg-red-700 text-white px-6 py-3 alcatraz-subheading text-sm transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                EXPORT CSV
              </button>
            </div>

            <div className="alcatraz-card rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left p-4 alcatraz-subheading text-sm text-white">EVENT</th>
                      <th className="text-left p-4 alcatraz-subheading text-sm text-white">CUSTOMER</th>
                      <th className="text-left p-4 alcatraz-subheading text-sm text-white">TIER</th>
                      <th className="text-left p-4 alcatraz-subheading text-sm text-white">PRICE</th>
                      <th className="text-left p-4 alcatraz-subheading text-sm text-white">STATUS</th>
                      <th className="text-left p-4 alcatraz-subheading text-sm text-white">DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket) => (
                      <tr key={ticket.id} className="border-t border-white/10">
                        <td className="p-4 alcatraz-body text-white text-sm">
                          {ticket.events.title}
                        </td>
                        <td className="p-4 alcatraz-body text-white text-sm">
                          <div>
                            <div>{ticket.profiles.full_name || 'N/A'}</div>
                            <div className="text-white/60 text-xs">{ticket.profiles.email}</div>
                          </div>
                        </td>
                        <td className="p-4 alcatraz-body text-white text-sm">
                          {ticket.tier.toUpperCase()}
                        </td>
                        <td className="p-4 alcatraz-body text-white text-sm">
                          ${ticket.price}
                        </td>
                        <td className="p-4">
                          <span className={`text-xs px-2 py-1 rounded ${
                            ticket.status === 'confirmed' 
                              ? 'bg-green-600/20 text-green-400' 
                              : 'bg-yellow-600/20 text-yellow-400'
                          }`}>
                            {ticket.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="p-4 alcatraz-body text-white/70 text-sm">
                          {new Date(ticket.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sets' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="alcatraz-subheading text-xl text-white">
                MANAGE SETS
              </h2>
              <button className="alcatraz-button bg-red-600 hover:bg-red-700 text-white px-6 py-3 alcatraz-subheading text-sm transition-all duration-300 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                ADD SET
              </button>
            </div>

            <div className="alcatraz-card rounded-lg p-12 text-center">
              <Music className="w-16 h-16 text-white/30 mx-auto mb-6" />
              <h3 className="alcatraz-subheading text-white mb-4">
                NO SETS UPLOADED YET
              </h3>
              <p className="alcatraz-body text-white/70 mb-8">
                Upload sets from past events to build your archive.
              </p>
              <button className="alcatraz-button bg-red-600 hover:bg-red-700 text-white px-8 py-4 alcatraz-subheading transition-all duration-300">
                UPLOAD FIRST SET
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;