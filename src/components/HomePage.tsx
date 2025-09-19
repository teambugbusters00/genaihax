import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="flex flex-col min-h-screen">
        <header className="relative flex items-center justify-center h-[60vh] min-h-[400px] bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(16, 28, 34, 0.7) 0%, rgba(16, 28, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmm9Ki0eU3YPVY-0IZN8_hak-YOf4YeYGWdA-PUu5F93Pvh2Zz0PW7aMEep8lrSBatkC9m5pFwcq_pEP7eK8_MEYYj4Old-t-jGExs5dEirrTdMVzLq-n3AylYTj8wp9ZN8OcUArBOyOBirG1b2i0iEi9Fl-LoO_0rYSU-4-dZ5p4jrtaWnkJ5OmYkWAjafBYhbGmJcke1uDEMA6F0rM1RB61mMzwo85NgwTdVqQhoMy2hrHHx1IUaKAdeSQ4ZqMbLyWMnClqLxrE")'}}>
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Crafting the Future of Handmade Goods</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">Empowering artisans with AI to showcase and sell their unique creations in a global marketplace.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/upload" className="w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined mr-2">upload</span>
                Upload Product
              </Link>
              <Link to="/quick-scrape" className="w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-lg bg-gray-100/10 dark:bg-gray-800/50 text-white font-semibold backdrop-blur-sm border border-white/20 hover:bg-gray-100/20 dark:hover:bg-gray-800/70 transition-colors">
                <span className="material-symbols-outlined mr-2">document_scanner</span>
                Start Scrape
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-grow p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">AI-Powered Benefits</h2>
            <p className="mt-2 text-center text-gray-600 dark:text-gray-400">Unlock your creative potential with our suite of AI tools.</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">Generate Product Copy</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Craft compelling product descriptions with AI, highlighting the unique story and craftsmanship behind each item.</p>
              </div>
              <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">photo_filter</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">Visual Touch-ups</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Enhance product visuals with AI-powered touch-ups, ensuring your creations look their absolute best.</p>
              </div>
              <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">public</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">Offline Opportunities</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Connect with buyers beyond the digital realm, expanding your reach and sales potential to new markets.</p>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-white/5 dark:bg-background-dark/50 mt-12 py-6 px-4">
          <div className="max-w-6xl mx-auto text-center text-gray-500 dark:text-gray-400">
            <p>© 2024 Artisan AI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;