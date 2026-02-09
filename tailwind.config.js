/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // active le mode sombre avec la classe 'dark' sur le body
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fond & texte
        bg: "#000000",
        fg: "#ffffff",

        // Gris
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },

        // Couleur principale
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          400: "#60a5fa",
          DEFAULT: "#2563eb",      // blue-600
          dark: "#1d4ed8",         // blue-700
          800: "#1e40af",
        },

        // Couleur secondaire / accent
        secondary: "#06b6d4",
        accent: {
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
        },
      },

      // Animations personnalisées
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
