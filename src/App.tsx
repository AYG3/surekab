import React, { useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AudienceSection } from './components/AudienceSection';
import { WaitlistSection } from './components/WaitlistSection';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';

/**
 * Main App Component
 * Orchestrates all sections of the Safekab waitlist landing page
 * 
 * Architecture:
 * - Modular component structure for maintainability
 * - Shared state management for scroll behavior
 * - Optimized performance with lazy loading and animations
 */
const App: React.FC = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to waitlist section
  const scrollToWaitlist = () => {
    if (waitlistRef.current) {
      const offset = 80;
      const elementPosition = waitlistRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Header */}
      <Header onJoinWaitlist={scrollToWaitlist} />

      {/* Main Content */}
      <main>
        {/* Hero with CTA */}
        <HeroSection onJoinWaitlist={scrollToWaitlist} />

        {/* Problem Statement */}
        <ProblemSection />

        {/* Solution Overview */}
        <SolutionSection />

        {/* Key Features */}
        <FeaturesSection />

        {/* Target Audience */}
        <AudienceSection />

        {/* Waitlist Form */}
        <div ref={waitlistRef}>
          <WaitlistSection />
        </div>

        {/* Trust & Credibility */}
        <TrustSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
