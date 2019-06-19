import React from "react";
import { lords, houses } from "../components/data";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const findHouseById = id => houses.find(house => house.id === id);

const Lord = ({ lord, match }) => {
  lord = lord || lords.find(lord => lord.id === match.params.id);

  if (!lord) return null;

  const houses = lord.houses.map(findHouseById).filter(Boolean);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={lord.image} />
      <Card.Body>
        <Card.Title>
          {lord.name} of{" "}
          {houses.map(house => (
            <Link to={`/houses/${house.id}`}>{house.name}</Link>
          ))}
        </Card.Title>
        <Card.Text>{lord.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Lord;
