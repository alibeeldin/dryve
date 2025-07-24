import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, CreditCard, Smartphone } from 'lucide-react';

const TicketsPage = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const ticketTiers = [
    {
      id: 'early-bird',
      name: 'EARLY BIRD',
      price: 35,
      originalPrice: 45,
      available: 12,
      total: 50,
      features: ['Priority Entry', 'Welcome Drink', 'Digital Ticket'],
      popular: false,
    },
    {
      id: 'general',
      name: 'GENERAL ADMISSION',
      price: 45,
      originalPrice: null,
      available: 87,
      total: 150,
      features: ['Standard Entry', 'Digital Ticket', 'Event Access'],
      popular: true,
    },
    {
      id: 'last-release',
      name: 'LAST RELEASE',
      price: 55,
      originalPrice: null,
      available: 23,
      total: 30,
      features: ['Guaranteed Entry', 'Digital Ticket', 'Late Entry Access'],
      popular: false,
    },
  ];

  const handleBuyNow = (tierId: string) => {
    setSelectedTier(tierId);
    setShowCheckout(true);
  };

  const CheckoutModal = () => {
    const selectedTicket = ticketTiers.find(tier => tier.id === selectedTier);
    if (!selectedTicket) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-black border border-white/20 rounded-lg max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">SECURE CHECKOUT</h3>
            <button 
              onClick={() => setShowCheckout(false)}
              className="text-white/60 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          <div className="mb-6 p-4 bg-white/5 rounded border border-white/10">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-white">{selectedTicket.name}</span>
              <span className="font-bold text-red-500">${selectedTicket.price}</span>
            </div>
            <p className="text-sm text-white/70">DRYVE 001 - August 1, 2025</p>
          </div>

          <div className="space-y-4 mb-6">
            <button className="w-full bg-white text-black py-3 px-4 rounded font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5" />
              Pay with Apple Pay
            </button>
            
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              Pay with PayPal
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-white/60">OR</span>
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:border-red-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Card number"
                className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:border-red-500 focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:border-red-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded font-bold tracking-wide transition-colors duration-300">
              COMPLETE PURCHASE - ${selectedTicket.price}
            </button>
          </div>

          <p className="text-xs text-white/50 text-center">
            Secure checkout powered by Stripe. Your payment information is encrypted and secure.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Event Header */}
        <div className="mb-12 lg:mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-black tracking-wider text-white mb-4">
                DRYVE 001
              </h1>
              <p className="text-xl lg:text-2xl text-red-500 font-bold mb-6">
                MONTREAL UNDERGROUND
              </p>
              
              <div className="space-y-4 text-white/80">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span className="font-medium">FRIDAY, AUGUST 1, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="font-medium">10:00 PM - 4:00 AM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="font-medium">VENUE TBA - MONTREAL, QC</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-red-500" />
                  <span className="font-medium">LIMITED CAPACITY - 230 PEOPLE</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <img 
                  src="/image.png" 
                  alt="DRYVE 001 Flyer"
                  className="w-full rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Tiers */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-black tracking-wider text-white mb-8 text-center">
            CHOOSE YOUR EXPERIENCE
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {ticketTiers.map((tier) => (
              <div 
                key={tier.id}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-lg p-6 lg:p-8 transition-all duration-300 hover:scale-105 modern-card ${
                  tier.popular 
                    ? 'border-red-500 bg-red-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1 text-sm font-bold tracking-wide rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold tracking-wide text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-3xl font-black text-red-500">
                      ${tier.price}
                    </span>
                    {tier.originalPrice && (
                      <span className="text-lg text-white/50 line-through">
                        ${tier.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-white/70">
                    {tier.available} of {tier.total} remaining
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleBuyNow(tier.id)}
                  className={`w-full py-3 px-4 font-bold tracking-wide transition-all duration-300 rounded ${
                    tier.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white hover:scale-105'
                      : 'border-2 border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  BUY NOW
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Event Info */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 lg:p-8">
          <h3 className="text-xl font-bold tracking-wide text-white mb-4">
            EVENT INFORMATION
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-white/80">
            <div>
              <h4 className="font-semibold text-white mb-2">LINEUP</h4>
              <ul className="space-y-1 text-sm">
                <li>• DJ SHADOW MONTREAL</li>
                <li>• BASS COLLECTIVE</li>
                <li>• UNDERGROUND SOUNDS</li>
                <li>• + SPECIAL GUESTS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">IMPORTANT NOTES</h4>
              <ul className="space-y-1 text-sm">
                <li>• 18+ Event with Valid ID Required</li>
                <li>• No Refunds or Exchanges</li>
                <li>• Venue Address Sent 24h Before Event</li>
                <li>• Dress Code: Underground Chic</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && <CheckoutModal />}
    </div>
  );
};

export default TicketsPage;