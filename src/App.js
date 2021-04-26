import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import AboutCard from "./components/AboutCard/AboutCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Jumbotron />
        <AboutCard />
        <Footer />
      </Router>
    </>
  );
}

export default App;
