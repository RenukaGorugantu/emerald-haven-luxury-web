
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Crown, Award, Diamond, Sparkles, Star } from 'lucide-react';

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
    <footer id="contact" className="bg-gradient-to-b from-luxury-charcoal via-luxury-charcoal/95 to-luxury-charcoal text-white py-24 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-gold/80 rounded-2xl flex items-center justify-center shadow-xl">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div className="font-playfair text-3xl font-bold">
                Aurelius <span className="text-luxury-gold">Grand</span>
              </div>
            </div>
            
            <p className="font-inter text-gray-300 mb-10 leading-relaxed text-lg">
              Where luxury transcends expectations. Experience unparalleled elegance and 
              sophisticated comfort in the heart of the city's most prestigious district.
            </p>
            
            {/* Premium Badges */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 bg-luxury-gold/20 rounded-full px-4 py-2 border border-luxury-gold/30">
                <Award className="w-4 h-4 text-luxury-gold" />
                <span className="font-inter text-sm text-luxury-gold font-bold">5-Star Luxury</span>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-luxury-gold fill-current" />
                ))}
              </div>
            </div>
            
            {/* Enhanced Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center group-hover:from-luxury-gold/30 group-hover:to-luxury-gold/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <p className="font-inter text-white font-semibold text-lg">123 Luxury Avenue</p>
                  <p className="font-inter text-gray-400">Metropolitan City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center group-hover:from-luxury-gold/30 group-hover:to-luxury-gold/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <p className="font-inter text-white font-semibold text-lg">+1 (555) 123-4567</p>
                  <p className="font-inter text-gray-400">24/7 Concierge Service</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center group-hover:from-luxury-gold/30 group-hover:to-luxury-gold/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <p className="font-inter text-white font-semibold text-lg">hello@aureliusgrand.com</p>
                  <p className="font-inter text-gray-400">Premium Reservations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-playfair text-2xl font-bold mb-8 text-luxury-gold relative">
                {category}
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold/50 rounded-full"></div>
                <Diamond className="absolute -top-2 -right-6 w-4 h-4 text-luxury-gold/40" />
              </h3>
              <ul className="space-y-5">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="font-inter text-gray-300 hover:text-luxury-gold transition-all duration-300 hover:translate-x-3 inline-flex items-center group text-lg"
                    >
                      <div className="w-2 h-2 bg-luxury-gold/50 rounded-full mr-4 group-hover:bg-luxury-gold group-hover:scale-125 transition-all duration-300"></div>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="border-t border-gray-700 pt-20 mb-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-luxury-gold" />
                <h3 className="font-playfair text-4xl font-bold">
                  Stay <span className="text-luxury-gold italic">Connected</span>
                </h3>
              </div>
              <p className="font-inter text-gray-300 text-xl leading-relaxed mb-6">
                Subscribe to receive exclusive offers, luxury experiences, and updates about our premium services. 
                Join our distinguished community of connoisseurs.
              </p>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-luxury-gold fill-current" />
                ))}
              </div>
              <p className="font-inter text-sm text-luxury-gold font-semibold">Rated #1 Luxury Newsletter</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border-2 border-luxury-gold/20 shadow-2xl backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-8 py-4 bg-white/10 border-2 border-gray-600 rounded-full font-inter text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold focus:bg-white/15 transition-all duration-300 text-lg"
                />
                <button className="bg-gradient-to-r from-luxury-gold to-luxury-gold/90 text-white px-10 py-4 rounded-full font-inter font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-luxury-gold/30 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Subscribe</span>
                    <Crown className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700 pt-16 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 mb-8 md:mb-0">
            <p className="font-inter text-gray-400 text-lg">
              © {currentYear} Aurelius Grand Hotel. All rights reserved.
            </p>
            <div className="flex items-center space-x-8 text-gray-400">
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300 font-inter">Privacy Policy</a>
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300 font-inter">Terms of Service</a>
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300 font-inter">Accessibility</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="font-inter text-gray-400 mr-6 font-semibold">Follow our luxury journey</span>
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center text-gray-300 hover:text-luxury-gold hover:from-luxury-gold/20 hover:to-luxury-gold/10 transition-all duration-300 hover:scale-110 border-2 border-gray-700 hover:border-luxury-gold shadow-lg"
                  aria-label={social.label}
                >
                  <IconComponent className="w-6 h-6" />
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
