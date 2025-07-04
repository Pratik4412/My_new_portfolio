import React, { useState, useEffect } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "/" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Vlog", id: "vlog" },
  ];
  return (
    <section>
      <nav
        className={`fixed  top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 text-black backdrop-blur-md shadow-lg"
            : "text-white bg-transparent"
        }`}
      >
        <div className="lg:px-20 md:px-10 px-5 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <h2 className="text-2xl font-heading font-bold text-primaryColor">
                Pratik
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-heading font-medium text-sm hover:text-primaryColor transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryColor transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
              <button className="bg-primaryColor text-white px-6 py-2 rounded-full font-heading font-medium text-sm hover:bg-primaryColor/90 transition-colors duration-200">
                Contact Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col space-y-1 w-6 h-6"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 pb-2 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left font-heading font-medium text-sm hover:text-primaryColor transition-colors duration-200 py-2"
                >
                  {item.name}
                </button>
              ))}
              <button className="w-full bg-primaryColor text-white px-6 py-2 rounded-full font-heading font-medium text-sm hover:bg-primaryColor/90 transition-colors duration-200 mt-4">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
