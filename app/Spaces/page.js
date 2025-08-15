import React from "react";
import { FaSearch, FaFilter, FaChevronDown } from "react-icons/fa";

export default function SpacesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col mb-8">
          <h1 class="text-3xl font-bold mb-4 left-3">
            Spaces
            <span class="text-gray-400"> .The AI App Directory</span>
          </h1>

          <div className="relative w-full max-w-2xl self-center">
            <input
              type="text"
              placeholder="Ask anything you want to do with AI"
              className="w-full py-4 pl-14 pr-6 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-sm"
            />
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-3 min-w-max">
            {[
              "Image Generation",
              "Video Generation",
              "Text Generation",
              "Language Translation",
              "Speech Synthesis",
              "3D Modeling",
              "Object Detection",
              "Text Analysis",
              "Image Editing",
              "Code Generation",
              "Question",
            ].map((task, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  index === 0
                    ? "bg-blue-100 border border-blue-300 text-blue-800 font-medium"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {task}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-gray-200 pb-4">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-gray-900 mr-3">
                Spaces of the week
              </h2>
              <span className="text-gray-500 text-sm">11 Aug 2025</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Filter by name"
                className="py-2 pl-10 pr-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <FaSearch className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 border border-gray-300">
                <FaFilter className="text-gray-500 mr-1" />
                <span className="text-gray-700 mr-1">Filters</span>
                <span className="bg-gray-300 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  0
                </span>
              </button>

              <div className="relative">
                <select className="py-2 pl-3 pr-8 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                  <option>Sort: Relevance</option>
                  <option>Sort: Popularity</option>
                  <option>Sort: Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FaChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl border border-gray-200 h-64 flex items-center justify-center"
            >
              <div className="text-center p-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <div className="h-4 bg-gray-200 rounded w-32 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-24 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 h-80 flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-500 mb-2">
              Content Area
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
