// import React, { useState } from 'react';
// import Header from './Header';
// import ProductList from './ProductList';
// import ShoppingCart from './ShoppingCart';

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const updateQuantity = (index, quantity) => {
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart];
//       updatedCart[index].quantity = Math.max(quantity, 1); // Ensure quantity is at least 1
//       return updatedCart;
//     });
//   };

//   const removeItem = (index) => {
//     setCart((prevCart) => prevCart.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
//       <ProductList addToCart={addToCart} />
//       <ShoppingCart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />
//     </div>
//   );
// };

// export default App;
