import React from 'react'
import './style.css'
import logo from '../../assets/images/logo-color.svg'


function Logo() {
    return (
      <div id="logo">
        <img src={logo} alt="Logo" />
      </div>
    );
  }
  
  export default Logo;