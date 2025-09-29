import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function GlassModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Glass Backdrop */}
      <div className="min-h-screen px-4 text-center">
        <div 
          className="fixed inset-0 backdrop-blur-md bg-black/30 transition-opacity"
          onClick={onClose}
        />
        
        <span className="inline-block h-screen align-middle" />
        
        {/* Glass Modal */}
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform">
          <div className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border border-white/20 dark:border-gray-700/30 rounded-3xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="backdrop-blur-sm bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 p-2 rounded-xl transition-colors duration-200 border border-gray-200/50 dark:border-gray-700/50"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            
            {/* Content */}
            <div className="px-6 pb-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
