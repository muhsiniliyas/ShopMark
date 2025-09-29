import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { products } from '../utils/mockData';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600')"
      }}
    >
      {/* Unified Background Overlay with Gradient Zones */}
      <div className="absolute inset-0">
        {/* Top Section - Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-primary-800/40 to-transparent" />
        
        {/* Middle Section - Products */}
        <div className="absolute top-1/3 bottom-1/3 left-0 right-0 bg-gradient-to-b from-transparent via-purple-900/30 to-transparent" />
        
        {/* Bottom Section - Features */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/60 via-blue-900/40 to-transparent" />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 glass-primary rounded-full opacity-10 glass-float" />
        <div className="absolute top-1/2 right-20 w-80 h-80 glass-light rounded-full opacity-15 glass-pulse animation-delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-64 h-64 glass-dark rounded-full opacity-10 glass-float animation-delay-2000" />
        <div className="absolute top-1/4 right-1/3 w-48 h-48 glass-primary rounded-full opacity-20 glass-pulse animation-delay-3000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl w-full">
            {/* Main Glass Hero Card */}
            <div className="glass-card backdrop-blur-2xl text-center transform hover:scale-105 transition-all duration-500">
              <div className="glass-primary p-4 rounded-2xl mb-8 inline-block">
                <span className="text-6xl"></span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
                Welcome to 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-primary-400 glass-text">
                  ShopMark
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed text-shadow max-w-2xl mx-auto">
                Discover amazing products at unbeatable prices with our premium shopping experience
              </p>

              {/* Enhanced Glass Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/products" 
                  className="glass-button glass-interactive bg-primary-500/30 hover:bg-primary-500/50 border-primary-400/50 px-8 py-4 text-lg font-semibold"
                >
                  <span className="flex items-center justify-center gap-3">
                    <span>Shop Now</span>
                    <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
                
                <button className="glass-button glass-interactive bg-white/10 hover:bg-white/20 px-8 py-4 text-lg font-semibold">
                  <span className="flex items-center justify-center gap-3">
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="glass-light rounded-xl p-4">
                  <div className="text-primary-400 font-bold text-2xl">10K+</div>
                  <div className="text-white/70 text-sm">Happy Customers</div>
                </div>
                <div className="glass-light rounded-xl p-4">
                  <div className="text-primary-400 font-bold text-2xl">50+</div>
                  <div className="text-white/70 text-sm">Product Categories</div>
                </div>
                <div className="glass-light rounded-xl p-4">
                  <div className="text-primary-400 font-bold text-2xl">24/7</div>
                  <div className="text-white/70 text-sm">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="glass-card backdrop-blur-2xl inline-block">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="glass-primary p-3 rounded-xl">
                    <span className="text-3xl"></span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-shadow">
                    Featured Products
                  </h2>
                </div>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Handpicked selections from our premium collection
                </p>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={product.id} className={`animation-delay-${(index + 1) * 1000}`}>
                  <HomeProductCard product={product} />
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="glass-button glass-interactive px-8 py-4 text-lg font-semibold inline-flex items-center space-x-3"
              >
                <span>View All Products</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="glass-card backdrop-blur-2xl inline-block">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow">
                  Why Choose ShopMark?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Experience the difference with our premium service
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quality Products */}
              <div className="glass-card glass-interactive text-center group">
                <div className="glass-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-shadow">
                  Premium Quality
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Every product is carefully selected and tested to meet our high quality standards
                </p>
                <div className="mt-6">
                  <div className="glass-light px-4 py-2 rounded-full inline-block">
                    <span className="text-primary-300 font-semibold">100% Verified</span>
                  </div>
                </div>
              </div>
              
              {/* Fast Shipping */}
              <div className="glass-card glass-interactive text-center group">
                <div className="glass-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-shadow">
                  Lightning Fast
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Express delivery options with real-time tracking for your peace of mind
                </p>
                <div className="mt-6">
                  <div className="glass-light px-4 py-2 rounded-full inline-block">
                    <span className="text-green-300 font-semibold">Same Day Delivery</span>
                  </div>
                </div>
              </div>
              
              {/* 24/7 Support */}
              <div className="glass-card glass-interactive text-center group">
                <div className="glass-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.196l1.732 1m0 14.608L12 21.804m-1.732-1M2.196 12l1 1.732m14.608 0L21.804 12l-1-1.732" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-shadow">
                  Always Available
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Round-the-clock customer support ready to help with any questions or concerns
                </p>
                <div className="mt-6">
                  <div className="glass-light px-4 py-2 rounded-full inline-block">
                    <span className="text-blue-300 font-semibold">24/7 Live Chat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="glass-card backdrop-blur-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-shadow">
                Ready to Start Shopping?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Join thousands of satisfied customers and discover your next favorite product
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/products" 
                  className="glass-button glass-interactive bg-primary-500/30 hover:bg-primary-500/50 border-primary-400/50 px-8 py-4 text-lg font-semibold"
                >
                  Browse Products
                </Link>
                <Link 
                  to="/signup" 
                  className="glass-button glass-interactive px-8 py-4 text-lg font-semibold"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Renamed to HomeProductCard to avoid naming conflict
function HomeProductCard({ product }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl h-96 glass-interactive">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />
      
      {/* Glass Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        {/* Enhanced Glass Info Panel */}
        <div className="glass-card backdrop-blur-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 group-hover:scale-105">
          {/* Product Category */}
          <div className="glass-primary px-3 py-1 rounded-full inline-block mb-3">
            <span className="text-xs font-semibold text-white capitalize">
              {product.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 text-shadow">
            {product.name}
          </h3>
          
          <p className="text-white/80 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating || 4)
                      ? 'text-yellow-400'
                      : 'text-white/30'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-white/70">({product.reviews || 42})</span>
            </div>
          </div>
          
          {/* Price and Action */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white text-shadow">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-white/60 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            
            <button className="glass-button glass-interactive px-6 py-3 hover:scale-110 transition-all duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
              </svg>
              <span className="text-sm font-medium">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sale Badge */}
      {product.originalPrice && (
        <div className="absolute top-4 right-4 z-20">
          <div className="glass-error px-3 py-1 rounded-full">
            <span className="text-xs font-bold text-white">SALE</span>
          </div>
        </div>
      )}
    </div>
  );
}
