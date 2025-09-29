import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { categories, getCategoryCount } from '../../utils/mockData';

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (categoryId, categorySlug) => {
    // Update local state
    onCategoryChange(categoryId);
    
    // Update URL for better UX and bookmarking
    const newUrl = categoryId === 'all' 
      ? '/products' 
      : `/products?category=${categoryId}`;
    
    navigate(newUrl, { replace: true });
  };

  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className="glass-primary rounded-2xl p-4 text-center">
        <h3 className="text-xl font-bold text-white text-shadow mb-2">
          Shop by Category
        </h3>
        <p className="text-white/80 text-sm">
          Find exactly what you're looking for
        </p>
      </div>

      {/* Category List */}
      <div className="space-y-3">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id;
          const productCount = getCategoryCount(category.id);
          
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id, category.slug)}
              className={`w-full group transition-all duration-300 ${
                isSelected
                  ? 'glass-primary border-primary-400/50 scale-105 shadow-xl'
                  : 'glass-light hover:glass-primary hover:scale-102 border-white/10'
              }`}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  {/* Category Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isSelected 
                      ? 'glass-light' 
                      : 'glass-primary group-hover:glass-light'
                  }`}>
                    <span className="text-lg">{category.icon}</span>
                  </div>
                  
                  {/* Category Info */}
                  <div className="text-left">
                    <h4 className={`font-semibold text-shadow transition-colors duration-300 ${
                      isSelected 
                        ? 'text-white' 
                        : 'text-white/90 group-hover:text-white'
                    }`}>
                      {category.name}
                    </h4>
                    <p className="text-white/60 text-xs mt-1 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Product Count */}
                <div className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'glass-light text-white'
                    : 'glass-primary text-white/80 group-hover:glass-light group-hover:text-white'
                }`}>
                  {productCount}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="glass-light rounded-2xl p-4 space-y-3">
        <h4 className="text-white font-semibold text-shadow mb-3">Quick Actions</h4>
        
        <button 
          onClick={() => handleCategoryClick('all')}
          className="glass-button w-full py-2 text-sm hover:scale-105"
        >
          View All Products
        </button>
        
        <button 
          onClick={() => {
            const featuredUrl = '/products?featured=true';
            navigate(featuredUrl);
          }}
          className="glass-button w-full py-2 text-sm hover:scale-105"
        >
          Featured Items
        </button>
        
        <button 
          onClick={() => {
            const saleUrl = '/products?sale=true';
            navigate(saleUrl);
          }}
          className="glass-button w-full py-2 text-sm hover:scale-105"
        >
          On Sale
        </button>
      </div>
    </div>
  );
}
