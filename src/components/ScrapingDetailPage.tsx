import React from 'react';
import { Link } from 'react-router-dom';

const ScrapingDetailPage: React.FC = () => {
  return (
    <div className="font-display bg-gradient-to-br from-background-light via-primary-light/30 to-primary/20 dark:from-background-dark dark:via-primary-dark/20 dark:to-primary/10 text-slate-900 dark:text-slate-100 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-8 w-36 h-36 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-16 right-8 w-28 h-28 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-400/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-primary/8 rounded-full blur-xl animate-morph"></div>
        <div className="absolute bottom-1/4 right-1/6 w-12 h-12 bg-cyan-400/12 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="flex min-h-screen flex-col relative z-10">
        <header className="sticky top-0 z-20 glass border-b border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="group flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/10 transition-all transform hover:scale-110">
              <span className="material-symbols-outlined text-lg group-hover:animate-pulse">arrow_back</span>
            </Link>
            <h1 className="font-display text-xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent animate-glow">
              Product Scraper
            </h1>
            <div className="w-12"></div>
          </div>
        </header>
        <main className="flex-grow animate-fade-in">
          <section className="p-6 animate-slide-up">
            <h2 className="font-display mb-4 text-lg font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Original Source
            </h2>
            <div className="overflow-hidden rounded-2xl glass border border-primary/20 shadow-xl">
              <div className="aspect-[4/3] w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqWFf2DuL7fd2MU_m25yb2AzguszaZoOqen3doiEdPXqIrsgkoVA4u4m7qhYWLee2NOU5Xu8KHwYXWpQltdP2LAzt9T6AFt6RGLhl1-uexJ3UDXXZLOeBbGNUKB_kQiqxWkuw3y4yre_m3jJcHezCpRRjm5_quKcrpQf1TxlMFR-m2pC3e5bqCBMuAZT39voPo3s0GrI82QkqTetv_xaSfHkgNg3nkjbaDhT-mtlDhH12zQcxWRLXnUR3uDm-nMz5SvXbHU_TWBSY")'}}></div>
              <div className="p-4 bg-gradient-to-r from-primary/10 to-cyan-500/10">
                <div className="flex items-center gap-2 text-sm text-primary dark:text-cyan-400">
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Successfully scraped from source</span>
                </div>
              </div>
            </div>
          </section>
          <section className="space-y-6 px-6 pb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h2 className="font-display text-lg font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Extracted Fields
            </h2>
            <div className="space-y-4">
              <div className="relative">
                <input className="form-input w-full rounded-2xl glass border border-primary/20 p-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:border-primary/40" placeholder="e.g. Handcrafted Wooden Bowl" />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <span className="material-symbols-outlined text-primary/60">edit</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4 border border-primary/20">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Price</div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">$29.99</div>
                </div>
                <div className="glass rounded-xl p-4 border border-primary/20">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Category</div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">Home Decor</div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="sticky bottom-0 glass border-t border-white/10 p-6">
          <div className="grid grid-cols-2 gap-4">
            <button className="group flex h-14 items-center justify-center rounded-2xl glass border border-red-500/30 text-red-600 dark:text-red-400 font-bold transition-all duration-300 transform hover:scale-105 hover:bg-red-500/10">
              <span className="material-symbols-outlined mr-2 group-hover:animate-bounce">delete</span>
              Discard
            </button>
            <Link to="/upload" className="group flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-blue-500 text-white font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
              <span className="material-symbols-outlined mr-2 group-hover:animate-spin">save</span>
              Save Product
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ScrapingDetailPage;