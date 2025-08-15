"use client";
import { useState, useRef } from "react";
import { useEffect } from "react";
import "../styles/globals.css";

export default function DashboardLayout({ children }) {
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCommunityOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex flex-row justify-between items-center p-4 text-lg max-w-screen-xl mx-auto">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-gray-900">
                Hugging Face
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search models, datasets, users..."
                  className="w-64 py-2 pl-10 pr-4 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-8">
              <div className="text-gray-600 hover:text-blue-600 hover:font-medium hover:cursor-pointer transition-colors">
                Models
              </div>
              <div className="text-gray-600 hover:text-green-600 hover:font-medium hover:cursor-pointer transition-colors">
                Datasets
              </div>

              <div className="relative" ref={dropdownRef}>
                <div
                  className={`flex items-center text-gray-600 hover:text-pink-600 hover:font-medium hover:cursor-pointer transition-colors ${
                    isCommunityOpen ? "text-pink-600 font-medium" : ""
                  }`}
                  onClick={() => setIsCommunityOpen(!isCommunityOpen)}
                >
                  Community
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                      isCommunityOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* 下拉菜单内容 */}
                {isCommunityOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                    <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-100">
                      Community
                    </div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-600"
                    >
                      Blog Articles
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-600"
                    >
                      Social Posts
                    </a>

                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-600"
                    >
                      Daily Papers
                    </a>
                  </div>
                )}
              </div>

              <div className="text-gray-600 hover:text-yellow-600 hover:font-medium hover:cursor-pointer transition-colors">
                Docs
              </div>
              <div className="text-gray-600 hover:text-red-600 hover:font-medium hover:cursor-pointer transition-colors">
                Pricing
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-gray-600 hover:text-gray-900 hover:cursor-pointer">
                v
              </div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
            </div>
          </div>
        </div>

        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
