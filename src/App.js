import React, { Component } from "react";

import "./App.css";
import House from "./components/House/House";
import Lords from "./components/Lords/Lords";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { ensureExpectedIsNonNegativeInteger } from "jest-matcher-utils";

const linkStyle = {
  marginRight: '10px'
  
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <nav
                style={{
                  border: "1px solid green",
                  paddingBottom: "10px",
                  margin: "12px"
                }}
              >
                <Link style={linkStyle} to="/">
                  Welcome
                </Link>

                <Link style={linkStyle} to="/houses/">
                  Houses
                </Link>

                <Link style={linkStyle} to="/lords/">
                  Lords
                </Link>
              </nav>

              <Route
                path="/"
                exact
                component={() => <div className="App">Select something</div>}
              />
              <Route
                path="/houses/"
                component={(props) => 
                  <div>
                <House name="House Stark" {...props} />
                <House name="House Lannister" {...props} />
                <House name="House Baratheon" {...props} />}
                </div>}
                
                  /* () => 
                <div>
                  <House name="House Stark" place="Winterfell"/>
                  <House name="House Lannister" place="Casterly Rock"/>
                  <House name="House Baratheon" place="King's Landing"/>
                </div> */ 
                
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