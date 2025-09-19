import React from 'react';
import { Link } from 'react-router-dom';

const ScrapingDetailPage: React.FC = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200/50 bg-background-light/80 px-4 py-3 backdrop-blur-sm dark:border-slate-800/50 dark:bg-background-dark/80">
          <Link to="/" className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-display text-lg font-bold text-slate-900 dark:text-white">Product Scraper</h1>
          <div className="w-10"></div>
        </header>
        <main className="flex-grow">
          <section className="p-4">
            <h2 className="font-display mb-3 text-base font-semibold text-slate-900 dark:text-white">Original Source</h2>
            <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="aspect-[4/3] w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqWFf2DuL7fd2MU_m25yb2AzguszaZoOqen3doiEdPXqIrsgkoVA4u4m7qhYWLee2NOU5Xu8KHwYXWpQltdP2LAzt9T6AFt6RGLhl1-uexJ3UDXXZLOeBbGNUKB_kQiqxWkuw3y4yre_m3jJcHezCpRRjm5_quKcrpQf1TxlMFR-m2pC3e5bqCBMuAZT39voPo3s0GrI82QkqTetv_xaSfHkgNg3nkjbaDhT-mtlDhH12zQcxWRLXnUR3uDm-nMz5SvXbHU_TWBSY")'}}></div>
            </div>
          </section>
          <section className="space-y-6 px-4">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-white">Extracted Fields</h2>
            <div>
              <input className="form-input w-full rounded border-slate-300 bg-slate-100 p-3 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500" placeholder="e.g. Handcrafted Wooden Bowl" />
            </div>
          </section>
        </main>
        <footer className="sticky bottom-0 border-t border-slate-200/50 bg-background-light/80 p-4 backdrop-blur-sm dark:border-slate-800/50 dark:bg-background-dark/80">
          <div className="grid grid-cols-2 gap-3">
            <button className="flex h-12 items-center justify-center rounded-lg bg-slate-200 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">Discard</button>
            <Link to="/upload" className="flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white transition-opacity hover:opacity-90">Save Product</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ScrapingDetailPage;