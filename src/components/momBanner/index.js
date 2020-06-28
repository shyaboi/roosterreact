import React from 'react';
import './style.css';
import ClickMom from '../Buttons/momButt'


function Mom() {
    return(
    // <!-- 3rd cell with mom and kid with laptop -->
  <div className="container-fluid">
    {/* <!-- bootstrap mom row --> */}
    <div id="momRow" className="row">
      {/* <!-- lorem div with button --> */}
      <div id="momem" className="col-12">
        <h5 id="momH">LOREM IPSUM</h5>
        {/* <!-- welcome dummy button --> */}
        <ClickMom id="momButt" />
      </div>
    </div>
  </div>
  )
}

export default Mom;