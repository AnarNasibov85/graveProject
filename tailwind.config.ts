import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: '#ffffff', 
//         foreground: '#000000',
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;

// import type { Config } from "tailwindcss";

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
        background: '#ffffff', 
        foreground: '#000000', 
      },
    },
  },
  plugins: [],
} satisfies Config;