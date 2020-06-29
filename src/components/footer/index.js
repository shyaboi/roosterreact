import React from "react";
import "./style.css";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";

class Footer extends React.Component {
  pop = (a) => {
    window.open(
      "http://www.instagram.com",
      "jav",
      "width=900,height=650,resizable=yes"
    );
  };
  pup = (a) => {
    window.open(
      "http://www.facebook.com",
      "jav",
      "width=1000,height=650,resizable=yes"
    );
  };
  render() {
    return (
      <div id="footer">
        <p>Follow Us</p>
        <img
          src={instagram}
          alt="instagram"
          onClick={() => this.pop("clicked")}
        />
        <img
          src={facebook}
          alt="facebook"
          onClick={() => this.pup("clicked")}
        />
      </div>
    );
  }
}
export default Footer;
