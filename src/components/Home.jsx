import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-text">
        <h1 style={{ textAlign: "center" }}>
          Welcome to the Bird Finder, San Isidro
        </h1>
        <p style={{ textAlign: "center", marginTop: "2%", marginBottom: "2%" }}>
          This app was made to keep track all the birds seen in the district of
          San Isidro, Buenos Aires, Argentina
        </p>
      </div>
      <Box display={"flex"} flexDirection="column" alignItems={"center"}>
        <Typography variant="h3">
          <Button variant="contained" LinkComponent={NavLink} to={"/birds"}>
            View All Birds seen in San Isidro so far
          </Button>
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
