import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Target, Lightbulb, Heart, Zap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const manifestoItems = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Implement innovative learning programs, improve library facilities, and establish study groups",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Users,
    title: "Student Welfare",
    description: "Enhance hostel facilities, improve food quality, and create mental health support systems",
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Zap,
    title: "Infrastructure",
    description: "Upgrade sports facilities, modernize classrooms, and improve campus connectivity",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Heart,
    title: "Cultural Events",
    description: "Organize diverse cultural programs, inter-college competitions, and talent showcases",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Create maker spaces, support startup initiatives, and promote research activities",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Career Development",
    description: "Enhance placement support, organize skill workshops, and build industry connections",
    color: "from-cyan-500 to-blue-600"
  }
];

export const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.manifesto-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.manifesto-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Cards animation
      gsap.fromTo('.manifesto-item',
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.manifesto-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating animation for icons
      gsap.to('.manifesto-icon', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="manifesto" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="manifesto-title text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Manifesto</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive vision for transforming student life and creating lasting positive change in our college community.
          </p>
        </div>

        <div className="manifesto-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manifestoItems.map((item, index) => (
            <div
              key={index}
              className="manifesto-item bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className={`manifesto-icon w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>

              <div className={`mt-6 h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Together, We Can Make a Difference
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              These initiatives represent our commitment to creating a better college experience for every student. 
              Your vote is your voice in shaping the future of our institution.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Our Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};