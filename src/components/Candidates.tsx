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
  imageDrive?: string;
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
    image: "Nikunj.png ",
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
    // ... rest of your JSX stays the same ...
  );
};
