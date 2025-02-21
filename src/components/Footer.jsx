import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl mt-16">
 <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:place-items-center">
      
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-blue-600 tracking-wide">
              PICTURE TO TEXT
            </h2>
            <p className="text-gray-600 mt-3">
              We are dedicated to providing innovative solutions for text extraction and data processing. Our goal is to make your digital experience as seamless and productive as possible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
  <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
  <ul className="mt-4 space-y-3">
    {[
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about" },
      { name: "Contact", link: "/contact" },
      { name: "Privacy Policy", link: "/privacy-policy" }
    ].map((item, idx) => (
      <li key={idx}>
        <a
          href={item.link}
          className="relative text-gray-600 hover:text-blue-600 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>


          {/* Services */}
         {/* Services */}
<div>
  <h3 className="text-xl font-semibold text-gray-800">Our Services</h3>
  <ul className="mt-4 space-y-3">
    {[
      { name: "Picture to Text", link: "/picture-to-text" },
      { name: "Image to Text", link: "/image-to-text" },
      { name: "JPG to Text", link: "/jpg-to-text" },
      { name: "Sitemap", link: "/sitemap" }
    ].map((service, idx) => (
      <li key={idx}>
        <a
          href={service.link}
          className="relative text-gray-600 hover:text-blue-600 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
        >
          {service.name}
        </a>
      </li>
    ))}
  </ul>
</div>
</div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center">
          <p className="text-gray-600 text-sm">© 2025 PICTURE TO TEXT. All Rights Reserved.</p>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
