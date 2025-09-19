import React from 'react';
import { Link } from 'react-router-dom';

const PackHolderPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="flex items-center p-4">
            <Link to="/" className="p-2 -m-2 text-gray-600 dark:text-gray-400">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="flex-1 text-center text-lg font-bold text-gray-900 dark:text-white">Product Packs</h1>
            <div className="w-8"></div>
          </div>
        </header>
        <main className="flex-1 px-4 py-6 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Existing Packs</h2>
            <div className="space-y-3">
              <Link to="/upload" className="flex items-center gap-4 p-3 rounded-lg bg-background-light/50 dark:bg-background-dark/50 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                <div className="w-16 h-16 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRN-WrW_t5uFFJX5agql__4AAAy75QyE1jhTbs_IcJTs96AOfvrZTfMbM2VyiOTklA-VwjJ0oUgwlswyiWc3ecu3HTQba85Dm5lZKEx_yLq1eVWUyXQtsdgjxQk08KLiMv2Jz022RAzdFQSwdUuhBJIKehf3E2Woh-3puURH_0n5cwCyt2Dm4OSRLgBvl-UZTkW8_YAGRzPEa5cIxgZfkHvplAmVczzn37b7opT1AidYShEPDF-qByxypMHhOFPgXytXLnk6iNMYE")'}}></div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 dark:text-white">Summer Essentials</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">3 items</p>
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white">$79.99</p>
              </Link>
              {/* More pack items */}
            </div>
          </section>
        </main>
        <footer className="sticky bottom-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="flex justify-end">
            <Link to="/upload" className="flex items-center justify-center gap-2 h-14 pl-4 pr-6 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-all">
              <span className="material-symbols-outlined">add</span>
              <span>Create Pack</span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PackHolderPage;