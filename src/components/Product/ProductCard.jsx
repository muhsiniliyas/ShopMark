import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCart } from '../../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {product.name}
        </h3>
        
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={`${
                  product.rating > rating
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                } h-4 w-4 flex-shrink-0`}
              />
            ))}
          </div>
          <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            ({product.reviews})
          </p>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            ₹{product.price}
          </p>
          
          <button
            onClick={handleAddToCart}
            className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors duration-200 transform hover:scale-105"
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Link>
  );
}
