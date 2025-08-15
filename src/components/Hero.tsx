import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(TextPlugin, ScrollToPlugin);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero background animation
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Main title animation
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
      );

      // Subtitle animation
      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: "power2.out" }
      );

      // CTA button animation
      gsap.fromTo(
        ".hero-cta",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 1.2,
          ease: "back.out(1.7)",
        }
      );

      // Floating particles animation
      gsap.to(".floating-particle", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.2,
      });

      // Scroll indicator animation
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToCandidates = () => {
  const candidatesSection = document.getElementById("candidates");
  if (candidatesSection) {
    gsap.to(window, {
      duration: 0.1, // was 1.5
      scrollTo: { y: candidatesSection, offsetY: 80 },
      ease: "power2.inOut",
    });
  }
};


  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-bg absolute inset-0">
        <img
          src="/bg_image.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-70"></div>
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl floating-particle"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-indigo-500 rounded-full blur-3xl floating-particle"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl floating-particle"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1
          className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-snug"
          style={{ color: "#000000" }}
        >
          Shape Your
          <span
            className="block pb-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            College Future
          </span>
        </h1>

        <p
          className="hero-subtitle text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          style={{
            color: "#00151aff", // cold icy blue
            fontFamily: '"Orbitron", sans-serif', // tech-style font
          }}
        >
          Join the democratic process that shapes student life. Meet the
          candidates, explore their vision, and make your voice heard in the
          2025 Gymkhana Elections.
        </p>

        <button
          onClick={scrollToCandidates}
          className="hero-cta inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          Meet the Candidates
          
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className="scroll-indicator text-white/70 flex flex-col items-center cursor-pointer"
          onClick={scrollToCandidates}
        >
          <span className="text-sm mb-2 text-black">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-bounce text-black" />
        </div>
      </div>
    </section>
  );
};
