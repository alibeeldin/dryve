import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Music, Zap, Volume2, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [glitchText, setGlitchText] = useState('WE DON\'T THROW PARTIES.');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'events', 'gallery', 'info', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const glitchTexts = [
      'WE DON\'T THROW PARTIES.',
      'WE DR0P M1SS10NS.',
      'WE DON\'T THROW PARTIES.',
      'W3 D0N\'T THR0W P4RT13S.'
    ];
    
    const interval = setInterval(() => {
      setGlitchText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = sectionId === 'home' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const events = [
    {
      id: 1,
      date: 'TBA',
      name: 'MISSION 001',
      tags: ['#BaileFunk', '#Warehouse', '#18+'],
      location: 'Secret Favela Location — MTL',
      status: 'DROP WHEN ?',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      date: 'TBA',
      name: 'BASS TEMPLE',
      tags: ['#JerseyClub', '#Underground', '#18+'],
      location: 'Undisclosed Bunker — MTL',
      status: 'DROP WHEN ?',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      date: 'TBA',
      name: 'FAVELA NIGHTS',
      tags: ['#BaileFunk', '#GhettoTech', '#18+'],
      location: 'Block Party Spot — MTL',
      status: 'DROP WHEN ?',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3062400/pexels-photo-3062400.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  return (
    <div className="bg-black text-cream min-h-screen font-bold overflow-x-hidden">
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0 grain-texture"></div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b-4 border-neon-blue shadow-neon' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-4xl font-black tracking-widest hover:text-neon-blue transition-all duration-300 transform hover:scale-110 hover:rotate-1"
                style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
              >
                DRYVE
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'events', label: 'EVENTS' },
                  { id: 'gallery', label: 'GALLERY' },
                  { id: 'info', label: 'INFO' },
                  { id: 'contact', label: 'CONTACT' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-lg font-black tracking-wider transition-all duration-300 relative transform hover:scale-110 hover:rotate-1 ${
                      activeSection === item.id
                        ? 'text-neon-blue border-2 border-neon-blue bg-neon-blue/10'
                        : 'text-cream hover:text-neon-blue border-2 border-transparent hover:border-neon-blue'
                    } rounded-none skew-x-[-5deg] hover:skew-x-0`}
                    style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-cream hover:text-neon-blue transition-colors duration-300 transform hover:scale-125"
              >
                {isMenuOpen ? <X size={32} strokeWidth={4} /> : <Menu size={32} strokeWidth={4} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/98 backdrop-blur-sm z-40 flex flex-col justify-center items-center">
            <div className="space-y-8">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'events', label: 'EVENTS' },
                { id: 'gallery', label: 'GALLERY' },
                { id: 'info', label: 'INFO' },
                { id: 'contact', label: 'CONTACT' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-4xl font-black tracking-wider text-cream hover:text-neon-blue transition-all duration-300 transform hover:scale-125 hover:rotate-2 border-4 border-transparent hover:border-neon-blue px-8 py-4 skew-x-[-10deg] hover:skew-x-0"
                  style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with glitch effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 glitch-bg"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="text-[20rem] font-black tracking-widest transform rotate-12" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
            DRYVE
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 glitch-text transform -skew-x-3" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
            {glitchText}
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-8 text-neon-blue transform skew-x-2" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
            WE DROP MISSIONS.
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-bold tracking-wide">
            Funk carioca. Jersey Club. Miami Bass.<br />
            <span className="text-neon-blue">Montreal's global underground.</span>
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-black border-4 border-neon-blue text-neon-blue px-12 py-6 text-2xl font-black tracking-widest transition-all duration-300 hover:bg-neon-blue hover:text-black transform hover:scale-110 hover:rotate-2 hover:shadow-neon-glow skew-x-[-5deg] hover:skew-x-0"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            SIGN UP FOR THE DROP
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 max-w-7xl mx-auto relative">
        <h2 className="text-6xl md:text-8xl font-black tracking-wider text-center mb-16 transform -skew-x-2 text-neon-blue" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
          NEXT DROP
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="group relative bg-gray-900 border-4 border-neon-blue overflow-hidden transition-all duration-300 hover:scale-105 hover:rotate-1 transform skew-y-1 hover:skew-y-0 vhs-effect"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 blur-sm group-hover:blur-none"
                />
                <div className="absolute inset-0 bg-neon-blue/20 mix-blend-multiply"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-neon-blue text-black px-4 py-2 font-black text-lg transform -skew-x-12" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                    {event.date}
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-black border-t-4 border-neon-blue">
                <h3 className="text-3xl font-black tracking-wider mb-4 transform -skew-x-2" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                  {event.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-sm px-3 py-1 bg-neon-blue text-black font-black transform skew-x-12"
                      style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-cream mb-6 font-bold text-lg">
                  {event.location}
                </div>
                
                <button className="w-full bg-transparent border-4 border-neon-blue text-neon-blue py-4 font-black text-xl tracking-wider transition-all duration-300 hover:bg-neon-blue hover:text-black transform hover:scale-105 skew-x-[-5deg] hover:skew-x-0" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                  {event.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black tracking-wider text-center mb-16 transform skew-x-2" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
          AFTERMATH
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden cursor-pointer border-4 border-neon-blue transition-all duration-300 hover:scale-105 hover:rotate-2 transform"
              style={{
                transform: `rotate(${Math.random() * 6 - 3}deg)`,
              }}
            >
              <img 
                src={image} 
                alt={`Aftermath ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-neon-blue/0 group-hover:bg-neon-blue/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black font-black text-2xl transform rotate-12" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                  DRYVE
                </div>
              </div>
              {/* Graffiti scribble overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M10,10 Q50,5 90,10 Q95,50 90,90 Q50,95 10,90 Q5,50 10,10" 
                        fill="none" 
                        stroke="#00BFFF" 
                        strokeWidth="2" 
                        className="animate-draw" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black tracking-wider text-center mb-16 transform -skew-x-2 text-neon-blue" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
          WHAT IS DRYVE?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-2xl leading-relaxed font-bold">
              Born in <span className="text-neon-blue font-black">Montreal</span>, raised on <span className="text-neon-blue font-black">funk carioca</span>.
            </p>
            <p className="text-xl leading-relaxed font-bold">
              DRYVE is a new kind of rave — <span className="text-neon-blue font-black">global, sweaty, and loud</span>.
            </p>
            <p className="text-lg leading-relaxed">
              We don't follow trends. We create movements. Every mission is a statement. 
              Every drop is a revolution. This is underground culture amplified.
            </p>
            <div className="border-l-8 border-neon-blue pl-6 py-4 bg-gray-900/50">
              <p className="text-xl font-black tracking-wide" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                "IF YOU KNOW, YOU KNOW."
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { emoji: '🇧🇷', genre: 'BAILE', desc: 'Street-shaking sound' },
              { emoji: '🌀', genre: 'JERSEY', desc: 'Chaotic bounce' },
              { emoji: '🚧', genre: 'GHETTO TECH', desc: 'Block party rhythm' },
              { emoji: '🔊', genre: 'MIAMI BASS', desc: 'Trunk-rattling beats' },
              { emoji: '⚡', genre: 'DRYVE', desc: 'If you know, you know' }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-6 p-6 bg-gray-900 border-4 border-neon-blue transform hover:scale-105 transition-all duration-300 skew-x-[-2deg] hover:skew-x-0"
              >
                <span className="text-4xl">{item.emoji}</span>
                <div>
                  <h3 className="font-black text-2xl text-neon-blue tracking-wider" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                    {item.genre}
                  </h3>
                  <p className="text-cream font-bold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 border-t-8 border-neon-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black tracking-wider text-center mb-16 transform skew-x-2" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
            JOIN THE MISSION
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="NAME"
                    className="w-full bg-black border-4 border-neon-blue px-6 py-4 text-cream placeholder-gray-400 focus:outline-none focus:bg-neon-blue focus:text-black transition-all duration-300 font-bold text-xl transform skew-x-[-2deg] focus:skew-x-0"
                    style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="w-full bg-black border-4 border-neon-blue px-6 py-4 text-cream placeholder-gray-400 focus:outline-none focus:bg-neon-blue focus:text-black transition-all duration-300 font-bold text-xl transform skew-x-[-2deg] focus:skew-x-0"
                    style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                  />
                </div>
                <div>
                  <textarea
                    rows={6}
                    placeholder="MESSAGE"
                    className="w-full bg-black border-4 border-neon-blue px-6 py-4 text-cream placeholder-gray-400 focus:outline-none focus:bg-neon-blue focus:text-black transition-all duration-300 resize-none font-bold text-xl transform skew-x-[-2deg] focus:skew-x-0"
                    style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-transparent border-4 border-neon-blue text-neon-blue py-6 font-black text-2xl tracking-wider transition-all duration-300 hover:bg-neon-blue hover:text-black transform hover:scale-105 skew-x-[-5deg] hover:skew-x-0"
                  style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                >
                  SEND TRANSMISSION
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="border-4 border-neon-blue p-8 bg-black transform -skew-y-1">
                <h3 className="text-3xl font-black tracking-wider mb-6 text-neon-blue" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                  CONNECT
                </h3>
                <div className="space-y-4">
                  <a 
                    href="https://instagram.com/dryvemtl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-cream hover:text-neon-blue transition-colors duration-300 text-xl font-bold"
                  >
                    <Instagram size={24} strokeWidth={3} />
                    <span>@dryvemtl</span>
                  </a>
                  <a 
                    href="mailto:hello@dryvemtl.com"
                    className="flex items-center space-x-4 text-cream hover:text-neon-blue transition-colors duration-300 text-xl font-bold"
                  >
                    <Volume2 size={24} strokeWidth={3} />
                    <span>hello@dryvemtl.com</span>
                  </a>
                </div>
              </div>
              
              <div className="border-4 border-neon-blue p-8 bg-black transform skew-y-1">
                <h3 className="text-3xl font-black tracking-wider mb-6 text-neon-blue" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                  LOCATION
                </h3>
                <p className="text-xl font-bold">
                  Montreal, QC<br />
                  <span className="text-neon-blue">Underground venues across the city</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t-4 border-neon-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-xl font-black tracking-wider" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
            DRYVE 2025 — <span className="text-neon-blue">BLDM STYLO</span>
          </p>
        </div>
        
        {/* Footer texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-neon-blue to-transparent transform skew-x-45"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;