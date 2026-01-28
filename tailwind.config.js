import flowbite from "flowbite/plugin";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 25px rgba(59, 130, 246, 0.35)"
      }
    }
  },
  plugins: [flowbite, flowbiteReact]
};