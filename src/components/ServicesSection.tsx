
import { Utensils, Waves, Dumbbell, Car, Wifi, Coffee } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'Michelin-starred cuisine crafted by world-renowned chefs using the finest ingredients.',
      features: ['5 Restaurants', '24/7 Room Service', 'Private Chef Available']
    },
    {
      icon: Waves,
      title: 'Luxury Spa',
      description: 'Rejuvenate your mind, body, and soul with our exclusive wellness treatments.',
      features: ['Premium Treatments', 'Infinity Pool', 'Meditation Gardens']
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art equipment and personal training in a luxurious setting.',
      features: ['Latest Equipment', 'Personal Trainers', 'Yoga Classes']
    },
    {
      icon: Car,
      title: 'Concierge Service',
      description: 'Personalized assistance to make your stay seamlessly perfect.',
      features: ['Airport Transfer', 'Tour Planning', '24/7 Assistance']
    },
    {
      icon: Wifi,
      title: 'Business Center',
      description: 'Fully equipped facilities for the modern business traveler.',
      features: ['Meeting Rooms', 'High-Speed WiFi', 'Event Planning']
    },
    {
      icon: Coffee,
      title: 'Premium Amenities',
      description: 'Thoughtfully curated amenities to enhance every moment of your stay.',
      features: ['Butler Service', 'Luxury Linens', 'Premium Toiletries']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-luxury-gold/10 rounded-full px-4 py-2 mb-6">
            <span className="font-inter text-sm font-medium text-luxury-gold">Premium Services</span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6">
            Unparalleled <span className="text-luxury-gold italic">Excellence</span>
          </h2>
          
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a world of luxury services designed to exceed your every expectation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-luxury-gold group-hover:text-white" />
                </div>
                
                <h3 className="font-playfair text-2xl font-semibold text-luxury-charcoal mb-4">
                  {service.title}
                </h3>
                
                <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-inter text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
