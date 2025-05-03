import React from 'react';
import { Zap, Shield, BarChart3, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Priority is Quality</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
            AIVAC uses AI to control HVAC systems intelligently, reducing energy usage by up to <span className="font-bold text-blue-600">30%</span>. 
            Built for <span className="font-bold text-blue-600">reliability</span>, 
            <span className="font-bold text-blue-600"> efficiency</span>, and 
            <span className="font-bold text-blue-600"> performance</span>, our system learns from your behavior to deliver 
            customized comfort while minimizing power bills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Reliability</h3>
            <p className="text-gray-600 text-center">
              Built with industrial-grade components for long-term operation with minimal maintenance.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Efficiency</h3>
            <p className="text-gray-600 text-center">
              Optimizes energy usage with AI-driven algorithms that adapt to your living patterns.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Performance</h3>
            <p className="text-gray-600 text-center">
              Delivers precise climate control that maintains your desired settings with minimal fluctuation.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Quality</h3>
            <p className="text-gray-600 text-center">
              Engineered to exceed industry standards with premium materials and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;