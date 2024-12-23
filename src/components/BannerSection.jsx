import React from 'react';
import bannerImage from '../assets/image.png';

const BannerSection = () => {
  return (
    <section className="bg-white p-8 border-t-4 border-b-4 border-blue-600 shadow-md">
      <div className="flex items-center justify-center bg-gradient-to-r from-gray-100 via-white to-blue-600 p-4 rounded-lg">
        <div className="text-left mr-4">
          <h2 className="text-6xl font-bold text-orange-600">Mulu Gebeya</h2>
          <p className="text-lg text-gray-600">
            Dandy, we provide the best products for your needs!
          </p>
        </div>
        <img
          src={bannerImage}
          alt="Banner Icon"
          className="w-32 h-32 rounded-full border-2 border-gray-300 shadow-lg"
        />
      </div>
    </section>
  );
};

export default BannerSection;
