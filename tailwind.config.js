module.exports = {
  content: [
    "./*.{html,js}",
    "./src/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco': 'url("../img/sanFrancisco.jpg")',
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
        'LA': "url('../img/LA.jpg')",
        'miami': "url('../img/miami.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'search': "url('../img/yosemite.jpg')",
        'raja': "url('../img/raja.jpg')",
        'nuqui': "url('../img/nuqui.jpg')",
        'atenas': "url('../img/atenas.jpg')"
      },
      colors: {
        'primary': {
          500:'#F28793',
          900:'#CC2D4A'
          },
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      height: {
				"10vh": "10vh",
				"20vh": "20vh",
				"30vh": "30vh",
				"40vh": "40vh",
				"50vh": "50vh",
				"60vh": "60vh",
				"70vh": "70vh",
				"80vh": "80vh",
				"90vh": "90vh",
				"100vh": "100vh",
			},
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
