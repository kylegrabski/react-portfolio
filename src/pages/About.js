import React from "react";
import Navbar from "../components/Header/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import AboutCard from "../components/AboutCard/AboutCard";
import Footer from "../components/Footer/Footer";

function About() {
    return (
      <>
          <Navbar />
          <Jumbotron />
          <AboutCard />
          <Footer />
      </>
    );
  }
  
  export default About;