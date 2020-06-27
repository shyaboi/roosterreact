import React from 'react';
import './style.css';

function Mom() {
    return(
    // <!-- 3rd cell with mom and kid with laptop -->
  <div class="container-fluid">
    {/* <!-- bootstrap mom row --> */}
    <div id="momRow" class="row">
      {/* <!-- lorem div with button --> */}
      <div id="momem" class="col-12">
        <h2>LOREM IPSUM</h2>
        {/* <!-- welcome dummy button --> */}
        <button type="button" id="momButt" class="btn btn-primary">
          BUTTON BUTTON
        </button>
      </div>
    </div>
  </div>
  )
}

export default Mom;