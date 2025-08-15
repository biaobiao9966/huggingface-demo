"use client";
import React, { useState } from "react";

export default function App() {
  const [sortOption, setSortOption] = useState("Trending");
  const [showSortOptions, setShowSortOptions] = useState(false);

  const sortOptions = ["Trending", "Latest"];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex w-full gap-4 max-w-7xl mx-auto">
        <div className="w-1/4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Join the conversation
            </h1>
            <p className="text-gray-700 mb-6">
              Join the community of Machine Learners and AI enthusiasts.
            </p>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mb-6 transition-colors">
              Sign Up
            </button>

            <div className="mb-6">
              <div className="flex items-start gap-3"></div>
            </div>
          </div>
        </div>

        <div className="w-2/4">
          <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">All HF Hub posts</h3>

              <div className="relative">
                <button
                  onClick={() => setShowSortOptions(!showSortOptions)}
                  className="flex items-center gap-1 text-gray-500 hover:text-gray-700 text-sm px-3 py-1.5 rounded-md border border-gray-300"
                >
                  <span>Sort: {sortOption}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showSortOptions && (
                  <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortOption(option);
                          setShowSortOptions(false);
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${
                          sortOption === option
                            ? "text-blue-600 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 留白区域 */}
            <div className="h-full border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              内容区域留白
            </div>
          </div>
        </div>

        <div className="w-1/4">
          <div className="bg-white rounded-xl shadow-lg p-6 h-full">
            <h3 className="font-semibold text-gray-900 mb-4">
              Recently active users
            </h3>
            {/* 留白区域 */}
            <div className="h-full border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              内容区域留白
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
