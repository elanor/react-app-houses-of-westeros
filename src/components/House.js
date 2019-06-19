import React from "react";
import { houses } from "../components/data";
import { Card } from "react-bootstrap";
/* import { Link } from "react-router-dom"; */

/* const findLordById = id => houses.find(house => house.id === id); */

const House = ({ match, house }) => {
  house = house || houses.find(house => house.id === match.params.id);
  if (!house) return null;
  /* const lords = house.lords.map(findLordById); */
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={house.image} />
      <Card.Body>
        <Card.Title>
          {house.name} of {house.place}
        </Card.Title>
        <Card.Text>{house.description}</Card.Text>
      </Card.Body>
    </Card>

    
  );
};

export default House;
