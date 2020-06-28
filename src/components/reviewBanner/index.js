import React from "react";
import "./style.css";
import Carousel from "../carousel/index";
import Stars from "../stars/index";

function Review() {
  return (
    <div className="container-fluid" id="climbers">
      <div id="ratingRow" className="row">
        <div id="RatingLorem" className="col-6">
          <div id="ratingStars">
            <h2 id="starH2">Star Rating</h2>
            <h2 id="starH2">Title Go Here</h2>
            <div id="starDiv">
              <Stars />
            </div>
          </div>
        </div>
        <div className="col-6">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Review;
