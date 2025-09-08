module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trustworthy Calm
        primary: {
          DEFAULT: "#4A90A4", // trustworthy-calm
          50: "#F0F7F9", // trustworthy-calm-50
          100: "#D6EBF1", // trustworthy-calm-100
          200: "#B8DCE6", // trustworthy-calm-200
          300: "#8BC4D3", // trustworthy-calm-300
          400: "#6AACBE", // trustworthy-calm-400
          500: "#4A90A4", // trustworthy-calm-500
          600: "#3D7A8C", // trustworthy-calm-600
          700: "#326574", // trustworthy-calm-700
          800: "#28505C", // trustworthy-calm-800
          900: "#1F3B44", // trustworthy-calm-900
        },
        // Secondary Colors - Healing Green
        secondary: {
          DEFAULT: "#7FB069", // healing-green
          50: "#F4F9F1", // healing-green-50
          100: "#E5F2DD", // healing-green-100
          200: "#D1E8C4", // healing-green-200
          300: "#B5D9A1", // healing-green-300
          400: "#9AC485", // healing-green-400
          500: "#7FB069", // healing-green-500
          600: "#6A9556", // healing-green-600
          700: "#567A46", // healing-green-700
          800: "#435F37", // healing-green-800
          900: "#32452A", // healing-green-900
        },
        // Accent Colors - Warm Encouragement
        accent: {
          DEFAULT: "#F4A261", // warm-encouragement
          50: "#FEF8F2", // warm-encouragement-50
          100: "#FDEEE0", // warm-encouragement-100
          200: "#FBDCC1", // warm-encouragement-200
          300: "#F8C394", // warm-encouragement-300
          400: "#F6B27B", // warm-encouragement-400
          500: "#F4A261", // warm-encouragement-500
          600: "#E08A47", // warm-encouragement-600
          700: "#C7723A", // warm-encouragement-700
          800: "#A85C2E", // warm-encouragement-800
          900: "#8A4825", // warm-encouragement-900
        },
        // Background Colors
        background: "#FEFEFE", // clean-canvas
        surface: "#F8F9FA", // subtle-elevation
        // Text Colors
        text: {
          primary: "#2D3748", // clear-reading
          secondary: "#718096", // gentle-hierarchy
        },
        // Status Colors
        success: {
          DEFAULT: "#68D391", // earned-celebration
          50: "#F0FFF4", // earned-celebration-50
          100: "#C6F6D5", // earned-celebration-100
          200: "#9AE6B4", // earned-celebration-200
          300: "#68D391", // earned-celebration-300
          400: "#48BB78", // earned-celebration-400
          500: "#38A169", // earned-celebration-500
          600: "#2F855A", // earned-celebration-600
          700: "#276749", // earned-celebration-700
          800: "#22543D", // earned-celebration-800
          900: "#1C4532", // earned-celebration-900
        },
        warning: {
          DEFAULT: "#F6AD55", // caring-concern
          50: "#FFFAF0", // caring-concern-50
          100: "#FEEBC8", // caring-concern-100
          200: "#FBD38D", // caring-concern-200
          300: "#F6AD55", // caring-concern-300
          400: "#ED8936", // caring-concern-400
          500: "#DD6B20", // caring-concern-500
          600: "#C05621", // caring-concern-600
          700: "#9C4221", // caring-concern-700
          800: "#7B341E", // caring-concern-800
          900: "#652B19", // caring-concern-900
        },
        error: {
          DEFAULT: "#FC8181", // helpful-guidance
          50: "#FFF5F5", // helpful-guidance-50
          100: "#FED7D7", // helpful-guidance-100
          200: "#FEB2B2", // helpful-guidance-200
          300: "#FC8181", // helpful-guidance-300
          400: "#F56565", // helpful-guidance-400
          500: "#E53E3E", // helpful-guidance-500
          600: "#C53030", // helpful-guidance-600
          700: "#9B2C2C", // helpful-guidance-700
          800: "#822727", // helpful-guidance-800
          900: "#63171B", // helpful-guidance-900
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // minimal-separation
          light: "#F7FAFC", // subtle-separation
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Headlines and CTAs
        'source-sans': ['Source Sans Pro', 'sans-serif'], // Body text
        crimson: ['Crimson Text', 'serif'], // Accents and testimonials
        sans: ['Source Sans Pro', 'sans-serif'], // Default sans
        serif: ['Crimson Text', 'serif'], // Default serif
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(74, 144, 164, 0.08)', // organic-depth
        'gentle': '0 2px 10px rgba(74, 144, 164, 0.05)', // subtle-elevation
        'focus': '0 6px 30px rgba(74, 144, 164, 0.12)', // attention-depth
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'gentle': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      lineHeight: {
        'relaxed': '1.6',
        'comfortable': '1.3',
      },
    },
  },
  plugins: [],
}