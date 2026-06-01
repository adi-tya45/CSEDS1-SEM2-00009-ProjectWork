import React from 'react';

export default function Navbar({ cartCount, setView, currentView }) {
  return (
    <nav className="navbar">
      <div onClick={() => setView('shop')} className="brand-title">
        <strong>Shoppify</strong>.
      </div>
      
      <div className="nav-links">
        <button 
          onClick={() => setView('shop')}
          className={`nav-btn ${currentView === 'shop' ? 'active' : 'inactive'}`}
        >
          Shop
        </button>
        
        <div onClick={() => setView('cart')} className="cart-icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" className="cart-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}