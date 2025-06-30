import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, Users, Mail, Instagram, ExternalLink, Sparkles, Heart, Star, Globe, Flame, Zap, Music, PartyPopper, Crown, ArrowRight, Play } from 'lucide-react';

type Language = 'en' | 'fr';

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Gli Fiori Logo Component
const GliFioriLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 631.63 488.9" className={className} fill="currentColor">
    <path d="m566.78,488.9h-124.49c-.08-.25-.16-.5-.25-.74,1.94-.64,3.85-1.47,5.84-1.88,6.59-1.36,11.65-4.8,16.5-9.54,6.88-6.73,9.5-14.74,9.54-23.79.15-34.66.11-69.33-.01-103.99,0-2.24-1.27-4.48-1.94-6.71-2.15,1.19-4.41,2.22-6.43,3.59-5.46,3.71-10.4,8.53-16.32,11.15-13.98,6.18-28.91,7.21-44.07,5.71-24.59-2.43-47.2-10.37-66.68-25.64-16.68-13.08-30.11-28.96-38.49-48.88-7.91-18.8-12.73-38.07-12.24-58.59.42-17.52,4.05-34.3,11.49-50.14,8.99-19.16,20.63-36.2,37.12-50.11,22.22-18.74,48.01-28.64,76.17-32.33,17.32-2.27,35.04-1.67,52.08,3.14,12.06,3.41,23.79,8,35.67,12.06,3.06,1.05,4.3,3.03,4.29,6.4-.03,11.83.31,23.66.3,35.49,0,1.54-1.21,3.08-1.86,4.62-1.23-1.13-2.84-2.04-3.63-3.43-3.64-6.36-6.55-13.18-10.63-19.22-10.04-14.86-23.74-24.69-41.38-29.1-10.63-2.66-21.25-2.54-31.7-.49-9.12,1.79-16.75,7.21-23.37,13.69-17.41,17.04-25,38.63-29.22,62.04-3.84,21.31-4.71,42.68-3.42,64.19.63,10.6,1.22,21.27,2.97,31.72,1.39,8.3,3.91,16.55,7,24.39,3.71,9.4,8.2,18.54,13.02,27.43,6.28,11.57,15.99,19.08,28.73,23.08,16,5.03,36.03-.75,46.86-13.46,8.66-10.17,11.86-22.08,13.14-34.85.61-6.13,1.46-12.28,1.47-18.42.01-7.94-.07-15.98-1.28-23.8-1.34-8.65-7.71-14.34-15.05-18.12-5.39-2.77-11.65-3.84-17.5-5.71-1.86-.59-3.68-1.32-5.69-3.2,1.32-.46,2.64-1.31,3.96-1.32,63.99-.15,127.98-.24,191.97-.31.65,0,1.3.17,2.37.32v46.29c-.38.15-.76.31-1.14.46-1.03-1.15-2.17-2.22-3.05-3.47-.86-1.22-1.48-2.61-2.15-3.94-11.18-22.1-29.81-31.4-53.83-30.6-6.68.22-13.68,1.28-19.87,3.67-11.52,4.44-17.65,12.93-17.52,26.1.24,25.32-.33,50.66-.56,75.99-.06,6.33.7,7.13,7.15,7.22,7.33.11,14.66.16,22,.22,14.6.13,23.96-7.21,27.86-21.43.84-3.05.51-7.17,5.4-8.55v69.33c-.45.26-.9.51-1.35.77-.86-1.34-1.86-2.62-2.54-4.05-2.68-5.67-4.7-11.75-8.02-17.01-4.55-7.18-11.41-10.73-20.3-10.11-8.14.57-16.32.65-24.48.81-3.49.07-5.14,1.41-5.14,5.09.02,29.66-.35,59.33.08,88.99.13,9.09,6.09,15.85,13.83,20.1,5.31,2.92,11.4,4.41,17.13,6.58.7.27,1.32.76,1.98,1.15-.11.38-.21.75-.32,1.13Z"/>
    <path d="m169.51,134.51c8.02-.72,16.04-1.98,24.07-2.04,15.23-.11,29.64,3.17,42.57,11.87,9.65,6.49,15.76,15.17,17.65,26.62.34,2.08.3,4.98-.88,6.43-9.33,11.43-10.59,24.78-9.91,38.69.04.83,0,1.67-.06,2.5-.02.3-.23.58-.54,1.34-3.94-3.06-7.92-5.86-11.57-9.05-5.8-5.07-12.54-6.51-19.97-6.04-4.48.28-8.99.27-13.46.7-1.23.12-2.35,1.37-3.52,2.1,1.13.91,2.13,2.32,3.4,2.66,16.01,4.2,28.86,17.62,26.58,35.59-.43,3.38-1.89,6.71-3.29,9.88-9.72,22.05-7.68,43.86,1.94,65.17,2.53,5.6,7.26,10.23,11.07,15.24,4.55,5.97,7.52,12.46,7.44,20.13-.03,3.14-1.63,4.13-4.62,4.58-10.9,1.66-18.79-4.67-26.81-10.09-26.23-17.73-42.95-43.3-56.42-71.11-5.38-11.1-10.74-22.35-12.59-34.96-2.41-16.35.35-30.84,12.75-42.43,5.43-5.08,11.23-9.86,17.33-14.11,10.9-7.61,16.7-21.35,12.92-34.17-1.11-3.77-4.26-7.03-6.84-10.24-2.16-2.69-4.85-4.97-7.3-7.43.02-.6.04-1.21.06-1.81Z"/>
    <path d="m452.67,372.23c-1,4.28-1.27,8.02-2.72,11.23-8.49,18.74-20.92,33.62-40.02,42.79-19.49,9.36-39.71,14.54-61.26,13.6-8.09-.35-16.1-2.34-24.15-3.61-5.5-.87-11.09-3.12-15.75,2.55-.52.63-4.52-.47-5.85-1.82-8.75-8.86-17.88-17.47-25.56-27.21-6.86-8.71-12.41-18.54-17.71-28.33-2.42-4.47-3.37-9.95-4-15.1-.79-6.49,3.57-9.8,9.98-7.55,5.92,2.08,11.33,5.61,17.26,7.66,9.84,3.41,19.81,6.61,29.93,9.01,8.83,2.09,18.47,1.58,26.79,4.75,7.85,2.99,14.41,9.32,21.6,14.1,1.68,1.12,3.58,1.91,5.37,2.85.46-1.99,1.38-4,1.28-5.96-.35-7.45-.48-7.49,7.03-7.62,5.49-.1,11.11.7,16.44-.23,10.1-1.76,19.99-4.66,30.04-6.72,8.45-1.73,17.01-3,25.53-4.37,1.58-.25,3.23-.04,5.75-.04Z"/>
    <path d="m269.03,0c14.5,18.73,32.54,32.01,43.76,51.4,9.09,15.71,14.07,32.21,13.71,50.36-.06,2.88-.39,5.28-3.85,4.86-6.73-.83-10.41,3.51-13.95,7.94-5.18,6.49-10.13,13.16-15.2,19.73-1.29,1.67-2.67,3.28-4.97,6.08,0-3.12-.31-4.9.05-6.54,3.57-16.47,3.38-33.17,1.42-49.67-1.34-11.26-5-22.26-7.88-33.32-.28-1.08-2.33-1.7-3.56-2.53-.57,1.41-1.76,2.89-1.59,4.21.67,5.28,1.75,10.51,2.7,15.75,4.22,23.31,3.34,46.77,1.89,70.24-.19,3.12-.98,6.25-1.86,9.27-1.37,4.7-3.67,5.73-7.02,2.31-6.82-6.97-13.65-14.1-19.3-22-12.29-17.18-16.69-36.93-15.2-57.71.92-12.9,3.12-25.86,10.09-37.26,6.58-10.75,13.38-21.37,20.76-33.13Z"/>
    <path d="m120.8,235.17c-10.86,17.24-23.49,31.83-43.82,36.54-10.13,2.35-20.66,1.14-30.33-3.23-13.54-6.12-26.85-12.77-36.64-24.47-3.61-4.31-6.88-9.02-9.54-13.96-.93-1.74-.42-5.5.93-7.01,10.69-11.94,21.92-23.58,36.86-30.05,21.82-9.45,43.61-13.82,65.22,1.95,7.67,5.6,13.4,12.32,18.39,19.96,1.5,2.3,1.67,5.47,2.65,8.98-2.93.17-4.86.38-6.79.37-15.65-.07-31.3-.19-46.96-.29-1.17,0-2.43-.29-3.47.07-1.86.64-3.58,1.68-5.36,2.55,1.79,1.14,3.5,3.1,5.37,3.27,7.95.75,15.96.75,23.92,1.43,8.78.75,17.51,1.92,26.26,2.95.93.11,1.82.51,3.31.95Z"/>
    <path d="m171.87,321.91c3.83,4.89,7.68,9.77,11.48,14.69,9.05,11.72,19.33,22.09,32.95,28.4,8.61,3.99,17.81,3.39,26.95,2.07,1.4-.2,2.8-.49,3.15-.55,10.08,30.25,24.76,56.37,50.24,75.45,5.31,3.98,10.45,8.18,15.6,13.48-9.15.42-18.37,1.78-27.44,1.09-25.59-1.94-49.62-9.44-71.63-22.85-2.93-1.79-5.85-3.94-8.07-6.52-19.1-22.25-29.11-48.11-30.84-77.38-.54-9.07-2.31-18.08-3.52-27.11.38-.26.75-.51,1.13-.77Z"/>
    <path d="m89.31,102.62c8.44,2.35,16.57,4.5,24.63,6.9,4.94,1.47,9.72,3.45,14.65,4.95,14.73,4.48,26.32,13.5,35.57,25.43,6.68,8.62,9.79,18.81,9.48,29.81-.15,5.32-9.29,14.19-14.52,14.12-1.37-.02-3.11-1.27-4.01-2.46-8.25-10.86-17.32-21.26-24.07-33-3.31-5.76-8.58-8.98-12.02-14.12-.59-.88-2.54-.84-3.86-1.23-.04,1.63-.74,3.67-.03,4.84,4.7,7.65,9.76,15.08,14.6,22.65,5.02,7.85,10.16,15.64,14.79,23.72,2.88,5.02,4.58,9.91,1.16,16.26-3.7,6.89-14.55,8.82-20.11,3.15-10.72-10.9-23.03-19.44-35.98-27.32-1.64-1-2.76-3.74-3.11-5.84-3.14-19.25-2.28-38.45,1.14-57.59.55-3.07,1.02-6.15,1.7-10.27Z"/>
    <path d="m357.45,381.72c-4.43-2.8-8.79-5.72-13.3-8.39-9.91-5.87-21.11-5.38-32.02-6.24-23.92-1.9-41.67-14.26-55.81-32.78-4.2-5.5-9.11-10.65-12.29-16.7-3.97-7.56-7.89-15.65-9.29-23.94-2.2-13.05-2.41-26.45-3.2-39.71-.35-5.81-.12-11.66-.07-17.49.07-7.8-1.69-14.86-7.85-20.29,9.82,3.4,14.51,11.4,18.99,20,8.71,16.73,11.82,35.26,17.45,52.95,4.43,13.93,12.26,25.51,21.86,35.87,5.89,6.35,13.24,11.54,20.52,16.36,13.98,9.26,28.5,17.71,42.55,26.87,5.11,3.33,9.54,7.71,14.29,11.61-.61.63-1.22,1.26-1.83,1.89Z"/>
    <path d="m163.79,65.1c19.99-2.62,39.82-7.89,60.24-3.22,6.2,1.42,7.84,2.86,7.02,8.63-1.48,10.33.61,20.19,3.2,30.04.28,1.08.52,2.17.86,3.61-8.1-5.63-15.81-10.99-23.52-16.34-.68-.47-1.42-1.17-2.15-1.2-1.65-.06-3.32.23-4.97.38.55,1.43.69,3.3,1.7,4.21,6.05,5.41,11.99,11.04,18.56,15.77,11.24,8.09,18.48,19.45,26.37,30.32,4.75,6.54,9.36,13.17,13.3,20.6-1.75-1.31-3.62-2.49-5.23-3.96-9.34-8.55-19.24-16.2-30.44-22.35-9.49-5.21-19.4-7.12-29.8-5.93-9.39,1.07-14.16-3.21-18.94-10.8-9.67-15.35-14.18-32.03-16.2-49.77Z"/>
    <path d="m132.57,240.02c3.12,12.04,6.14,23.05,8.72,34.17.49,2.09-.14,5-1.34,6.81-3.28,4.96-7.23,9.47-10.69,14.32-.8,1.12-.7,2.89-1.02,4.36,1.64-.23,3.6.04,4.85-.78,3.75-2.45,7.24-5.29,10.78-8.04,2.49-1.94,4.43-1.75,6.13,1.05,4.31,7.09,8.83,14.06,12.92,21.28.56.99-.4,3.98-1.46,4.56-7.87,4.25-15.61,9.24-24.05,11.83-9.24,2.83-19.18,3.47-28.86,4.66-1.15.14-3.19-1.99-3.83-3.49-3.42-8.04-4.67-16.47-4.51-25.24.30-15.85,2.07-31.12,11.92-44.45,5.96-8.05,13.03-14.79,20.44-21.03Z"/>
    <path d="m431.64,86.3c-1.91.2-3.18.49-4.45.43-13.76-.63-27.19,1.65-40.62,4.3-3.96.78-8.23-.21-12.29.26-6.69.78-13.33,2.05-19.98,3.19-5.66.97-11.29,2.18-16.99,2.91-.91.12-2.71-1.62-3.01-2.78-1.97-7.73-3.79-15.52-5.29-23.35-.28-1.46.63-3.99,1.82-4.74,8.99-5.71,18.04-11.57,29.04-12.47,4.26-.35,8.7-.37,12.86.47,11.53,2.34,23.25,4.31,34.32,8.12,11.21,3.85,18.3,13.18,24.59,23.67Z"/>
    <path d="m374.32,48.78c20.32-6.66,40.43-10.82,60.71-.4,14.92,7.66,26.68,18.59,36.46,31.93,2.62,3.57,5,7.32,8.09,11.86-2.88-.34-4.63-.49-6.37-.75-10.02-1.5-20.05-2.91-30.04-4.62-1.9-.32-4.49-1.38-5.25-2.87-12.25-23.86-33.99-31.31-58.42-34.26-1.74-.21-3.45-.59-5.17-.89Z"/>
    <path d="m326.2,118.65c-5.57,5.22-10.66,9.96-15.71,14.73-19.7,18.65-31.4,41.83-38.16,67.75-1.15,4.42-2.74,7.93-6.69,10.97-5.45,4.2-9.86,9.75-15.33,14.39-.81-11.18-.62-21.94,3.15-32.41,5.6-15.52,16.26-27.06,28.05-38.17,10.96-10.33,20.92-21.79,30.72-33.28,3.83-4.5,7.48-6.15,13.97-3.99Z"/>
    <path d="m267.58,225.05c.91,9.98,1.34,19.11,2.69,28.11,1.03,6.85,2.54,13.79,5.05,20.21,3.45,8.84,1.99,12.07-8.77,20.39-1.89-5.9-3.93-11.4-5.39-17.06-1.94-7.5-3.01-15.24-5.21-22.65-1.96-6.61-1.75-12.23,3.1-17.57,3.08-3.38,5.51-7.35,8.53-11.44Z"/>
    <path d="m316.37,342.09c-19.95-8.29-35.87-21-46.07-40.89,2.71-2.95,5.59-6.08,9.48-10.3,8.86,20.15,21.52,36.48,36.59,51.2Z"/>
    <path d="m254.68,342.8c-34.7-15.22-41.23-56.12-29.2-82.63-2.38,31.86,6.48,59.7,29.2,82.63Z"/>
    <path d="m346.58,362.67c15.42,6.74,31.19,11.78,48.32,12.03-4.58,3-14.21,2.47-26.59,2.11-6.71-.2-10-2.54-21.74-14.14Z"/>
  </svg>
);

// Animated Text Component
const AnimatedText = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
      {children}
    </div>
  );
};

// Diagonal Stripe Pattern Component
const DiagonalStripes = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 ${className}`}>
    <div 
      className="w-full h-full opacity-20"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 20px,
          rgba(255,255,255,0.1) 20px,
          rgba(255,255,255,0.1) 40px
        )`
      }}
    />
  </div>
);

interface Content {
  en: {
    inauguralEvent: string;
    summerParty: string;
    hostedBy: string;
    heroDescription: string;
    fiveHours: string;
    exclusiveVenue: string;
    limitedTickets: string;
    ladiesPrice: string;
    menPrice: string;
    whatsIncluded: string;
    welcomeCocktail: string;
    premiumBar: string;
    lightAppetizers: string;
    liveEntertainment: string;
    secureSpot: string;
    ourStory: string;
    aboutDescription1: string;
    aboutDescription2: string;
    visitStore: string;
    reserveSpot: string;
    howToPurchase: string;
    dmInstagram: string;
    ageRestriction: string;
    detailsAfterPayment: string;
    groupDiscounts: string;
    close: string;
    dmNow: string;
    copyright: string;
    followJourney: string;
    premiumExperiences: string;
    montreal: string;
    founded: string;
    pricing: string;
    flowerQuote: string;
    boulevardSaintLaurent: string;
  };
  fr: {
    inauguralEvent: string;
    summerParty: string;
    hostedBy: string;
    heroDescription: string;
    fiveHours: string;
    exclusiveVenue: string;
    limitedTickets: string;
    ladiesPrice: string;
    menPrice: string;
    whatsIncluded: string;
    welcomeCocktail: string;
    premiumBar: string;
    lightAppetizers: string;
    liveEntertainment: string;
    secureSpot: string;
    ourStory: string;
    aboutDescription1: string;
    aboutDescription2: string;
    visitStore: string;
    reserveSpot: string;
    howToPurchase: string;
    dmInstagram: string;
    ageRestriction: string;
    detailsAfterPayment: string;
    groupDiscounts: string;
    close: string;
    dmNow: string;
    copyright: string;
    followJourney: string;
    premiumExperiences: string;
    montreal: string;
    founded: string;
    pricing: string;
    flowerQuote: string;
    boulevardSaintLaurent: string;
  };
}

const content: Content = {
  en: {
    inauguralEvent: "INAUGURAL EVENT",
    summerParty: "SUMMER PARTY",
    hostedBy: "Hosted by Gli Fiori",
    heroDescription: "The ultimate end-of-summer celebration for Montreal's CEGEP and university students. One last epic night before classes begin.",
    fiveHours: "Five Hours",
    exclusiveVenue: "Exclusive Venue",
    limitedTickets: "Limited Tickets",
    ladiesPrice: "Ladies - $15",
    menPrice: "Men - $30",
    whatsIncluded: "What's Included:",
    welcomeCocktail: "Welcome Cocktail",
    premiumBar: "Premium Bar",
    lightAppetizers: "Light Appetizers",
    liveEntertainment: "Live Entertainment",
    secureSpot: "SECURE YOUR SPOT",
    ourStory: "Our Story",
    aboutDescription1: "Gli Fiori started in 2024 organizing premium events across Montreal, bringing people together through our passion for excellence and community. What began with sports events has evolved into creating unforgettable experiences.",
    aboutDescription2: "Now we're bringing that same dedication to Montreal's nightlife scene. Our commitment to quality, attention to detail, and creating connections makes every Gli Fiori event something special.",
    visitStore: "Visit Our Instagram",
    reserveSpot: "Reserve Your Spot",
    howToPurchase: "How to Purchase Tickets:",
    dmInstagram: "DM @gli_fiori on Instagram for ticket details and purchase information",
    ageRestriction: "Event is 18+ only - ID required at entry",
    detailsAfterPayment: "Full venue details and event information will be disclosed after e-transfer completion",
    groupDiscounts: "Group discounts available through DMs",
    close: "Close",
    dmNow: "DM on Instagram",
    copyright: "© 2025 Gli Fiori - Montreal, QC",
    followJourney: "Follow Our Journey",
    premiumExperiences: "Premium Events & Unforgettable Nightlife Experiences",
    montreal: "Montreal",
    founded: "Founded",
    pricing: "Pricing",
    flowerQuote: "Every flower follows the sun; and so do we empower each other.",
    boulevardSaintLaurent: "Boulevard Saint-Laurent"
  },
  fr: {
    inauguralEvent: "ÉVÉNEMENT INAUGURAL",
    summerParty: "SUMMER PARTY",
    hostedBy: "Organisé par Gli Fiori",
    heroDescription: "La célébration de fin d'été ultime pour les étudiants CÉGEP et universitaires de Montréal. Une dernière soirée épique avant le début des cours.",
    fiveHours: "Cinq Heures",
    exclusiveVenue: "Lieu Exclusif",
    limitedTickets: "Billets Limités",
    ladiesPrice: "Dames - 15$",
    menPrice: "Hommes - 30$",
    whatsIncluded: "Ce qui est inclus:",
    welcomeCocktail: "Cocktail de Bienvenue",
    premiumBar: "Bar Premium",
    lightAppetizers: "Amuse-Bouches",
    liveEntertainment: "Divertissement Live",
    secureSpot: "RÉSERVEZ VOTRE PLACE",
    ourStory: "Notre Histoire",
    aboutDescription1: "Gli Fiori a commencé en 2024 en organisant des événements premium à travers Montréal, rassemblant les gens grâce à notre passion pour l'excellence et la communauté. Ce qui a commencé avec des événements sportifs a évolué vers la création d'expériences inoubliables.",
    aboutDescription2: "Maintenant, nous apportons cette même dévotion à la scène nocturne montréalaise. Notre engagement envers la qualité, l'attention aux détails et la création de connexions fait de chaque événement Gli Fiori quelque chose de spécial.",
    visitStore: "Visitez Notre Instagram",
    reserveSpot: "Réservez Votre Place",
    howToPurchase: "Comment acheter des billets:",
    dmInstagram: "Envoyez un DM à @gli_fiori sur Instagram pour les détails et informations d'achat",
    ageRestriction: "Événement 18+ seulement - ID requis à l'entrée",
    detailsAfterPayment: "Les détails complets du lieu et de l'événement seront divulgués après la completion du virement électronique",
    groupDiscounts: "Rabais de groupe disponibles par DM",
    close: "Fermer",
    dmNow: "DM sur Instagram",
    copyright: "© 2025 Gli Fiori - Montréal, QC",
    followJourney: "Suivez Notre Parcours",
    premiumExperiences: "Événements Premium & Expériences Nocturnes Inoubliables",
    montreal: "Montréal",
    founded: "Fondé",
    pricing: "Tarification",
    flowerQuote: "Chaque fleur suit le soleil; et ainsi nous nous autonomisons les uns les autres.",
    boulevardSaintLaurent: "Boulevard Saint-Laurent"
  }
};

function App() {
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState<Language>('en');
  const videoRef = useRef<HTMLVideoElement>(null);

  const t = content[language];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 4) {
        video.currentTime = 0;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  useEffect(() => {
    if (showTicketModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = '0';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [showTicketModal]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-inter">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
        
        {/* Dynamic Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-600/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-600/6 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Interactive Mouse Glow */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(220,38,38,0.3) 0%, rgba(239,68,68,0.15) 50%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center p-1">
                <GliFioriLogo className="w-full h-full text-white" />
              </div>
              <div className="text-white">
                <div className="text-sm font-black tracking-[0.2em] uppercase">GLI FIORI</div>
                <div className="text-xs text-red-400 font-medium tracking-wider">EST. 2024</div>
              </div>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg px-3 py-2 text-white hover:border-white/20 transition-all duration-300 group"
            >
              <Globe className="h-3 w-3 text-red-400 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-xs font-bold tracking-wider uppercase">{language}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="fixed top-8 right-8 z-50">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl px-6 py-3 text-white hover:border-white/20 transition-all duration-300 group"
          >
            <Globe className="h-4 w-4 text-red-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-sm font-bold tracking-wider uppercase">{language}</span>
          </button>
        </div>

        <div className="fixed top-8 left-8 z-50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center shadow-2xl p-1">
              <GliFioriLogo className="w-full h-full text-white" />
            </div>
            <div className="text-white">
              <div className="text-lg font-black tracking-[0.2em] uppercase">GLI FIORI</div>
              <div className="text-xs text-red-400 font-medium tracking-wider">EST. 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Background Image with Modern Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/image.jpg)',
              filter: 'brightness(0.25) contrast(1.3) saturate(1.1)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-orange-900/10"></div>
          
          {/* Diagonal Stripes Overlay */}
          <DiagonalStripes />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 lg:px-8 mt-16 md:mt-0 max-w-6xl mx-auto">
          <AnimatedText delay={200}>
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3 mb-12">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-bold tracking-[0.3em] uppercase">{t.inauguralEvent}</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={400}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tight">
              <span className="block text-white drop-shadow-2xl">
                {t.summerParty}
              </span>
            </h1>
          </AnimatedText>

          <AnimatedText delay={600}>
            <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light tracking-wide mb-4 underline decoration-red-500 decoration-2 underline-offset-8">
              {t.hostedBy}
            </div>
          </AnimatedText>
          
          <AnimatedText delay={800}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mb-16">
              {t.heroDescription}
            </p>
          </AnimatedText>

          {/* Event Date - Modern Style */}
          <AnimatedText delay={1000}>
            <div className="relative inline-block">
              <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-baseline space-x-2 justify-center">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white">01</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-300 uppercase tracking-wider">AUG</span>
                </div>
                <div className="text-lg text-red-400 tracking-[0.3em] uppercase font-bold mt-2">2025</div>
                <div className="text-sm text-gray-400 font-medium mt-1 tracking-wider">
                  <span className="font-bold text-white">10PM</span> - <span className="font-bold text-white">3AM</span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </AnimatedText>
        </div>

        {/* Modern Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="h-8 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          
          {/* Event Details Grid - Modern Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32">
            <AnimatedText delay={200}>
              <div className="group bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-500 hover:bg-black/80 relative overflow-hidden">
                <DiagonalStripes className="opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative z-10">
                  <Clock className="h-8 w-8 text-red-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight">
                    <span className="font-black">10PM</span> - <span className="font-black">3AM</span>
                  </div>
                  <div className="text-gray-400 text-sm font-medium tracking-wider uppercase">{t.fiveHours}</div>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={400}>
              <div className="group bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-500 hover:bg-black/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <MapPin className="h-8 w-8 text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl lg:text-2xl font-black text-white mb-2 tracking-tight">{t.boulevardSaintLaurent}</div>
                  <div className="text-gray-400 text-sm font-medium tracking-wider uppercase underline decoration-orange-400 decoration-1 underline-offset-4">{t.exclusiveVenue}</div>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={600}>
              <div className="group bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-500 hover:bg-black/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Users className="h-8 w-8 text-pink-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2">🔥</div>
                  <div className="text-gray-400 text-sm font-medium tracking-wider uppercase">{t.limitedTickets}</div>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={800}>
              <div className="group bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-500 hover:bg-black/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-lg font-black text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center space-x-2 tracking-wider uppercase">
                    <Zap className="h-5 w-5" />
                    <span>{t.pricing}</span>
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white tracking-wide">{t.ladiesPrice}</div>
                    <div className="text-sm font-bold text-white tracking-wide">{t.menPrice}</div>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-32">
            <AnimatedText delay={200}>
              <div className="mb-12">
                <div className="text-gray-300 text-xl mb-6 font-medium tracking-wide">{t.whatsIncluded}</div>
                <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                  <span className="bg-red-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-red-500/30 text-red-200 hover:bg-red-600/30 transition-all duration-300 font-medium tracking-wide">{t.welcomeCocktail}</span>
                  <span className="bg-orange-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-500/30 text-orange-200 hover:bg-orange-600/30 transition-all duration-300 font-medium tracking-wide">{t.premiumBar}</span>
                  <span className="bg-pink-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-500/30 text-pink-200 hover:bg-pink-600/30 transition-all duration-300 font-medium tracking-wide">{t.lightAppetizers}</span>
                  <span className="bg-yellow-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30 text-yellow-200 hover:bg-yellow-600/30 transition-all duration-300 font-medium tracking-wide">{t.liveEntertainment}</span>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={400}>
              <button 
                onClick={() => setShowTicketModal(true)}
                className="group relative bg-gradient-to-r from-red-600 to-orange-600 text-white px-12 lg:px-16 py-4 lg:py-5 rounded-xl font-black text-lg lg:text-xl hover:shadow-2xl hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 border border-red-500/50 tracking-wider uppercase"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <Flame className="h-6 w-6 animate-pulse" />
                  <span>{t.secureSpot}</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </AnimatedText>
          </div>

          {/* About Section with Video */}
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden mb-20 relative">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-0 transition-opacity duration-2000"
                style={{
                  filter: 'grayscale(10%) contrast(1.1) brightness(0.3) saturate(1.0)',
                }}
                onLoadedData={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.style.opacity = '0.15';
                }}
              >
                <source src="/vid.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
              <DiagonalStripes className="opacity-5" />
            </div>
            
            <div className="relative z-10 p-8 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight flex items-center space-x-4">
                    <span className="underline decoration-red-500 decoration-4 underline-offset-8">{t.ourStory}</span>
                    <Crown className="h-8 w-8 text-red-400 animate-pulse" />
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg font-light">
                    {t.aboutDescription1}
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg font-light">
                    {t.aboutDescription2}
                  </p>
                </div>
                <div className="text-center">
                  <a 
                    href="https://www.instagram.com/gli_fiori/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-xl hover:bg-white/10 transition-all duration-300 group font-bold tracking-wide uppercase"
                  >
                    <Instagram className="h-6 w-6" />
                    <span>{t.visitStore}</span>
                    <ExternalLink className="h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-t from-black via-black/95 to-transparent">
        <div className="absolute inset-0">
          <DiagonalStripes className="opacity-5" />
        </div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20 mb-20">
            
            {/* Brand Section */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center shadow-2xl p-2">
                  <GliFioriLogo className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white tracking-[0.2em] uppercase">GLI FIORI</h3>
                  <p className="text-red-400 text-sm font-bold tracking-wider uppercase">EST. 2024</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-10 text-lg font-light">
                {t.premiumExperiences}
              </p>
              <div className="flex justify-center lg:justify-start space-x-8">
                <div className="text-center">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-4 hover:bg-white/10 transition-all duration-300">
                    <MapPin className="h-8 w-8 text-red-400 mx-auto" />
                  </div>
                  <p className="text-white font-black text-sm uppercase tracking-wider">{t.montreal}</p>
                  <p className="text-gray-500 text-xs font-medium">QC, Canada</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-4 hover:bg-white/10 transition-all duration-300">
                    <Calendar className="h-8 w-8 text-orange-400 mx-auto" />
                  </div>
                  <p className="text-white font-black text-sm uppercase tracking-wider">{t.founded}</p>
                  <p className="text-gray-500 text-xs font-medium">2024</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h4 className="text-2xl font-black text-white mb-10 flex items-center justify-center space-x-3 tracking-wide uppercase">
                <Flame className="h-6 w-6 text-red-400 animate-pulse" />
                <span className="underline decoration-red-500 decoration-2 underline-offset-8">{t.followJourney}</span>
              </h4>
              <div className="space-y-4 max-w-sm mx-auto">
                <a 
                  href="mailto:glifiori@hotmail.com" 
                  className="group flex items-center justify-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span className="text-white font-medium truncate">glifiori@hotmail.com</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/gli_fiori/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                >
                  <Instagram className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-white font-medium">@gli_fiori</span>
                </a>

                <a 
                  href="https://www.tiktok.com/@gli_fiori" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                >
                  <TikTokIcon className="h-5 w-5 text-pink-400 flex-shrink-0" />
                  <span className="text-white font-medium">@gli_fiori</span>
                </a>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <DiagonalStripes className="opacity-10" />
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="flex justify-center space-x-2 mb-6">
                      <Flame className="h-6 w-6 text-red-400 animate-pulse" />
                      <Flame className="h-6 w-6 text-red-400 animate-pulse delay-100" />
                      <Flame className="h-6 w-6 text-red-400 animate-pulse delay-200" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-4 tracking-wide uppercase">Don't Miss Out</h4>
                    <p className="text-gray-400 text-sm mb-8 font-medium">Join us for our inaugural event</p>
                  </div>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={() => setShowTicketModal(true)}
                      className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-8 rounded-xl font-black hover:shadow-2xl hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 border border-red-500/50 tracking-wider uppercase"
                    >
                      {t.reserveSpot}
                    </button>
                    
                    <a 
                      href="https://www.instagram.com/gli_fiori/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-3 border border-white/20 text-white py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 group font-bold tracking-wide uppercase"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>{t.visitStore}</span>
                      <ExternalLink className="h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-gray-500 text-sm font-medium">
                {t.copyright}
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm italic text-center">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-light">"{t.flowerQuote}"</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modern Modal */}
      {showTicketModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[9999] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-6 md:p-8">
            <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl relative">
              <DiagonalStripes className="opacity-5" />
              
              {/* Modal Header */}
              <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-8 rounded-t-3xl relative z-10">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8">
                    <Instagram className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight uppercase">{t.reserveSpot}</h3>
                  <p className="text-gray-400 font-medium tracking-wide">{t.summerParty}</p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 relative z-10">
                {/* Pricing Display */}
                <div className="flex justify-center gap-12 mb-10">
                  <div className="text-center">
                    <div className="text-xl font-black text-orange-400 tracking-wide">{t.ladiesPrice}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-black text-red-400 tracking-wide">{t.menPrice}</div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-10">
                  <h4 className="font-black text-white mb-8 text-xl flex items-center space-x-3 tracking-wide uppercase">
                    <Instagram className="h-6 w-6 text-red-400" />
                    <span className="underline decoration-red-500 decoration-2 underline-offset-4">{t.howToPurchase}</span>
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-black mt-1 flex-shrink-0">1</div>
                      <p className="text-gray-300 font-medium">
                        {t.dmInstagram}
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-black mt-1 flex-shrink-0">2</div>
                      <p className="text-gray-300 font-medium">{t.ageRestriction}</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-black mt-1 flex-shrink-0">3</div>
                      <p className="text-gray-300 font-medium">{t.detailsAfterPayment}</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-black mt-1 flex-shrink-0">4</div>
                      <p className="text-gray-300 font-medium">{t.groupDiscounts}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-8 rounded-b-3xl relative z-10">
                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowTicketModal(false)}
                    className="flex-1 border border-white/20 text-gray-300 py-4 px-6 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 tracking-wide uppercase"
                  >
                    {t.close}
                  </button>
                  <a 
                    href="https://www.instagram.com/gli_fiori/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-6 rounded-xl font-black hover:shadow-2xl hover:shadow-red-500/30 transition-all text-center border border-red-500/50 flex items-center justify-center space-x-3 tracking-wide uppercase"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>{t.dmNow}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;