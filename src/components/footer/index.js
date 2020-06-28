import React from "react";
import "./style.css";
import facebook from "../../assets/images/facebook.svg"
import instagram from "../../assets/images/instagram.svg"


function Footer() {
    return(
        <div id="footer">
        <p>Follow Us</p>
        <img src={instagram}  alt="instagram" />
        <img src={facebook}  alt="facebook" />
        
      </div>
    )
}

export default Footer;