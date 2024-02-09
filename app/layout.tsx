import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Nav from "./components/Nav";
import WindowContainer from "./components/WindowContainer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PTCGG",
  description: "Cozy Pokemon Gacha",
};

// Every page has a Nav component, and a WindowContainer component holding the page content

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="absolute top-0 right-0 bottom-0 left-0 ">
      <body className={inter.className}>
        <div className="w-screen h-screen flex flex-row bg-gray-700">
          <div className="w-1/6 h-full ">
            <Nav></Nav>
          </div>
          <div className="w-4/5 h-[90%] m-auto">
            <WindowContainer>{children}</WindowContainer>
          </div>
        </div>
      </body>
    </html>
  );
}
