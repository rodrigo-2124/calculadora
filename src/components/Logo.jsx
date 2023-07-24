import React from "react";
import guitarra  from '../img/guitar.png';

function Logo(){
    return (
        <div className='logo-contenedor'>
        <img
          src={guitarra}
          className='logo'
          alt='logo guitarra'
        />
      </div>
    );
}

export default Logo;