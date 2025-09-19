import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('ThemeToggle must be used within a ThemeProvider');
  }
  const { darkMode, toggleDarkMode } = context;

  return (
    <button
      onClick={toggleDarkMode}
      className="group fixed top-20 right-6 z-40 p-3 rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-2 border-primary/40 hover:border-primary/60 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-fade-in"
      style={{animationDelay: '1s'}}
    >
      <span className={`material-symbols-outlined text-2xl transition-all duration-300 ${darkMode ? 'animate-spin text-yellow-400' : 'group-hover:animate-bounce text-gray-700 dark:text-gray-200'}`}>
        {darkMode ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;