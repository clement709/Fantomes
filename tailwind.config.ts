import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151A2E",
        paper: "#F6F1E9",
        corail: "#E85D3F",
        moss: "#3A5A45",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
