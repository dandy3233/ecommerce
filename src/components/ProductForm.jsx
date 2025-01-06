import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null); // To hold the uploaded image
  const [productCategory, setProductCategory] = useState(""); // Category state
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Sample categories (replace with actual data)
  const categories = ["Electronics", "Furniture", "Clothing", "Books", "Sports"];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", { productName, productDescription, productPrice, productImage, productCategory });
    // Handle product submission (e.g., make an API call or update state)
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductImage(null);
    setProductCategory(""); // Reset category field
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(URL.createObjectURL(file)); // Show image preview
    }
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  // Handle back button click
  const handleBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            required
          />
        </div>

        {/* Product Description */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Product Description</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            required
          />
        </div>

        {/* Product Price */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Product Price</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Category</label>
          <select
            value={productCategory}
            onChange={handleCategoryChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            required
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Product Image */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          />
          {productImage && (
            <div className="mt-4">
              <img
                src={productImage}
                alt="Product Preview"
                className="w-32 h-32 object-cover rounded-lg border-2 border-gray-300"
              />
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-300 transform hover:scale-105"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
