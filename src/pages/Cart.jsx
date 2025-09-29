import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, MinusIcon, PlusIcon, ShoppingBagIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { useCart } from '../contexts/CartContext'; // Fixed import path

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div 
        className="min-h-screen py-16 sm:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200')"
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-blue-900/50 to-purple-900/70" />
        
        {/* Floating Elements - Adjusted for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 sm:top-32 left-8 sm:left-32 w-32 sm:w-64 h-32 sm:h-64 glass-light rounded-full opacity-20 glass-float" />
          <div className="absolute bottom-16 sm:bottom-32 right-8 sm:right-32 w-48 sm:w-80 h-48 sm:h-80 glass-primary rounded-full opacity-15 glass-float animation-delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card backdrop-blur-2xl py-8 sm:py-16">
            {/* Empty Cart Icon */}
            <div className="glass-primary w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <ShoppingBagIcon className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-shadow-lg">
              Your cart is empty
            </h2>
            <p className="text-white/80 text-base sm:text-xl mb-6 sm:mb-8 leading-relaxed px-4">
              Looks like you haven't added any items to your cart yet.
              <br className="hidden sm:block" />
              Start shopping and discover amazing products!
            </p>
            
            <Link
              to="/products"
              className="glass-button inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <ShoppingBagIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Start Shopping
            </Link>
          </div>

          {/* Features - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="glass-light rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 glass-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Quality Products</h3>
              <p className="text-white/70 text-sm">Premium quality items carefully selected</p>
            </div>
            
            <div className="glass-light rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 glass-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-white/70 text-sm">Quick shipping to your doorstep</p>
            </div>
            
            <div className="glass-light rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 glass-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Secure Payment</h3>
              <p className="text-white/70 text-sm">Safe and secure checkout process</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + tax + shipping;

  return (
    <div 
      className="min-h-screen py-16 sm:py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200')"
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-purple-900/50 to-blue-900/70" />
      
      {/* Floating Elements - Mobile Adjusted */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 right-8 sm:right-20 w-40 sm:w-72 h-40 sm:h-72 glass-light rounded-full opacity-20 glass-float" />
        <div className="absolute bottom-10 sm:bottom-20 left-8 sm:left-20 w-56 sm:w-96 h-56 sm:h-96 glass-primary rounded-full opacity-15 glass-float animation-delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="glass-card backdrop-blur-2xl inline-block">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-shadow-lg mb-2 sm:mb-4">
              Shopping Cart
            </h1>
            <p className="text-white/80 text-base sm:text-lg">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items - Mobile First Design */}
          <div className="lg:col-span-2">
            <div className="glass-card backdrop-blur-xl mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
                <h2 className="text-xl sm:text-2xl font-semibold text-white text-shadow text-center sm:text-left">
                  Cart Items ({items.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="glass-button text-red-300 hover:text-red-200 px-4 py-2 self-center sm:self-auto flex items-center"
                >
                  <TrashIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="text-sm sm:text-base">Clear All</span>
                </button>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="glass-light rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-md">
                    {/* Mobile Layout - Stack Vertically */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      {/* Product Image and Info - Mobile: Full Width */}
                      <div className="flex items-start space-x-4 sm:space-x-6 flex-1">
                        <div className="relative flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg sm:rounded-xl shadow-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg sm:rounded-xl" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-semibold text-white text-shadow mb-1 sm:mb-2 line-clamp-2">
                            {item.name}
                          </h3>
                          <p className="text-white/70 text-xs sm:text-sm mb-2 line-clamp-2">
                            {item.description}
                          </p>
                          <p className="text-lg sm:text-2xl font-bold text-white text-shadow">
                            ₹{item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      
                      {/* Quantity Controls and Actions - Mobile: Full Width Row */}
                      <div className="flex items-center justify-between sm:justify-end space-x-4 sm:space-x-6">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="glass-button p-2 hover:scale-110 transition-all duration-200"
                            disabled={item.quantity <= 1}
                          >
                            <MinusIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </button>
                          
                          <div className="glass-primary px-3 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl">
                            <span className="text-base sm:text-lg font-semibold text-white text-shadow">
                              {item.quantity}
                            </span>
                          </div>
                          
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="glass-button p-2 hover:scale-110 transition-all duration-200"
                          >
                            <PlusIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </button>
                        </div>
                        
                        {/* Item Total and Remove */}
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="text-right">
                            <p className="text-lg sm:text-2xl font-bold text-white text-shadow">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="glass-button p-2 sm:p-3 text-red-300 hover:text-red-200 hover:scale-110 transition-all duration-200"
                          >
                            <TrashIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary - Mobile: Full Width */}
          <div className="lg:col-span-1">
            <div className="glass-card backdrop-blur-xl lg:sticky lg:top-24">
              <h3 className="text-xl sm:text-2xl font-semibold text-white text-shadow mb-6 text-center lg:text-left">
                Order Summary
              </h3>
              
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/20">
                  <span className="text-white/80 text-sm sm:text-base">
                    Subtotal ({items.length} items)
                  </span>
                  <span className="text-lg sm:text-xl font-semibold text-white text-shadow">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/20">
                  <span className="text-white/80 text-sm sm:text-base">Tax (8%)</span>
                  <span className="text-base sm:text-lg font-medium text-white text-shadow">
                    ₹{tax.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/20">
                  <span className="text-white/80 text-sm sm:text-base">Shipping</span>
                  <span className="text-base sm:text-lg font-medium text-white text-shadow">
                    {shipping === 0 ? (
                      <span className="text-green-300">Free</span>
                    ) : (
                      `₹${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                {shipping === 0 && (
                  <div className="glass-primary rounded-lg sm:rounded-xl p-3">
                    <p className="text-xs sm:text-sm text-green-200 text-center">
                      🎉 Free shipping on orders over ₹100!
                    </p>
                  </div>
                )}
                
                <div className="flex justify-between items-center py-3 sm:py-4 border-t border-white/30">
                  <span className="text-lg sm:text-xl font-bold text-white text-shadow">
                    Total
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-white text-shadow">
                    ₹{total.toFixed(2)}
                  </span>
                </div>
              </div>
              
              {/* Action Buttons - Mobile: Full Width */}
              <div className="space-y-3 sm:space-y-4">
                <button className="glass-button w-full py-3 sm:py-4 text-base sm:text-lg font-semibold bg-primary-500/30 hover:bg-primary-500/50 border-primary-400/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <CreditCardIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  <span>Proceed to Checkout</span>
                </button>
                
                <Link
                  to="/products"
                  className="glass-button w-full py-3 text-center block hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
