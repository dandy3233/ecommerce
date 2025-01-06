import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import bannerImage from "../assets/logo.png"; // Replace with your logo image path

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Button to toggle sidebar on small screens */}
      <button
        className=" p-4  mt-[8vh] text-xl text-white bg-blue-500 fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        _
      </button>

      {/* Sidebar */}
      <aside
        className={`lg:w-64 w-full bg-white shadow-md h-screen overflow-y-auto rounded-lg fixed lg:relative transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <img
            src={bannerImage} // Replace with your logo image path
            alt="Logo"
            className="w-32 h-auto mx-auto mb-6"
          />
          <h1 className="text-xl font-bold text-center">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-blue-500">
              Dashboard
            </li>
            {/* Link to the Add Product form */}
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-blue-500">
              <Link to="/add-product">Add Products</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-blue-500">
              Orders
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-blue-500">
              Reviews
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-blue-500">
              Coupons
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-blue-500">
              Settings
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
