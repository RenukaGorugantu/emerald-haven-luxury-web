
import React from 'react';
import { Utensils, Waves, Dumbbell, Car, Wifi, Coffee, ChevronLeft, ChevronRight, Crown, Sparkles, Diamond, Star } from 'lucide-react';
import { useState } from 'react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      icon: Utensils,
      title: 'Michelin Dining',
      description: 'Exquisite culinary journeys crafted by world-renowned chefs using the finest artisanal ingredients sourced from around the globe.',
      features: ['5 Signature Restaurants', 'Private Chef Service', '24/7 Gourmet Room Service', 'Wine Sommelier'],
      highlight: 'Michelin Star Experience',
      color: 'from-luxury-gold/20 to-luxury-gold/5'
    },
    {
      icon: Waves,
      title: 'Wellness Sanctuary',
      description: 'Rejuvenate your essence with our award-winning spa treatments and holistic wellness experiences in a serene paradise.',
      features: ['Premium Spa Treatments', 'Infinity Rooftop Pool', 'Meditation Gardens', 'Personal Wellness Coach'],
      highlight: 'Award-Winning Spa',
      color: 'from-luxury-gold/25 to-luxury-gold/8'
    },
    {
      icon: Dumbbell,
      title: 'Elite Fitness',
      description: 'State-of-the-art fitness facilities with personal training in an atmosphere of luxury and sophistication.',
      features: ['Premium Equipment', 'Celebrity Trainers', 'Private Yoga Studios', 'Wellness Programs'],
      highlight: 'Celebrity Training',
      color: 'from-luxury-gold/18 to-luxury-gold/6'
    },
    {
      icon: Car,
      title: 'Platinum Concierge',
      description: 'Personalized assistance that anticipates your every need before you even ask, ensuring seamless luxury experiences.',
      features: ['Luxury Transport', 'Exclusive Access', 'Personal Shopping', 'Event Planning'],
      highlight: 'VIP Access',
      color: 'from-luxury-gold/22 to-luxury-gold/7'
    },
    {
      icon: Wifi,
      title: 'Executive Center',
      description: 'Sophisticated business facilities designed for the discerning professional who demands excellence in every detail.',
      features: ['Private Boardrooms', 'High-Speed Connectivity', 'Executive Lounge', 'Tech Support'],
      highlight: 'Business Excellence',
      color: 'from-luxury-gold/20 to-luxury-gold/10'
    },
    {
      icon: Coffee,
      title: 'Bespoke Amenities',
      description: 'Thoughtfully curated luxury amenities that define the art of premium hospitality and personalized service.',
      features: ['Butler Service', 'Italian Linens', 'Artisan Toiletries', 'Personalized Touches'],
      highlight: 'Artisan Quality',
      color: 'from-luxury-gold/15 to-luxury-gold/5'
    }
  ];

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/20 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 right-32 w-96 h-96 bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-br from-luxury-gold/8 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-luxury-gold/15 via-white/90 to-luxury-gold/15 backdrop-blur-lg rounded-full px-10 py-4 mb-12 border-2 border-luxury-gold/30 shadow-2xl">
            <Crown className="w-6 h-6 text-luxury-gold fill-current" />
            <span className="font-inter text-sm font-bold text-luxury-gold tracking-widest uppercase">Premium Services</span>
            <Sparkles className="w-6 h-6 text-luxury-gold fill-current" />
          </div>
          
          <h2 className="font-playfair text-6xl md:text-7xl font-bold text-luxury-charcoal mb-12 leading-tight">
            <span className="block mb-4">Unparalleled</span>
            <span className="text-luxury-gold italic relative">
              Excellence
              <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-luxury-gold via-luxury-gold to-luxury-gold/50 rounded-full"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-luxury-gold/10 to-transparent rounded-3xl -z-10 blur-xl"></div>
            </span>
          </h2>
          
          <div className="flex justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-luxury-gold fill-current mx-1 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
          
          <p className="font-inter text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover a world of bespoke services designed to surpass your highest expectations and create unforgettable moments
          </p>
        </div>

        {/* Enhanced Featured Service Display */}
        <div className="mb-20">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 hover:border-luxury-gold/30 transition-all duration-700">
            <div className="grid lg:grid-cols-2">
              <div className="p-16 lg:p-20">
                <div className="flex items-center space-x-6 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${services[activeService].color} rounded-3xl flex items-center justify-center shadow-xl`}>
                    {React.createElement(services[activeService].icon, { className: "w-10 h-10 text-luxury-gold" })}
                  </div>
                  <div className="bg-gradient-to-r from-luxury-gold/15 to-luxury-gold/10 rounded-full px-6 py-2 border border-luxury-gold/20">
                    <span className="font-inter text-sm font-bold text-luxury-gold tracking-wide">
                      {services[activeService].highlight}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-playfair text-5xl font-bold text-luxury-charcoal mb-8 leading-tight">
                  {services[activeService].title}
                </h3>
                
                <p className="font-inter text-xl text-gray-600 mb-10 leading-relaxed">
                  {services[activeService].description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-3 h-3 bg-luxury-gold rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="font-inter text-lg text-gray-600 group-hover:text-luxury-gold transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-gradient-to-r from-luxury-gold to-luxury-gold/90 text-white px-12 py-4 rounded-full font-inter font-bold text-lg hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-luxury-gold/30 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>Learn More</span>
                    <Diamond className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
              
              <div className={`bg-gradient-to-br ${services[activeService].color} p-16 lg:p-20 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-luxury-gold/5"></div>
                <div className="w-80 h-80 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                  {React.createElement(services[activeService].icon, { className: "w-40 h-40 text-luxury-gold/70" })}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                </div>
                {/* Floating decorative elements */}
                <Sparkles className="absolute top-8 right-8 w-6 h-6 text-luxury-gold/40 animate-pulse" />
                <Diamond className="absolute bottom-8 left-8 w-4 h-4 text-luxury-gold/30 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Controls */}
        <div className="flex items-center justify-center space-x-12 mb-16">
          <button 
            onClick={prevService}
            className="w-16 h-16 bg-white border-3 border-luxury-gold rounded-full flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-xl hover:shadow-luxury-gold/30 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex space-x-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`h-4 rounded-full transition-all duration-500 ${
                  index === activeService 
                    ? 'bg-luxury-gold w-12 shadow-lg' 
                    : 'bg-gray-300 w-4 hover:bg-luxury-gold/60 hover:w-8'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextService}
            className="w-16 h-16 bg-white border-3 border-luxury-gold rounded-full flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-xl hover:shadow-luxury-gold/30 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                onClick={() => setActiveService(index)}
                className={`group cursor-pointer bg-white/90 backdrop-blur-sm p-10 rounded-3xl transition-all duration-700 border-2 hover:-translate-y-4 relative overflow-hidden ${
                  index === activeService 
                    ? 'border-luxury-gold shadow-2xl shadow-luxury-gold/20 scale-105' 
                    : 'border-gray-100 hover:border-luxury-gold/40 shadow-xl hover:shadow-2xl'
                }`}
              >
                {/* Card Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  <div className={`w-18 h-18 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <IconComponent className={`w-9 h-9 ${index === activeService ? 'text-luxury-gold' : 'text-luxury-gold group-hover:text-luxury-gold'}`} />
                  </div>
                  
                  <h3 className="font-playfair text-2xl font-bold text-luxury-charcoal mb-4 group-hover:text-luxury-gold transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <div className="bg-gradient-to-r from-luxury-gold/15 to-luxury-gold/10 rounded-full px-4 py-2 mb-6 inline-block border border-luxury-gold/20">
                    <span className="font-inter text-sm font-semibold text-luxury-gold">
                      {service.highlight}
                    </span>
                  </div>
                  
                  {/* Premium indicator */}
                  <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold/50 rounded-full"></div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <Sparkles className="absolute top-4 right-4 w-4 h-4 text-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
