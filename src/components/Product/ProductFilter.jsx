import React, { useState } from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

export default function ProductFilter({ onFilterChange, filters }) {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState('');

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    const newRange = e.target.name === 'minPrice' 
      ? [value, priceRange[1]] 
      : [priceRange[0], value];
    setPriceRange(newRange);
    onFilterChange({ ...filters, priceRange: newRange });
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    onFilterChange({ ...filters, rating });
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    onFilterChange({ ...filters, sortBy: sort });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="p-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Filters
          </h3>
          <AdjustmentsHorizontalIcon className="w-5 h-5" />
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} lg:block space-y-6 mt-4 lg:mt-0`}>
          {/* Price Range */}
          <div>
            <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">
              Price Range
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  name="minPrice"
                  value={priceRange[0]}
                  onChange={handlePriceChange}
                  className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Min"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  name="maxPrice"
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                  className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">
              Minimum Rating
            </h4>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={selectedRating === rating}
                    onChange={() => handleRatingChange(rating)}
                    className="sr-only"
                  />
                  <div className={`flex items-center p-2 rounded ${
                    selectedRating === rating 
                      ? 'bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        & Up
                      </span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div>
            <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">
              Sort By
            </h4>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
