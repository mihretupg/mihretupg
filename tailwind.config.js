/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#5C4F4A",
          900: "#5C4F4A",
          800: "#5C766D",
        },
        accent: {
          50: "#EDE9E6",
          100: "#EDE9E6",
          200: "#5C766D",
          300: "#5C766D",
          400: "#C9996B",
          500: "#5C766D",
          600: "#5C766D",
          700: "#5C766D",
        },
        resume: {
          paper: "#EDE9E6",
          surface: "#EDE9E6",
          line: "#C9996B",
          muted: "#5C766D",
          body: "#5C4F4A",
          strong: "#5C4F4A",
        },
      },
      boxShadow: {
        card: "0 20px 45px rgba(15, 23, 42, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
