/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mob' : { 'min' : '360px' , 'max': '479px' },
      'xsm' : { 'min' : '480px' , 'max': '639px' },
      'sm'  : {'min': '640px', 'max': '767px'},
      'md'  : {'min': '768px', 'max': '1023px'},
      'lg'  : {'min': '1024px', 'max': '1279px'},
      'xl'  : {'min': '1280px', 'max': '1535px'},
      '2xl' : {'min': '1536px'},
    },
    extend: {
      colors: {
        'yellow': '#ffc300',
        'blue-dark': '#001d3d',
        'orange': '#fc8019',
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
        'gray-count' : '#bebfc5'
        
      },
    },
    
    fontFamily: {
      'sans': ['"PT Sans"', 'Calibri', 'Tahoma', 'sans-serif'],
    },
  },
  plugins: [],
}
