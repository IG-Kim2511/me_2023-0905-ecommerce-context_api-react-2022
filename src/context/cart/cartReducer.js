// cartReducer.js

// Define the initial state
export const initialState = {
  cartItems: [],
};

// Create the cart reducer function
export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the product is already in the cart
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item exists, increment its quantity
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_FROM_CART':
      // Remove a product from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };

    case 'INCREMENT_QUANTITY':
      // Increment the quantity of a product in the cart
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case 'DECREMENT_QUANTITY':
      // Decrement the quantity of a product in the cart
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
