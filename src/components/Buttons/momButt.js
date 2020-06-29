import React from "react";

class ClickMom extends React.Component {
  // Mom click event and alert

  pop = (a) => {
    alert(a);
  };
  render() {
    // Mom button render
    return (
      <button id="momButt" onClick={() => this.pop("Mom Banner Button")}>
        BUTTON BUTTON
      </button>
    );
  }
}

export default ClickMom;
