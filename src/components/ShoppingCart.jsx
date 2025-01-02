import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderForm from './OrderForm'; // Import the OrderForm component
import { FaTrash, FaCreditCard, FaFileInvoice, FaShoppingCart } from 'react-icons/fa'; // Import the icons


const ShoppingCart = ({ cart, updateQuantity, removeItem }) => {
  const navigate = useNavigate();
  const [showOrderForm, setShowOrderForm] = useState(false); // State to toggle the order form visibility
  const shippingEstimate = 5.0;
  const taxRate = 0.08; // 8% tax rate

  const generateOrderId = () => {
    return `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  };

  const orderId = generateOrderId();

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const handlePayment = () => {
    alert("Payment functionality coming soon!");
  };

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to your cart before proceeding.");
      return;
    }
    
    const order = {
      id: orderId,
      date: new Date().toLocaleDateString(),
      items: cart,
    };
    navigate("/order-details", { state: { order } });
  };

  const handleOrderForm = () => {
    setShowOrderForm(!showOrderForm); // Toggle the form visibility
  };

  const subtotal = calculateSubtotal();
  const taxEstimate = subtotal * taxRate;
  const total = subtotal + shippingEstimate + taxEstimate;
  const totalItems = calculateTotalItems();

  return (
    <div className="p-4 sm:p-8 mt-[12vh] bg-gray-50 min-h-screen">
      <h1 className="text-2xl text-center text-green-600 font-bold mb-6">Shopping Cart</h1>
      <p className="text-lg mb-6">Total products Cart : {totalItems}</p>

      <div className="space-y-4">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700">${parseFloat(item.price).toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                    className="w-12 text-center border"
                  />
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-600 ml-4" onClick={() => removeItem(index)}>
                <FaTrash /> {/* Trash icon to indicate removal */}
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {cart.length > 0 && (
        <div className="bg-gray-100 p-4 rounded mt-8">
          <h2 className="text-lg font-bold">Order summary</h2>
          <div className="flex justify-between mt-4">
            <p>Order ID</p>
            <p>{orderId}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Shipping estimate</p>
            <p>${shippingEstimate.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Tax estimate</p>
            <p>${taxEstimate.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <p>Order total</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
              onClick={handlePayment}
            >
              <FaCreditCard className="mr-2" /> {/* Pay Now icon */}
              Pay Now
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
              onClick={handleOrder}
            >
              <FaFileInvoice className="mr-2" /> {/* Proceed to Checkout icon */}
              Proceed to Checkout
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 flex items-center"
              onClick={handleOrderForm}
            >
              {showOrderForm ? <FaFileInvoice className="mr-2" /> : <FaShoppingCart className="mr-2" />} {/* Order Form icon */}
              {showOrderForm ? "View Invoice" : "Order Form"}
            </button>
          </div>
        </div>
      )}

      {/* Conditionally render the OrderForm */}
      {showOrderForm && <OrderForm products={cart} />}
    </div>
  );
};

export default ShoppingCart;
