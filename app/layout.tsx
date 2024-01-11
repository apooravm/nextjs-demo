import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";

const inter = Poppins({
  weight: ["400", "500", "600", "800"],
  style: ["normal"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "demo app",
  description: "None for now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // background-size: 40px 40px;
	// background-image: radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gradient-to-r from-blue-300 to-lime-200 min-h-screen">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
