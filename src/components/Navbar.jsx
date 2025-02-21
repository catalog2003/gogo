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
          <a href="/" className="text-2xl font-extrabold text-blue-600 tracking-wide">
          PICTURE TO TEXT
          </a>

          {/* Desktop Menu */}
      
<div className="hidden md:flex space-x-8">
  {[
    { name: "Home", link: "/" },
    { name: "Picture to Text", link: "/picture-to-text" },
    { name: "Image to Text", link: "/image-to-text" },
    { name: "JPG to Text", link: "/jpg-to-text" }
  ].map((item, index) => (
    <a
      key={index}
      href={item.link}
      className="relative text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
    >
      {item.name}
    </a>
  ))}
</div>


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
    {[
      { name: "Home", link: "/" },
      { name: "Picture to Text", link: "/picture-to-text" },
      { name: "Image to Text", link: "/image-to-text" },
      { name: "JPG to Text", link: "/jpg-to-text" }
    ].map((item, index) => (
      <a
        key={index}
        href={item.link}
        className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
      >
        {item.name}
      </a>
    ))}
   
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
