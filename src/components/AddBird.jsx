import React, { useState } from "react";
import { FormLabel, TextField, Box, Button } from "@mui/material";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBird = () => {
  const history = useNavigate()
  const [input, setInput] = useState({
    species: "",
    gender: "",
    location: "",
    authorName: "",
    image: ""
  });

  const handleChange = (e) => {
      setInput((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value
      }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/birds", {
        species: String(input.species),
        gender: String(input.gender),
        location: String(input.location),
        authorName: String(input.authorName),
        image: String(input.image)
      })
      .then((res) => res.data);
  };

  function handleSubmit(e) {
    e.preventDefault();

    sendRequest().then(() => history('/birds'))
  }
  return (
    <div className="add-bird">
      <h2 className="form-title">Complete the next form to upload the founded bird</h2>
    <form onSubmit={handleSubmit}>
    
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={"100%"}
        alignItems="center"
        marginTop={"5%"}
      >
        <FormLabel>Species</FormLabel>
        <TextField
          value={input.species}
          onChange={handleChange}
          color="info"
          margin="normal"
          fullWidth
          variant="outlined"
          name="species"
          label="species"
          sx={{ mb: "3%" }}
        />

        <FormLabel>Gender</FormLabel>
        <TextField
          value={input.gender}
          onChange={handleChange}
          color="info"
          margin="normal"
          fullWidth
          variant="outlined"
          name="gender"
          label="Gender"
          sx={{ mb: "3%" }}
        />

        <FormLabel>location</FormLabel>
        <TextField
          value={input.location}
          onChange={handleChange}
          color="info"
          margin="normal"
          fullWidth
          variant="outlined"
          name="location"
          label="location"
          sx={{ mb: "3%" }}
        />

        <FormLabel>Author Name</FormLabel>
        <TextField
          value={input.authorName}
          onChange={handleChange}
          color="info"
          margin="normal"
          fullWidth
          variant="outlined"
          name="authorName"
          label="Author Name"
          sx={{ mb: "3%" }}
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={input.image}
          onChange={handleChange}
          color="info"
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
          label=" Image url"
          sx={{ mb: "3%" }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Add Bird
        </Button>
      </Box>
    </form>
    </div>
  );
};

export default AddBird;
