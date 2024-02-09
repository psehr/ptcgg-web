import WindowTitle from "./WindowTitle";

// The window container for every page

export default function WindowContainer(props: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-cool-pastel-red to-red-700 border-4 border-red-700 rounded-xl">
      <WindowTitle></WindowTitle>
      {props.children}
    </div>
  );
}
