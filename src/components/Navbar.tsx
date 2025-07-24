import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'EVENTS', path: '/tickets' },
    { name: 'SETS', path: '/sets' },
    { name: 'JOIN', path: '/join' },
  ];

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'alcatraz-nav-sticky' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="alcatraz-heading text-2xl lg:text-3xl text-white hover:text-red-500 transition-all duration-300 text-glow-white group-hover:text-glow">
              DRYVE
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`alcatraz-subheading text-sm lg:text-base transition-all duration-300 hover:text-red-500 relative group ${
                  location.pathname === link.path ? 'text-red-500 text-glow' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300"
                >
                  <User size={20} />
                  {isAdmin && <span className="text-xs bg-red-600 px-2 py-1 rounded">ADMIN</span>}
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 alcatraz-card rounded-lg py-2">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-white hover:text-red-500 transition-colors duration-300"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Dashboard
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-white hover:text-red-500 transition-colors duration-300"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Settings className="inline w-4 h-4 mr-2" />
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-white hover:text-red-500 transition-colors duration-300"
                    >
                      <LogOut className="inline w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/join"
                className="alcatraz-button bg-red-600 hover:bg-red-700 text-white px-6 py-2 alcatraz-subheading text-sm transition-all duration-300"
              >
                JOIN
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-red-500 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden alcatraz-nav-sticky`}>
        <div className="px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block alcatraz-subheading text-base transition-colors duration-300 hover:text-red-500 ${
                location.pathname === link.path ? 'text-red-500' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {user ? (
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-red-500 transition-colors duration-300 mb-2"
              >
                Dashboard
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-red-500 transition-colors duration-300 mb-2"
                >
                  Admin Panel
                </Link>
              )}
              <button
                onClick={handleSignOut}
                className="block text-white hover:text-red-500 transition-colors duration-300"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              to="/join"
              onClick={() => setIsOpen(false)}
              className="block alcatraz-button bg-red-600 hover:bg-red-700 text-white px-6 py-3 alcatraz-subheading text-center transition-all duration-300"
            >
              JOIN DRYVE
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;