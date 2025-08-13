import "../styles/globals.css";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row justify-around items-center p-4 text-lg">
          <div className="rounded px-2 border-[1px] border-gray-200 hover:bg-gray-100 hover:cursor-pointer">
            Models
          </div>
          <div>Datasets</div>
          <div>Spaces</div>
          <div>Community</div>
          <div>Docs</div>
          <div>Pricing</div>
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
