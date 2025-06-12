import React from "react";
import "./Cart.css";
const Cart = ({ items, onQuantityChange }) => {
  if (items.length === 0)
    return <h3 className="empty-cart">🛒 Cart is empty</h3>;

  // ✅ Calculate total amount
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <span>{item.name}</span>
          <div className="quantity-box">
            <button onClick={() => onQuantityChange(item.id, "dec")}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => onQuantityChange(item.id, "inc")}>+</button>
          </div>
          <span>₹{item.price * item.quantity}</span>
        </div>
      ))}
      <div>
        {/* ✅ Show total amount */}
        <h2 className="cart-item-total">
          <span> Total :</span> <span>₹{total} </span>
        </h2>
      </div>
    </div>
  );
};

export default Cart;
