import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import ProductList from "./components/ProductList";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import Chatbot from "./components/Chatbot";
import OrderDetails from "./components/OrderDetails";

const App = () => {
  const [cart, setCart] = useState([]);
  
  // Define categories
  const categories = [
    "All",
    "Laptops",
    "Smartphones",
    "Furniture",
    "Clothing",
    "Books",
    "Accessories",
  ];

  // Add product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update quantity of an item in the cart
  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(quantity, 1);
    setCart(updatedCart);
  };

  // Remove item from the cart
  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Header with cart count and categories */}
        <Header 
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
          categories={categories} 
        />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <BannerSection />
                <main className="flex-1">
                  <ProductList 
                    addToCart={addToCart} 
                    categories={categories} 
                  />
                  <WhyChooseUs />
                </main>
              </>
            }
          />

          {/* Shopping Cart Page */}
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            }
          />
          {/* Order Details Page */}
          <Route
            path="/order-details"
            element={
              <OrderDetails
                order={{
                  id: "001",
                  date: new Date().toLocaleDateString(),
                  items: cart,
                }}
              />
            }
          />
        </Routes>

        {/* Footer */}
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;