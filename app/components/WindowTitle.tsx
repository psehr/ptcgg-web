"use client";

import { Press_Start_2P } from "next/font/google";
import { usePathname } from "next/navigation";
const ps2p = Press_Start_2P({ subsets: ["latin"], weight: "400" });

// The window title card for every window container

export default function WindowTitle() {
  // path formatting to window title
  let pathName = usePathname().split("/")[1];
  let arbitraryPath;
  let capitalizedPath =
    pathName.charAt(0).toLocaleUpperCase() + pathName.slice(1);

  // title formatting exceptions
  !pathName.length ? (arbitraryPath = "Welcome to PTC.GG !") : null;
  pathName == "card_binder" ? (arbitraryPath = "Card Binder") : null;

  return (
    <div className="w-9/12 py-2 my-4 mx-auto bg-gray-300 rounded-md border-4 border-gray-900 text-center text-gray-700">
      <p className={ps2p.className}>{arbitraryPath || capitalizedPath}</p>
    </div>
  );
}
