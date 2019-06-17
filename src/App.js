import React, { Component } from "react";
import logo from "./logogot2.png";
import "./App.css";
import House from "./components/House/House";
import Lords from "./components/Lords/Lords";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { ensureExpectedIsNonNegativeInteger } from "jest-matcher-utils";




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <nav>
                <Link to="/">Welcome</Link>

                <Link to="/houses/">Houses</Link>

                <Link to="/lords/">Lords</Link>
              </nav>

              <Route
                path="/"
                exact
                component={() => <div className="App">Select something</div>}
              />
              <Route
                path="/houses/"
                component={
                  /* () => 
                <div>
                  <House name="House Stark" place="Winterfell"/>
                  <House name="House Lannister" place="Casterly Rock"/>
                  <House name="House Baratheon" place="King's Landing"/>
                </div> */ House
                }
              />

              <Route
                path="/lords/"
                component={
                  /* () =>
                <div>
                  <Lords 
                  name="Eddard Stark" 
                  title="Lord of Winterfell" />
                  
                  <Lords
                  name="Tywin Lannister" 
                  title="Lord of Casterly Rock"/>
                </div> */ Lords
                }
              />
            </header>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;