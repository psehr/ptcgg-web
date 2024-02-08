"use client";

import { Press_Start_2P } from "next/font/google";
import NavButton from "./NavButton";
import NavLogo from "./NavLogo";

const ps2p = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export default function Nav() {
  return (
    <div className="bg-gradient-to-b from-cool-pastel-red to-red-700 w-40 h-full border-8 border-red-700">
      <div className={ps2p.className}>
        <div className="m-auto h-20">
          <NavLogo></NavLogo>
        </div>
        <div className="mb-10">
          <NavButton title="Profile" url="profile" hidden={false}></NavButton>
          <NavButton title="Sign in" url="sign_in" hidden={true}></NavButton>
          <NavButton title="Sign up" url="sign_up" hidden={true}></NavButton>
        </div>
        <div className="m-auto">
          <NavButton title="Team" url="team" hidden={false}></NavButton>
          <NavButton
            title="Inventory"
            url="inventory"
            hidden={false}
          ></NavButton>
          <NavButton title="Shop" url="shop" hidden={false}></NavButton>
          <NavButton
            title="Binder"
            url="card_binder"
            hidden={false}
          ></NavButton>
        </div>
        <div className="mt-10">
          {" "}
          <NavButton title="Help" url="help" hidden={false}></NavButton>
        </div>
      </div>
    </div>
  );
}
