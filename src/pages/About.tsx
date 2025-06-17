import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-stencil text-5xl font-bold mb-6 text-orange-500">
            ABOUT RICH-U-ALS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Born from the battlefield, forged for the streets. We create tactical clothing 
            that bridges the gap between military precision and urban style.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-stencil text-3xl font-bold mb-6 text-orange-500">
                OUR MISSION
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                RICH-U-ALS was founded on the principle that tactical gear shouldn't be 
                confined to military operations. We believe that the precision, durability, 
                and functionality of military equipment should be accessible to everyone 
                who demands excellence in their daily lives.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Every piece in our collection is designed with the modern warrior in mind - 
                whether you're navigating urban environments, outdoor adventures, or simply 
                want clothing that can keep up with your demanding lifestyle.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">2019</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">50K+</div>
                  <div className="text-sm text-gray-600">Warriors Equipped</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8532626/pexels-photo-8532626.jpeg"
                alt="RICH-U-ALS Mission"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-stencil text-3xl font-bold mb-4 text-orange-500">
              OUR VALUES
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-stencil text-xl font-bold mb-2">DURABILITY</h3>
              <p className="text-gray-600">
                Built to withstand the toughest conditions and last for years of intensive use.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-stencil text-xl font-bold mb-2">PRECISION</h3>
              <p className="text-gray-600">
                Every detail is carefully considered and executed with military-grade precision.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-stencil text-xl font-bold mb-2">COMMUNITY</h3>
              <p className="text-gray-600">
                Building a brotherhood of individuals who share our commitment to excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-stencil text-xl font-bold mb-2">EXCELLENCE</h3>
              <p className="text-gray-600">
                Never settling for good enough - we strive for perfection in everything we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8532627/pexels-photo-8532627.jpeg"
                alt="RICH-U-ALS Story"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-stencil text-3xl font-bold mb-6 text-orange-500">
                THE RICH-U-ALS STORY
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Founded by veterans who understood the gap between military-grade equipment 
                and civilian clothing, RICH-U-ALS emerged from a simple observation: why 
                should tactical excellence be limited to the battlefield?
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Our founders spent years in service, relying on gear that could mean the 
                difference between mission success and failure. When they returned to 
                civilian life, they found that the same level of quality and functionality 
                simply didn't exist in everyday clothing.
              </p>
              <p className="text-gray-300 text-lg">
                RICH-U-ALS was born to fill that void - creating clothing that honors the 
                tactical heritage while serving the needs of modern warriors in all walks of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-stencil text-3xl font-bold mb-4 text-black">
            READY TO JOIN THE RANKS?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Experience the difference that tactical precision makes in your everyday life. 
            Gear up with RICH-U-ALS today.
          </p>
          <a
            href="/shop"
            className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-block"
          >
            SHOP NOW
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;