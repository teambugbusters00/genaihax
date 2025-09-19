import React from 'react';
import { Link } from 'react-router-dom';

const QuickScrapeModal: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center animate-fade-in z-50">
      <div className="w-full max-w-lg glass rounded-3xl shadow-2xl flex flex-col animate-slide-up border border-white/10 relative overflow-hidden">
        {/* Background particles for the modal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse"></div>
        </div>

        <div className="p-8 text-center relative z-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent mb-2 animate-glow">
            Scrape Product Information
          </h1>
          <p className="text-gray-400 text-lg">Enter a product URL to extract data</p>
        </div>

        <div className="px-8 pb-8 flex-grow relative z-10">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10">
                <span className="material-symbols-outlined text-primary text-xl">link</span>
              </div>
              <input
                className="w-full pl-16 pr-6 py-5 glass border border-primary/30 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white placeholder-white/50 text-lg transition-all duration-300 hover:border-primary/50 bg-white/5"
                placeholder="https://example.com/product-url"
                type="url"
              />
            </div>
            <div className="text-sm text-gray-400 animate-fade-in space-y-3" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center justify-center gap-2 p-3 glass rounded-xl border border-green-500/20">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
                <span>Supports major e-commerce platforms</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 glass rounded-xl border border-blue-500/20">
                <span className="material-symbols-outlined text-blue-400">auto_awesome</span>
                <span>AI-powered data extraction</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 glass border-t border-white/10 rounded-b-3xl relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <button className="group w-full glass border border-red-500/30 text-red-400 font-semibold py-4 px-6 rounded-2xl hover:border-red-500/60 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined group-hover:animate-bounce">close</span>
              <span>Cancel</span>
            </button>
            <Link
              to="/scraping-detail"
              className="group w-full bg-gradient-to-r from-primary to-blue-500 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 animate-glow"
            >
              <span className="material-symbols-outlined text-xl group-hover:animate-spin">rocket_launch</span>
              <span>Start Scrape</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickScrapeModal;