import React from "react";
import Product from "./Product";
import "./ProductList.css";

const products = [
  { id: 1, name: "T-shirt", price: 299 },
  { id: 2, name: "Jeans", price: 899 },
  { id: 3, name: "Shoes", price: 1299 },
];
const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
