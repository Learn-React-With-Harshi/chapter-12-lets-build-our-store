/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    screens: {
      "mob" : { max: "428px" },
      "xsm" : { max : "640px"},
      "sm"  : { max : "768px" },
      "md"  : { max : "1024px" }

    },
    extend: {

    },
    colors: {
      'yellow': '#ffc300',
      'blue-dark': '#001d3d',
      'orange': '#ff7849',
      'green': '#6dad1f',
      'white' : '#fff',
      'red': '#c70039',
      'gray': '#eeeeee',
      'gray-light': '#d3dce6',
      'gray-dark' : '#686b78',
      'gray-details' : '#535665',
      'gray-desc' :'rgba(40,44,63,.45)',
      'github' : '#333',
      'linkedin' : '#0e76a8', 
      'google' : '#ea4335',
      'title' : '#444',
      'bio' : '#999',
      'blue' : '#1890ff',
      'shimmer' : '#999',
      
    },
    fontFamily: {
      'sans': ['"PT Sans"', 'Calibri', 'Tahoma', 'sans-serif'],
    },
  },
  plugins: [],
}
