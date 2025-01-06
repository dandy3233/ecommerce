import React, { useState } from 'react';

const OrderForm = ({ products }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: 1,
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Order submitted successfully!");
    // Add further actions (e.g., API call)
  };

  const handleCancel = () => {
    // Reset the form to initial state
    setFormData({
      name: "",
      email: "",
      product: "",
      quantity: 1,
      address: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <div className="w-full h-[140vh] bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg w-full p-6 bg-white shadow-md rounded-md relative transition transform duration-300 ease-in-out hover:scale-105">
        {/* Cancel Button (X) */}
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-900"
          style={{ zIndex: 10 }}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Order Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full h-12 bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full h-12 bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Product */}
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
              Product
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="mt-1 block w-full h-12 bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="" disabled>Select a product</option>
              {products.map((product) => (
                <option key={product.id} value={product.title}>
                  {product.title}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 block w-full h-12 bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full h-12 bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full h-12 bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* State */}
          <div>
            <label htmlFor="House number" className="block text-sm font-medium text-gray-700">
              House Number
            </label>
            <input
              type="text"
              id="House number"
              name="House number"
              value={formData.Housenumber}
              onChange={handleChange}
              className="mt-1 block w-full h-12 bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          
           {/* phone number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full h-12 bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
