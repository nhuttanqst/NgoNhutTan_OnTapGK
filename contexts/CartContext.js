import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newProduct, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newProduct.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newProduct.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...newProduct, quantity }];
      }
    });
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        // Giảm số lượng nếu số lượng lớn hơn 1
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Xóa sản phẩm khỏi giỏ hàng nếu số lượng = 1
        return prevItems.filter((item) => item.id !== productId);
      }
    });
  };

  const removeAllItemsFromCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, removeAllItemsFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
