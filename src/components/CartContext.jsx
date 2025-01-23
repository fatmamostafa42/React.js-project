

import React, { createContext, useContext, useState } from 'react';

let CartContext = createContext(); 

export let CartProvider = ({ children }) => {
  let [cart, setCart] = useState([]); 

  let addToCart = (item) => {
    setCart((prevCart) => {
      let itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: item.quantity }];
    });
  };

  let removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id)); 
  };

  // إضافة دالة تحديث الكمية
  let updateCartQuantity = (itemId, change) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: Math.max(item.quantity + change, 1) }; // ضمان أن الكمية لا تقل عن 1
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export let useCart = () => {
  return useContext(CartContext);
};