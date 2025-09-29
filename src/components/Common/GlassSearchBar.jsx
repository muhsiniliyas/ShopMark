import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function GlassSearchBar({ onSearch, placeholder = "Search products..." }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
      <div className="relative">
        {/* Glass Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl 
                   text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 
                   focus:border-white/40 transition-all duration-300 shadow-lg"
        />
        
        {/* Glass Search Icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <MagnifyingGlassIcon className="w-6 h-6 text-white/70" />
        </div>
        
        {/* Glass Submit Button */}
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 backdrop-blur-sm bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
        >
          <span className="text-sm font-medium text-white">Search</span>
        </button>
      </div>
    </form>
  );
}
