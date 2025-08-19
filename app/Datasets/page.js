import React from "react";

export default function ModelPage() {
  // 模型数据
  const models = [
    {
      id: 1,
      name: "fka/awesome-chatgpt-prompts",
      tag: "Viewer",
      updated: "Updated Jan 6",
      downloads: "203",
      usage: "34.8k",
      likes: "8.73k",
    },
    {
      id: 2,
      name: "allenai/WildChat-4.8M",
      tag: "Viewer",
      updated: "Updated 7 days ago",
      downloads: "3.2M",
      usage: "1.19k",
      likes: "69",
    },
    {
      id: 3,
      name: "micromind-ai/MiroVerse-v0.1",
      tag: "Viewer",
      updated: "Updated 4 days ago",
      downloads: "228k",
      usage: "485",
      likes: "51",
    },
    {
      id: 4,
      name: "xlangai/AgentNet",
      tag: "Preview",
      updated: "Updated 3 days ago",
      downloads: null, // 没有下载量
      usage: "2.19k",
      likes: "22",
    },
    {
      id: 5,
      name: "FreedomIntelligence/medical-01-reasoning™",
      tag: "Viewer",
      updated: "Updated Apr 22",
      downloads: "90.1k",
      usage: "9.19k",
      likes: "833",
    },
  ];

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
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Your Workspace</h3>
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                <div className="text-sm">
                  <p className="font-medium text-gray-900">
                    Personal Workspace
                  </p>
                  <p className="text-gray-500">5 models, 3 datasets</p>
                </div>
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
              <p className="text-sm text-gray-500 mt-1">
                12,345 models • 1,234 recently updated
              </p>
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

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {models.map((model) => (
                <div
                  key={model.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex">
                    {/* 模型图标 */}
                    <div className="flex-shrink-0 mr-3">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                    </div>

                    {/* 模型详情 */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 truncate">
                        {model.name}
                      </h3>

                      <div className="mt-1 flex flex-wrap items-center text-sm text-gray-500">
                        <span
                          className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                            model.tag === "Viewer"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {model.tag}
                        </span>

                        <span className="mx-2">-</span>
                        <span>{model.updated}</span>

                        {/* 下载量（部分模型可能没有） */}
                        {model.downloads && (
                          <>
                            <span className="mx-2">•</span>
                            <span className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-1 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                ></path>
                              </svg>
                              {model.downloads}
                            </span>
                          </>
                        )}

                        {/* 使用量 */}
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          {model.usage}
                        </span>

                        {/* 点赞数 */}
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                          </svg>
                          {model.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
                Previous
              </button>
              <div className="hidden md:flex">
                {[1, 2, 3, 4, 5, 6].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 mx-0.5 text-sm font-medium rounded ${
                      page === 1
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="px-3 py-1 text-sm text-gray-500">...</span>
                <button className="px-3 py-1 mx-0.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
                  24
                </button>
              </div>
              <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
