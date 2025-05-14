module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Smooth blue
        secondary: '#6B7280', // Modern slate gray
        success: '#10B981',
        warning: '#FFC107',
        danger: '#EF4444',
        info: '#60A5FA',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
