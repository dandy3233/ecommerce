import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedRange, setSelectedRange] = useState(null);

  const priceRanges = [
    { label: "Under 3.9 K", min: 0, max: 3900 },
    { label: "3.9 - 39 K", min: 3900, max: 39000 },
    { label: "39 - 85 K", min: 39000, max: 85000 },
    { label: "85 - 180 K", min: 85000, max: 180000 },
    { label: "More than 180 K", min: 180000, max: Infinity },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [
          "All",
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = products
        .filter((product) =>
          selectedCategory === "All"
            ? true
            : product.category === selectedCategory
        )
        .filter((product) => {
          const productPrice = product.price;
          const min = selectedRange
            ? priceRanges[selectedRange].min
            : parseFloat(minPrice) || 0;
          const max = selectedRange
            ? priceRanges[selectedRange].max
            : parseFloat(maxPrice) || 5000;
          return productPrice >= min && productPrice <= max;
        })
        .filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [products, selectedCategory, selectedRange, minPrice, maxPrice, searchQuery]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setMinPrice('');
    setMaxPrice('');
    setSelectedRange(null);
  };

  // Highlight the matched text in the product title
  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-yellow-300">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="p-4 sm:p-8 bg-white dark:bg-gray-900 flex flex-col sm:flex-row gap-6 animate-fadeIn mt-[7vh]">
      
      {/* Sidebar */}
      <aside className="w-full sm:w-1/4 bg-gray-100 p-4 rounded shadow-md animate-fadeInUp">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex items-center border border-blue-600 rounded-full overflow-hidden">
            <span className="px-2 text-gray-500">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-full focus:outline-none"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <h4 className="text-md font-medium mb-2">Categories</h4>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-blue-600 rounded"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter (with radio buttons) */}
        <div className="mb-4">
          <h4 className="text-md font-medium mb-2">Price Range</h4>
          <div className="flex flex-wrap gap-4">
            {priceRanges.map((range, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`r-${index}`}
                  value={index}
                  checked={selectedRange === index}
                  onChange={() => {
                    setSelectedRange(index);
                    setMinPrice('');
                    setMaxPrice('');
                  }}
                  className="mr-2"
                />
                <label htmlFor={`r-${index}`} className="text-sm">{range.label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Price Range */}
        <div className="mb-4">
          <h4 className="text-md font-medium mb-2">Custom Price Range</h4>
          <div className="flex items-center mb-4">
            <div className="flex-1">
              <label htmlFor="min-price" className="block text-sm">Min</label>
              <input
                id="min-price"
                value={minPrice}
                type="number"
                onChange={(e) => {
                  setMinPrice(e.target.value);
                  setSelectedRange(null); // Reset the radio button selection when custom range is used
                }}
                className="w-full px-4 py-2 border border-blue-600 rounded"
              />
            </div>
            <div className="mx-2">
              <span>-</span>
            </div>
            <div className="flex-1">
              <label htmlFor="max-price" className="block text-sm">Max</label>
              <input
                id="max-price"
                value={maxPrice}
                type="number"
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  setSelectedRange(null); // Reset the radio button selection when custom range is used
                }}
                className="w-full px-4 py-2 border border-blue-600 rounded"
              />
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        <div className="mt-6">
          <button
            onClick={handleClearFilters}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Clear Filters
          </button>
        </div>

      </aside>

      {/* Product List */}
      <main className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 border rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 animate-fadeInUp"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4"
            />

            {/* Always display the category */}
            <div className="flex items-center py-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 384 512"
                className="mr-2 text-gray-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
              </svg>
              <p className="text-gray-500">{product.category}</p>
            </div>

            <Link to={`/products/${product.id}`}>
              <h3 className="text-gray-900 line-clamp-1 font-semibold text-lg tracking-tight ">
                {highlightText(product.title, searchQuery)}
              </h3>
            </Link>

            <div className="flex items-center justify-between mt-2">
              <p className="text-primary text-lg font-bold">
                {(product.price)} ETB
              </p>
              <button
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transform transition-transform duration-300 hover:scale-125"
                onClick={() => addToCart(product)}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default ProductList;
