export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Documentation
          </h1>

          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
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
            <input
              type="text"
              placeholder="Search across all docs"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Hub & Client Libraries
              </h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <div className="space-y-4">
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Deployment & Inference
              </h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <div className="space-y-4">
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Core ML Libraries
              </h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <div className="space-y-4">
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Training & Optimization
              </h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <div className="space-y-4">
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Collaboration & Extras
              </h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <div className="space-y-4">
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
              <div className="h-24 bg-gray-100 rounded-lg border border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
