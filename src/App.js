
/*   
  <🦄AI 질문 목록 정리>
  🍀context api : show example how to use context api with cart and product page.
    use context api, configurestore, dispatch, reducer, useSelector, localstorage
    plus, minus,remove button: add plus, minus,remove button on cart page. 
    localstorage : save items on cart page on localstorage

  🍀bug : when i click plus btn, i get 'nan'

    
  🍄contextAPI 폴더
     // cartReducer.js
    // CartContext.js
*/


// App.js
import React, { useState } from 'react';
import "./App.css"

import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import { CartProvider } from './context/cart/CartContext';
import ProductAPI from './pages/ProductAPI';


const App = () => {

  const [click, setClick] = useState(true)
  return (

    <CartProvider>
      <div>
        <div>
          <h1>simple example</h1>
          <ProductPage product={{ id: 1, name: 'Product 1', description: 'Description 1' }} />
          <ProductPage product={{ id: 2, name: 'Product 2', description: 'Description 2' }} />
          
        </div>
        <div>
          <h1>fakeapi product example</h1>
          <button onClick={()=>{setClick(!click)}}>click</button>
          {click ===false ?<ProductAPI/>:null
        }
        </div>
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App