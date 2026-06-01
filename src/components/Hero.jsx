import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        The Next Generation of <br />
        <span className="hero-gradient-text">Digital Artifacts</span>
      </h1>
      <p className="hero-subtitle">
        Premium performance engineered for professionals. Elevate your setup instantly.
      </p>
      <button 
        onClick={() => {
          const el = document.querySelector('.shop-container');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="hero-btn"
      >
        Explore Ecosystem
      </button>
    </section>
  );
}