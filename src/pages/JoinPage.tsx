import React, { useState } from 'react';
import { Mail, MapPin, Gift, Music, Users, Zap, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const JoinPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { signIn, signUp, signInWithGoogle, user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) throw error;
      } else {
        const { error } = await signUp(email, password, fullName, city);
        if (error) throw error;
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const { error } = await signInWithGoogle();
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'PRESALE & EARLY BIRD ACCESS',
      description: 'Get first access to tickets before they go public, plus exclusive early bird pricing.'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'NEWS ABOUT EVENTS NEAR YOU',
      description: 'Stay updated on DRYVE events in your city and discover new underground venues.'
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'APPAREL DISCOUNTS & EXCLUSIVES',
      description: 'Member-only merchandise drops, exclusive designs, and special pricing on DRYVE gear.'
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: 'SAVE YOUR FAVOURITE SETS',
      description: 'Create your personal collection of DRYVE sets and get notified when new ones drop.'
    }
  ];

  if (user) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="alcatraz-title text-white mb-6">
            WELCOME TO DRYVE
          </h1>
          <p className="alcatraz-body text-white/80 mb-8">
            You're now part of the community! Access your dashboard to manage your tickets and saved sets.
          </p>
          <Link
            to="/dashboard"
            className="alcatraz-button bg-red-600 hover:bg-red-700 text-white px-8 py-4 alcatraz-subheading transition-all duration-300"
          >
            GO TO DASHBOARD
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="alcatraz-display text-white mb-6 animate-alcatraz-glow mobile-heading-scale">
            JOIN THE DRYVE
          </h1>
          <h2 className="alcatraz-title text-red-500 mb-8">
            COMMUNITY
          </h2>
          <p className="alcatraz-body text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto">
            Become part of Montreal's most exclusive underground music community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Benefits */}
          <div className="animate-alcatraz-slide-up">
            <h3 className="alcatraz-subheading text-xl text-white mb-10">
              MEMBERS GET:
            </h3>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="alcatraz-card alcatraz-hover rounded-lg p-6 flex gap-6"
                >
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="alcatraz-subheading text-white mb-3 text-sm">
                      {benefit.title}
                    </h4>
                    <p className="alcatraz-body text-white/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Auth Form */}
          <div className="alcatraz-card rounded-lg p-8 lg:p-10 animate-alcatraz-fade-in">
            <div className="mb-8">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 alcatraz-subheading text-sm transition-all duration-300 ${
                    !isLogin ? 'text-red-500 border-b-2 border-red-500' : 'text-white/60 hover:text-white'
                  }`}
                >
                  SIGN UP
                </button>
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 alcatraz-subheading text-sm transition-all duration-300 ${
                    isLogin ? 'text-red-500 border-b-2 border-red-500' : 'text-white/60 hover:text-white'
                  }`}
                >
                  SIGN IN
                </button>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-600/50 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="fullName" className="block alcatraz-subheading text-sm text-white mb-3">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-white/50 alcatraz-focus transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block alcatraz-subheading text-sm text-white mb-3">
                  EMAIL ADDRESS *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder-white/50 alcatraz-focus transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block alcatraz-subheading text-sm text-white mb-3">
                  PASSWORD *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 pr-12 py-4 text-white placeholder-white/50 alcatraz-focus transition-colors duration-300"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="city" className="block alcatraz-subheading text-sm text-white mb-3">
                    CITY (OPTIONAL)
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder-white/50 alcatraz-focus transition-colors duration-300"
                      placeholder="Montreal, QC"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !email || !password}
                className="w-full alcatraz-button bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white py-4 px-6 alcatraz-subheading transition-all duration-300 rounded-lg disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {isLogin ? 'SIGNING IN...' : 'JOINING...'}
                  </>
                ) : (
                  isLogin ? 'SIGN IN' : 'JOIN THE COMMUNITY'
                )}
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-black text-white/60 alcatraz-body">OR</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full alcatraz-button bg-white text-black hover:bg-gray-100 py-4 px-6 alcatraz-subheading transition-all duration-300 rounded-lg disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                CONTINUE WITH GOOGLE
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="alcatraz-body text-xs text-white/50 text-center leading-relaxed">
                By joining, you agree to receive emails about DRYVE events and updates. 
                You can unsubscribe at any time. We respect your privacy and will never 
                share your information with third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-24 lg:mt-32">
          <div className="alcatraz-card rounded-lg p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="group">
                <div className="alcatraz-display text-red-500 mb-4 group-hover:text-glow transition-all duration-300">
                  500+
                </div>
                <div className="alcatraz-subheading text-white/80">
                  COMMUNITY MEMBERS
                </div>
              </div>
              <div className="group">
                <div className="alcatraz-display text-red-500 mb-4 group-hover:text-glow transition-all duration-300">
                  1
                </div>
                <div className="alcatraz-subheading text-white/80">
                  EVENTS PLANNED
                </div>
              </div>
              <div className="group">
                <div className="alcatraz-display text-red-500 mb-4 group-hover:text-glow transition-all duration-300">
                  24H
                </div>
                <div className="alcatraz-subheading text-white/80">
                  EARLY ACCESS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;