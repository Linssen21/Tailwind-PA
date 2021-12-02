// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          "bookmark-purple": "#5267DF", "bookmark-red": "#FA5959", 
          "bookmark-blue": "#242445", "bookmark-grey": "#9194A2", "bookmark-white": "#f7f7f7",
        }
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"]
      },
      // Add Container's Global Configuration
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px"
        }
      }
    },
    variants: {},
    plugins: [],
  }