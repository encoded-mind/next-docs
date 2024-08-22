import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
const { addDynamicIconSelectors } = require("@iconify/tailwind");

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
  theme: {},
  plugins: [
    flowbite.plugin(),
    addDynamicIconSelectors(),
    require("@tailwindcss/typography"),
  ],
};
export default config;
