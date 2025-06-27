
import { Award, Users, Globe, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Award, number: '25+', label: 'Years of Excellence' },
    { icon: Users, number: '50K+', label: 'Satisfied Guests' },
    { icon: Globe, number: '100+', label: 'Countries Served' },
    { icon: Heart, number: '99%', label: 'Guest Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-block bg-luxury-gold/10 rounded-full px-4 py-2 mb-6">
              <span className="font-inter text-sm font-medium text-luxury-gold">Our Story</span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6">
              A Legacy of 
              <span className="text-luxury-gold italic"> Timeless Elegance</span>
            </h2>
            
            <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">
              For over two decades, Aurelius Grand Hotel has been the epitome of luxury hospitality. 
              Our commitment to excellence and attention to detail has made us a preferred destination 
              for discerning travelers from around the world.
            </p>
            
            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              Every corner of our hotel tells a story of craftsmanship, elegance, and dedication to creating 
              unforgettable experiences. From our meticulously designed suites to our world-class amenities, 
              we ensure that every moment of your stay is nothing short of extraordinary.
            </p>

            <button className="bg-luxury-gold text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
              Discover Our Heritage
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-luxury-gold/20"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-luxury-gold" />
                      </div>
                      <h3 className="font-playfair text-3xl font-bold text-luxury-charcoal mb-2">
                        {stat.number}
                      </h3>
                      <p className="font-inter text-sm text-gray-600 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
