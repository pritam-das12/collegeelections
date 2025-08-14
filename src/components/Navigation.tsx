import React, { useState, useEffect } from 'react';
import { Menu, X, Vote } from 'lucide-react';
import { gsap } from 'gsap';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo('.nav-item', 
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.2 }
    );
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-yellow-500 to-orange-500'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 nav-item">
            <Vote
              className={`h-8 w-8 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              Gymkhana{' '}
              <span className="text-blue-600">Elections 2025</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['candidates', 'manifesto', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-item font-medium transition-colors duration-200 capitalize relative group ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-600'
                }`}
              >
                {item === 'about' ? 'Know About Us' : item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    isScrolled ? 'bg-blue-600' : 'bg-white'
                  } transition-all duration-200 group-hover:w-full`}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled
                ? 'text-slate-700 hover:text-blue-600'
                : 'text-white hover:text-blue-600'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 py-4 rounded-lg shadow-lg ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-md'
                : 'bg-gradient-to-r from-yellow-500 to-orange-500'
            }`}
          >
            {['candidates', 'manifesto', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-2 capitalize transition-colors duration-200 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white hover:text-blue'
                }`}
              >
                {item === 'about' ? 'Know About Us' : item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
