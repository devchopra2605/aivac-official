import React from "react";
import prototypeImage from "/image.png"; // adjust path as needed

const PrototypeSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          Our Prototype
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Revolutionary Climate Control
            </h3>
            <p className="text-gray-700 mb-6">
              AIVAC monitors environmental data and learns room usage patterns.
              Based on real-time AI decisions, it controls HVAC systems for
              maximum energy efficiency and comfort—<strong>without any manual input</strong>.
            </p>

            <h4 className="text-lg font-bold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside space-y-2 text-blue-800 font-medium">
              <li>Multi-sensor environmental monitoring</li>
              <li>Self-learning AI algorithms for pattern recognition</li>
              <li>IoT connectivity for remote management</li>
              <li>Real-time energy consumption analytics</li>
              <li>Compatibility with major HVAC manufacturers</li>
            </ul>

            <a
              href="https://drive.google.com/file/d/1p2fPA8sg_Qy_UMp8A6-JH2HhwtnYkiEz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
            >
              ⬇ Download Brochure (PDF)
            </a>
            <a
              href="https://aivac-prototype.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
            >
              Get Beta Access/Prototype
            </a>
          </div>

          {/* Right image with labels */}
          <div className="relative bg-blue-100 rounded-xl shadow-lg overflow-hidden">
          <img
              src={prototypeImage}
              alt="AIVAC Prototype"
              className="w-full h-auto object-cover rounded-xl"
            />
            {/* Label bottom-left */}
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
              <div className="text-sm font-bold">AI-Powered</div>
              <div className="text-xs">Energy Efficient Design</div>
            </div>
            {/* Circle badge top-right */}
            <div className="absolute top-4 right-4 bg-white text-blue-600 font-bold text-sm rounded-full shadow-lg w-12 h-12 flex items-center justify-center">
              30%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
