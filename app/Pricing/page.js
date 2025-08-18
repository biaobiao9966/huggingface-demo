// app/page.js
export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Leveling up AI collaboration and compute.
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                PRO Account
              </h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <div className="space-y-4"></div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Team</h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <div className="space-y-4"></div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Enterprise
              </h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <div className="space-y-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
