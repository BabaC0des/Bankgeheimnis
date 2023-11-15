/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        parallax: 'url("/img/bg.png")',
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
