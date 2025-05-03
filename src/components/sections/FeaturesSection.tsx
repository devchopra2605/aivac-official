import React from 'react';
import { Smartphone, Clock, Bell, Wifi } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Climate Control in Your Hands</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative mx-auto max-w-xs">
              {/* Phone mockup */}
              <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800">
                <div className="rounded-[2.5rem] overflow-hidden relative bg-blue-500" style={{ height: '550px' }}>
                  {/* App UI mockup */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 p-4">
                    {/* App header */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-white font-bold">AIVAC</div>
                      <div className="bg-blue-500 rounded-full p-1">
                        <Bell className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Temperature display */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-blue-100 text-xs">CURRENT TEMPERATURE</p>
                          <p className="text-white text-2xl font-bold">24°C</p>
                        </div>
                        <div className="bg-blue-400/30 rounded-full p-3">
                          <Thermometer className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Room selector */}
                    <div className="flex space-x-2 mb-4">
                      <div className="bg-white/20 rounded-lg px-4 py-2 text-white text-sm">Living Room</div>
                      <div className="bg-white/10 rounded-lg px-4 py-2 text-blue-100 text-sm">Bedroom</div>
                      <div className="bg-white/10 rounded-lg px-4 py-2 text-blue-100 text-sm">Kitchen</div>
                    </div>
                    
                    {/* Temperature control */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                      <p className="text-blue-100 text-xs mb-2">SET TEMPERATURE</p>
                      <div className="flex justify-between items-center">
                        <button className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center">-</button>
                        <p className="text-white text-3xl font-bold">22°C</p>
                        <button className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center">+</button>
                      </div>
                    </div>
                    
                    {/* Mode selector */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                      <p className="text-blue-100 text-xs mb-2">MODE</p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-blue-600 rounded-lg p-2 text-center">
                          <div className="bg-white/20 rounded-full p-2 w-10 h-10 mx-auto mb-1 flex items-center justify-center">
                            <Snowflake className="h-5 w-5 text-white" />
                          </div>
                          <p className="text-white text-xs">Cool</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-2 text-center">
                          <div className="bg-white/10 rounded-full p-2 w-10 h-10 mx-auto mb-1 flex items-center justify-center">
                            <Sun className="h-5 w-5 text-blue-100" />
                          </div>
                          <p className="text-blue-100 text-xs">Heat</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-2 text-center">
                          <div className="bg-white/10 rounded-full p-2 w-10 h-10 mx-auto mb-1 flex items-center justify-center">
                            <Wind className="h-5 w-5 text-blue-100" />
                          </div>
                          <p className="text-blue-100 text-xs">Fan</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Energy usage */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-blue-100 text-xs">ENERGY USAGE</p>
                        <p className="text-green-400 text-xs">-28% vs. last week</p>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-200 rounded-full opacity-50 z-0"></div>
              <div className="absolute -left-10 -top-10 w-20 h-20 bg-blue-300 rounded-full opacity-50 z-0"></div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Remote Access</h3>
                <p className="text-gray-600">
                  Control your HVAC system from anywhere using our mobile app. Adjust settings, monitor performance, and receive alerts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
                <p className="text-gray-600">
                  Set custom schedules for different times of day or let AIVAC learn your patterns and create an optimal schedule automatically.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Bell className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Alerts</h3>
                <p className="text-gray-600">
                  Receive immediate notifications about system performance, maintenance needs, or unusual energy consumption patterns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Wifi className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accessible Anywhere</h3>
                <p className="text-gray-600">
                  Cloud-based system lets you monitor and control your climate settings from any device, anywhere in the world.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-600 rounded-xl text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="mb-4">
                Track your energy usage and savings with detailed analytics, helping you understand exactly how AIVAC is optimizing your system.
              </p>
              <div className="bg-white/10 h-10 rounded-lg overflow-hidden">
                <div className="h-full bg-blue-400 w-3/4"></div>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Current: 0.8 kWh</span>
                <span>Previous Avg: 1.2 kWh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom components for app mockup
const Thermometer = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Snowflake = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l4 4m-4-4l-4 4m8 6H6m12 0l-4 4m4-4l-4-4M6 13l4-4m-4 4l4 4" />
  </svg>
);

const Sun = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Wind = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default FeaturesSection;