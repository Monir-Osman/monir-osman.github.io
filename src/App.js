import "./App.css";
import Header from "./components/Header/Header";
import MobileNav from "./components/MobileNav/MobileNav";
import Nav from "./components/navbar/Nav";
import useMediaQuery from "@mui/material/useMediaQuery";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const matches = useMediaQuery("(min-width:700px)");
  return (
    <div className="App">
      {matches ? <Nav /> : <MobileNav />}
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
