import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";
import Lord from "./components/Lord";
import House from "./components/House";
import { lords, houses } from "./components/data";
import { Card, ListGroup, ListGroupItem, Container, Row } from "react-bootstrap";

const Home = () => (
  <Card style={{ width: "25rem" }}>
    <Card.Body>
      <Card.Title>Welcome to the Houses of Westeros</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        You can browse through lords or houses
      </Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Link to="/lords">Go to lords</Link>
      <Link to="/houses">Go to Houses</Link>
    </Card.Body>
  </Card>
);

const LordsList = () => (
  <p>
    <h3>Lords</h3>
    {lords.map(lord => (
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <Link to={`/lords/${lord.id}`} className="linkStyle">{lord.name}</Link>
        </ListGroupItem>
      </ListGroup>
    ))}
    <p>
      <Link to="/lords/all" className="linkStyle">All lords</Link>
    </p>
  </p>
);

const LordCards = () => lords.map(lord => <Lord lord={lord} />);

const HouseCards = () => houses.map(house => <House house={house} />);

const Houses = () => (
  <p>
    <h3>Houses</h3>
    {houses.map(house => (
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <Link to={`/houses/${house.id}`} className="linkStyle">{house.name}</Link>
        </ListGroupItem>
      </ListGroup>
    ))}
    <p>
      <Link to="/houses/all" className="linkStyle">All houses</Link>
    </p>
  </p>
);

const App = () => (
  <Router>
    <div className="App">
      <header>
        <Link to="/" className="linkStyle">Home</Link>
        <Link to="/lords" className="linkStyle">Lords</Link>
        <Link to="/houses" className="linkStyle">Houses</Link>
      </header>
      <Route path="/" exact component={Home} />
      <Route path="/lords/all" component={LordCards} />
      <Route path="/lords/:id" component={Lord} />
      <Route path="/lords" exact component={LordsList} />
      <Route path="/houses/all" component={HouseCards} />
      <Route path="/houses/:id" component={House} />
      <Route path="/houses" exact component={Houses} />
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
