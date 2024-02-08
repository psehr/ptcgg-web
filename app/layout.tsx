import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PTCGG",
  description: "Cozy Pokemon Gacha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="absolute top-0 right-0 bottom-0 left-0 bg-gray-700"
    >
      <body className={inter.className}>
        <div className="absolute top-0 right-0 bottom-0 left-0">
          <Nav></Nav>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
