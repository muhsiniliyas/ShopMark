import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../../utils/mockData';

export default function CategoryNav() {
  const location = useLocation();
  const currentCategory = new URLSearchParams(location.search).get('category') || 'all';

  return (
    <nav className="glass-card backdrop-blur-xl mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white text-shadow">
          Categories
        </h3>
        <Link 
          to="/products" 
          className="text-primary-300 hover:text-primary-200 text-sm font-medium transition-colors"
        >
          View All
        </Link>
      </div>
      
      {/* Horizontal Category Pills */}
      <div className="flex flex-wrap gap-3">
        {categories.slice(0, 5).map((category) => { // Show first 5 categories
          const isActive = currentCategory === category.id;
          
          return (
            <Link
              key={category.id}
              to={category.id === 'all' ? '/products' : `/products?category=${category.id}`}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'glass-primary border-primary-400/50 text-white font-semibold scale-105'
                  : 'glass-light hover:glass-primary text-white/80 hover:text-white hover:scale-102'
              }`}
            >
              <span className="text-sm">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          );
        })}
        
        {/* More Categories Dropdown */}
        <div className="relative group">
          <button className="glass-light hover:glass-primary px-4 py-2 rounded-full flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300">
            <span className="text-sm">•••</span>
            <span className="text-sm font-medium">More</span>
          </button>
          
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 mt-2 glass-card backdrop-blur-2xl min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            {categories.slice(5).map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
              >
                <div className="flex items-center space-x-3">
                  <span>{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
