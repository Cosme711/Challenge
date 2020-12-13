module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#414656",
      white: "#A6ABBD",
      blue: "#1E2331",
      whiteblue: "#60A5FA"
    },
    fontFamily: {
      'body': ['Padauk', 'sans-serif'],
      'mono': ['Montserrat', 'sans-serif'],
      
    },
    extend: {
      animation :{
        addTodo: "addTodo 0.4s ease",
        completeTodo: "completeTodo 0.7s forwards",
      },
      keyframes: {
        'addTodo': {
          '0%' : { transform: "translatex(-40rem)" },
          '100%' : { transform: "translateY(0rem)" }
        },
        'completeTodo': {
          '0%' : { opacity: "1", textDecoration: "none"},
          '100%' : { opacity:"0.5", textDecoration: "line-through"}
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
