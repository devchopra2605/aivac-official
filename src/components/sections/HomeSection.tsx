import React from 'react';
import { ArrowRight, ArrowUpRight, Download, NotebookIcon} from 'lucide-react';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3987025/pexels-photo-3987025.jpeg')] bg-cover bg-center opacity-15"></div>
      </div>
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              AIVAC | Your Smart AI HVAC
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6 text-blue-100">
              Experience the Future of Smart Climate Control
            </p>
            <p className="mb-8 text-blue-200">
              Powered by – Bluestar India
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-white text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
              >
                Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="https://aivac-prototype.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-700 text-white border border-blue-400 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
              >
                Get Beta Access
                <ArrowUpRight className="ml-2 h-5 w-5"/>
              </a>
              <a 
                href="https://drive.google.com/file/d/1p2fPA8sg_Qy_UMp8A6-JH2HhwtnYkiEz/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-700 text-white border border-blue-400 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
              >
                Download Brochure
                <Download className="ml-2 h-5 w-5" />
              </a>
              <a
                href="public\uploads\AIVAC Prototype Dev Chopra (PS-04 GET).pdf"
                download="AIVAC-Demo-Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-700 text-white border border-blue-400 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
              >
                Demo Guide
                <NotebookIcon className="ml-2 h-5 w-5"/>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-blue-700/30 rounded-2xl backdrop-blur-sm animate-pulse"></div>
              <img 
                src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg" 
                alt="AIVAC App Interface" 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 border border-blue-300/30 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div 
          className="animate-bounce bg-white bg-opacity-30 p-2 w-10 h-10 ring-1 ring-blue-400 shadow-lg rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;