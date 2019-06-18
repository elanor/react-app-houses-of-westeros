import React from 'react';
import './House.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const House = ( {match} ) => {

    return (
      <div>
        <h2>Houses of Westeros</h2>
        <Router>
        <Route>
          <Link to={`${match.url}/components`}>Components {match.params.name}</Link>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </Route>

        <Route path={`${match.path}/:id`} component={House1} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a House name.</h3>}
        />
        </Router>
      </div>
    );
    
    function House1({ match }) {

        
      return <h3>Requested Param: {match.params.id}</h3>;
    }
};
export default House;

