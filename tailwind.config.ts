import type { Config } from "tailwindcss";

export default {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f3f3f9',
        foreground: '#000000',
        mainColor: '#CE1535',
        gray:'#606060'

      },
      backgroundImage: {
        'custom-fond': "url('/bg-fond.jpeg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config;
