import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";
import Lord from "./components/Lord";
import House from "./components/House";
import { lords, houses } from "./components/data";
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";

const Home = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>Welcome to the Houses of Westeros</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        You can browse through lords or houses
      </Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Card.Link href="/lords">Go to lords</Card.Link>
      <Card.Link href="/houses">Go to Houses</Card.Link>
    </Card.Body>
  </Card>
);

const LordsHome = () => <h1>Please choose a lord</h1>;

const Lords = ({ match }) => (
  <p>
    Lords
    <Route path={`${match.path}/`} exact component={LordsHome} />
    <ListGroup className="list-group-flush">
          <ListGroupItem><Route path={`${match.path}/:id`} component={Lord} /></ListGroupItem>
    </ListGroup> 
    
  </p>
);

const HousesHome = () => <h1>Please choose a house</h1>;

const Houses = ({ match }) => (
  <p>
    Houses
    <ListGroup className="list-group-flush">
          <ListGroupItem>
          <Route path={`${match.path}/`} exact component={HousesHome} />
          <Route path={`${match.path}/:id`} component={House} />
          </ListGroupItem>
        </ListGroup> 
    
  </p>
);

const App = () => (
  <Router>
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/lords">Lords</Link>
        <Link to="/houses">Houses</Link>
      </header>


      {lords.map(lord => (
        
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Link to={`/lords/${lord.id}`}>{lord.name}</Link>
            <Button onClick={null} >Show all</Button>
          </ListGroupItem>
          
        </ListGroup> 
        
      ))}

        
      {houses.map(house => (
        <ListGroup className="list-group-flush">
          <Link to={`/houses/${house.id}`}>{house.name}</Link>
        </ListGroup> 
      ))}

      <Route path="/" exact component={Home} />
      <Route path="/lords" component={Lords} />
      <Route path="/houses" component={Houses} />
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
