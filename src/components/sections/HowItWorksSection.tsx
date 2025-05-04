import React from 'react';
import { Radar, Brain, Settings, LineChart } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="relative">
          {/* Desktop view: horizontal timeline */}
          <div className="hidden md:block">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-4 gap-4">
              <div className="relative text-center">
                <div className="bg-white border-4 border-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Radar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sense</h3>
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <p className="text-gray-600  mb-4">Realtime inputs from temp, humidity & occupancy</p>
                  <ul className="text-left text-gray-600 text-sm space-y-2">
                    <li>• Multiple sensor integration</li>
                    <li>• Pattern detection</li>
                    <li>• Environmental monitoring</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative text-center">
                <div className="bg-white border-4 border-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analyze</h3>
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <p className="text-gray-600 mb-4">AI-powered analysis of collected data and real-time feedback</p>
                  <ul className="text-left text-gray-600 text-sm space-y-2">
                    <li>• Threshold-based and dynamic rule processing</li>
                    <li>• Comfort optimization</li>
                    <li>• Predictive modeling</li>
                    
                  </ul>
                </div>
              </div>
              
              <div className="relative text-center">
                <div className="bg-white border-4 border-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Optimize</h3>
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <p className="text-gray-600 mb-4">Smart switching via intelligent control powered by algorithms</p>
                  <ul className="text-left text-gray-600 text-sm space-y-2">
                    <li>• Feedback loops for energy balance</li>
                    <li>• Adaptive system response</li>
                    <li>• Optimal performance settings</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative text-center">
                <div className="bg-white border-4 border-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <LineChart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Monitor</h3>
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <p className="text-gray-600 mb-4">Mobile access to system performance with analytics reporting on cloud</p>
                  <ul className="text-left text-gray-600 text-sm space-y-2">
                    <li>• Real-time monitoring</li>
                    <li>• Cloud analytics and alerts</li>
                    <li>• Performance reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile view: vertical timeline */}
          <div className="md:hidden space-y-8">
            <div className="flex">
              <div className="relative mr-4">
                <div className="absolute h-full w-1 bg-blue-200 left-1/2 transform -translate-x-1/2 z-0"></div>
                <div className="bg-white border-4 border-blue-500 w-12 h-12 rounded-full flex items-center justify-center relative z-10">
                  <Radar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Sense</h3>
                <div className="bg-white rounded-xl shadow-md p-4">
                  <p className="text-gray-600 mb-2">Real-time data from temp, humidity & occupancy sensors</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Multiple sensor integration</li>
                    <li>• Pattern detection</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex">
              <div className="relative mr-4">
                <div className="absolute h-full w-1 bg-blue-200 left-1/2 transform -translate-x-1/2 z-0"></div>
                <div className="bg-white border-4 border-blue-500 w-12 h-12 rounded-full flex items-center justify-center relative z-10">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Analyze</h3>
                <div className="bg-white rounded-xl shadow-md p-4">
                  <p className="text-gray-600 mb-2">AI-powered analysis</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Dynamic rule processing</li>
                    <li>• Comfort optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex">
              <div className="relative mr-4">
                <div className="absolute h-full w-1 bg-blue-200 left-1/2 transform -translate-x-1/2 z-0"></div>
                <div className="bg-white border-4 border-blue-500 w-12 h-12 rounded-full flex items-center justify-center relative z-10">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Optimize</h3>
                <div className="bg-white rounded-xl shadow-md p-4">
                  <p className="text-gray-600 mb-2">Smart switching via intelligent control</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Feedback loops for energy balance</li>
                    <li>• Adaptive system response</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex">
              <div className="relative mr-4">
                <div className="bg-white border-4 border-blue-500 w-12 h-12 rounded-full flex items-center justify-center relative z-10">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Monitor</h3>
                <div className="bg-white rounded-xl shadow-md p-4">
                  <p className="text-gray-600 mb-2">Mobile access</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Real-time monitoring</li>
                    <li>• Cloud analytics and alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;