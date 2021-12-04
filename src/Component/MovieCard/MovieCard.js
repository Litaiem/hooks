import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({ movie }) => {
  return (
    <Card
      style={{
        width: "22.5%",
        backgroundColor: "#ffb6c1",
        height: "100%",
        marginLeft: "1.2em",
        marginTop: "1.2em",
      }}
    >
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Rating ratingValue={movie.rating} /* Available Props */ />{" "}
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
