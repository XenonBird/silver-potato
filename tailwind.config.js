/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#5a3dff',
          secondary: '#2ac790',
          accent: '#dfdafb',
          neutral: '#181a29',
        },
      },
      'corporate',
    ],
  },
};
