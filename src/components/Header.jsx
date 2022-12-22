import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Tab, Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";
import { blue } from "@mui/material/colors";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "#A7C957" }}>
        <Toolbar>
          <NavLink to={"/"} style={{color:"white"}}>
          <i class="fa-solid fa-3x fa-kiwi-bird" ></i>
          </NavLink>
          <Typography>
            <Tabs
              sx={{ ml: "85rem" }}
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={NavLink} to="/add" label="Add Bird" />
              <Tab LinkComponent={NavLink} to="/birds" label="Birds" />
              <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            </Tabs>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
