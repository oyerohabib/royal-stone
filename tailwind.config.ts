import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#0F1C39",
        "primary-green": "#419444",
        "secondary-green": "#E4FFE2",
        "primary-blue": "#21428C",
        "lighter-gray": "#FCFCFC",
        "light-gray": "#6B7385",
        "light-black": "#0F1C39CC",
        copyright: "#3A495B",
        btn: "#24222F",
      },
      screens: {
        xxs: "365px",
        xs: "520px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)"],
    },
  },
  plugins: [],
};
export default config;
