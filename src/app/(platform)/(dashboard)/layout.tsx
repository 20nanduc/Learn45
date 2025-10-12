import Appbar from "@/core/components/appbar";
import Sidebar from "@/core/components/sidebar";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen relative flex">
      <aside className="hidden transform transition-transform duration-300 ease-in sm:block ">
        <Sidebar />
      </aside>
      <main className="flex-1 h-screen transform transition-transform duration-300 ease-in flex flex-col sm:ml-21">
        <Appbar />
        <div className="w-full flex-1 mt-14 overflow-y-scroll">
          <div className="container">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
