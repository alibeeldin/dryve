import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Music, Users, Calendar, MapPin } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Alcatraz Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden alcatraz-hero-bg">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="alcatraz-video-bg"
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/image.jpg)' }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-alcatraz-fade-in">
            <h1 className="alcatraz-display text-white mb-6 animate-alcatraz-glow mobile-heading-scale">
              DRYVE 001
            </h1>
            
            <h2 className="alcatraz-title text-red-500 mb-8 mobile-text-scale">
              MONTREAL
            </h2>
            
            <p className="alcatraz-body text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide mb-12 max-w-3xl mx-auto">
              A CURATED UNDERGROUND CLUB EXPERIENCE
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/tickets"
                className="group alcatraz-button bg-red-600 hover:bg-red-700 text-white px-12 py-5 lg:px-16 lg:py-6 alcatraz-subheading text-lg lg:text-xl transition-all duration-300 flex items-center gap-4"
              >
                GET TICKETS
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/join"
                className="group alcatraz-button border-2 border-white text-white hover:bg-white hover:text-black px-12 py-5 lg:px-16 lg:py-6 alcatraz-subheading text-lg lg:text-xl transition-all duration-300"
              >
                JOIN COMMUNITY
              </Link>
            </div>
          </div>
        </div>

        {/* Event Info Bar */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="alcatraz-card rounded-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <Calendar className="w-4 h-4 text-red-500" />
                  <span className="alcatraz-body text-sm">AUG 1, 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="alcatraz-body text-sm">MONTREAL</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <Users className="w-4 h-4 text-red-500" />
                  <span className="alcatraz-body text-sm">230 CAPACITY</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <Music className="w-4 h-4 text-red-500" />
                  <span className="alcatraz-body text-sm">4 ARTISTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="alcatraz-title text-white mb-6 animate-alcatraz-slide-up">
              THE DRYVE EXPERIENCE
            </h2>
            <p className="alcatraz-body text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto">
              Where underground culture meets cutting-edge sound in Montreal's most exclusive venues
            </p>
          </div>

          <div className="alcatraz-grid">
            {/* Feature Card 1 */}
            <div className="alcatraz-card alcatraz-hover rounded-lg p-8 lg:p-10 group">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-500 transition-colors duration-300">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="alcatraz-subheading text-xl text-white mb-4">CURATED LINEUPS</h3>
              <p className="alcatraz-body text-white/70 leading-relaxed">
                Handpicked DJs and artists bringing the freshest underground sounds to Montreal's scene.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="alcatraz-card alcatraz-hover rounded-lg p-8 lg:p-10 group">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-500 transition-colors duration-300">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="alcatraz-subheading text-xl text-white mb-4">EXCLUSIVE ACCESS</h3>
              <p className="alcatraz-body text-white/70 leading-relaxed">
                Join our community for early ticket access, exclusive content, and member-only events.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="alcatraz-card alcatraz-hover rounded-lg p-8 lg:p-10 group">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-500 transition-colors duration-300">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="alcatraz-subheading text-xl text-white mb-4">PREMIUM VENUES</h3>
              <p className="alcatraz-body text-white/70 leading-relaxed">
                Carefully selected locations that enhance the music and create unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lineup Preview */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-red-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="alcatraz-title text-white mb-6">
              DRYVE 001 LINEUP
            </h2>
            <p className="alcatraz-body text-xl text-white/70">
              Four artists, one unforgettable night
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['DJ SHADOW MONTREAL', 'BASS COLLECTIVE', 'UNDERGROUND SOUNDS', 'SPECIAL GUESTS'].map((artist, index) => (
              <div key={index} className="alcatraz-card alcatraz-hover rounded-lg p-8 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="alcatraz-subheading text-white text-lg">
                    {artist.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="alcatraz-subheading text-white text-sm mb-2">
                  {artist}
                </h3>
                <div className="w-12 h-0.5 bg-red-500 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-red-900/30 via-black to-red-900/30">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="alcatraz-display text-white mb-8 animate-alcatraz-glow">
            READY TO DRYVE?
          </h2>
          <p className="alcatraz-body text-xl lg:text-2xl text-white/80 mb-12 lg:mb-16">
            Don't miss out on Montreal's most exclusive underground experience
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/tickets"
              className="alcatraz-button bg-red-600 hover:bg-red-700 text-white px-12 py-5 lg:px-16 lg:py-6 alcatraz-subheading text-lg lg:text-xl transition-all duration-300"
            >
              SECURE YOUR SPOT
            </Link>
            <Link
              to="/sets"
              className="alcatraz-button border-2 border-white text-white hover:bg-white hover:text-black px-12 py-5 lg:px-16 lg:py-6 alcatraz-subheading text-lg lg:text-xl transition-all duration-300"
            >
              EXPLORE SETS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;