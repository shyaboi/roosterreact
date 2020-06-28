import React from 'react';
import './style.css';

function Mom() {
    return(
    // <!-- 3rd cell with mom and kid with laptop -->
  <div className="container-fluid">
    {/* <!-- bootstrap mom row --> */}
    <div id="momRow" className="row">
      {/* <!-- lorem div with button --> */}
      <div id="momem" className="col-12">
        <h2>LOREM IPSUM</h2>
        {/* <!-- welcome dummy button --> */}
        <button type="button" id="momButt" className="btn btn-primary">
          BUTTON BUTTON
        </button>
      </div>
    </div>
  </div>
  )
}

export default Mom;