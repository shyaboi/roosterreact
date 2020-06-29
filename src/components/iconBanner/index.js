import React from "react";
import { Row, Col, Container } from "react-bootstrap/";

import "./style.css";
// icon svg files
import HomeLab from "../../assets/images/home-lab.svg";
import HomeEx from "../../assets/images/home-expertise.svg";
import HomeHyg from "../../assets/images/home-hygiene.svg";
import HomeRet from "../../assets/images/home-retention.svg";

function Icon() {
  return (
    // container for full icon row
    <Container fluid>
      {/* icon row */}
      <Row-12 id="iconRow" class="row">
        {/* icon col-6 */}
        <Col-6 id="iconLorem" class="col-6">
          {/* icon paragraph */}
          <div id="iconLoremP">
            <h4 id="iconH5">LOREM IPSUM DOLAR SIT AMET</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              quisquam accusamus reiciendis laudantium optio? Mollitia nobis rem
              aut impedit. 
            </p>
            <a href="https://ianss.dev" id="linx">>LOREM IPSUM </a>
              
          </div>
        </Col-6>
        {/* Icon col-6 div */}
        <Col-6 id="svgDiv" class="col-6">
        {/* Icon container */}
          <Container>
            <Row>
              <Col>
                <div>
                  <img
                  id='lab'
                    className="circle"
                    src={HomeLab}
                    alt="cartoon lab glasses"
                  />
                  LOREM IPSUM
                </div>
              </Col>
              <Col>
                <div>
                  <img src={HomeEx} id='ex' className="circle" alt="notepad and pen" />
                  LOREM
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <img src={HomeHyg} id="hyg" className="circle" alt="face mask" />
                  LOREM IPSUM
                </div>
              </Col>
              <Col>
                <div>
                  <img src={HomeRet} id="ret" className="circle" alt="calander" />
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
