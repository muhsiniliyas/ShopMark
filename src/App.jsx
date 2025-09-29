import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
// Remove this line: import CategoryPage from './pages/CategoryPage';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            {/* Glass Effect Background Container */}
            <div 
              className="min-h-screen relative overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200')"
              }}
            >
              {/* Dynamic Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-purple-900/30 to-blue-900/40 transition-all duration-1000" />
              
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 glass-primary rounded-full opacity-20 glass-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glass-light rounded-full opacity-10 glass-pulse animation-delay-1000" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 glass-dark rounded-full opacity-15 glass-float animation-delay-2000" />
              </div>
              
              {/* Main Content Container */}
              <div className="relative z-10">
                <Header />
                
                <main className="min-h-screen">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    {/* Remove this line: <Route path="/category/:categorySlug" element={<CategoryPage />} /> */}
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                  </Routes>
                </main>
                
                <Footer />
              </div>
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
