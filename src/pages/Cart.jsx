import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, MinusIcon, PlusIcon, ShoppingBagIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div 
        className="min-h-screen py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200')"
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-blue-900/50 to-purple-900/70" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-32 w-64 h-64 glass-light rounded-full opacity-20 glass-float" />
          <div className="absolute bottom-32 right-32 w-80 h-80 glass-primary rounded-full opacity-15 glass-float animation-delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card backdrop-blur-2xl py-16">
            {/* Empty Cart Icon */}
            <div className="glass-primary w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBagIcon className="w-16 h-16 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6 text-shadow-lg">
              Your cart is empty
            </h2>
            <p className="text-white/80 text-xl mb-8 leading-relaxed">
              Looks like you haven't added any items to your cart yet.
              <br />
              Start shopping and discover amazing products!
            </p>
            
            <Link
              to="/products"
              className="glass-button inline-flex items-center px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <ShoppingBagIcon className="w-6 h-6 mr-3" />
              Start Shopping
            </Link>
          </div>

          {/* Features */}          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass-light rounded-2xl p-6 text-center">
              <div className="w-12 h-12 glass-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quality Products</h3>
              <p className="text-white/70 text-sm">Premium quality items carefully selected</p>
            </div>
            
            <div className="glass-light rounded-2xl p-6 text-center">
              <div className="w-12 h-12 glass-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-white/70 text-sm">Quick shipping to your doorstep</p>
            </div>
            
            <div className="glass-light rounded-2xl p-6 text-center">
              <div className="w-12 h-12 glass-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure Payment</h3>
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
      className="min-h-screen py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200')"
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-purple-900/50 to-blue-900/70" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 glass-light rounded-full opacity-20 glass-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 glass-primary rounded-full opacity-15 glass-float animation-delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="glass-card backdrop-blur-2xl inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg mb-4">
              Shopping Cart
            </h1>
            <p className="text-white/80 text-lg">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="glass-card backdrop-blur-xl mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-white text-shadow">
                  Cart Items ({items.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="glass-button text-red-300 hover:text-red-200 px-4 py-2"
                >
                  <TrashIcon className="w-5 h-5 mr-2" />
                  Clear All
                </button>
              </div>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="glass-light rounded-2xl p-6 backdrop-blur-md">
                    <div className="flex items-center space-x-6">
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-xl shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white text-shadow mb-2">
                          {item.name}
                        </h3>
                        <p className="text-white/70 text-sm mb-2">
                          {item.description}
                        </p>
                        <p className="text-2xl font-bold text-white text-shadow">
                          ₹{item.price.toFixed(2)}
                        </p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="glass-button p-2 hover:scale-110 transition-all duration-200"
                          disabled={item.quantity <= 1}
                        >
                          <MinusIcon className="w-4 h-4 text-white" />
                        </button>
                        
                        <div className="glass-primary px-4 py-2 rounded-xl">
                          <span className="text-lg font-semibold text-white text-shadow">
                            {item.quantity}
                          </span>
                        </div>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="glass-button p-2 hover:scale-110 transition-all duration-200"
                        >
                          <PlusIcon className="w-4 h-4 text-white" />
                        </button>
                      </div>
                      
                      {/* Item Total */}
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white text-shadow">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="glass-button p-3 text-red-300 hover:text-red-200 hover:scale-110 transition-all duration-200"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card backdrop-blur-xl sticky top-24">
              <h3 className="text-2xl font-semibold text-white text-shadow mb-6">
                Order Summary
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-white/80">
                    Subtotal ({items.length} items)
                  </span>
                  <span className="text-xl font-semibold text-white text-shadow">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-white/80">Tax (8%)</span>
                  <span className="text-lg font-medium text-white text-shadow">
                    ₹{tax.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-white/80">Shipping</span>
                  <span className="text-lg font-medium text-white text-shadow">
                    {shipping === 0 ? (
                      <span className="text-green-300">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                {shipping === 0 && (
                  <div className="glass-primary rounded-xl p-3">
                    <p className="text-sm text-green-200 text-center">
                      🎉 Free shipping on orders over $100!
                    </p>
                  </div>
                )}
                
                <div className="flex justify-between items-center py-4">
                  <span className="text-xl font-bold text-white text-shadow">
                    Total
                  </span>
                  <span className="text-3xl font-bold text-white text-shadow">
                    ₹{total.toFixed(2)}
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="glass-button w-full py-4 text-lg font-semibold bg-primary-500/30 hover:bg-primary-500/50 border-primary-400/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <CreditCardIcon className="w-6 h-6 mr-3" />
                  Proceed to Checkout
                </button>
                
                <Link
                  to="/products"
                  className="glass-button w-full py-3 text-center block hover:scale-105 transition-all duration-300"
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
