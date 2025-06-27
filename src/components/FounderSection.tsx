
import { Quote, Award, Crown, Sparkles, Diamond, Star, Users, Globe } from 'lucide-react';

const FounderSection = () => {
  return (
    <section id="founder" className="py-32 bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-luxury-gold/8 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto">
              {/* Reduced and Enhanced Image Container */}
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=450&fit=crop&crop=face"
                  alt="Alexander Aurelius, Founder"
                  className="w-full h-full object-cover"
                />
                
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/30 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 via-transparent to-transparent"></div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold/80 rounded-3xl flex items-center justify-center shadow-2xl animate-float border-4 border-white">
                <Crown className="w-10 h-10 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl border-2 border-luxury-gold/20">
                <div className="text-center">
                  <p className="font-playfair text-xl font-bold text-luxury-gold">25+</p>
                  <p className="font-inter text-xs text-gray-500 font-semibold">Years</p>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <Award className="w-8 h-8 text-luxury-gold" />
              </div>

              {/* Premium Decorative Elements */}
              <div className="absolute top-1/4 -left-12 w-32 h-32 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 -right-16 w-40 h-40 bg-gradient-to-br from-luxury-gold/8 to-transparent rounded-full blur-2xl"></div>
              
              {/* Floating Icons */}
              <Sparkles className="absolute top-8 right-16 w-5 h-5 text-luxury-gold/40 animate-pulse" />
              <Diamond className="absolute bottom-16 left-8 w-4 h-4 text-luxury-gold/50 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          <div className="animate-fade-in-up order-1 lg:order-2">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-luxury-gold/15 via-white/90 to-luxury-gold/15 backdrop-blur-lg rounded-full px-8 py-4 mb-12 border-2 border-luxury-gold/30 shadow-xl">
              <Crown className="w-5 h-5 text-luxury-gold fill-current" />
              <span className="font-inter text-sm font-bold text-luxury-gold tracking-widest uppercase">Visionary Leadership</span>
              <Sparkles className="w-5 h-5 text-luxury-gold fill-current" />
            </div>
            
            {/* Enhanced Typography */}
            <h2 className="font-playfair text-6xl md:text-7xl font-bold text-luxury-charcoal mb-12 leading-tight">
              <span className="block mb-4">Meet Our</span>
              <span className="text-luxury-gold italic relative">
                Founder
                <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-luxury-gold via-luxury-gold to-luxury-gold/50 rounded-full"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-luxury-gold/10 to-transparent rounded-2xl -z-10 blur-xl"></div>
              </span>
            </h2>
            
            {/* Enhanced Name and Title */}
            <div className="mb-12">
              <h3 className="font-playfair text-4xl font-bold text-luxury-charcoal mb-4">
                Alexander Aurelius
              </h3>
              <div className="flex items-center space-x-4 mb-6">
                <p className="font-inter text-luxury-gold font-bold text-xl">
                  Founder & Chairman
                </p>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-luxury-gold" />
                  <span className="font-inter text-sm text-gray-500 font-semibold">Industry Pioneer</span>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-luxury-gold fill-current" />
                ))}
              </div>
            </div>
            
            {/* Enhanced Quote */}
            <blockquote className="relative mb-12">
              <div className="absolute -left-6 -top-4 text-8xl text-luxury-gold/20 font-playfair">"</div>
              <div className="bg-gradient-to-r from-luxury-gold/8 via-luxury-gold/5 to-transparent p-10 rounded-3xl border-l-4 border-luxury-gold ml-8 shadow-lg">
                <p className="font-inter text-2xl text-gray-700 leading-relaxed italic mb-6 font-light">
                  "Luxury isn't just about opulence—it's about creating moments that touch the soul. 
                  Every guest who walks through our doors becomes part of our family, and every experience 
                  we craft is a testament to our unwavering commitment to excellence."
                </p>
                <div className="flex items-center space-x-3">
                  <p className="font-inter text-sm text-luxury-gold font-bold">— Alexander Aurelius</p>
                  <Diamond className="w-4 h-4 text-luxury-gold" />
                </div>
              </div>
            </blockquote>
            
            {/* Enhanced Description */}
            <p className="font-inter text-xl text-gray-600 mb-12 leading-relaxed">
              With over three decades of visionary leadership in luxury hospitality, Alexander has revolutionized 
              industry standards through his philosophy of <span className="text-luxury-gold font-semibold italic">"luxury with soul"</span>. His innovative approach continues 
              to define the Aurelius experience, creating unforgettable memories for discerning guests worldwide.
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <p className="font-playfair text-3xl font-bold text-luxury-gold">30+</p>
                </div>
                <p className="font-inter text-sm font-bold text-luxury-charcoal">Years Experience</p>
                <p className="font-inter text-xs text-gray-500">Industry Leadership</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <p className="font-playfair text-3xl font-bold text-luxury-gold">15</p>
                </div>
                <p className="font-inter text-sm font-bold text-luxury-charcoal">Global Awards</p>
                <p className="font-inter text-xs text-gray-500">Excellence Recognition</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <p className="font-playfair text-3xl font-bold text-luxury-gold">5</p>
                </div>
                <p className="font-inter text-sm font-bold text-luxury-charcoal">Luxury Properties</p>
                <p className="font-inter text-xs text-gray-500">Worldwide Portfolio</p>
              </div>
            </div>

            {/* Enhanced Action Button */}
            <button className="bg-gradient-to-r from-luxury-gold to-luxury-gold/90 text-white px-12 py-5 rounded-full font-inter font-bold text-lg hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-luxury-gold/30 group relative overflow-hidden">
              <span className="relative z-10 flex items-center space-x-3">
                <span>Read Full Biography</span>
                <Crown className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
