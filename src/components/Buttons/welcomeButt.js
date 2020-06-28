import React from "react";

class ClickWel extends React.Component {
  shoot = (a) => {
    alert(a);
  };
  render() {
    return (
      <button
        id="heroButt"
        onClick={() => this.shoot("Welcome To Rooster Grin")}
      >
        BUTTON BUTTON
      </button>
    );
  }
}

export default ClickWel;
