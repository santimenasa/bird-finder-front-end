import React from "react";
import { Button } from "@mui/material";
import "./bird.css"
const Bird = (props) => {
  const {  species, gender, location, authorName, image } =
    props.bird;
  return (
    <div className="card">
      <img src={image} alt={species} />
      <h2>{species}</h2>
      <h3>{gender}</h3>
      <p>Location: <i>{location}</i> </p>
      <p>Picture taked by: <i>{authorName}</i></p>
      <Button>Update</Button>
      <Button>Delete</Button>
    </div>
  );
};

export default Bird;

