import React from "react";
import { Grid, Row, Col, Container } from "react-bootstrap/";

import "./style.css";
import HomeLab from "../../assets/images/home-lab.svg";
import HomeEx from "../../assets/images/home-expertise.svg";
import HomeHyg from "../../assets/images/home-hygiene.svg";
import HomeRet from "../../assets/images/home-retention.svg";

function Icon() {
  return (
    <Container fluid>
      <Row-12 id="climbRow" class="row">
        <Col-6 id="climbLorem" class="col-6">
          <div id="climbLoremP">
            <h1>LOREM IPSUM</h1>
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
        <Col-6 id="svgDiv" class="col-6">
          <Container>
            <Row>
              <Col>
              <div>
                <img className="circle" src={HomeLab} />
                LOREM IPSUM
                </div>
              </Col>
              <Col>
              <div>
                <img src={HomeEx} className="circle" />
                LOREM
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div>
                <img src={HomeHyg} className="circle" />
                LOREM IPSUM
                </div>
              </Col>
              <Col>
              <div>
                <img src={HomeRet} className="circle" />
                IPSUM
                </div>
              </Col>
            </Row>
          </Container>
        </Col-6>
      </Row-12>
    </Container>
  );
}

export default Icon;
