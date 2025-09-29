export const categories = [
  { 
    id: 'all', 
    name: 'All Products',
    slug: 'all-products',
    description: 'Browse all available products',
    icon: '',
    count: 0 // Will be calculated dynamically
  },
  { 
    id: 'electronics', 
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and electronic devices',
    icon: '',
    count: 0
  },
  { 
    id: 'clothing', 
    name: 'Clothing',
    slug: 'clothing',
    description: 'Fashion and apparel for everyone',
    icon: '',
    count: 0
  },
  { 
    id: 'home', 
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Everything for your home and garden',
    icon: '',
    count: 0
  },
  { 
    id: 'sports', 
    name: 'Sports',
    slug: 'sports',
    description: 'Sports equipment and accessories',
    icon: '',
    count: 0
  },
  { 
    id: 'books', 
    name: 'Books',
    slug: 'books',
    description: 'Books and educational materials',
    icon: '',
    count: 0
  }
];

// Enhanced products with more category examples
export const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99,
    originalPrice: 129.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    description: 'Premium wireless headphones with noise cancellation',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    featured: true,
    tags: ['wireless', 'premium', 'noise-cancelling']
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    description: 'Advanced smartwatch with health tracking features',
    rating: 4.7,
    reviews: 89,
    inStock: true,
    featured: true,
    tags: ['smart', 'fitness', 'health']
  },
  {
    id: 3,
    name: 'Designer T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    description: 'Comfortable cotton t-shirt with modern design',
    rating: 4.2,
    reviews: 56,
    inStock: true,
    featured: false,
    tags: ['cotton', 'casual', 'comfort']
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: 149.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    description: 'Automatic coffee maker with built-in grinder',
    rating: 4.6,
    reviews: 234,
    inStock: true,
    featured: true,
    tags: ['automatic', 'grinder', 'premium']
  },
  {
    id: 5,
    name: 'Running Shoes',
    price: 129.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    description: 'Lightweight running shoes for maximum comfort',
    rating: 4.4,
    reviews: 167,
    inStock: true,
    featured: false,
    tags: ['lightweight', 'comfort', 'running']
  },
  {
    id: 6,
    name: 'Programming Book',
    price: 45.99,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400',
    description: 'Complete guide to modern web development',
    rating: 4.8,
    reviews: 92,
    inStock: true,
    featured: true,
    tags: ['programming', 'web-development', 'guide']
  }
];

// Helper function to get category count
export const getCategoryCount = (categoryId) => {
  if (categoryId === 'all') {
    return products.length;
  }
  return products.filter(product => product.category === categoryId).length;
};

// Helper function to get products by category
export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') {
    return products;
  }
  return products.filter(product => product.category === categoryId);
};
