import React from "react";
import logo from '../imagenes/logo.png';

function Logo() {

    return (
        <div className='logo-contenedor'>
            <img
                src={logo}
                className='logo'
                alt='Logo'
            />
        </div>
    );
}

export default Logo;