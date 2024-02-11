import { Press_Start_2P } from "next/font/google";
import NavButton from "./NavButton";
import NavLogo from "./NavLogo";

import { getServerSession } from "next-auth/next";

const ps2p = Press_Start_2P({ subsets: ["latin"], weight: "400" });

// The navigation bar

export default async function Nav() {
  let session = await getServerSession();

  return (
    <div className="h-full bg-gradient-to-b from-cool-pastel-red to-red-700 border-8 border-red-700">
      <div className={ps2p.className}>
        <div className="m-auto h-20">
          <NavLogo></NavLogo>
        </div>
        {!session ? (
          <NavButton title="Log in" url="api/auth/signin"></NavButton>
        ) : null}
        {session ? (
          <div className="mb-10">
            <NavButton title="Profile" url="profile"></NavButton>
            <NavButton title="Log out" url="api/auth/signout"></NavButton>
          </div>
        ) : null}
        {session ? (
          <div className="m-auto">
            <NavButton title="Team" url="team"></NavButton>
            <NavButton title="Inventory" url="inventory"></NavButton>
            <NavButton title="Shop" url="shop"></NavButton>
            <NavButton title="Binder" url="card_binder"></NavButton>
          </div>
        ) : null}
        {session ? (
          <div className="mt-10">
            {" "}
            <NavButton title="Help" url="help"></NavButton>
          </div>
        ) : null}
      </div>
    </div>
  );
}
