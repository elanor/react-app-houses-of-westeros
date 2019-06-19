import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";
import Lord from "./components/Lord";
import House from "./components/House";
import { lords, houses } from "./components/data";
import { Card, ListGroup, ListGroupItem} from "react-bootstrap";

const Home = () => (
  <Card style={{ width: "25rem"}}>
    <Card.Body>
      <Card.Title>Welcome to the Houses of Westeros</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        You can browse through lords or houses
      </Card.Subtitle>
      <Card.Text>
        Great houses are the most powerful members of nobility of the Seven
        Kingdoms, often being former royalty and now sworn directly to the Iron
        Throne. Westeros is one of the four known continents in the known world,
        the others being Essos, Sothoryos, and Ulthos. Most of the area of
        Westeros is covered by a political entity known as the Seven Kingdoms,
        while the far north beyond the Wall includes the free folk. The closest
        foreign nations to Westeros are the Free Cities, a collection of
        independent city-states across the narrow sea in western Essos.
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
          <Link to={`/lords/${lord.id}`} className="linkStyle">
            {lord.name}
          </Link>
        </ListGroupItem>
      </ListGroup>
    ))}
    <p>
      <Link to="/lords/all">
        <h4>All lords</h4>
      </Link>
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
          <Link to={`/houses/${house.id}`} className="linkStyle">
            {house.name}
          </Link>
        </ListGroupItem>
      </ListGroup>
    ))}
    <p>
      <Link to="/houses/all">
        <h4>All houses</h4>
      </Link>
    </p>
  </p>
);

const App = () => (
  <Router>
    <div className="App">
      <header>
        <Link to="/" className="linkStyle">
          Home
        </Link>
        <Link to="/lords" className="linkStyle">
          Lords
        </Link>
        <Link to="/houses" className="linkStyle">
          Houses
        </Link>
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
