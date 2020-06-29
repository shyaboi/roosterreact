import React from "react";

class ClickKid extends React.Component {
  pop = (a) => {
    alert(a);
  };
  render() {
    return (
      <button id="kidButt" onClick={() => this.pop("Kid Banner Button")}>
        BUTTON BUTTON
      </button>
    );
  }
}

export default ClickKid;
