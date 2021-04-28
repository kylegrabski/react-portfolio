import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Route exact path="/" render={(props) => <About {...props}/>} />
        <Route exact path="/projects" render={(props) => <Projects {...props}/>}/>
        <Footer />
      </>
    </Router>
  );
}

export default App;
