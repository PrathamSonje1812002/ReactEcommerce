import React from "react";
import "./Header.css";
const Header = ({ cartCount }) => {
  return (
    <div className="header">
      <h2>🛍️ Trendy Shop</h2>
      <div className="cart-badge">
        🛒 Cart <span>{cartCount}</span>
      </div>
    </div>
  );
};

export default Header;
