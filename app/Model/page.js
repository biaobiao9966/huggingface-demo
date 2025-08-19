import React from "react";

export default function ModelPage() {
  // 模型数据

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row px-8 py-8 pb-12 max-w-7xl mx-auto">
        {/* 左侧导航栏 */}
        <div className="w-full lg:w-64 mb-8 lg:mb-0 lg:mr-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* 导航菜单项 */}
            <div className="space-y-1 py-3">
              {[
                "Main",
                "Tasks",
                "Libraries",
                "Languages",
                "Licenses",
                "Other",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
                    index === 1
                      ? "bg-blue-50 border-l-4 border-blue-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`${
                      index === 1
                        ? "font-medium text-blue-700"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 工作室卡片 */}
          <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200"></div>
            <div className="p-4">
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧内容区域 */}
        <div className="flex-1">
          {/* 模型标题和统计 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Models</h2>
            </div>

            {/* 搜索和过滤 */}
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="relative flex-1 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Filter by name"
                  className="w-full py-2 pl-10 pr-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>

              <button className="ml-3 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
