import Image from "next/image";

// The PTC.GG logo in the navbar

export default function NavLogo() {
  return (
    <a href="/">
      <div className="bg-gray-300 border-4 border-gray-900 text-cool-pastel-red hover:text-gray-700 hover:bg-gameboy-light transition-all">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          alt="logo pokemon"
          width={60}
          height={60}
          className="mx-auto pt-2 h-11"
        />
        <p className="text-center text-md">PTC.GG</p>
      </div>
    </a>
  );
}
