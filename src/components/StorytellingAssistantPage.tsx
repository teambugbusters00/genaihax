import React from 'react';
import { Link } from 'react-router-dom';

const StorytellingAssistantPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-background-light via-primary-light/30 to-primary/20 dark:from-background-dark dark:via-primary-dark/20 dark:to-primary/10 font-display text-slate-900 dark:text-slate-100 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/15 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="flex h-full min-h-screen flex-col relative z-10">
        <header className="sticky top-0 z-20 glass border-b border-white/10">
          <div className="container mx-auto flex items-center justify-between p-6">
            <Link to="/" className="group flex items-center justify-center p-3 -m-3 rounded-full hover:bg-white/10 transition-all transform hover:scale-110">
              <span className="material-symbols-outlined text-xl group-hover:animate-pulse">arrow_back</span>
            </Link>
            <h1 className="flex-1 text-center text-2xl font-bold bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent animate-glow">
              AI Storytelling Assistant
            </h1>
            <div className="w-8"></div>
          </div>
        </header>
        <main className="flex-1 space-y-8 p-6 animate-fade-in">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center animate-slide-up">
              <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Craft Your Product Story
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Describe your product and let AI weave a compelling narrative
              </p>
            </div>
            <div className="space-y-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <textarea className="form-textarea w-full resize-none rounded-2xl glass border border-primary/20 p-6 text-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:border-primary/40 min-h-48" placeholder="Tell us about your handmade creation - its materials, craftsmanship, inspiration, and what makes it special..." rows={8}></textarea>
                <div className="absolute right-4 top-4">
                  <span className="material-symbols-outlined text-primary/60">auto_stories</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  <span>AI-powered storytelling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-500">psychology</span>
                  <span>Emotional connection</span>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="sticky bottom-0 glass border-t border-white/10 p-6">
          <div className="max-w-2xl mx-auto">
            <Link to="/" className="group w-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 animate-glow">
              <span className="material-symbols-outlined text-xl group-hover:animate-spin">magic_button</span>
              <span>Generate Story</span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StorytellingAssistantPage;