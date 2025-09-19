import React from 'react';
import { Link } from 'react-router-dom';

const QuickScrapeModal: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-end">
      <div className="w-full max-w-lg bg-background-light dark:bg-background-dark rounded-t-xl shadow-2xl flex flex-col">
        <div className="p-4 text-center">
          <div className="mx-auto w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
        <div className="px-6 pb-6 pt-2 flex-grow overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scrape Product Information</h1>
          <div className="space-y-4">
            <div>
              <input className="w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-black/20 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" placeholder="Enter URL" />
            </div>
          </div>
        </div>
        <div className="p-4 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
          <Link to="/scraping-detail" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors block text-center">
            Start Scrape
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickScrapeModal;