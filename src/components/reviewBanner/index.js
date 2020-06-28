import React from "react";
import "./style.css";
import Carousel from '../carousel/index'

 

function Review() {
    return (
<div class="container-fluid" id="climbers">
        <div id='ratingRow' class="row">
          <div id="RatingLorem" class="col-6">
            <div id="ratingStars">
             
              <h2>Star Rating</h2>
              <h2>Title Go Here</h2>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <div class="col-6">
            <Carousel />
          </div>
          </div>
          </div>
    )};

    export default Review;