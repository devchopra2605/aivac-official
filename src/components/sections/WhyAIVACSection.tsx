import React from 'react';
import { Zap, Thermometer, DollarSign, Plug } from 'lucide-react';

const WhyAIVACSection: React.FC = () => {
  return (
    <section id="why-aivac" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why AIVAC?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI-powered HVAC system delivers unparalleled comfort and efficiency, setting a new standard in climate control technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-90 z-0"></div>
            
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 group-hover:bg-white/20 transition-colors">
              <Zap className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3 relative z-10 group-hover:text-white transition-colors">AI-Driven Optimization</h3>
            
            <p className="text-gray-600 group-hover:text-white/90 transition-colors relative z-10">
              Learns from your environment to make smart climate decisions
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-90 z-0"></div>
            
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 group-hover:bg-white/20 transition-colors">
              <Thermometer className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3 relative z-10 group-hover:text-white transition-colors">Comfort Control</h3>
            
            <p className="text-gray-600 group-hover:text-white/90 transition-colors relative z-10">
              Maintains ideal room conditions based on your preferences
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-90 z-0"></div>
            
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 group-hover:bg-white/20 transition-colors">
              <DollarSign className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3 relative z-10 group-hover:text-white transition-colors">Energy Savings</h3>
            
            <p className="text-gray-600 group-hover:text-white/90 transition-colors relative z-10">
              Reduces electricity bills by up to 30%
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-90 z-0"></div>
            
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 group-hover:bg-white/20 transition-colors">
              <Plug className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3 relative z-10 group-hover:text-white transition-colors">Easy Integration</h3>
            
            <p className="text-gray-600 group-hover:text-white/90 transition-colors relative z-10">
              Works with most existing HVAC systems
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-8 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">30%</h3>
              <p className="text-gray-600">Average Energy Savings</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-gray-600">Continuous Monitoring</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">2x</h3>
              <p className="text-gray-600">Longer HVAC System Life</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAIVACSection;