import React from 'react';
import { Shield, Target, Users, Award, CheckCircle, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-military text-5xl font-bold mb-6 text-gray-900">
            ABOUT <span className="text-orange-500">RICH-U-ALS</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Born from the battlefield, forged for the streets. We create tactical clothing 
            that bridges the gap between military precision and urban style.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-military text-4xl font-bold mb-6 text-gray-900">
                OUR <span className="text-orange-500">MISSION</span>
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                RICH-U-ALS was founded on the principle that tactical gear shouldn't be 
                confined to military operations. We believe that the precision, durability, 
                and functionality of military equipment should be accessible to everyone 
                who demands excellence in their daily lives.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Every piece in our collection is designed with the modern warrior in mind - 
                whether you're navigating urban environments, outdoor adventures, or simply 
                want clothing that can keep up with your demanding lifestyle.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">2019</div>
                  <div className="text-sm text-gray-600 font-medium">Founded</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">50K+</div>
                  <div className="text-sm text-gray-600 font-medium">Warriors Equipped</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/8532626/pexels-photo-8532626.jpeg"
                  alt="RICH-U-ALS Mission"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-military text-4xl font-bold mb-4 text-gray-900">
              OUR <span className="text-orange-500">VALUES</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core principles guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-military text-xl font-bold mb-4 text-gray-900">DURABILITY</h3>
              <p className="text-gray-600 leading-relaxed">
                Built to withstand the toughest conditions and last for years of intensive use.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-military text-xl font-bold mb-4 text-gray-900">PRECISION</h3>
              <p className="text-gray-600 leading-relaxed">
                Every detail is carefully considered and executed with military-grade precision.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-military text-xl font-bold mb-4 text-gray-900">COMMUNITY</h3>
              <p className="text-gray-600 leading-relaxed">
                Building a brotherhood of individuals who share our commitment to excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-military text-xl font-bold mb-4 text-gray-900">EXCELLENCE</h3>
              <p className="text-gray-600 leading-relaxed">
                Never settling for good enough - we strive for perfection in everything we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/8532627/pexels-photo-8532627.jpeg"
                  alt="RICH-U-ALS Story"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="font-military text-4xl font-bold mb-6 text-gray-900">
                THE RICH-U-ALS <span className="text-orange-500">STORY</span>
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Founded by veterans who understood the gap between military-grade equipment 
                and civilian clothing, RICH-U-ALS emerged from a simple observation: why 
                should tactical excellence be limited to the battlefield?
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Our founders spent years in service, relying on gear that could mean the 
                difference between mission success and failure. When they returned to 
                civilian life, they found that the same level of quality and functionality 
                simply didn't exist in everyday clothing.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                RICH-U-ALS was born to fill that void - creating clothing that honors the 
                tactical heritage while serving the needs of modern warriors in all walks of life.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Veteran-founded and operated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Military-grade materials and construction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Designed for modern urban warriors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-military text-4xl font-bold mb-4 text-gray-900">
              WHAT OUR <span className="text-orange-500">WARRIORS</span> SAY
            </h2>
            <p className="text-gray-600 text-lg">
              Real feedback from our community of modern warriors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The quality is unmatched. These aren't just clothes, they're gear that performs 
                when you need it most. Worth every penny."
              </p>
              <div className="font-semibold text-gray-900">- Marcus T., Former Marine</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Finally found clothing that matches my lifestyle. Tactical functionality 
                with street-ready style. RICH-U-ALS gets it right."
              </p>
              <div className="font-semibold text-gray-900">- Sarah K., Outdoor Enthusiast</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The attention to detail is incredible. You can feel the military heritage 
                in every stitch. This is what tactical clothing should be."
              </p>
              <div className="font-semibold text-gray-900">- David R., Law Enforcement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-military text-4xl font-bold mb-4 text-white">
            READY TO JOIN THE RANKS?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the difference that tactical precision makes in your everyday life. 
            Gear up with RICH-U-ALS today.
          </p>
          <Link
            to="/shop"
            className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            SHOP NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;