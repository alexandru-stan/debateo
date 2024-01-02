import React from 'react';
import imagen from '../../../assets/img/LogoDebateo.PNG'
import Logo from '../reusable/img';
// import '../../../assets/styles/Principal.css';
// import '../../../assets/img/LogoDebateo.PNG'
import axios from 'axios';






const Header = () => {


    

    return (
        <div className='flex  justify-center border-naranjaMolon border-b-2'  id="header">
         <Logo ruta={imagen}/>
      
         
         
        </div>
    );

}

export default Header;