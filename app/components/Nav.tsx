"use client";

import Image from "next/image";
import { Press_Start_2P } from "next/font/google";

const ps2p = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export default function Nav() {
  return (
    <div className="bg-gradient-to-b from-cool-pastel-red to-red-700 w-40 h-full border-8 border-red-700">
      <div className="bg-cool-pastel-orange m-auto h-20 border-4 border-cool-less-dark ">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          alt="logo pokemon"
          width={60}
          height={60}
          className="mx-auto pt-2 h-11"
        />
        <div className={ps2p.className}>
          {" "}
          <p className="text-center text-md text-cool-pastel-red">PTCGG</p>
        </div>
      </div>
    </div>
  );
}
