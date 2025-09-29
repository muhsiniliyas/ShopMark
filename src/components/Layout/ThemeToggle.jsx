import React from 'react';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <Switch
      checked={isLight}
      onChange={toggleTheme}
      className={`
        relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer rounded-full 
        border-2 border-transparent transition-colors duration-200 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isLight ? 'bg-gray-200' : 'bg-blue-600'}
      `}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`
          pointer-events-none relative inline-block h-7 w-7 transform rounded-full 
          bg-white shadow ring-0 transition duration-200 ease-in-out
          ${isLight ? 'translate-x-8' : 'translate-x-0'}
        `}
      >
        {/* Moon Icon (Dark Mode) */}
        <span
          className={`
            absolute inset-0 flex h-full w-full items-center justify-center 
            transition-opacity
            ${isLight ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in'}
          `}
        >
          <MoonIcon className="h-4 w-4 text-gray-700" />
        </span>
        
        {/* Sun Icon (Light Mode) */}
        <span
          className={`
            absolute inset-0 flex h-full w-full items-center justify-center 
            transition-opacity
            ${isLight ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out'}
          `}
        >
          <SunIcon className="h-4 w-4 text-yellow-500" />
        </span>
      </span>
    </Switch>
  );
}
