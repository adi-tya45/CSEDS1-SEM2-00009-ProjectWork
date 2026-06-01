import React from 'react';

export default function ProductGrid({ products, cart, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => {
        const isAdded = cart.some(item => item.id === product.id);
        
        return (
          <div key={product.id} className="product-card">
            <div className="image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            
            <div className="product-info">
              <div>
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
              </div>
              
              <div className="product-footer">
                <div className="product-price">${product.price}</div>
                <button
                  onClick={() => onAddToCart(product)}
                  disabled={isAdded}
                  className={`action-btn ${isAdded ? 'added' : 'deploy'}`}
                >
                  {isAdded ? 'Added to System' : 'Deploy to Cart'}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}