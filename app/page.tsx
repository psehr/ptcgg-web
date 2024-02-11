import { getServerSession } from "next-auth/next";
import { Press_Start_2P } from "next/font/google";
const ps2p = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className={`${ps2p.className} w-full h-full`}>
      {session ? (
        ""
      ) : (
        <div className="flex w-[90%] h-[80%] m-auto bg-gray-300/75 border-2 border-red-700 shadow-lg text-xl text-center text-gray-700">
          <div className="m-auto p-[10%]">
            <p className="text-xl">
              You can start playing right now by{" "}
              <a
                href="api/auth/signin"
                className="text-cool-pastel-red underline underline-offset-2 decoration-4"
              >
                logging in !
              </a>
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
