import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function GlassHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200')"
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30" />
      </div>

      {/* Glass Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl w-full">
          {/* Main Glass Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Premium Shopping
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                  Experience
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                Discover amazing products with our modern, elegant shopping platform
              </p>

              {/* Glass Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    Shop Now
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="backdrop-blur-md bg-black/20 hover:bg-black/30 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
