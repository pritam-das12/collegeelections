import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  User,
  Star,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  X,
  ThumbsUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Candidate {
  id: number;
  name: string;
  position: string;
  image: string;
  department: string;
  year: string;
  fullProfile: string;
  color: string;
}

const candidatesData: Candidate[] = [
  {
    id: 1,
    name: "R S B Bikarna Baidya",
    position: "President",
    image: "img.png",
    department: "Civil Engineering",
    year: "Final Year",
    fullProfile:
      "Hello NIT Durgapur family,\n\nI am R S B Bikarna Baidya, a final-year Civil Engineering student, and I am honoured to announce my candidature for the position of President in the upcoming Students' Gymkhana elections. This campus has been my home, my teacher, and my inspiration, and I am committed to giving back by ensuring every student feels represented, respected, and empowered.\n\nWith your trust and support, I will strive to make our Students' Gymkhana a voice that listens and acts, fostering a culture of unity, transparency, and growth. Together, we can build a campus where opportunities are for all, and every dream has the space to flourish.\n\nLet us lead NIT Durgapur into a future defined by unity and progress. #YourVoiceIsOurs\n\nSincerely,\nR S B Bikarna Baidya",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: 2,
    name: "Kalyan Samineni",
    position: "Vice President",
    image: "VP.png",
    department: "Computer Science and Engineering",
    year: "Final Year",
    fullProfile:
      "Hello NIT Durgapur family,\n\nI am Kalyan Samineni, a final-year Computer Science and Engineering student, and I am proud to announce my candidature for the position of Vice President in the upcoming Students' Gymkhana elections. I believe the strength of our campus lies in the unity of its students, and I am committed to building bridges, fostering inclusivity, and ensuring that every voice matters.\n\nWith your support, I will work to create lasting initiatives that enrich our campus life, promote collaboration, and turn shared aspirations into achievements we can all be proud of. Together, we can make our Students' Gymkhana a driving force for positive change.\n\nLet's move forward together towards a stronger, more connected NIT Durgapur. #YourVoiceIsOurs\n\nSincerely,\nKalyan Samineni",
    color: "from-purple-600 to-pink-700",
  },
  {
    id: 3,
    name: "Soham Chatterjee",
    position: "General Secretary",
    image: "Soham.png",
    department: "Metallurgical and Materials Engineering",
    year: "Pre-Final Year",
    fullProfile:
      "Hello NIT Durgapur family,\n\nI am Soham Chatterjee, a pre-final-year student of Metallurgical and Materials Engineering, and I am excited to announce my candidature for the position of General Secretary in the upcoming Students' Gymkhana elections. For me, leadership is about service — listening with empathy, acting with integrity, and ensuring that the concerns of students are addressed with efficiency and transparency.\n\nWith your trust and support, I will work to make our Students' Gymkhana more approachable, responsive, and effective in creating an environment where every student feels represented. Together, we can create a system that truly reflects the spirit of our campus.\n\nLet's shape a Students' Gymkhana that works for everyone, every day. #YourVoiceIsOurs\n\nSincerely,\nSoham Chatterjee",
    color: "from-green-600 to-teal-700",
  },
  {
    id: 4,
    name: "Md. Saad Rahman",
    position: "Assistant General Secretary (Cultural)",
    image: "Saad.png",
    department: "Computer Science and Engineering",
    year: "Pre-Final Year",
    fullProfile:
      "Hello NIT Durgapur family,\n\nI am Md. Saad Rahman, a pre-final-year Computer Science and Engineering student, and I am delighted to announce my candidature for the position of Assistant General Secretary (Cultural) in the upcoming Students' Gymkhana elections. Our campus is filled with immense creativity, and I am dedicated to making culture a platform where every student can share their talent and feel celebrated.\n\nWith your support, I will work to make our cultural events more inclusive, vibrant, and memorable, ensuring that every voice and performance finds its audience. Together, we can make culture the heartbeat of NIT Durgapur.\n\nLet's create moments that will be cherished long after our college days. #YourVoiceIsOurs\n\nSincerely,\nMd. Saad Rahman",
    color: "from-orange-600 to-red-700",
  },
  {
    id: 5,
    name: "Nikunj Buddhawar",
    position: "Assistant General Secretary (Social & Sports)",
    image: "NK.png ",
    department: "Computer Science and Engineering",
    year: "Pre-Final Year",
    fullProfile:
      "Hello NIT Durgapur family,\n\nI am Nikunj Buddhawar, a pre-final-year Computer Science and Engineering student, and I am happy to announce my candidature for the position of Assistant General Secretary (Social & Sports) in the upcoming Students' Gymkhana elections. Sports and social events are the lifeblood of campus spirit, fostering unity, friendship, and participation.\n\nWith your trust and support, I will strive to make our sports activities more dynamic, our social initiatives more inclusive, and our campus life more engaging for all. Together, we can keep our community connected through energy and enthusiasm.\n\nLet's carry the spirit of teamwork into every corner of our campus. #YourVoiceIsOurs\n\nSincerely,\nNikunj Buddhawar",
    color: "from-cyan-600 to-blue-700",
  },
];

export const Candidates: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".section-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".section-title",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".candidate-card",
        { y: 100, opacity: 0, scale: 0.6 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".candidates-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      cardsRef.current.forEach((card) => {
        if (card) {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -15,
              scale: 1.03,
              duration: 0.4,
              ease: "power2.out",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            });
            gsap.to(card.querySelector(".card-image"), {
              scale: 1.1,
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(card.querySelector(".card-overlay"), {
              opacity: 0.8,
              duration: 0.4,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
              boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
            });
            gsap.to(card.querySelector(".card-image"), {
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(card.querySelector(".card-overlay"), {
              opacity: 0.3,
              duration: 0.4,
              ease: "power2.out",
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openModal = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
    );
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setSelectedCandidate(null),
    });
  };

  const [likedCandidates, setLikedCandidates] = useState<{
    [key: number]: boolean;
  }>({});

  return (
    <section
      ref={sectionRef}
      id="candidates"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Meet Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Candidates
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Get to know the passionate leaders from NIT Durgapur who want to
            represent you and drive positive change in our college community.
          </p>
        </div>

        <div className="candidates-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {candidatesData.map((candidate, index) => (
            <div
              key={candidate.id}
              ref={(el) => (cardsRef.current[index] = el!)}
              className="candidate-card bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => openModal(candidate)}
            >
              {/* <div className="relative overflow-hidden h-90 z-10">
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="card-image w-full h-full object-cover p-10 z-10"
                />
                <div className={`card-overlay absolute inset-0 bg-gradient-to-t ${candidate.color} opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div> */}
              <div className="relative overflow-hidden h-90 z-5">
                <div
                  className={`card-overlay absolute inset-0 bg-gradient-to-t ${candidate.color} opacity-30 group-hover:opacity-60 transition-opacity duration-300 z-0`}
                ></div>
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="card-image w-full h-full object-cover p-6 z-10 relative"
                />

                {/* <div className="absolute top-4 left-4 right-4">
                  <div className={`bg-gradient-to-r ${candidate.color} text-white px-4 py-2 rounded-full text-sm font-bold text-center shadow-lg`}>
                    {candidate.position}
                  </div>
                </div> */}

                <div className="z-10 flex items-center justify-center absolute bottom-4 left-4 right-4">
                  {/* <button className="w-full bg-white/90 backdrop-blur-sm text-slate-800 font-semibold py-3 px-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"> */}
                  <button
                    className={`bg-gradient-to-r ${candidate.color} text-white px-4 py-2 rounded-full text-sm font-bold text-center shadow-lg flex items-center justify-center space-x-2 group-hover:scale-105`}
                  >
                    {/* <User className="h-4 w-4" /> */}
                    <span>{candidate.position}</span>
                    {/* <ChevronDown className="h-4 w-4" /> */}
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {candidate.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Award className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">
                      {candidate.department}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Users className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{candidate.year}</span>
                  </div>
                </div>

                <div
                  className={`h-1 bg-gradient-to-r ${candidate.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl text-white max-w-4xl mx-auto">
    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
      #YourVoiceIsOurs
    </h3>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-7 md:mb-8 opacity-90 leading-relaxed">
      Together, we can build a stronger, more inclusive NIT Durgapur where every student's voice matters and every dream has the space to flourish.
    </p>
  </div>
</div>

      </div>

      {selectedCandidate && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="relative">
              <div
                className={`bg-gradient-to-r ${selectedCandidate.color} p-8 text-white relative overflow-hidden`}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex items-center space-x-6">
                  <img
                    src={selectedCandidate.image}
                    alt={selectedCandidate.name}
                    className="w-24 h-24 rounded-full border-4 border-white/30 object-contain"
                  />
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedCandidate.name}
                    </h2>
                    <p className="text-xl opacity-90 mb-1">
                      {selectedCandidate.position}
                    </p>
                    <p className="opacity-80">
                      {selectedCandidate.department} • {selectedCandidate.year}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  {selectedCandidate.fullProfile
                    .split("\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-4 text-slate-700 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={closeModal}
                      className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors duration-200"
                    >
                      Close
                    </button>
                    <button
                      onClick={() =>
                        setLikedCandidates((prev) => ({
                          ...prev,
                          [selectedCandidate!.id]: !prev[selectedCandidate!.id],
                        }))
                      }
                      className={`px-8 py-3 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 ${
                        likedCandidates[selectedCandidate!.id]
                          ? "bg-white text-gray-800 border border-gray-300"
                          : `bg-gradient-to-r ${
                              selectedCandidate!.color
                            } text-white hover:opacity-90`
                      }`}
                    >
                      {likedCandidates[selectedCandidate!.id] ? (
                        <ThumbsUp className="inline h-5 w-5 mr-2" />
                      ) : (
                        `Support ${selectedCandidate!.name.split(" ")[0]}`
                      )}
                      {likedCandidates[selectedCandidate!.id]
                        ? "Supported"
                        : ""}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
