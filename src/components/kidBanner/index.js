import React from "react";
import "./style.css";
import ClickKid from '../Buttons/kidButt'



function Kid() {

  return (
    // <!-- bootstrap container row banner kid -->
    <div className="container-fluid">
      {/* <!-- bootstrap kid row --> */}
      <div id="kidRow" className="row">
        {/* <!-- lorem div with button --> */}
        <div id="kidRem">
          <h5 id="kidH5">
            LOREM IPSUM
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, eveniet? Saepe earum enim vel nihil excepturi
            praesentium deleniti ea sed, tempora officiis omnis nostrum sint
            distinctio similique fugit eos sit?
          </p>
          {/* <!-- welcome dummy button --> */}
          <ClickKid type="button" id="kidButt" />
        </div>
      </div>
    </div>
  );

  }
export default Kid;
