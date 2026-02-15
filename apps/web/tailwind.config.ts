import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        greecon: {
          primary: "#14a463",
          deep: "#0b3b31"
        }
      }
    }
  },
  plugins: []
};

export default config;
