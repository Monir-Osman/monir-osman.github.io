import "./App.css";
import Header from "./components/Header/Header";
import MobileNav from "./components/Header/MobileNav/MobileNav";
import Nav from "./components/Header/navbar/Nav";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import About from "./components/about/About";

function App() {
  const matches = useMediaQuery("(min-width:700px)");
  return (
    <div className="App">
      {matches ? <Nav /> : <MobileNav />}
      <Header />
      <About />
    </div>
  );
}

export default App;
