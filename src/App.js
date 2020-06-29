import React from "react";
import Hero from "./components/topBanner/index";
import Climber from "../src/components/ClimberBanner/index";
import Mom from "./components/momBanner/index";
import Icon from "./components/iconBanner/index";
import Kid from "./components/kidBanner/index";
import Review from "./components/reviewBanner/index";
import Footer from "./components/footer/index";
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
