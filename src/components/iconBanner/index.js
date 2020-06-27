import React from "react";
import "./style.css";

function Icon() {
  return (
    <div class="container-fluid" id="icons">
      {/* <!-- icon row --> */}
      <div id="iconRow" class="row">
        {/* <!-- icon lorem col --> */}
        <div id="iconLorem" class="col-6">
          {/* <!-- icon lorem col paragraph --> */}
          <div id="iconLoremP">
            <h1 style="font-size: 3vmin; color: purple;">LOREM IPSUM </h1>
            <h1 style="font-size: 3vmin; color: purple;">DOLOR SIT AMET </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              quisquam accusamus reiciendis laudantium optio? Mollitia nobis rem
              aut impedit, debitis soluta vel maiores eius doloremque minima
              iste!
            </p>
            {/* <!-- dummt link for lorem --> */}
          </div>
        </div>
        {/* <!-- 2nd col in row for group of svgs --> */}
        <div id="svgDiv" class="col-6">
          <div class="container">
            <div class="row">
              <img id="homeLab" src="..." alt="Rooster Grin" /> LOREM IPSUM
            </div>
            <div class="col" style="width: 18rem;" id="homeEx">
              <img
                src="./src/assets/home-expertise.svg"
                class="circle"
                alt="Card image cap"
              />
              <div id="homeLabTxt">
                <p>LOREM</p>
              </div>
            </div>
            <div class="col" style="width: 18rem;" id="homeLab">
              <img
                src="./src/assets/home-hygiene.svg"
                class="circle"
                alt="board and pen"
              />
              <div id="homeLabTxt"></div>
              <p>LOREM IPSUM</p>
            </div>

            <div class="w-100"></div>
            <div class="col" style="width: 18rem;" id="homeLab">
              <img
                src="./src/assets/home-lab.svg"
                class="circle"
                alt="board and pen"
              />
              <div id="homeLabTxt"></div>
              <p>LOREM IPSUM</p>
            </div>

            <div class="col" style="width: 18rem;" id="homeLab">
              <img
                src="./src/assets/home-retention.svg"
                class="circle"
                alt="board and pen"
              />
              <div id="homeLabTxt"></div>
              <p>LOREM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icon;
