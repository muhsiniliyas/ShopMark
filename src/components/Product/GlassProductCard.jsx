import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCart } from '../../contexts/CartContext';

export default function GlassProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative overflow-hidden rounded-2xl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      {/* Glass Content */}
      <div className="relative z-10 h-96 flex flex-col justify-end p-6">
        {/* Glass Info Panel */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {/* Product Info */}
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2 line-clamp-1">
              {product.name}
            </h3>
            
            <p className="text-white/80 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-white/30'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-white/70">
                ({product.reviews})
              </span>
            </div>

            {/* Price and Actions */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">
                ₹{product.price}
              </span>
              
              <div className="flex items-center gap-2">
                {/* Glass Action Buttons */}
                <button className="backdrop-blur-sm bg-white/20 hover:bg-white/30 border border-white/30 p-2 rounded-xl transition-all duration-300 hover:scale-110">
                  <HeartIcon className="w-5 h-5 text-white" />
                </button>
                
                <button 
                  onClick={() => addToCart(product)}
                  className="backdrop-blur-sm bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <ShoppingCartIcon className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
