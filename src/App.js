import logo from './logo.svg';
import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./pages/about";
import Gallery from "./pages/gallery";

function NavigationBar() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
      </Routes>
  </Router>
  )
}

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Secret Corner Hostel
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
