import React from "react";
import "./style.css";
import climberPic from "../../assets/images/img-1.jpg"
import {Container} from 'react-bootstrap';




function Climber() {
  return (
    <Container fluid>
      <Row-12 id="climbRow" class="row">
        <Col-6 id="climbLorem" class="col-6">
          <div id="climbLoremP">
          <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              quisquam accusamus reiciendis laudantium optio? Mollitia nobis rem
              aut impedit, debitis soluta vel maiores eius doloremque minima
              iste! Esse, hic molestias? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Illo dolorum fugit dignissimos culpa iste
              maiores assumenda? At sit earum recusandae sint ipsam possimus
              deleniti, repellat, dolorem eveniet fugiat praesentium quam.
            </p>
          
          </div>
          </Col-6>
        <Col-6 class="col-6">
          <img src= {climberPic} id="climbLoremPic" alt="rock climber"/>
          </Col-6>
      </Row-12>
    </Container>
  );
}

export default Climber;
