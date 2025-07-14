'use client';

import QuoteCarousel from './components/CarouselQuote';
import CarouselClient from './components/CarouselClient';
import Explore from './components/Explore';
import WhatsNew from './components/WhatsNew';
import HeroSection from './components/HeroSection';
import HijrahJourney from './components/HijrahJourney';
import CollaborationSection from './components/CollaborationSection'

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <HijrahJourney />
      <CollaborationSection />
      <WhatsNew />
      <QuoteCarousel />
      <CarouselClient />
      <Explore />
    </div >
  );
}