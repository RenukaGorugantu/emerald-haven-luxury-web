
import { Quote } from 'lucide-react';

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="Alexander Aurelius, Founder"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center shadow-lg animate-float">
              <Quote className="w-10 h-10 text-white" />
            </div>
          </div>

          <div className="animate-fade-in-up">
            <div className="inline-block bg-luxury-gold/10 rounded-full px-4 py-2 mb-6">
              <span className="font-inter text-sm font-medium text-luxury-gold">Visionary Leader</span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6">
              Meet Our <span className="text-luxury-gold italic">Founder</span>
            </h2>
            
            <div className="mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-luxury-charcoal mb-2">
                Alexander Aurelius
              </h3>
              <p className="font-inter text-luxury-gold font-medium">
                Founder & Chairman
              </p>
            </div>
            
            <blockquote className="relative mb-8">
              <div className="absolute -left-4 -top-2 text-6xl text-luxury-gold/20 font-playfair">"</div>
              <p className="font-inter text-lg text-gray-600 leading-relaxed italic pl-8">
                "My vision was simple yet profound: to create a sanctuary where luxury isn't just experienced, 
                but felt in every heartbeat. Aurelius Grand Hotel represents my lifelong commitment to 
                excellence, where each guest becomes part of our extended family."
              </p>
            </blockquote>
            
            <p className="font-inter text-gray-600 mb-6 leading-relaxed">
              With over three decades in luxury hospitality, Alexander has transformed the industry's 
              standards through his unwavering commitment to personalized service and innovative excellence. 
              His philosophy of "luxury with soul" continues to guide every aspect of the Aurelius experience.
            </p>

            <div className="flex items-center space-x-8">
              <div>
                <p className="font-playfair text-2xl font-bold text-luxury-charcoal">30+</p>
                <p className="font-inter text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <p className="font-playfair text-2xl font-bold text-luxury-charcoal">15</p>
                <p className="font-inter text-sm text-gray-500">International Awards</p>
              </div>
              <div>
                <p className="font-playfair text-2xl font-bold text-luxury-charcoal">5</p>
                <p className="font-inter text-sm text-gray-500">Luxury Properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
