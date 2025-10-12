import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "@/styles/globals.css";
import { AppProvider } from "./provider";

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-playfair',
});

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600',],
  display: 'swap',
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: "Learn45 | 45 minute focused learning",
  description: "Find 45 minutes learning material for any topic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${playfair.variable} ${lora.variable}`}>
      <body
        className={"antialiased bg-background"}
      >
        <main className="w-full overflow-x-hidden">
          <AppProvider>{children}</AppProvider>
        </main>
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
