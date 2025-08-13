"use client";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Models");

  const navItems = [
    { id: "models", label: "Models" },
    { id: "datasets", label: "Datasets" },
    { id: "spaces", label: "Spaces" },
    { id: "community", label: "Community" },
    { id: "docs", label: "Docs" },
    { id: "pricing", label: "Pricing" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm h-full w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">
                Hugging Face
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.label)}
                  className={`${
                    activeTab === item.label
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right side - Search and Login */}
          <div className="flex items-center">
            {/* Search icon */}
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            {/* Login button */}
            <div className="ml-3 hidden sm:block">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors duration-200">
                <UserIcon className="h-4 w-4 mr-1" />
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="ml-3 md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.label);
                  setIsMenuOpen(false);
                }}
                className={`${
                  activeTab === item.label
                    ? "bg-indigo-50 border-l-4 border-indigo-500 text-indigo-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } block w-full text-left pl-3 pr-4 py-2 text-base font-medium transition-colors duration-200`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full flex justify-center mt-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors duration-200">
                <UserIcon className="h-4 w-4 mr-1" />
                Login
              </button>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
