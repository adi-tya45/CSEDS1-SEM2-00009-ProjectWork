import React from 'react';

export default function CartPage({ cart, onRemove, setView }) {
  const totalCost = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Manifest</h1>
        <button onClick={() => setView('shop')} className="back-link">
          ← Back to Marketplace
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <p>Your cart is currently pristine.</p>
          <button onClick={() => setView('shop')} className="shop-now-btn">
            Find Gear
          </button>
        </div>
      ) : (
        <div>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <img src={item.image} alt={item.name} className="item-thumb" />
                  <div className="item-meta">
                    <h3>{item.name}</h3>
                    <span>{item.category}</span>
                  </div>
                </div>
                <div className="item-actions">
                  <span className="item-price">${item.price}</span>
                  <button onClick={() => onRemove(item.id)} className="purge-btn">
                    Purge
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-card">
            <div>
              <p className="total-label">Total Valuation</p>
              <p className="total-value">${totalCost}</p>
            </div>
            <button className="checkout-btn">
              Initialize Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}