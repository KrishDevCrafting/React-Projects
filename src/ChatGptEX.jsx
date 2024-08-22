import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to calculate the total price for an item based on its quantity
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Other functions and JSX omitted for brevity

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* Example of calling addToCart when a button is clicked */}
      <button
        onClick={() => addToCart({ id: 1, name: "Example Item", price: 10 })}>
        Add to Cart
      </button>
      {/* Display cart items */}
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${calculateTotalPrice(item)}</p>
          {/* Buttons for incrementing, decrementing, and removing items */}
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
