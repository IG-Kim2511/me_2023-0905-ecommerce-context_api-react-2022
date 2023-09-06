// cartReducer.js
export const initialState = {
  cartItems: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add product to the cart
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      // Remove product from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    case 'INCREMENT_QUANTITY':
      // Increment product quantity in the cart
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case 'DECREMENT_QUANTITY':
      // Decrement product quantity in the cart
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
