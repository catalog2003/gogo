import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-blue-600 tracking-wide">MyBrand</h2>
            <p className="text-gray-600 mt-3">
              Creating innovative digital experiences. Follow us for updates.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-5">
              {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="group relative text-gray-600 hover:text-blue-600 transition transform hover:-translate-y-1 duration-300"
                >
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all">
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </span>
                  <i className={`fab fa-${platform} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {["Home", "About Us", "Services", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative text-gray-600 hover:text-blue-600 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {["Web Design", "SEO", "Marketing", "Branding"].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative text-gray-600 hover:text-blue-600 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Newsletter</h3>
            <p className="text-gray-600 mt-4">
              Subscribe for the latest updates & offers.
            </p>
            <div className="relative mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-lg"
              />
              <button className="absolute right-3 top-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center">
          <p className="text-gray-600 text-sm">© 2025 MyBrand. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
