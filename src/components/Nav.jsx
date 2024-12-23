import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Products', href: '/products', current: false },
  { name: 'Cart', href: '/cart', current: false },
];

const categories = [
  { name: 'All', href: '/categories/all' },
  { name: 'Electronics', href: '/categories/electronics' },
  { name: 'Clothing', href: '/categories/clothing' },
  { name: 'Home & Garden', href: '/categories/home-garden' },
  { name: 'Toys', href: '/categories/toys' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>

          {/* Logo and Navigation Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex space-x-4">
              {/* Main Navigation */}
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
              {/* Categories as part of the Navbar */}
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden sm:block sm:ml-6 sm:mr-6 flex-grow max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md px-3 py-1 bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </form>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>

          {/* Notification */}
          <div className="relative ml-4">
            <button className="p-1 text-gray-400 hover:text-white focus:outline-none">
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Notifications</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Main Navigation */}
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block px-3 py-2 rounded-md text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
          {/* Categories */}
          {categories.map((category) => (
            <Disclosure.Button
              key={category.name}
              as="a"
              href={category.href}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {category.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
