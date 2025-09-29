import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function GlassSearch({ onSearch, placeholder = "Search products..." }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="glass-card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white text-center mb-6 text-shadow">
        Find Your Perfect Product
      </h2>
      
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="glass-input w-full pl-12 pr-4 py-4 text-lg"
          />
          
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <MagnifyingGlassIcon className="w-6 h-6 text-white/70" />
          </div>
          
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 glass-button px-6 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
