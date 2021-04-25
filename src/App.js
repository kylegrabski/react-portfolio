import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Header/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Jumbotron/>
      </Router>
    </>
  );
}

export default App;
