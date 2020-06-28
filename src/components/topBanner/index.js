import React from "react";
import "./style.css";
import ClickWel from "../Buttons/welcomeButt";

function Hero() {
  return (
    <div className="HeroBanner">
      <div className="container-fluid">
        <div id="heRow" className="row">
          <div id="welcome" className="col-12">
            <h1 id="welNoFill">Welcome To</h1>
            <h2 id="welRooster">Rooster Grin</h2>
            <ClickWel id="heroButt" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
