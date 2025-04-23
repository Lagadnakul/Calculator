/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        calculator: {
          display: '#1a1a1a',
          button: '#2d3748',
          hover: '#4a5568',
          operator: '#7c3aed',
          operatorHover: '#6d28d9',
          equals: '#059669',
          equalsHover: '#047857',
          clear: '#dc2626',
          clearHover: '#b91c1c',
        }
      },
      boxShadow: {
        'calc': '0 0 40px -10px rgba(0, 0, 0, 0.5)',
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}