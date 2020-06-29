import React from "react";

class ClickKid extends React.Component {
  // Kid click event and alert
  pop = (a) => {
    alert(a);
  };
  render() {
    return (
      // kid button render
      <button id="kidButt" onClick={() => this.pop("Kid Banner Button")}>
        BUTTON BUTTON
      </button>
    );
  }
}

export default ClickKid;
