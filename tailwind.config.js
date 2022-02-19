module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.{html}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        't-blue': '#1DA1F2',
        't-blue-dark': '#1A8CD8',
        't-black': '#14171A',
        't-dark-gray': '#657786',
        't-light-gray': '#AAB8C2',
        't-extra-light-gray': '#E1E8ED',
        't-extra-extra-light-gray': '#F5F8FA',
        't-bg-dark': '#243447',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
