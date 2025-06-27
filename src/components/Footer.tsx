
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Hotel': ['Accommodations', 'Dining', 'Spa & Wellness', 'Events', 'Gallery'],
    'Services': ['Concierge', 'Room Service', 'Business Center', 'Transportation', 'Wedding Planning'],
    'Policies': ['Privacy Policy', 'Terms of Service', 'Cancellation Policy', 'Accessibility', 'Sustainability']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer id="contact" className="bg-luxury-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="font-playfair text-3xl font-bold mb-6">
              Aurelius <span className="text-luxury-gold">Grand</span>
            </div>
            <p className="font-inter text-gray-300 mb-6 leading-relaxed">
              Where luxury meets perfection. Experience unparalleled elegance and 
              sophisticated comfort in the heart of the city.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold" />
                <span className="font-inter text-gray-300">123 Luxury Avenue, Metropolitan City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span className="font-inter text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span className="font-inter text-gray-300">reservations@aureliusgrand.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-playfair text-xl font-semibold mb-6 text-luxury-gold">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="font-inter text-gray-300 hover:text-luxury-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 mt-12 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-2xl font-semibold mb-4">
                Stay <span className="text-luxury-gold">Connected</span>
              </h3>
              <p className="font-inter text-gray-300">
                Subscribe to receive exclusive offers and updates about our luxury experiences.
              </p>
            </div>
            <div className="flex space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-gray-600 rounded-full font-inter text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold"
              />
              <button className="bg-luxury-gold text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-opacity-90 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-gray-400 mb-4 md:mb-0">
            © {currentYear} Aurelius Grand Hotel. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-luxury-gold hover:bg-luxury-gold/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
