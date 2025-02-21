import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-extrabold text-blue-600 tracking-wide">
            MyBrand
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Contact"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="relative text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                {item}
              </a>
            ))}

            {/* Dropdown for Services */}
            <div className="relative dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="relative text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                aria-expanded={dropdownOpen}
                aria-label="Toggle Services menu"
              >
                Services
              </button>
              {dropdownOpen && (
                <div className="absolute top-10 left-0 w-40 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                  {["Web Design", "SEO", "Marketing"].map((service, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side: CTA Button */}
          <a href="#" className="hidden md:inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all">
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg rounded-lg">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <a key={index} href="#" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition">
                {item}
              </a>
            ))}
            <a href="#" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all">
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
