/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        parallax:
          'url("/img/web_zurich_paradeplatz_tram_zt_8121_1600x900.jpg")',
      },
      spacing: {
        128: "32rem",
      },
      boxShadow: {
        bot_shadow: "0 4px 60px black",
      },
    },
  },
  plugins: [],
};
