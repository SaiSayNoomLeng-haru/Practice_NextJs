import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange' : '#ff8c38',
        'custom-dark': '#252525',
        'custom-white' : '#fff7ed',
        'custom-yellow-500' : '#ffcc8d',
        'custom-yellow-400': '#ffead0',
        'simple' : '#e17654',
        'rugged' : '#115e59',
        'luxury' : '#161616'
       },
       fontSize: {
         'fs-900' : '6rem',
         'fs-800' : '4.5rem',
         'fs-700' : '3.75rem',
         'fs-600' : '2.25rem',
         'fs-500' : '1.75rem',
         'fs-400' : '1rem',
         'fs-300' : '0.875rem',
         'fs-200' : '0.5rem'
       },
    },
  },
  plugins: [],
} satisfies Config;
