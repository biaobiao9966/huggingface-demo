"use client";
import React from "react";
import { useState } from "react";

export default function ModelPage() {
  // 使用状态管理当前选中的菜单项
  const [activeItem, setActiveItem] = useState("Tasks");

  // 分组结构数据
  const menuGroups = [
    {
      title: "WORKSPACE",
      items: ["Main", "Tasks", "Libraries", "Languages", "Licenses", "Other"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row px-8 py-8 pb-12 max-w-7xl mx-auto">
        {/* 左侧导航栏 - 紧凑分组样式 */}
        <div className="w-full lg:w-56 mb-8 lg:mb-0 lg:mr-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="py-3 space-y-4">
              {menuGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  {/* 分组标题 */}
                  {group.title && (
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2">
                      {group.title}
                    </h3>
                  )}

                  {/* 分组内的菜单项 */}
                  <div className="space-y-0.5">
                    {group.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`flex items-center px-4 py-2.5 cursor-pointer transition-colors text-sm ${
                          activeItem === item
                            ? "bg-blue-50 border-l-4 border-blue-500"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() => setActiveItem(item)}
                      >
                        <span
                          className={`${
                            activeItem === item
                              ? "font-medium text-black"
                              : "text-gray-600 hover:text-gray-900"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
