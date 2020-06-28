import React from "react";
import "./style.css";


function Kid() {

  return (
    // <!-- bootstrap container row banner kid -->
    <div className="container-fluid">
      {/* <!-- bootstrap kid row --> */}
      <div id="kidRow" className="row">
        {/* <!-- lorem div with button --> */}
        <div id="kidRem" className="col-12">
          <h2>
            LOREM IPSUM
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, eveniet? Saepe earum enim vel nihil excepturi
            praesentium deleniti ea sed, tempora officiis omnis nostrum sint
            distinctio similique fugit eos sit?
          </p>
          {/* <!-- welcome dummy button --> */}
          <button type="button" id="kidButt" className="btn btn-primary">
            BUTTON BUTTON
          </button>
        </div>
      </div>
    </div>
  );

  }
export default Kid;
