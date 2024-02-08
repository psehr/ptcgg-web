export default function NavButton(props: {
  title: string;
  url: string;
  hidden: boolean;
}) {
  if (!props.hidden) {
    return (
      <a href={props.url}>
        <div
          className="
          bg-gray-300 
            mx-2
            my-3 
            rounded-md
            
            border-4 
            border-gray-900

            text-xs
            text-gray-700

            hover:bg-gameboy-light
            transition-all
          "
        >
          <p className="m-2">{props.title}</p>
        </div>
      </a>
    );
  }
}
