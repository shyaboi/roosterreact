import React from "react";


class ClickKid extends React.Component {
  shoot = (a) => {
    alert(a);
  }
  render() {
    return (
      <button id="kidButt" onClick={() => this.shoot("Kid Banner Button")}>BUTTON BUTTON</button>
    );
  }
}



  export default ClickKid;