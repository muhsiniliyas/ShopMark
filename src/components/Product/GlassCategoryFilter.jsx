import React from 'react';
import { categories } from '../../utils/mockData';

export default function GlassCategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
      <h3 className="text-lg font-semibold text-white mb-6 drop-shadow-md">
        Categories
      </h3>
      
      <div className="space-y-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 border ${
              selectedCategory === category.id
                ? 'backdrop-blur-sm bg-white/20 border-white/40 text-white font-semibold shadow-lg scale-105'
                : 'backdrop-blur-sm bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:scale-102'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
