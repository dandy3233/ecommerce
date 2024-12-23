import React, { useState } from "react";

const ProductList = ({ addToCart }) => {
  // Updated products array
  const initialProducts = [
    { id: 1, name: "HP Spectre x360 14", price: 260, originalPrice: 240, imageUrl: "https://via.placeholder.com/150", rating: 4, category: "Laptops" },
    { id: 2, name: "iPhone 15", price: 100, originalPrice: 150, imageUrl: "https://via.placeholder.com/150", rating: 5, category: "Smartphones" },
    { id: 3, name: "Cozy Family Home", price: 110000, originalPrice: 120000, imageUrl: "https://via.placeholder.com/150", rating: 3, category: "Real Estate" },
    { id: 4, name: "Sofa Set", price: 800, originalPrice: 900, imageUrl: "https://via.placeholder.com/150", rating: 4, category: "Furniture" },
    { id: 5, name: "Men's Jacket", price: 120, originalPrice: 150, imageUrl: "https://via.placeholder.com/150", rating: 4, category: "Clothing" },
    { id: 6, name: "Leather Watch", price: 50, originalPrice: 70, imageUrl: "https://via.placeholder.com/150", rating: 3, category: "Accessories" },
    { id: 7, name: "Learning React", price: 30, originalPrice: 40, imageUrl: "https://via.placeholder.com/150", rating: 5, category: "Books" },
    { id: 8, name: "Smart TV", price: 300, originalPrice: 350, imageUrl: "https://via.placeholder.com/150", rating: 4, category: "Electronics" },
    { id: 9, name: "Lego Set", price: 80, originalPrice: 100, imageUrl: "https://via.placeholder.com/150", rating: 5, category: "Toys" },
    { id: 10, name: "Organic Apples", price: 5, originalPrice: 8, imageUrl: "https://via.placeholder.com/150", rating: 4, category: "Groceries" },
    { id: 11, name: "Yoga Mat", price: 25, originalPrice: 30, imageUrl: "https://via.placeholder.com/150", rating: 4, category: "Sports Equipment" },
    { id: 12, name: "Face Cream", price: 15, originalPrice: 20, imageUrl: "https://via.placeholder.com/150", rating: 4, category: "Beauty Products" },
  ];

  // Categories for filtering
  const categories = ["All", "Laptops", "Smartphones", "Real Estate", "Furniture", "Clothing", "Accessories", "Books", "Electronics", "Toys", "Groceries", "Sports Equipment", "Beauty Products"];

  // Price categories for filtering
  const priceCategories = [
    { label: "All", min: 0, max: Infinity },
    { label: "$0 - $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100+", min: 100, max: Infinity },
  ];

  // Star ratings for filtering
  const starRatings = [1, 2, 3, 4, 5];

  // States for managing filters
  const [products] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceCategory, setSelectedPriceCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered products based on selected filters
  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "All" ? true : product.category === selectedCategory
    )
    .filter((product) => {
      const priceFilter = priceCategories.find(
        (p) => p.label === selectedPriceCategory
      );
      return priceFilter
        ? product.price >= priceFilter.min && product.price <= priceFilter.max
        : true;
    })
    .filter((product) =>
      selectedRating === "All" ? true : product.rating === Number(selectedRating)
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section className="p-4 sm:p-8 bg-white flex flex-col sm:flex-row gap-6">
      {/* Sidebar */}
      <aside className="w-full sm:w-1/4 bg-gray-100 p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>

        {/* Category Filter */}
        <div className="mb-4">
          <h4 className="text-md font-medium mb-2">Categories</h4>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h4 className="text-md font-medium mb-2">Price</h4>
          <select
            value={selectedPriceCategory}
            onChange={(e) => setSelectedPriceCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded"
          >
            {priceCategories.map((price, index) => (
              <option key={index} value={price.label}>
                {price.label}
              </option>
            ))}
          </select>
        </div>

        {/* Star Rating Filter */}
        <div className="mb-4">
          <h4 className="text-md font-medium mb-2">Star Rating</h4>
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded"
          >
            <option value="All">All Ratings</option>
            {starRatings.map((rating) => (
              <option key={rating} value={rating}>
                {"⭐".repeat(rating)}+
              </option>
            ))}
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <div className="w-full sm:w-3/4">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-400 rounded w-full"
          />
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border-2 border-blue-600 p-4 rounded-lg text-center shadow-lg"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="font-semibold text-gray-700">{product.name}</h3>
              <p className="text-yellow-500 font-bold">
                ${product.price.toFixed(2)}
              </p>
              <p className="line-through text-gray-500">
                ${product.originalPrice.toFixed(2)}
              </p>
              <div className="text-yellow-400 mb-2">
                {"⭐".repeat(product.rating)}{" "}
                {"☆".repeat(5 - product.rating)}
              </div>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
