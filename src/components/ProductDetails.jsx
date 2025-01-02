import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <section className="pt-32 pb-12 mb-10 md:mb-0 lg:py-32 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Product Image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={product.image}
              alt="Product"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 text-left">
            <h1 className="font-medium mb-2 mx-auto md:mx-0 text-[26px] max-w-[450px] text-left">
              {product.title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">{product.price} ETB</div>
            <p className="mb-8">{product.description}</p>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <label key={size} className="cursor-pointer" htmlFor={size}>
                    <input
                      className="sr-only peer"
                      id={size}
                      name="size"
                      type="radio"
                      value={size}
                    />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-blue-500 peer-checked:shadow-xl peer-checked:scale-105">
                      {size}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="w-full md:w-40 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center space-x-2 hover:bg-gray-700 transform transition-transform duration-300 hover:scale-125"
              onClick={() => addToCart(product)} // Use the prop directly
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="text-sm">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
