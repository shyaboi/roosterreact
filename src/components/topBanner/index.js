import React from 'react';
import './style.css';


function Hero() {
  return (
    <div className="HeroBanner">
  <div class="container-fluid">
    <div id="heRow" class="row">
      <div id="welcome" class="col-12">
        <h1 id="welNoFill">Welcome To</h1>
        <h2 id="welRooster">Rooster Grin</h2>
        <button type="button" id="heroButt" class="btn btn-primary">BUTTON BUTTON
        </button>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Hero;