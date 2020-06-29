import React from "react";

class ClickWel extends React.Component {
  // Kid click event and alert
  pop = (a) => {
    alert(a);
  };
  render() {
    return (
      // welcome button render
      <button id="heroButt" onClick={() => this.pop("Welcome To Rooster Grin")}>
        BUTTON BUTTON
      </button>
    );
  }
}

export default ClickWel;
