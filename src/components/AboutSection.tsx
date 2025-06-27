
import { Award, Users, Globe, Heart, Sparkles, Crown, Diamond, Star } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Award, number: '25+', label: 'Years of Excellence', description: 'Decades of luxury hospitality', color: 'from-luxury-gold/20 to-luxury-gold/10' },
    { icon: Users, number: '50K+', label: 'Satisfied Guests', description: 'From around the world', color: 'from-luxury-gold/25 to-luxury-gold/5' },
    { icon: Globe, number: '100+', label: 'Countries Served', description: 'Global recognition', color: 'from-luxury-gold/30 to-luxury-gold/10' },
    { icon: Heart, number: '99%', label: 'Guest Satisfaction', description: 'Unmatched service quality', color: 'from-luxury-gold/20 to-luxury-gold/15' }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-br from-luxury-gold/8 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="animate-slide-in-left relative">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-luxury-gold/15 via-white/90 to-luxury-gold/15 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border-2 border-luxury-gold/20 shadow-xl">
              <Diamond className="w-5 h-5 text-luxury-gold fill-current" />
              <span className="font-inter text-sm font-bold text-luxury-gold tracking-widest uppercase">Our Legacy</span>
              <Sparkles className="w-5 h-5 text-luxury-gold fill-current" />
            </div>
            
            {/* Enhanced Typography */}
            <h2 className="font-playfair text-6xl md:text-7xl font-bold text-luxury-charcoal mb-12 leading-tight">
              <span className="block mb-4">A Heritage of</span>
              <span className="block text-luxury-gold italic relative">
                Timeless Excellence
                <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-luxury-gold via-luxury-gold to-luxury-gold/50 rounded-full"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-luxury-gold/10 to-transparent rounded-2xl -z-10 blur-xl"></div>
              </span>
            </h2>
            
            {/* Enhanced Content */}
            <div className="space-y-8 mb-12">
              <p className="font-inter text-2xl text-gray-600 leading-relaxed font-light">
                For over two decades, <span className="text-luxury-gold font-semibold">Aurelius Grand Hotel</span> has redefined the very essence of luxury hospitality. 
                Our unwavering commitment to perfection has created a sanctuary where dreams become reality.
              </p>
              
              <div className="w-16 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold/50 rounded-full"></div>
              
              <p className="font-inter text-xl text-gray-600 leading-relaxed">
                Every corner whispers tales of elegance, every service reflects our dedication to excellence, 
                and every moment spent with us becomes a cherished memory that lasts a lifetime.
              </p>
            </div>

            {/* Premium Action Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-12">
              <button className="group bg-gradient-to-r from-luxury-gold to-luxury-gold/90 text-white px-12 py-5 rounded-full font-inter font-bold text-lg hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-luxury-gold/30 relative overflow-hidden">
                <span className="relative z-10">Our Story</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center shadow-lg">
                  <Crown className="w-8 h-8 text-luxury-gold" />
                </div>
                <div>
                  <p className="font-inter text-lg font-bold text-luxury-charcoal">Award Winning</p>
                  <p className="font-inter text-sm text-gray-500">Global Recognition</p>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-luxury-gold fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl hover:shadow-luxury-gold/20 transition-all duration-700 border-2 border-gray-100 hover:border-luxury-gold/30 hover:-translate-y-4 relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Card Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    <div className="flex flex-col items-center text-center relative z-10">
                      <div className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <IconComponent className="w-12 h-12 text-luxury-gold" />
                      </div>
                      
                      <h3 className="font-playfair text-5xl font-bold text-luxury-charcoal mb-3 group-hover:text-luxury-gold transition-colors duration-500">
                        {stat.number}
                      </h3>
                      
                      <p className="font-inter text-lg font-bold text-luxury-charcoal mb-3 group-hover:text-luxury-charcoal transition-colors duration-500">
                        {stat.label}
                      </p>
                      
                      <p className="font-inter text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-500">
                        {stat.description}
                      </p>
                      
                      {/* Decorative Element */}
                      <div className="w-8 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold/50 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-full blur-2xl"></div>
            
            {/* Floating Icons */}
            <div className="absolute top-4 right-4">
              <Sparkles className="w-6 h-6 text-luxury-gold/30 animate-pulse" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Diamond className="w-4 h-4 text-luxury-gold/40 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
