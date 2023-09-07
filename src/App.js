
/*   <🚀🚀point skill + AI 질문목록>

  <🍄🍄>
 🍉context api : show example how to use context api with cart and product page.
   use context api, configurestore, dispatch, reducer, useSelector, localstorage
  plus, minus,remove button: add plus, minus,remove button on cart page. 
  localstorage : save items on cart page on localstorage

*/


// App.js
import React from 'react';
import "./App.css"

import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import { CartProvider } from './context/cart/CartContext';


const App = () => {
  return (

    <CartProvider>
      <div>
        <ProductPage product={{ id: 1, name: 'Product 1', description: 'Description 1' }} />
        <ProductPage product={{ id: 2, name: 'Product 2', description: 'Description 2' }} />
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App