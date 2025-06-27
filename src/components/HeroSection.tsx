
import { ChevronDown, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-luxury-gold/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-luxury-gold/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-luxury-gold/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-luxury-gold/10 rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-luxury-gold fill-current" />
            <span className="font-inter text-sm font-medium text-luxury-gold">5-Star Luxury Experience</span>
            <Star className="w-4 h-4 text-luxury-gold fill-current" />
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-luxury-charcoal mb-6 leading-tight">
            Where <span className="text-luxury-gold italic">Luxury</span>
            <br />
            Meets <span className="text-luxury-gold italic">Perfection</span>
          </h1>

          <p className="font-inter text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled elegance and sophistication at Aurelius Grand Hotel. 
            Where every moment is crafted to perfection, and every detail tells a story of luxury.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-luxury-gold text-white px-10 py-4 rounded-full font-inter font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg">
              Reserve Your Stay
            </button>
            <button className="border-2 border-luxury-gold text-luxury-gold px-10 py-4 rounded-full font-inter font-semibold text-lg hover:bg-luxury-gold hover:text-white transition-all duration-300">
              Explore Amenities
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-luxury-gold" />
        </div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <div className="w-full h-full border-2 border-luxury-gold rounded-full transform rotate-45"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5">
        <div className="w-full h-full border-2 border-luxury-gold transform rotate-12"></div>
      </div>
    </section>
  );
};

export default HeroSection;
