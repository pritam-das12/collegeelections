import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Users, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Users,
    number: "4000+",
    label: "Active Students",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Trophy,
    number: "50+",
    label: "Awards Won",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Calendar,
    number: "25+",
    label: "Events Organized",
    color: "from-green-500 to-teal-600",
  },
];

export const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about-content",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".stat-item",
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      stats.forEach((stat, index) => {
        gsap.fromTo(
          `.stat-number-${index}`,
          { textContent: 0 },
          {
            textContent: parseInt(stat.number),
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: `.stat-number-${index}`,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            snap: { textContent: 1 },
            onUpdate: function () {
              const num = Math.ceil(this.targets()[0].textContent);
              this.targets()[0].textContent =
                num + (stat.number.includes("+") ? "+" : "");
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl md:text-5xl font-bold mb-4">
            Know{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              About Us
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the rich history and vibrant community that makes our
            college a place of excellence and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="about-content space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                Our Legacy
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                For over two decades, our college gymkhana has been the
                cornerstone of student life, fostering leadership, creativity,
                and community spirit. We've consistently worked to bridge the
                gap between academic excellence and holistic development.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                Our Mission
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To create an inclusive environment where every student can
                thrive academically, socially, and personally. We believe in
                empowering students to become leaders who will shape the future
                of our society.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                Our Vision
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To be recognized as a premier institution that nurtures
                well-rounded individuals equipped with knowledge, skills, and
                values necessary for success in their chosen fields and
                contribution to society.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                Our Past Works
              </h3>
              <ul className="list-disc list-inside text-blue-100 text-lg leading-relaxed space-y-2">
                <li>Opening of a brand-new mess in Hall 3</li>
                <li>Complete mess renovations in Halls 1 & 2</li>
                <li>Renovation work of Hall 1 to Hall 5</li>
                <li>Newly opened canteen in Hall 12</li>
                <li>Floodlights were sanctioned for the Ovals, installation underway</li>
                <li>Large-scale MAB renovation proposal approved</li>
                <li>Mess fees reduced from ₹19,600 to ₹18,200</li>
                <li>Semester late fine slashed from ₹200/day to ₹50/day</li>
                <li>Lifetime alumni health insurance introduced, family coverage included</li>
                <li>Food delivery permitted inside campus premises</li>
                <li>Fair exam gap policy implemented across semesters</li>
                <li>Successfully organized the annual food fest RECrave</li>
                <li>Successfully organized the annual cultural fest Recstacy</li>
              </ul>
            </div>
          </div>

          {/* Triangle layout */}
          <div className="stats-grid flex flex-col items-center gap-6">
  {/* First row - responsive grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
    {stats.slice(0, 2).map((stat, index) => (
      <div
        key={index}
        className="stat-item bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 w-full"
      >
        <div
          className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
        >
          <stat.icon className="h-8 w-8 text-white" />
        </div>
        <div
          className={`stat-number-${index} text-3xl font-bold text-white mb-2`}
        >
          0{stat.number.includes("+") ? "+" : ""}
        </div>
        <p className="text-blue-200 font-medium">{stat.label}</p>
      </div>
    ))}
  </div>

            {/* Second row (centered) */}
            <div className="w-full sm:w-auto">
    {(() => {
      const stat = stats[2];
      const index = 2;
      return (
        <div
          className="stat-item bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 w-full sm:w-60"
        >
          <div
            className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
          >
            <stat.icon className="h-8 w-8 text-white" />
          </div>
          <div
            className={`stat-number-${index} text-3xl font-bold text-white mb-2`}
          >
            0{stat.number.includes("+") ? "+" : ""}
          </div>
          <p className="text-blue-200 font-medium">{stat.label}</p>
        </div>
      );
    })()}
  </div>
</div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              Join Our Community
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Be part of a tradition of excellence and help us write the next
              chapter of our college's story. Your participation makes all the
              difference.
            </p>
            <button
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/spiritofnitd/?igsh=MW5xMjc4dzYwb3k3eg%3D%3D#",
                  "_blank"
                )
              }
            >
              Get Involved Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
