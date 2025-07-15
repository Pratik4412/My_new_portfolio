import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    { name: "React", color: "text-blue-400" },
    { name: "Node.js", color: "text-green-400" },
    { name: "MongoDB", color: "text-green-500" },
    { name: "Express", color: "text-gray-300" },
    { name: "AWS", color: "text-orange-400" },
    { name: "Docker", color: "text-blue-500" },
  ];

  const floatingElements = [
    { text: "HTML5", top: "15%", left: "10%", delay: 0 },
    { text: "CSS3", top: "25%", left: "85%", delay: 0.5 },
    { text: "JavaScript", top: "45%", right: "15%", delay: 1 },
    { text: "MERN Stack", top: "60%", left: "8%", delay: 1.5 },
    { text: "AWS", top: "70%", right: "20%", delay: 2 },
    { text: "Docker", top: "35%", left: "5%", delay: 2.5 },
    { text: "Jenkins", top: "80%", right: "10%", delay: 3 },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "View My Work", id: "portfolio" },
    { name: "Get In Touch", id: "GetInTouch" },
  ];
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Tech Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute text-white/30 text-sm font-mono transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            transitionDelay: `${element.delay}s`,
            animation: `float 6s ease-in-out infinite ${element.delay}s`,
          }}
        >
          {element.text}
        </div>
      ))}

      {/* Main Content */}
      <div className="relative  flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name and Title */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              PRATIK DHERE
            </h1>
            <div className="text-xl md:text-3xl text-gray-300 md:mb-6  mb-2 font-light">
              Full Stack Developer | Explorer
            </div>
          </div>

          {/* Dynamic Tech Stack */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="md:text-4xl text-2xl  font-bold md:mb-8 mb-3">
              <span className="text-white">Working on </span>
              <span
                className={`${technologies[currentTech].color} transition-all duration-500`}
              >
                {technologies[currentTech].name}
              </span>
            </div>
          </div>

          {/* Description */}
          <div
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="md:text-xl text-base text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transforming ideas into powerful digital experiences. Specialized
              in modern web technologies, cloud architecture, and creating
              scalable solutions that make a difference.
            </p>
          </div>
          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center md:mb-12 mb-6 transform transition-all duration-1000 delay-1100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {item.name}
              </button>
            ))}</div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-[50%] transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown size={32} />
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
