// CartContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { cartReducer, initialState } from './reducers/cartReducer';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart items from local storage
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    dispatch({ type: 'SET_CART', payload: savedCartItems });
  }, []);

  // Save cart items to local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
