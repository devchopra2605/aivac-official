import { NotebookIcon } from 'lucide-react';
import React, { useState } from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  description?: string;
  className?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  title = '',
  description = '',
  className = '',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">AIVAC Prototype Video Demo</h2>
        <p className="text-lg text-gray-600 mb-4">
          AIVAC is designed to maximize thermal comfort while minimizing energy consumption using real-time data, intelligent automation, and a user-friendly mobile interface.
        </p>
        <div className="w-20 h-1 bg-blue-600 rounded"></div>
      </div>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        {error ? (
          <div className="p-4 text-center text-red-600">
            <p>Error loading video: {error}</p>
          </div>
        ) : (
          <>
            <div className="relative pb-[56.25%] h-0">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>
              )}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
                onError={() => setError('Failed to load video')}
              />
            </div>
            {(title || description) && (
              <div className="p-4">
                {title && (
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                )}
                {description && (
                  <p className="text-gray-600">{description}</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <div className="mt-8 text-center">
        <a 
          href="public\uploads\AIVAC Prototype Dev Chopra (PS-04 GET).pdf" 
          download="AIVAC-Demo-Guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Download Demo Guide
          <NotebookIcon className="w-5 h-5"/>
        </a>
      </div>
    </div>
  );
};

export default YouTubeVideo; 