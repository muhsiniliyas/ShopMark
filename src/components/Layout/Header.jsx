import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCartIcon, 
  UserIcon, 
  Bars3Icon, 
  XMarkIcon, 
  MagnifyingGlassIcon,
  HomeIcon,
  CubeIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for theme toggle
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        // You can add theme toggle here if needed
        // toggleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Products', href: '/products', icon: CubeIcon },
  ];

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 theme-transition
      ${scrolled 
        ? 'glass-card border-b glass-border-strong backdrop-blur-2xl' 
        : 'glass-light backdrop-blur-xl'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className={`
                glass-primary p-3 rounded-xl group-hover:scale-105 transition-all duration-300
                ${theme === 'dark' ? 'shadow-blue-500/20' : 'shadow-blue-500/30'}
              `}>
                <span className="text-2xl font-bold text-white text-shadow">
                  ShopMark
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:glass-primary theme-transition"
                >
                  <Icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  <span className="text-white/90 group-hover:text-white font-medium text-shadow transition-colors">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="glass-input w-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary-400/50 theme-transition"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
              </div>
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle size="md" />
            
            {/* Cart Button */}
            <Link to="/cart" className="relative group">
              <div className="glass-button p-3 hover:scale-110 transition-all duration-300">
                <ShoppingCartIcon className="h-5 w-5 text-white" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 glass-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center text-shadow border border-white/30">
                    {getCartCount()}
                  </span>
                )}
              </div>
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <div className="glass-button flex items-center space-x-2 px-3 py-2 cursor-pointer">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="h-6 w-6 rounded-full border border-white/30"
                  />
                  <span className="hidden lg:block text-sm font-medium">{user.name}</span>
                </div>
                
                {/* User Dropdown */}
                <div className="absolute right-0 top-full mt-2 glass-card backdrop-blur-2xl min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 theme-transition"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 theme-transition"
                    >
                      Orders
                    </Link>
                    <div className="border-t border-white/20 my-1"></div>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-3 text-red-300 hover:text-red-200 hover:bg-white/10 transition-colors duration-200 theme-transition"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/signin" className="glass-button flex items-center space-x-2 px-4 py-2 hover:scale-105 transition-all duration-300">
                <UserIcon className="h-5 w-5 text-white" />
                <span className="hidden sm:block text-sm font-medium">Sign In</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass-button p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4 theme-transition">
            <div className="space-y-4">
              {/* Mobile Navigation */}
              <div className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 theme-transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Search */}
              <div className="px-4">
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="glass-input w-full pl-10 pr-4 py-3 theme-transition"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                  </div>
                </form>
              </div>

              {/* Mobile Theme Toggle */}
              <div className="px-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/80 font-medium">Theme</span>
                  <ThemeToggle size="sm" />
                </div>
              </div>

              {/* Mobile Auth */}
              {!user && (
                <div className="px-4 pt-4 border-t border-white/20">
                  <div className="space-y-2">
                    <Link
                      to="/signin"
                      className="block w-full glass-button text-center py-3 hover:scale-105 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="block w-full glass-light text-center py-3 text-white/80 hover:text-white rounded-xl transition-all duration-300 theme-transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
