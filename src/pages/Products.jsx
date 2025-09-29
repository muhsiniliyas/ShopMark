import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import GlassProductCard from '../components/Product/GlassProductCard';
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon, 
  FunnelIcon,
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { products, categories, getCategoryCount } from '../utils/mockData';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize state from URL parameters
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const search = searchParams.get('search') || '';
    const sort = searchParams.get('sort') || '';
    const minPrice = parseInt(searchParams.get('minPrice')) || 0;
    const maxPrice = parseInt(searchParams.get('maxPrice')) || 1000;
    
    setSelectedCategory(category);
    setSearchQuery(search);
    setSortBy(sort);
    setPriceRange([minPrice, maxPrice]);
  }, [searchParams]);

  // Apply all filters whenever dependencies change
  useEffect(() => {
    applyFilters();
  }, [selectedCategory, searchQuery, priceRange, sortBy, searchParams]);

  const applyFilters = () => {
    setLoading(true);
    
    let filtered = [...products];
    
    // Category filter
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }
    
    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    if (sortBy) {
      switch (sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'newest':
          filtered.sort((a, b) => b.id - a.id);
          break;
        default:
          break;
      }
    }
    
    setFilteredProducts(filtered);
    setLoading(false);
  };

  // Update URL parameters when category changes
  const handleCategoryChange = (categoryId) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (categoryId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', categoryId);
    }
    
    setSearchParams(newParams);
    setSelectedCategory(categoryId);
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    
    if (searchQuery.trim()) {
      newParams.set('search', searchQuery.trim());
    } else {
      newParams.delete('search');
    }
    
    setSearchParams(newParams);
  };

  // Handle sort change
  const handleSortChange = (sortValue) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (sortValue) {
      newParams.set('sort', sortValue);
    } else {
      newParams.delete('sort');
    }
    
    setSearchParams(newParams);
    setSortBy(sortValue);
  };

  // Handle price range change
  const handlePriceRangeChange = (newRange) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (newRange[0] > 0) {
      newParams.set('minPrice', newRange[0].toString());
    } else {
      newParams.delete('minPrice');
    }
    
    if (newRange[1] < 1000) {
      newParams.set('maxPrice', newRange[1].toString());
    } else {
      newParams.delete('maxPrice');
    }
    
    setSearchParams(newParams);
    setPriceRange(newRange);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceRange([0, 1000]);
    setSortBy('');
  };

  // Get active filters count
  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (searchQuery.trim()) count++;
    if (priceRange[0] > 0 || priceRange[1] < 1000) count++;
    if (sortBy) count++;
    return count;
  };

  // Get current category info
  const currentCategoryInfo = categories.find(cat => cat.id === selectedCategory) || categories[0];

  return (
    <div 
      className="min-h-screen py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200')"
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-purple-900/50 to-blue-900/70" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 glass-primary rounded-full opacity-10 glass-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 glass-light rounded-full opacity-15 glass-float animation-delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 glass-dark rounded-full opacity-10 glass-float animation-delay-2000" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="glass-card backdrop-blur-2xl inline-block mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-4xl">{currentCategoryInfo.icon || ''}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg">
                {selectedCategory === 'all' ? 'All Products' : currentCategoryInfo.name}
              </h1>
            </div>
            
            {searchQuery && (
              <div className="flex items-center justify-center space-x-2 mt-4">
                <span className="text-white/70">Results for:</span>
                <span className="px-3 py-1 glass-primary rounded-full text-white font-medium">
                  "{searchQuery}"
                </span>
                <span className="px-3 py-1 glass-light rounded-full text-white/80 text-sm">
                  {filteredProducts.length} found
                </span>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="glass-card backdrop-blur-xl">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products..."
                    className="glass-input w-full pl-12 pr-20 py-4 text-lg focus:ring-2 focus:ring-primary-400/50"
                  />
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/70" />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 glass-button px-6 py-2 hover:scale-105"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-8">
          <div className="glass-light rounded-2xl p-4 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              {/* Left Side - Filters Info */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden glass-button flex items-center space-x-2 px-4 py-2"
                >
                  <FunnelIcon className="w-5 h-5" />
                  <span>Filters</span>
                  {getActiveFiltersCount() > 0 && (
                    <span className="glass-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getActiveFiltersCount()}
                    </span>
                  )}
                </button>
                
                <div className="flex items-center space-x-2 text-white">
                  <span className="font-medium">
                    {loading ? 'Loading...' : `${filteredProducts.length} products`}
                  </span>
                  {getActiveFiltersCount() > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="flex items-center space-x-1 text-primary-300 hover:text-primary-200 text-sm underline"
                    >
                      <XMarkIcon className="w-4 h-4" />
                      <span>Clear all</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Right Side - Sort Options */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-white/70 text-sm">Sort by:</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="dark:glass-input px-4 py-2 pr-8 text-sm appearance-none cursor-pointer min-w-[160px]"
                    >
                      <option value="">Default</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="name">Name: A to Z</option>
                      <option value="newest">Newest First</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70 pointer-events-none" />
                  </div>
                </div>
                
                <div className="text-white/70 text-sm">
                  View: Grid
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className={`glass-card backdrop-blur-xl sticky top-24 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="text-lg font-semibold text-white text-shadow mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const count = category.id === 'all' ? products.length : getCategoryCount(category.id);
                      const isSelected = selectedCategory === category.id;
                      
                      return (
                        <button
                          key={category.id}
                          onClick={() => handleCategoryChange(category.id)}
                          className={`w-full group transition-all duration-300 ${
                            isSelected
                              ? 'glass-primary border-primary-400/50 scale-105 shadow-xl'
                              : 'glass-light hover:glass-primary hover:scale-102 border-white/10'
                          }`}
                        >
                          <div className="flex items-center justify-between p-4">
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">{category.icon || ''}</span>
                              <div className="text-left">
                                <span className={`font-semibold text-shadow transition-colors ${
                                  isSelected ? 'text-white' : 'text-white/90 group-hover:text-white'
                                }`}>
                                  {category.name}
                                </span>
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold transition-all ${
                              isSelected
                                ? 'glass-light text-white'
                                : 'glass-primary text-white/80 group-hover:glass-light group-hover:text-white'
                            }`}>
                              {count}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="text-md font-medium text-white text-shadow mb-4">
                    Price Range
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceRangeChange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="glass-input w-20 px-3 py-2 text-sm"
                        placeholder="Min"
                        min="0"
                      />
                      <span className="text-white/70">-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceRangeChange([priceRange[0], parseInt(e.target.value) || 1000])}
                        className="glass-input w-20 px-3 py-2 text-sm"
                        placeholder="Max"
                        min="0"
                      />
                    </div>
                    <div className="text-white/70 text-sm">
                      ₹{priceRange[0]} - ₹{priceRange[1]}
                    </div>
                  </div>
                </div>

                {/* Quick Price Filters */}
                <div>
                  <h4 className="text-md font-medium text-white text-shadow mb-3">
                    Quick Filters
                  </h4>
                  <div className="space-y-2">
                    {[
                      { label: 'Under ₹25', range: [0, 25] },
                      { label: '₹25 - ₹50', range: [25, 50] },
                      { label: '₹50 - ₹100', range: [50, 100] },
                      { label: 'Over ₹100', range: [100, 1000] }
                    ].map((filter) => (
                      <button
                        key={filter.label}
                        onClick={() => handlePriceRangeChange(filter.range)}
                        className={`w-full text-left px-3 py-2 rounded-xl transition-all duration-200 ${
                          priceRange[0] === filter.range[0] && priceRange[1] === filter.range[1]
                            ? 'glass-primary text-white'
                            : 'glass-light hover:glass-primary text-white/80 hover:text-white'
                        }`}
                      >
                        <span className="text-sm">{filter.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:w-3/4">
            {loading ? (
              <div className="glass-card text-center py-16 backdrop-blur-xl">
                <div className="glass-loading w-16 h-16 mx-auto mb-4" />
                <p className="text-white text-lg">Loading products...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="glass-card text-center py-16 backdrop-blur-xl">
                <div className="text-white/60 mb-6">
                  <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-white mb-4 text-shadow">
                  No products found
                </h3>
                <p className="text-white/70 text-lg mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearAllFilters}
                  className="glass-button px-8 py-3 hover:scale-105"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <GlassProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
