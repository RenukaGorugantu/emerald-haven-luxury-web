
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Crown, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Hotel': ['Luxury Suites', 'Fine Dining', 'Spa & Wellness', 'Exclusive Events', 'Photo Gallery'],
    'Services': ['Platinum Concierge', 'Butler Service', 'Executive Center', 'Private Transport', 'Wedding Planning'],
    'Experience': ['Michelin Dining', 'Wellness Retreat', 'Business Facilities', 'Cultural Tours', 'VIP Experiences']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-luxury-charcoal to-luxury-charcoal/95 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <Crown className="w-8 h-8 text-luxury-gold" />
              <div className="font-playfair text-3xl font-bold">
                Aurelius <span className="text-luxury-gold">Grand</span>
              </div>
            </div>
            
            <p className="font-inter text-gray-300 mb-8 leading-relaxed">
              Where luxury transcends expectations. Experience unparalleled elegance and 
              sophisticated comfort in the heart of the city's most prestigious district.
            </p>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-luxury-gold" />
                <span className="font-inter text-sm text-luxury-gold font-semibold">5-Star Luxury</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="font-inter text-white font-medium">123 Luxury Avenue</p>
                  <p className="font-inter text-gray-400 text-sm">Metropolitan City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="font-inter text-white font-medium">+1 (555) 123-4567</p>
                  <p className="font-inter text-gray-400 text-sm">24/7 Concierge Service</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="font-inter text-white font-medium">hello@aureliusgrand.com</p>
                  <p className="font-inter text-gray-400 text-sm">Premium Reservations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-playfair text-xl font-semibold mb-8 text-luxury-gold relative">
                {category}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-luxury-gold rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="font-inter text-gray-300 hover:text-luxury-gold transition-all duration-300 hover:translate-x-2 inline-flex items-center group"
                    >
                      <div className="w-1 h-1 bg-luxury-gold/50 rounded-full mr-3 group-hover:bg-luxury-gold transition-colors duration-300"></div>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="border-t border-gray-700 pt-16 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-semibold mb-6">
                Stay <span className="text-luxury-gold">Connected</span>
              </h3>
              <p className="font-inter text-gray-300 text-lg leading-relaxed">
                Subscribe to receive exclusive offers, luxury experiences, and updates about our premium services. 
                Join our distinguished community of connoisseurs.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-luxury-gold/20">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/10 border border-gray-600 rounded-full font-inter text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold focus:bg-white/15 transition-all duration-300"
                />
                <button className="bg-luxury-gold text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700 pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <p className="font-inter text-gray-400">
              © {currentYear} Aurelius Grand Hotel. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Accessibility</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="font-inter text-sm text-gray-400 mr-4">Follow our luxury journey</span>
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-luxury-gold hover:bg-luxury-gold/20 transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-luxury-gold"
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
