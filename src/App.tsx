import React, { useEffect } from 'react';
import Header from './components/Header';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import HistorySection from './components/sections/HistorySection';
import WhatWeDoSection from './components/sections/WhatWeDoSection';
import WhyAIVACSection from './components/sections/WhyAIVACSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import FeaturesSection from './components/sections/FeaturesSection';
import PrototypeSection from './components/sections/PrototypeSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import YouTubeVideo from './components/YouTubeVideo';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'AIVAC | Your Smart AI HVAC System';

    // Add grid pattern CSS for How It Works section
    const style = document.createElement('style');
    style.innerHTML = `
      .bg-grid-pattern {
        background-image: linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px);
        background-size: 25px 25px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HomeSection />
      <AboutSection />
      <HistorySection />
      <WhatWeDoSection />
      <WhyAIVACSection />
      <HowItWorksSection />
      <YouTubeVideo
        videoId="yMNKCpIYqlo"
        title="Prototype Demonstration"
        description="A smart and efficient solution for the future of HVACR"
        className="my-8"
      />
      <FeaturesSection />
      <PrototypeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;