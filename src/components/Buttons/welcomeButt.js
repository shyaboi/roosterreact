import React from "react";

class ClickWel extends React.Component {
  pop = (a) => {
    alert(a);
  };
  render() {
    return (
      <button
        id="heroButt"
        onClick={() => this.pop("Welcome To Rooster Grin")}
      >
        BUTTON BUTTON
      </button>
    );
  }
}

export default ClickWel;
