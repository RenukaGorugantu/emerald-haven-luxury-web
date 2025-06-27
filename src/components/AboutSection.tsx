
import { Award, Users, Globe, Heart, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Award, number: '25+', label: 'Years of Excellence', description: 'Decades of luxury hospitality' },
    { icon: Users, number: '50K+', label: 'Satisfied Guests', description: 'From around the world' },
    { icon: Globe, number: '100+', label: 'Countries Served', description: 'Global recognition' },
    { icon: Heart, number: '99%', label: 'Guest Satisfaction', description: 'Unmatched service quality' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5 rounded-full px-6 py-3 mb-8 border border-luxury-gold/20">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span className="font-inter text-sm font-semibold text-luxury-gold tracking-wide">OUR LEGACY</span>
            </div>
            
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-charcoal mb-8 leading-tight">
              A Heritage of
              <br />
              <span className="text-luxury-gold italic relative">
                Timeless Excellence
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold/50 rounded-full"></div>
              </span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="font-inter text-xl text-gray-600 leading-relaxed">
                For over two decades, Aurelius Grand Hotel has redefined the very essence of luxury hospitality. 
                Our unwavering commitment to perfection has created a sanctuary where dreams become reality.
              </p>
              
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Every corner whispers tales of elegance, every service reflects our dedication to excellence, 
                and every moment spent with us becomes a cherished memory that lasts a lifetime.
              </p>
            </div>

            <div className="flex items-center space-x-8">
              <button className="bg-luxury-gold text-white px-10 py-4 rounded-full font-inter font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg">
                Our Story
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <p className="font-inter text-sm font-semibold text-luxury-charcoal">Award Winning</p>
                  <p className="font-inter text-xs text-gray-500">Global Recognition</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-luxury-gold/30 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-luxury-gold/30 group-hover:to-luxury-gold/20 transition-all duration-300">
                        <IconComponent className="w-10 h-10 text-luxury-gold" />
                      </div>
                      <h3 className="font-playfair text-4xl font-bold text-luxury-charcoal mb-2">
                        {stat.number}
                      </h3>
                      <p className="font-inter text-lg font-semibold text-luxury-charcoal mb-2">
                        {stat.label}
                      </p>
                      <p className="font-inter text-sm text-gray-500 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
