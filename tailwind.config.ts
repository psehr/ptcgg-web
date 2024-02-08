import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "cool-dark": "#ee8695",
        "cool-less-dark": "#333f58",
        "cool-blue": "#4a7a96",
        "cool-pastel-red": "#eb546a",
        "cool-pastel-orange": "#fbbbad",
      },
    },
  },
  plugins: [],
};
export default config;
