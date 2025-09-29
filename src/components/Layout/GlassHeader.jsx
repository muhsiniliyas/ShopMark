import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useCart } from '../../contexts/CartContext';
import ThemeToggle from './ThemeToggle';

export default function GlassHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-white/20 dark:border-gray-700/30' 
        : 'backdrop-blur-md bg-white/60 dark:bg-gray-900/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Glass Effect */}
          <Link to="/" className="flex items-center">
            <div className="backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-2 rounded-xl border border-white/20">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShopMark
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Products', 'Categories'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium transition-colors duration-200">
                  {item}
                </span>
                {/* Glass Underline Effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Glass Cart Button */}
            <Link to="/cart" className="relative group">
              <div className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 p-2 rounded-xl border border-white/20 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
                <ShoppingCartIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 backdrop-blur-sm bg-red-500/90 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center border border-white/30 shadow-lg">
                    {getCartCount()}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
