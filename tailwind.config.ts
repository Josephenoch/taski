import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "DEFAULT":"#007FFF",
          textBase: "#3F3D56",
          slateBlue: "#8D9CB8",
          paleWhite: "#F5F7F9",
          mutedAzure: "#C6CFDC"
        }
      },
      transitionProperty: {
        "height": "height"
      }
    },
  },
  plugins: [],
};
export default config;
