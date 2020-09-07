import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/HomePage/Home";
import SingleMotor from "./components/SingleMotorSection/SingleMotor";
import Contact from "./components/ContactSection/Contact";
import TriMotor from "./components/TriMotorSection/TriMotor";
import DualMotor from "./components/DualMotorSection/DualMotor";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singlemotor" exact component={SingleMotor} />
        <Route path="/dualmotor" exact component={DualMotor} />
        <Route path="/trimotor" exact component={TriMotor} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
