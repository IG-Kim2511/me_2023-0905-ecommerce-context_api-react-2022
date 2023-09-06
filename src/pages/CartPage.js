// CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';


const CartPage = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const incrementQuantity = (product) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: product });
  };

  const decrementQuantity = (product) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: product });
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => incrementQuantity(item)}>+</button>
            <button onClick={() => decrementQuantity(item)}>-</button>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
