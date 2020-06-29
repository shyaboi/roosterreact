import React from 'react'
import './style.css'
import logo from '../../assets/images/logo-color.svg'


class Logo extends React.Component {
// click logo function with link
    pop = (a) => {
        window.open('http://www.roostergrin.com'); 
      };

      render(){
    return (
      <div id="logo">
        <img src={logo} alt="Logo" onClick={() => this.pop("clicked")}/>
      </div>
    );
  }
}
  export default Logo;