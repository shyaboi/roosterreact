import React from "react";

class ClickMom extends React.Component {
  pop = (a) => {
    alert(a);
  };
  render() {
    return (
      <button id="momButt" onClick={() => this.pop("Mom Banner Button")}>
        BUTTON BUTTON
      </button>
    );
  }
}

export default ClickMom;
