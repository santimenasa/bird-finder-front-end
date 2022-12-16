import Header from "./components/Header";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import AddBird from "./components/AddBird"
import AboutUs from "./components/AboutUs"
import Birds from "./components/bird/Birds";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
<Routes>
  <Route  path="/" element={<Home />} exact/>
  <Route  path="/add" element={<AddBird />} exact/>
  <Route  path="/about" element={<AboutUs />} exact/>
 <Route  path="/birds" element={<Birds />}/> 
</Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
