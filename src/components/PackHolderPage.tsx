import React from 'react';
import { Link } from 'react-router-dom';

const PackHolderPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-background-light via-primary-light/30 to-primary/20 dark:from-background-dark dark:via-primary-dark/20 dark:to-primary/10 font-display text-gray-900 dark:text-gray-100 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-12 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-24 right-12 w-32 h-32 bg-red-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/15 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="flex flex-col min-h-screen relative z-10">
        <header className="sticky top-0 z-20 glass border-b border-white/10">
          <div className="flex items-center p-6">
            <Link to="/" className="group p-3 -m-3 rounded-full hover:bg-white/10 transition-all transform hover:scale-110">
              <span className="material-symbols-outlined text-lg group-hover:animate-pulse">arrow_back</span>
            </Link>
            <h1 className="flex-1 text-center text-2xl font-bold bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text text-transparent animate-glow">
              Product Packs
            </h1>
            <div className="w-8"></div>
          </div>
        </header>
        <main className="flex-1 px-6 py-8 space-y-8 animate-fade-in">
          <section className="animate-slide-up">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-6">
              Your Product Collections
            </h2>
            <div className="space-y-4">
              <Link to="/upload" className="group flex items-center gap-6 p-6 rounded-2xl glass border border-primary/20 hover:border-primary/40 transition-all duration-500 transform hover:scale-102 hover:shadow-2xl hover:shadow-primary/20">
                <div className="w-20 h-20 rounded-2xl bg-cover bg-center shadow-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRN-WrW_t5uFFJX5agql__4AAAy75QyE1jhTbs_IcJTs96AOfvrZTfMbM2VyiOTklA-VwjJ0oUgwlswyiWc3ecu3HTQba85Dm5lZKEx_yLq1eVWUyXQtsdgjxQk08KLiMv2Jz022RAzdFQSwdUuhBJIKehf3E2Woh-3puURH_0n5cwCyt2Dm4OSRLgBvl-UZTkW8_YAGRzPEa5cIxgZfkHvplAmVczzn37b7opT1AidYShEPDF-qByxypMHhOFPgXytXLnk6iNMYE")'}}></div>
                <div className="flex-1">
                  <p className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Summer Essentials</p>
                  <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">inventory_2</span>
                    3 items
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$79.99</p>
                  <p className="text-sm text-green-600 dark:text-green-400">Save 15%</p>
                </div>
              </Link>
              {/* Additional pack items with different styling */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl glass border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">package</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Winter Collection</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">5 items</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">$124.99</p>
                </div>
                <div className="p-4 rounded-xl glass border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">eco</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Eco-Friendly</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">4 items</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">$89.99</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="sticky bottom-0 p-6 glass border-t border-white/10">
          <div className="flex justify-end">
            <Link to="/upload" className="group flex items-center justify-center gap-3 h-16 pl-6 pr-8 rounded-2xl bg-gradient-to-r from-primary to-orange-500 text-white font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-glow">
              <span className="material-symbols-outlined text-xl group-hover:animate-spin">add</span>
              <span>Create Pack</span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PackHolderPage;