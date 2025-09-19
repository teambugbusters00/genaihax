import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const CreditsDisplay: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const getCreditsColor = (credits: number) => {
    if (credits > 50) return 'text-green-600 dark:text-green-400';
    if (credits > 20) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getCreditsIcon = (credits: number) => {
    if (credits > 50) return 'stars';
    if (credits > 20) return 'bolt';
    return 'warning';
  };

  return (
    <div className="flex items-center gap-2 px-3 py-2 glass rounded-lg border border-primary/20 backdrop-blur-sm">
      <span className="material-symbols-outlined text-primary">
        {getCreditsIcon(user.credits)}
      </span>
      <span className={`font-semibold ${getCreditsColor(user.credits)}`}>
        {user.credits} Credits
      </span>
    </div>
  );
};

export default CreditsDisplay;