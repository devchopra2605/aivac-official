import React from 'react';
import { Brain, Cpu, Database, Clock } from 'lucide-react';

const WhatWeDoSection: React.FC = () => {
  return (
    <section id="what-we-do" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do?</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:bg-white/15 transition-all h-full">
              <div className="mb-6">
                <Database className="h-10 w-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-time Data Intelligence</h3>
              <p className="text-blue-100 leading-relaxed">
                AIVAC uses real-time sensor data and AI to automatically adjust HVAC settings based on occupancy and environmental conditions, 
                ensuring optimal comfort with minimal effort.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:bg-white/15 transition-all h-full">
              <div className="mb-6">
                <Brain className="h-10 w-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Advanced AI Optimization</h3>
              <p className="text-blue-100 leading-relaxed">
                Powered by advanced AI, AIVAC optimizes your heating, ventilation, and air conditioning needs, minimizing energy consumption 
                while maximizing comfort. It learns your patterns and adapts in real time.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:bg-white/15 transition-all h-full">
              <div className="mb-6">
                <Cpu className="h-10 w-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart System Integration</h3>
              <p className="text-blue-100 leading-relaxed">
                Our technology seamlessly integrates with existing HVAC infrastructure, transforming conventional systems into 
                intelligent climate control solutions without the need for expensive replacements.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:bg-white/15 transition-all h-full">
              <div className="mb-6">
                <Clock className="h-10 w-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-blue-100 leading-relaxed">
                Our system constantly evolves and improves as it learns from your usage patterns and preferences. The longer it operates, 
                the more personalized and efficient your climate control becomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;