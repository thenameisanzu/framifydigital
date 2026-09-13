'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative flex items-center justify-center gap-2 rounded-xl p-2 transition-all duration-300 cursor-pointer select-none",
        theme === 'dark'
          ? "bg-white/[0.05] text-amber-300 hover:text-amber-200 border border-white/[0.12] hover:border-amber-400/50 shadow-md backdrop-blur-md"
          : "bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-300 shadow-sm",
        className
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative size-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="size-4.5 text-amber-300 animate-in zoom-in-75 spin-in-45 duration-300" />
        ) : (
          <Moon className="size-4.5 text-indigo-600 animate-in zoom-in-75 -spin-in-45 duration-300" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-semibold">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;
