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
    extend: {
      backgroundImage: {
        parallax:
          'url("/img/web_zurich_paradeplatz_tram_zt_8121_1600x900 - Kopie.jpg")',
      },
      spacing: {
        128: "32rem",
      },
      boxShadow: {
        bot_shadow: "0 4px 60px black",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
