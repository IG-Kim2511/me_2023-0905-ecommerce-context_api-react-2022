// Product.js

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/cart/CartContext';
import axios from 'axios';

const ProductAPI = () => {
  const { dispatch } = useCart();
  const [products, setProducts] = useState([]); // Define the products state

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const fetchedProducts = response.data;
      console.log(response.data)

      // Set the fetched products in the state
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Call the fetchProducts function when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      <h2>Products</h2>
      {/* Map over the products and render each one */}
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.title}</h3>
          <img src={product.image}/>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductAPI;
