import { FaHome, FaProductHunt } from 'react-icons/fa'; // Import icons from react-icons
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Disclosure, Menu } from "@headlessui/react";
import bannerImage from "../assets/logo.png";

const navigation = [
  { name: "HOME", href: "/", current: false, icon: <FaHome /> }, // Home icon from react-icons
  { name: "PRODUCT", href: "/products", current: false, icon: <FaProductHunt /> }, // Product icon from react-icons
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ cartCount }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      localStorage.setItem("darkMode", newDarkMode);
      document.documentElement.classList.toggle("dark", newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <Disclosure
      as="nav"
      className="bg-[#f5e6e0] p-4 rounded-lg py-2 fixed w-full z-10 transition-all duration-200"
    >
      {({ open }) => (
        <>
          <div className="container  mx-auto flex justify-between items-center">
            {/* Logo Section with Animation */}
            <Link to="/" className="flex items-center">
              <img
                className="w-12 h-12 transition-transform transform hover:scale-110 duration-300"
                src={bannerImage}
                alt="Logo"
              />
            </Link>

            {/* Cart Icon (Always Visible) with animation */}
            <Link to="/cart" className="text-gray-700 hover:text-gray-900 relative md:hidden block transform hover:scale-110 transition duration-300">
              <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Desktop Menu with animation */}
            <div className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  {item.icon} {/* Render icon next to the item name */}
                  <span>{item.name}</span>
                </Link>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-1 text-gray-700 hover:text-gray-900 transform hover:scale-105 transition duration-300"
              >
                <FontAwesomeIcon
                  icon={darkMode ? faSun : faMoon}
                  className="h-6 w-6"
                />
              </button>
              <Link to="/cart" className="text-gray-700 hover:text-gray-900 relative transform hover:scale-110 transition duration-300">
                <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Menu as="div" className="relative">
                <Menu.Button>
                  <img
                    className="h-8 w-8 rounded-full transform hover:scale-110 transition-all duration-300"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/settings"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/logout"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Logout
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>

            {/* Mobile Hamburger Menu */}
            <Disclosure.Button className="md:hidden flex items-center transform hover:scale-110 transition duration-300">
              {open ? (
                <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  {item.icon} {/* Render icon next to the item name */}
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as="div"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <button
                onClick={toggleDarkMode}
                className="p-1 text-gray-700 hover:text-gray-900 transform hover:scale-105 transition duration-300"
              >
                <FontAwesomeIcon
                  icon={darkMode ? faSun : faMoon}
                  className="h-6 w-6"
                />
              </button>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
