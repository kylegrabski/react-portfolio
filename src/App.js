import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar/Navbar";
import About from "./pages/About";
import Projects from './pages/Projects'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Footer />
      </>
    </Router>
  );
}

export default App;
