import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import './App.css'; 

const PRODUCTS_DATA = [
  { id: 1, name: 'Cyber Neon Headset', category: 'Audio', price: 129, image: 'src/Screenshot 2026-06-01 211213.png' },
  { id: 2, name: 'Mechanical Quantum Keyboard', category: 'Peripherals', price: 189, image: 'src/Screenshot 2026-06-01 211225.png' },
  { id: 3, name: 'Ergonomic Pulse Mouse', category: 'Peripherals', price: 79, image: 'src/Screenshot 2026-06-01 211246.png'},
  { id: 4, name: '4K Ultra-Wide Horizon', category: 'Displays', price: 549, image: 'src/Screenshot 2026-06-01 211237.png' },
];

export default function App() {
  const [currentView, setCurrentView] = useState('shop');
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(PRODUCTS_DATA.map(p => p.category))];

  const addToCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div>
      <Navbar cartCount={cart.length} setView={setCurrentView} currentView={currentView} />
      
      {currentView === 'shop' ? (
        <>
          <Hero />
          <main className="shop-container">
            <h2 className="section-title">Curated Gear</h2>
            
            <div className="category-container">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <ProductGrid products={filteredProducts} cart={cart} onAddToCart={addToCart} />
          </main>
        </>
      ) : (
        <CartPage cart={cart} onRemove={removeFromCart} setView={setCurrentView} />
      )}

      <Footer />
    </div>
  );
}