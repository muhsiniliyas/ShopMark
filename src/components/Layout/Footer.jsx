import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">ShopMark</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for quality products at amazing prices. 
              Shop with confidence and enjoy fast, reliable delivery.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary-400">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-primary-400">Products</Link></li>
              <li><Link to="/cart" className="text-gray-300 hover:text-primary-400">Cart</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400">About Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 ShopMark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
