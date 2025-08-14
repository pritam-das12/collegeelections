import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Target, Lightbulb, Heart, Zap, Users, X, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const manifestoItems = [
  {
    icon: Heart,
    title: "Hostel & Mess Facilities",
    description: [
      "Ensure nutritious, hygienic food in all messes.",
      "Provide laundry facilities on every hostel floor.",
      "Renovate old hostels for better living conditions.",
      "Enable late-night food delivery to hostels for added convenience."
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Users,
    title: "Student Life & Activities",
    description: [
      "Expand high-speed Wi-Fi and network connectivity across the entire campus.",
      "Establish on-campus pharmacy and stationery shops.",
      "Maintain smooth and timely convocation ceremonies.",
      "Improve pathways and drainage to prevent waterlogging.",
      "Promote religious and cultural activities to foster campus diversity."
    ],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Zap,
    title: "Sports Facilities",
    description: [
      "Upgrade gym infrastructure and equipment.",
      "Provide scholarships and sponsorships for Inter-NIT athletes.",
      "Organise more Inter-Hall and Inter-Departmental events.",
      "Improve maintenance of Lords and Ovals grounds.",
      "Introduce female-focused self-defence training and sports initiatives."
    ],
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Lightbulb,
    title: "Facilities for Girls",
    description: [
      "Extend in-and-out timings for girls’ hostels.",
      "Introduce student-run mess facilities.",
      "Install sanitary pad vending machines in academic block washrooms.",
      "Provide late-night food options via canteens and vending machines inside girls’ hostel premises.",
      "Improve drinking water quality and washroom water supply."
    ],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: BookOpen,
    title: "Academic & Administrative Initiatives",
    description: [
      "Enhance the quality and scale of food and cultural festivals.",
      "Ensure seamless functioning of all student clubs.",
      "Upgrade placement cell with better network access and modern software tools.",
      "Enable late-night campus food supply via canteens and vending machines.",
      "Provide free access to essential software through institute credentials.",
      "Extend OPD hours and improve medical unit facilities."
    ],
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Target,
    title: "Career Development",
    description: [
      "Enhance placement support",
      "Organize skill workshops",
      "Build industry connections",
      "Provide internship guidance",
      "Mentor students on career paths",
      "Facilitate networking events"
    ],
    color: "from-cyan-500 to-blue-600"
  }
];

export const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.manifesto-title', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1,
        scrollTrigger: { trigger: '.manifesto-title', start: 'top 80%', end: 'bottom 20%', toggleActions: 'play none none reverse' }
      });

      gsap.fromTo('.manifesto-item', { y: 80, opacity: 0, scale: 0.9 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: '.manifesto-grid', start: 'top 80%', end: 'bottom 20%', toggleActions: 'play none none reverse' }
      });

      gsap.to('.manifesto-icon', { y: -5, duration: 2, repeat: -1, yoyo: true, ease: "power2.inOut", stagger: 0.3 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  return (
    <section ref={sectionRef} id="manifesto" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
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
              className="manifesto-item bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer hover:shadow-2xl"
              onClick={() => openModal(index)}
            >
              <div className={`manifesto-icon w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300`}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
              <div className={`mt-6 h-1 bg-gradient-to-r ${item.color} rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {activeIndex !== null && (() => {
        const ActiveIcon = manifestoItems[activeIndex].icon;
        return (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-3xl w-full p-8 relative shadow-xl overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${manifestoItems[activeIndex].color} rounded-2xl flex items-center justify-center mr-4`}>
                  <ActiveIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{manifestoItems[activeIndex].title}</h2>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                {manifestoItems[activeIndex].description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })()}
    </section>
  );
};
