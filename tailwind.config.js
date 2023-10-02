module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo", "Inter", "san-serif"],
        sansAlt: ["Montserrat", "Archivo", "Inter", "san-serif"],
      },
      colors: {
        background: {
          light: "#fcfbff",
          dark: "#191919",
        },
        primary: "#462aa5",
        secondary: "#2aa54b",
        accent: "#ffb201",
        tertiary: "#160b3e",
        quartenary: "#b4b5b4",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
