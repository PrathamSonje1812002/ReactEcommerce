import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (id, type) => {
    setCartItems(
      cartItems
        .map((item) => {
          if (item.id === id) {
            const updatedQty =
              type === "inc" ? item.quantity + 1 : item.quantity - 1;
            return updatedQty > 0 ? { ...item, quantity: updatedQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header cartCount={cartCount} />
      <ProductList onAddToCart={handleAddToCart} />
      <Cart items={cartItems} onQuantityChange={handleQuantityChange} />
    </>
  );
}

export default App;
