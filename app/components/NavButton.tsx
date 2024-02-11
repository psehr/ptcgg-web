"use client";

import { usePathname } from "next/navigation";

// The button for each page in the navbar

export default function NavButton(props: { title: string; url: string }) {
  let selected = usePathname().includes(props.title.toLowerCase());
  let classString = `mx-2
  my-3 
  rounded-md
  
  border-4 
  border-gray-900

  text-xs
  text-gray-700

  hover:bg-gameboy-light
  transition-all
  
  ${selected ? "bg-gameboy-light" : "bg-gray-300"}
  `;

  return (
    <a href={props.url}>
      <div className={classString}>
        <p className="m-2">{props.title}</p>
      </div>
    </a>
  );
}
