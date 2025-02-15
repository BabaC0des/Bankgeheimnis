/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./html/history.html",
    "./html/removal.html",
    "./html/repercussions.html",
    "./html/team.html",
  ],
  theme: {
    screens: {
      xs: "240px",
      "2xl": "1500px",
      sm: "640px",
      lg: "1024px",
      xl: "1280px",
      md: "768px",
      navp: "1380px",
      cardresp: "1175px",
      noresp: "1176px",
    },
    extend: {
      backgroundImage: {
        parallax: 'url("/img/trams_dimmed.jpg")',
      },
      spacing: {
        128: "32rem",
        192: "48rem",
        256: "64rem",
        260: "80rem",
      },
      boxShadow: {
        bot_shadow: "0 4px 60px black",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
