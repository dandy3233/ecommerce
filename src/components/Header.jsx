import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSun, faMoon, faShoppingCart, faBell } from "@fortawesome/free-solid-svg-icons";
import { Disclosure, Menu } from "@headlessui/react";
import bannerImage from '../assets/image2.png';

// Navigation data
const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Products", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ cartCount, categories }) => {
  const [darkMode, setDarkMode] = useState(false);

  // On initial load, check if dark mode was previously set in localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) document.documentElement.classList.add("dark");
  }, []);

  // Toggle dark mode and update localStorage
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      localStorage.setItem("darkMode", newDarkMode);
      document.documentElement.classList.toggle("dark", newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 dark:bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white">
                  {open ? (
                    <FontAwesomeIcon icon={faTimes} className="block h-6 w-6" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              

              {/* Logo and Navigation */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                  <img
                    className="h-16 w-16 rounded-full" // Makes the image circular
                    src={bannerImage}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dark Mode Toggle, Shopping Cart, and Notifications */}
              <div className="ml-3 relative flex items-center">
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-1 text-gray-400 hover:text-white focus:outline-none"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <FontAwesomeIcon icon={faSun} className="h-6 w-6" />
                  ) : (
                    <FontAwesomeIcon icon={faMoon} className="h-6 w-6" />
                  )}
                </button>

                {/* Shopping Cart Icon with Cart Count */}
                <div className="ml-3 text-gray-400 hover:text-white relative">
                  <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </div>

                {/* Notification Bell Icon */}
                <button
                  type="button"
                  className="ml-4 relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <FontAwesomeIcon icon={faBell} aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Profile Dropdown */}
                <Menu as="div" className="relative ml-3">
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt="User Profile"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 ring-1 ring-black/5">
                    <Menu.Item>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Your Profile
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Settings
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign out
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
