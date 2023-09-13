// CartContext.js

// 🍀rafc ...snippet 사용
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { cartReducer, initialState } from './cartReducer';


//🍀CartContext: CartContext라는 새로운 컨텍스트를 생성합니다. 이 컨텍스트는 자식 컴포넌트에 카트 상태 및 함수를 제공하는 데 사용됩니다.
const CartContext = createContext();

/* CartProvider 컴포넌트를 정의합니다. 이 컴포넌트는 컨텍스트 제공자이며 카트 상태를 관리하고 자식 컴포넌트에 제공하는 역할을 합니다.
useReducer 훅을 사용하여 cartReducer와 initialState을 사용하여 카트 상태를 초기화합니다. */
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart items from local storage
  /* 컴포넌트가 마운트될 때 useEffect 훅을 사용하여 로컬 스토리지에서 카트 아이템을 로드합니다.
     저장된 카트 아이템은 로컬 스토리지에서 검색되어 액션 타입 'SET_CART'를 사용하여 리듀서에 전달됩니다.
      이 액션 타입은 아마도 cartReducer에서 저장된 아이템으로 카트 상태를 업데이트하는 데 사용될 것입니다. */
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    dispatch({ type: 'SET_CART', payload: savedCartItems });
  }, []);

  // Save cart items to local storage whenever the cart changes
  /* 또 다른 useEffect 훅을 사용하여 카트 상태가 변경될 때마다 카트 아이템을 로컬 스토리지에 저장합니다. 
    이렇게 하면 페이지 다시 로드 간에 카트 아이템이 유지됩니다. */
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    /* `CartContext.Provider`를 사용하여 CartContext를 자식 컴포넌트에 제공합니다. 
    이를 통해 카트 상태와 디스패치 함수가 컴포넌트 트리 내의 하위 컴포넌트에서 사용될 수 있습니다. */

    /* {children}는 React 컴포넌트에서 특별한 prop으로 사용되는 것입니다. 
    이 prop은 부모 컴포넌트에서 자식 컴포넌트로 JSX 요소를 포함시킬 때 사용됩니다
    CartProvider 컴포넌트는 {children}을 사용하여 부모 컴포넌트가 제공한 모든 자식 컴포넌트를 렌더링합니다. 
    이렇게 하면 자식 컴포넌트가 CartProvider의 컨텍스트를 활용할 수 있게 됩니다. */
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  // 👉 CartContext
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
