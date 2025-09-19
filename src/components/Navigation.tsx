import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CreditsDisplay from './CreditsDisplay';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/services', label: 'Services', icon: 'business_center' },
    { path: '/upload', label: 'Upload', icon: 'upload' },
    { path: '/quick-scrape', label: 'Scrape', icon: 'document_scanner' },
    { path: '/scraping-detail', label: 'Details', icon: 'info' },
    { path: '/storytelling', label: 'Stories', icon: 'auto_stories' },
    { path: '/packs', label: 'Packs', icon: 'inventory_2' },
    { path: '/pricing', label: 'Pricing', icon: 'payments' },
    { path: '/contact', label: 'Contact', icon: 'contact_mail' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 glass p-4 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-110 animate-fade-in"
        style={{animationDelay: '0.5s'}}
      >
        <span className={`material-symbols-outlined text-xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Navigation Menu */}
      <div className={`fixed bottom-20 left-6 z-30 glass rounded-2xl border border-primary/20 p-2 transition-all duration-500 transform ${
        isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-1">
          <div className="px-4 py-2 mb-2">
            <CreditsDisplay />
          </div>
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                isActive(item.path)
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-primary'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <span className={`material-symbols-outlined text-lg transition-all duration-300 ${
                isActive(item.path) ? 'animate-pulse' : 'group-hover:animate-bounce'
              }`}>
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;