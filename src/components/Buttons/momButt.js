import React from "react";

class ClickMom extends React.Component {
  shoot = (a) => {
    alert(a);
  };
  render() {
    return (
      <button id="momButt" onClick={() => this.shoot("Mom Banner Button")}>
        BUTTON BUTTON
      </button>
    );
  }
}

export default ClickMom;
