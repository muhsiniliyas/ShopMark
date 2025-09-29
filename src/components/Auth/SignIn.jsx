import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon, UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200')"
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-purple-900/40 to-blue-900/60" />
      
      {/* Floating Glass Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 glass-primary rounded-full opacity-20 glass-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 glass-light rounded-full opacity-15 glass-float animation-delay-1000" />
        <div className="absolute top-1/2 left-10 w-48 h-48 glass-dark rounded-full opacity-10 glass-float animation-delay-2000" />
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Main Glass Container */}
        <div className="glass-card backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            {/* Logo/Icon */}
            <div className="glass-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserIcon className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white text-shadow-lg mb-2">
              Welcome Back
            </h2>
            <p className="text-white/80 text-lg">
              Sign in to your account
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="glass-card bg-red-500/20 border-red-400/30 backdrop-blur-md">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-200 text-sm">{error}</span>
                </div>
              </div>
            )}
            
            {/* Form Fields */}
            <div className="space-y-5">
              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-input w-full pl-12 pr-4 py-4 text-lg focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50"
                    placeholder="Enter your email"
                  />
                  <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                </div>
              </div>
              
              {/* Password Field */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="glass-input w-full pl-12 pr-12 py-4 text-lg focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50"
                    placeholder="Enter your password"
                  />
                  <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary-600 bg-white/20 border-white/30 rounded focus:ring-primary-500 focus:ring-2"
                />
                <span className="ml-2 text-sm text-white/80">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-primary-300 hover:text-primary-200 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="glass-button w-full py-4 text-lg font-semibold bg-primary-500/30 hover:bg-primary-500/50 border-primary-400/50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-white/80">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-primary-300 hover:text-primary-200 transition-colors"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
