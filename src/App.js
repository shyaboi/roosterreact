import React from "react";
import Hero from "./components/TopBanner/index";
import Climber from "../src/components/ClimberBanner/index";
import Mom from "./components/MomBanner/index";
import Icon from "./components/IconBanner/index";
import Kid from "./components/KidBanner/index";
import Review from "./components/ReviewBanner/index";
import Footer from "./components/Footer/index";
import Logo from "./components/Logo/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <Hero />
      <Climber />
      <Mom />
      <Icon />
      <Kid />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
