import "./App.css";
import Header from "./Header/Header";
import MobileNav from "./Header/MobileNav/MobileNav";
import Nav from "./Header/navbar/Nav";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function App() {
  const matches = useMediaQuery("(min-width:700px)");
  return (
    <div className="App">
      {matches ? <Nav /> : <MobileNav />}

      <Header />
    </div>
  );
}

export default App;
