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
    <div className="h-screen relative flex overflow-hidden">
      <aside className="hidden transform transition-transform duration-300 ease-in sm:block ">
        <Sidebar />
      </aside>
      <main className="flex-1 h-screen transform transition-transform duration-300 ease-in flex flex-col sm:ml-20">
        <Appbar />
        <div className="flex-1 p-6 mt-14 overflow-y-scroll sm:0">
          {children}
          <footer className="w-screen mx-auto mt-10 gap-1 flex flex-col max-w-2xl justify-center items-center py-5 text-gray-500">
            <p className="text-xs text-gray-500 text-center">
              Made with <span className="text-red-500">&hearts;</span> by the Learn45 Team. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 text-center">&copy;2025 Learn45.com</p>
          </footer>
        </div>

      </main>
    </div>
  );
}
