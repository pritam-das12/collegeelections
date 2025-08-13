import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Candidates } from './components/Candidates';
import { Manifesto } from './components/Manifesto';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll behavior
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize scroll animations
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <Candidates />
      <Manifesto />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;