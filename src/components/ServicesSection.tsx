
import React from 'react';
import { Utensils, Waves, Dumbbell, Car, Wifi, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      icon: Utensils,
      title: 'Michelin Dining',
      description: 'Exquisite culinary journeys crafted by world-renowned chefs using the finest artisanal ingredients.',
      features: ['5 Signature Restaurants', 'Private Chef Service', '24/7 Gourmet Room Service', 'Wine Sommelier'],
      highlight: 'Michelin Star Experience'
    },
    {
      icon: Waves,
      title: 'Wellness Sanctuary',
      description: 'Rejuvenate your essence with our award-winning spa treatments and holistic wellness experiences.',
      features: ['Premium Spa Treatments', 'Infinity Rooftop Pool', 'Meditation Gardens', 'Personal Wellness Coach'],
      highlight: 'Award-Winning Spa'
    },
    {
      icon: Dumbbell,
      title: 'Elite Fitness',
      description: 'State-of-the-art fitness facilities with personal training in an atmosphere of luxury.',
      features: ['Premium Equipment', 'Celebrity Trainers', 'Private Yoga Studios', 'Wellness Programs'],
      highlight: 'Celebrity Training'
    },
    {
      icon: Car,
      title: 'Platinum Concierge',
      description: 'Personalized assistance that anticipates your every need before you even ask.',
      features: ['Luxury Transport', 'Exclusive Access', 'Personal Shopping', 'Event Planning'],
      highlight: 'VIP Access'
    },
    {
      icon: Wifi,
      title: 'Executive Center',
      description: 'Sophisticated business facilities designed for the discerning professional.',
      features: ['Private Boardrooms', 'High-Speed Connectivity', 'Executive Lounge', 'Tech Support'],
      highlight: 'Business Excellence'
    },
    {
      icon: Coffee,
      title: 'Bespoke Amenities',
      description: 'Thoughtfully curated luxury amenities that define the art of premium hospitality.',
      features: ['Butler Service', 'Italian Linens', 'Artisan Toiletries', 'Personalized Touches'],
      highlight: 'Artisan Quality'
    }
  ];

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5 rounded-full px-6 py-3 mb-8 border border-luxury-gold/20">
            <span className="font-inter text-sm font-semibold text-luxury-gold tracking-wide">PREMIUM SERVICES</span>
          </div>
          
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-charcoal mb-8">
            Unparalleled 
            <span className="text-luxury-gold italic"> Excellence</span>
          </h2>
          
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover a world of bespoke services designed to surpass your highest expectations
          </p>
        </div>

        {/* Featured Service Display */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center">
                    {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-luxury-gold" })}
                  </div>
                  <div className="bg-luxury-gold/10 rounded-full px-4 py-1">
                    <span className="font-inter text-xs font-semibold text-luxury-gold tracking-wide">
                      {services[activeService].highlight}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-playfair text-4xl font-bold text-luxury-charcoal mb-6">
                  {services[activeService].title}
                </h3>
                
                <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span className="font-inter text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-luxury-gold text-white px-8 py-3 rounded-full font-inter font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-luxury-gold/5 to-luxury-gold/10 p-12 lg:p-16 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 rounded-full flex items-center justify-center">
                  {React.createElement(services[activeService].icon, { className: "w-32 h-32 text-luxury-gold/60" })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          <button 
            onClick={prevService}
            className="w-12 h-12 bg-white border-2 border-luxury-gold rounded-full flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeService ? 'bg-luxury-gold w-8' : 'bg-gray-300 hover:bg-luxury-gold/50'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextService}
            className="w-12 h-12 bg-white border-2 border-luxury-gold rounded-full flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                onClick={() => setActiveService(index)}
                className={`group cursor-pointer bg-white p-8 rounded-2xl transition-all duration-500 border-2 hover:-translate-y-2 ${
                  index === activeService 
                    ? 'border-luxury-gold shadow-2xl shadow-luxury-gold/20 scale-105' 
                    : 'border-gray-100 hover:border-luxury-gold/30 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="w-14 h-14 bg-luxury-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-300">
                  <IconComponent className={`w-7 h-7 ${index === activeService ? 'text-luxury-gold' : 'text-luxury-gold group-hover:text-white'}`} />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-luxury-charcoal mb-3">
                  {service.title}
                </h3>
                
                <div className="bg-luxury-gold/10 rounded-full px-3 py-1 mb-4 inline-block">
                  <span className="font-inter text-xs font-medium text-luxury-gold">
                    {service.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
