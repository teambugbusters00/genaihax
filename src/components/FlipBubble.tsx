import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FlipBubble: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const navigationItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/services', label: 'Services', icon: 'business_center' },
    { path: '/pricing', label: 'Pricing', icon: 'payments' },
    { path: '/contact', label: 'Contact', icon: 'contact_mail' },
    { path: '/upload', label: 'Upload', icon: 'upload' },
    { path: '/quick-scrape', label: 'Quick Scrape', icon: 'document_scanner' },
    { path: '/storytelling', label: 'AI Stories', icon: 'auto_stories' },
    { path: '/packs', label: 'Packs', icon: 'inventory_2' },
  ];

  return (
    <div className="fixed bottom-6 left-20 z-50">
      <div
        className={`flip-card w-16 h-16 cursor-pointer ${isFlipped ? 'animate-flip' : ''}`}
        onClick={handleFlip}
      >
        <div className="flip-card-inner w-full h-full relative">
          {/* Front Side */}
          <div className="flip-card-front absolute inset-0 w-full h-full backface-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center border-4 border-white">
              <div className="text-center">
                <span className="material-symbols-outlined text-white text-2xl animate-bounce">touch_app</span>
              </div>
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Please click on me to access all pages
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>

          {/* Back Side */}
          <div className="flip-card-back absolute inset-0 w-full h-full backface-hidden">
            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-primary/20 p-2">
              <div className="grid grid-cols-2 gap-1 h-full">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsFlipped(false)}
                    className="group flex flex-col items-center justify-center p-2 rounded-lg hover:bg-primary/10 transition-all duration-200 transform hover:scale-105"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <span className="material-symbols-outlined text-primary text-lg group-hover:animate-bounce">
                      {item.icon}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-gray-300 text-center mt-1 font-medium">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBubble;

// Export empty object to make this a module
export {};