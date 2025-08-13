import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row">
          <div className="rounded-lg border-2 border-red-400/100">Models</div>
          <div className="rounded-full border-1 border-zinc-400">Datasets</div>
          <div className="rounded-full border-1 border-zinc-400">Spaces</div>
          <div className="rounded-full border-1 border-zinc-400">Community</div>
          <div className="rounded-full border-1 border-zinc-400">Docs</div>
          <div className="rounded-full border-1 border-zinc-400">Pricing</div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
