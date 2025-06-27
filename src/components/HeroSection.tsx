
import { ChevronDown, Star, Sparkles, Crown, Gem, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-luxury-cream/30 to-white"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/5 via-transparent to-luxury-gold/10"></div>
      
      {/* Sophisticated Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 rounded-full animate-float blur-sm opacity-60"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-luxury-gold/15 to-luxury-gold/3 rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-luxury-gold/25 to-luxury-gold/8 rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-60 right-40 w-16 h-16 bg-gradient-to-br from-luxury-gold/30 to-luxury-gold/10 rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
      
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-luxury-gold rounded-full transform rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-luxury-gold transform -rotate-12 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-luxury-gold/50 rounded-full"></div>
      </div>

      {/* Luxury Decorative Elements */}
      <div className="absolute top-32 right-32">
        <div className="relative">
          <Gem className="w-8 h-8 text-luxury-gold/30 animate-pulse" />
          <div className="absolute inset-0 w-8 h-8 bg-luxury-gold/10 rounded-full blur-md"></div>
        </div>
      </div>
      <div className="absolute bottom-32 left-32">
        <div className="relative">
          <Award className="w-6 h-6 text-luxury-gold/40 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 w-6 h-6 bg-luxury-gold/10 rounded-full blur-md"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {/* Ultra-Premium Badge */}
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-luxury-gold/15 via-white/80 to-luxury-gold/15 backdrop-blur-lg border-2 border-luxury-gold/30 rounded-full px-10 py-4 mb-12 shadow-2xl shadow-luxury-gold/20">
            <Crown className="w-6 h-6 text-luxury-gold fill-current animate-pulse" />
            <span className="font-inter text-sm font-bold text-luxury-gold tracking-widest uppercase">Exclusive Luxury Experience</span>
            <Sparkles className="w-6 h-6 text-luxury-gold fill-current animate-pulse" />
          </div>

          {/* Enhanced Typography */}
          <div className="relative mb-12">
            <h1 className="font-playfair text-7xl md:text-9xl lg:text-[10rem] font-bold text-luxury-charcoal mb-4 leading-[0.85] tracking-tight">
              <span className="block relative">
                Aurelius
                <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent rounded-2xl -z-10"></div>
              </span>
              <span className="block text-luxury-gold italic relative transform hover:scale-105 transition-transform duration-700">
                Grand
                <div className="absolute -inset-6 bg-gradient-to-r from-luxury-gold/10 via-luxury-gold/20 to-luxury-gold/10 rounded-3xl -z-10 blur-xl"></div>
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-transparent via-luxury-gold to-transparent rounded-full"></div>
              </span>
            </h1>
            
            {/* Luxury Stars */}
            <div className="flex justify-center items-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-luxury-gold fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <p className="font-inter text-3xl md:text-4xl text-gray-600 mb-8 leading-relaxed font-light">
              Where <span className="text-luxury-gold font-semibold italic">Timeless Elegance</span> meets <span className="text-luxury-gold font-semibold italic">Modern Luxury</span>
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-8"></div>
            <p className="font-inter text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in an extraordinary world of sophistication, where every detail is meticulously crafted to exceed your highest expectations and create memories that last a lifetime.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-12 mb-20">
            <button className="group relative bg-gradient-to-r from-luxury-gold to-luxury-gold/90 text-white px-14 py-6 rounded-full font-inter font-bold text-xl overflow-hidden transition-all duration-700 hover:scale-110 shadow-2xl hover:shadow-luxury-gold/30 border-2 border-luxury-gold">
              <span className="relative z-10 flex items-center space-x-3">
                <span>Reserve Your Suite</span>
                <Crown className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/80 to-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </button>
            
            <button className="group relative border-3 border-luxury-gold text-luxury-gold px-14 py-6 rounded-full font-inter font-bold text-xl hover:bg-luxury-gold hover:text-white transition-all duration-700 overflow-hidden hover:scale-110 shadow-xl hover:shadow-luxury-gold/20">
              <span className="relative z-10 flex items-center space-x-3">
                <span>Discover Excellence</span>
                <Sparkles className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-4 animate-bounce">
            <div className="w-8 h-12 border-2 border-luxury-gold rounded-full flex justify-center">
              <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="font-inter text-sm text-luxury-gold tracking-widest uppercase font-semibold">Explore</span>
            <ChevronDown className="w-6 h-6 text-luxury-gold animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
