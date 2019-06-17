import React from 'react';
import './Lords.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


  
const Lord = ( {match} ) => {
    
    return(
    <div>
        <h2>Lords</h2>
        <Router>
        <Route>
          
        
            <Link to={`${match.url}/componentsl`}>Componentsl {this.params.name} {this.params.title}</Link>
          
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          
        </Route>
  
        <Route path={`${match.path}/:id`} component={Lord1} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a lord.</h3>}
        />
        </Router>
    </div>)
   function Lord1({ match }) {

    return <h3>Requested Param: {match.params.id}</h3>;
    } 
    
  };
export default Lord;
  
  
  
  