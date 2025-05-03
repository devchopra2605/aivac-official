import React from 'react';
import { Award, BookOpen, Leaf, Quote } from 'lucide-react';

const HistorySection: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Founder</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            AIVAC was founded by Dev Chopra, an experienced engineer with a passion for creating sustainable, 
            intelligent solutions that improve everyday life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accomplished Engineer</h3>
              <p className="text-gray-600">
                With extensive experience at DRDO and CSIR, Dev brings deep technical expertise to AIVAC's innovative solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patent Holder</h3>
              <p className="text-gray-600">
                Recognized by the Government of India for innovative contributions in smart embedded systems.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Sustainable Vision</h3>
            <p className="text-gray-600">
              Dedicated to creating technology that reduces energy consumption while enhancing comfort and convenience.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Quote className="h-6 w-6 text-white" />
            </div>
            <p className="text-lg italic mb-4">
              "I believe that the future of home climate control lies in intelligent systems that understand and adapt to human needs while minimizing environmental impact."
            </p>
            <p className="font-semibold">— Dev Chopra, Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;