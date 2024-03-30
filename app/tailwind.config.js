/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,jsx}",
    "./src/react/paginas/*.jsx",
    "./src/react/Prueba.jsx",
    "./src/react/componentes/**/*.jsx",
    "./src/react/componentes/**/**/*.jsx",
  

   
  ],
  theme: {
    colors:{
      ...require('tailwindcss/colors'),
      moradoLight: '#444073',
      moradoOscuro:'#171626',
      moradoFondo:'#1f1e33',
      
      fondoPublicaciones:'#201D54',
      naranjaMolon:'#ff8c00',
      rojo:'#04ff00',
      naranjaSeleccionado:'#E2FF00'
 
    


    },

    

    spacing: {
      'cabecera':'20%',
      'topSearchResults':'100%',
      'marginLigero':'10px',
      'alturaPostDefault':'600px',
      'postHeaderHeight':'15%',
      'postBodyHeight':'75%',
      'postFooterHeight':'10%',
      'postMT':'10%',
      'half':'50%',
      'comInfo':'20vh',
      'barraBusqueda':'5vh'
     
    
    },

    screens:{
     
    },
    
    extend: {},
  },
  plugins: [],

  
}

// PARA ARRANCAR TAILWIND SE UTILIZA EL SIGUIENTE COMANDO: npx tailwindcss -i [ruta/input.css] -o [ruta/output.css] --watch