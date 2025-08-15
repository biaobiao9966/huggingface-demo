"use client";
import React, { useState } from "react";
import "./App.css";

const RightPanel = () => {
  const [sortOption, setSortOption] = useState("Trending");
  const [showSortOptions, setShowSortOptions] = useState(false);

  const sortOptions = ["Trending", "Latest", "Top Rated", "Most Viewed"];

  return (
    <div className="bg-gray-50 border-y border-gray-200 h-full">
      <div className="px-6 py-3 flex justify-between">
        <div className="flex items-center gap-2 text-blue-600 font-medium">
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>Community Articles</span>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowSortOptions(!showSortOptions)}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-700 text-sm"
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
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
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
    </div>
  );
};

const CommunityNavbar = () => {
  const [activeCategory, setActiveCategory] = useState("NLP");

  const leftCategories = [
    "社区动态",
    "教程",
    "开源协作",
    "合作伙伴",
    "科研相关",
    "NLP",
    "Audio",
    "CV",
    "RL",
  ];

  const rightCategories = ["AI 伦理", "扩散模型", "游戏开发"];

  return (
    <div className="min-h-1 bg-gray-50 p-4">
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-lg font-semibold text-gray-900">
            帖子、文章和讨论
          </h1>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>New Article</span>
            </button>

            <button className="text-gray-500 hover:text-gray-700">
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
            </button>

            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-3">
          <div className="flex items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {leftCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 text-sm whitespace-nowrap rounded-full transition-colors ${
                    activeCategory === category
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="text-gray-400 flex-shrink-0">
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
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2">
              {rightCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 text-sm whitespace-nowrap rounded-full transition-colors ${
                    activeCategory === category
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="h-64 bg-gray-50 border-t border-gray-200 flex items-center justify-center text-gray-400"></div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <div className="flex w-full">
        <div className="w-3/4">
          <CommunityNavbar />
        </div>

        <div className="w-1/4 p-4">
          <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden">
            <RightPanel />

            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center text-gray-500">
                右侧更多内容区域
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
