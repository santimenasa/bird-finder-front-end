import React from "react";
import { Button } from "@mui/material";
const Bird = (props) => {
  const { _id, species, gender, location, datoOfCatch, catchYourSelf, image } =
    props.bird;
  return (
    <div>
      <img src={image} alt={species} />
      <article>{species}</article>
      <h3>{gender}</h3>
      <p>{location}</p>
      <h2>{datoOfCatch}</h2>
      <Button>Update</Button>
      <Button>Delete</Button>
    </div>
  );
};

export default Bird;

