
import { ChevronDown, Star, Sparkles, Crown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-luxury-cream to-white">
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-luxury-gold/15 to-luxury-gold/3 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-luxury-gold/25 to-luxury-gold/8 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-luxury-gold rounded-full transform rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-luxury-gold transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Premium Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-luxury-gold/10 via-luxury-gold/5 to-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/20 rounded-full px-8 py-3 mb-8 shadow-lg">
            <Crown className="w-5 h-5 text-luxury-gold fill-current" />
            <span className="font-inter text-sm font-semibold text-luxury-gold tracking-wide">EXCLUSIVE LUXURY EXPERIENCE</span>
            <Sparkles className="w-5 h-5 text-luxury-gold fill-current" />
          </div>

          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-luxury-charcoal mb-8 leading-[0.9] tracking-tight">
            <span className="block">Aurelius</span>
            <span className="block text-luxury-gold italic relative">
              Grand
              <div className="absolute -inset-2 bg-gradient-to-r from-luxury-gold/10 to-transparent rounded-lg -z-10"></div>
            </span>
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="font-inter text-2xl md:text-3xl text-gray-600 mb-6 leading-relaxed font-light">
              Where <span className="text-luxury-gold font-medium">Timeless Elegance</span> meets <span className="text-luxury-gold font-medium">Modern Luxury</span>
            </p>
            <p className="font-inter text-lg text-gray-500 max-w-2xl mx-auto">
              Immerse yourself in an extraordinary world of sophistication, where every detail is meticulously crafted to exceed your highest expectations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <button className="group relative bg-luxury-gold text-white px-12 py-5 rounded-full font-inter font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-luxury-gold/25">
              <span className="relative z-10">Reserve Your Suite</span>
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-luxury-gold/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button className="group border-2 border-luxury-gold text-luxury-gold px-12 py-5 rounded-full font-inter font-semibold text-lg hover:bg-luxury-gold hover:text-white transition-all duration-500 relative overflow-hidden">
              <span className="relative z-10">Discover Excellence</span>
              <div className="absolute inset-0 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="font-inter text-xs text-luxury-gold tracking-widest uppercase">Explore</span>
            <ChevronDown className="w-6 h-6 text-luxury-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
