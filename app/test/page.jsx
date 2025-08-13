export default function TestPage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold text-blue-600">Tailwind CSS 测试页面</h1>

      <div className="space-y-4">
        <div className="p-4 bg-gray-100">
          <p className="text-gray-700">背景色测试：这应该有灰色背景</p>
        </div>

        <div className="p-4 border-2 border-red-600">
          <p>边框测试：这应该有红色边框</p>
        </div>

        <div className="p-4 rounded-lg border-2 border-blue-500 bg-blue-50">
          <p>圆角测试：这应该有圆角和蓝色边框</p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-white">
          <p>渐变测试：这应该有紫色到粉色的渐变背景</p>
        </div>

        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            按钮1
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            按钮2
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            按钮3
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-200 rounded">网格1</div>
          <div className="p-4 bg-green-200 rounded-md">网格2</div>
          <div className="p-4 bg-blue-200 rounded-lg">网格3</div>
        </div>
      </div>
    </div>
  );
}
