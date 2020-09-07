import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import SingleMotor from "./components/SingleMotorSection/SingleMotor";
import Contact from "./components/ContactSection/Contact";
import TriMotor from "./components/TriMotorSection/TriMotor";
import DualMotor from "./components/DualMotorSection/DualMotor";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch></Switch>
      <SingleMotor />
      <DualMotor />
      <TriMotor />
      <Contact />
    </Router>
  );
}

export default App;
