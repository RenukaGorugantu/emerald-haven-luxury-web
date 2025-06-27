
import { Quote, Award, Crown, Sparkles } from 'lucide-react';

const FounderSection = () => {
  return (
    <section id="founder" className="py-24 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              {/* Reduced image container size */}
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Alexander Aurelius, Founder"
                  className="w-full h-full object-cover"
                />
                
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold/80 rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <Crown className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <p className="font-playfair text-lg font-bold text-luxury-charcoal">25+</p>
                  <p className="font-inter text-xs text-gray-500">Years</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-8 w-24 h-24 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 -right-8 w-32 h-32 bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>

          <div className="animate-fade-in-up order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5 rounded-full px-6 py-3 mb-8 border border-luxury-gold/20">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span className="font-inter text-sm font-semibold text-luxury-gold tracking-wide">VISIONARY LEADERSHIP</span>
            </div>
            
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-charcoal mb-8 leading-tight">
              Meet Our
              <br />
              <span className="text-luxury-gold italic relative">
                Founder
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold/50 rounded-full"></div>
              </span>
            </h2>
            
            <div className="mb-10">
              <h3 className="font-playfair text-3xl font-semibold text-luxury-charcoal mb-3">
                Alexander Aurelius
              </h3>
              <div className="flex items-center space-x-3 mb-6">
                <p className="font-inter text-luxury-gold font-semibold text-lg">
                  Founder & Chairman
                </p>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4 text-luxury-gold" />
                  <span className="font-inter text-sm text-gray-500">Industry Pioneer</span>
                </div>
              </div>
            </div>
            
            <blockquote className="relative mb-10">
              <div className="absolute -left-4 -top-2 text-6xl text-luxury-gold/30 font-playfair">"</div>
              <div className="bg-gradient-to-r from-luxury-gold/5 to-transparent p-8 rounded-2xl border-l-4 border-luxury-gold ml-8">
                <p className="font-inter text-xl text-gray-700 leading-relaxed italic mb-4">
                  "Luxury isn't just about opulence—it's about creating moments that touch the soul. 
                  Every guest who walks through our doors becomes part of our family, and every experience 
                  we craft is a testament to our unwavering commitment to excellence."
                </p>
                <p className="font-inter text-sm text-luxury-gold font-semibold">— Alexander Aurelius</p>
              </div>
            </blockquote>
            
            <p className="font-inter text-lg text-gray-600 mb-10 leading-relaxed">
              With over three decades of visionary leadership in luxury hospitality, Alexander has revolutionized 
              industry standards through his philosophy of "luxury with soul." His innovative approach continues 
              to define the Aurelius experience, creating unforgettable memories for discerning guests worldwide.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <p className="font-playfair text-2xl font-bold text-luxury-gold">30+</p>
                </div>
                <p className="font-inter text-sm font-semibold text-luxury-charcoal">Years Experience</p>
                <p className="font-inter text-xs text-gray-500">Industry Leadership</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <p className="font-playfair text-2xl font-bold text-luxury-gold">15</p>
                </div>
                <p className="font-inter text-sm font-semibold text-luxury-charcoal">Global Awards</p>
                <p className="font-inter text-xs text-gray-500">Excellence Recognition</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <p className="font-playfair text-2xl font-bold text-luxury-gold">5</p>
                </div>
                <p className="font-inter text-sm font-semibold text-luxury-charcoal">Luxury Properties</p>
                <p className="font-inter text-xs text-gray-500">Worldwide Portfolio</p>
              </div>
            </div>

            <button className="bg-luxury-gold text-white px-10 py-4 rounded-full font-inter font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg">
              Read Full Biography
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
