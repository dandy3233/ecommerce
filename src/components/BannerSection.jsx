import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/back.png';

const BannerSection = () => {
  const navigate = useNavigate(); // Use navigate hook

  const handleShopNowClick = () => {
    navigate('/products'); // Navigate to the Product List page
  };

  return (
      <section className="bg-[#f5e6e0] mt-[12vh] dark:bg-[#2d2d2d] py-8 lg:py-16 px-4">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div
            className="text-center lg:text-left lg:mr-8 animate-fadeInUp"
            style={{ animationDuration: '1s' }}
          >
            <h1
              className="text-4xl lg:text-6xl font-extrabold text-orange-600 leading-tight animate-fadeInUp"
              style={{ animationDuration: '1.2s' }}
            >
              EXCLUSIVE AUTUMN SALE
            </h1>
            <p
              className="text-md lg:text-lg text-gray-700 mt-4 animate-fadeInUp"
              style={{ animationDuration: '1.4s' }}
            >
              Refresh your wardrobe with our stylish autumn collection. Enjoy discounts up to{' '}
              <span className="text-orange-600 font-bold">50% OFF</span> on top products!
            </p>
            <p
              className="text-sm lg:text-base text-gray-600 mt-2 animate-fadeInUp"
              style={{ animationDuration: '1.6s' }}
            >
              Limited time only. Don’t miss out!
            </p>
          <button
            onClick={handleShopNowClick} // Add onClick to handle navigation
            className="mt-6 px-6 py-3 bg-orange-600 text-white text-sm lg:text-base font-medium rounded-lg shadow hover:bg-orange-500 transition duration-300"
          >
            Shop Now
          </button>
        </div>

         {/* Banner Image */}
         <div
          className="flex-shrink-0 animate-fadeIn"
          style={{ animationDuration: '1.5s' }}
        >
          <img
            src={bannerImage}
            alt="Banner Icon"
            className="w-full max-w-sm lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
