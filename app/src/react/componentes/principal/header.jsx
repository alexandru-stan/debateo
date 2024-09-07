import React from 'react';
import imagen from '../../../assets/img/LogoDebateo.png'
import Logo from '../reusable/img';
// import '../../../assets/styles/Principal.css';
// import '../../../assets/img/LogoDebateo.png'
import axios from 'axios';






const Header = () => {


    

    return (
        <div className='flex pt-5 pb-3 items-center flex-col justify-center border-moradoLight border-b-2'  id="header">
         <Logo  style={{width:'5rem'}} clase={""} ruta={imagen}/>
         <p style={{fontSize:'2rem'}} className='Kanit'>Debateo</p>
         <sub className="font-bold text-naranjaMolon text-center">by Alexandru Stan</sub>
        </div>
    );

}

export default Header;