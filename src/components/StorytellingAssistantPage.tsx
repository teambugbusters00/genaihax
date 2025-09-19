import React from 'react';
import { Link } from 'react-router-dom';

const StorytellingAssistantPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <div className="flex h-full min-h-screen flex-col">
        <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="container mx-auto flex items-center justify-between p-4">
            <Link to="/" className="flex items-center justify-center p-2">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back</span>
            </Link>
            <h1 className="flex-1 text-center text-lg font-bold text-slate-900 dark:text-white">Create Story</h1>
            <div className="w-8"></div>
          </div>
        </header>
        <main className="flex-1 space-y-6 p-4">
          <div className="space-y-2">
            <textarea className="form-textarea w-full resize-none rounded-lg border-slate-300 bg-white p-4 text-base text-slate-800 placeholder-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:border-primary dark:focus:ring-primary" placeholder="Enter your product details here..." rows={5}></textarea>
          </div>
          <div className="space-y-2">
            <select className="form-select w-full appearance-none rounded-lg border-slate-300 bg-white pr-10 text-base text-slate-800 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-primary dark:focus:ring-primary">
              <option>Auto-detect</option>
              <option>English</option>
            </select>
          </div>
        </main>
        <footer className="sticky bottom-0 bg-background-light/80 p-4 backdrop-blur-sm dark:bg-background-dark/80">
          <Link to="/" className="w-full rounded-xl bg-primary py-4 font-bold text-white transition-opacity hover:opacity-90 block text-center">
            Generate Story
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default StorytellingAssistantPage;