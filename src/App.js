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
      <div class="logo">
        {/* <a href="#home"><img width="100px" height="auto" src="https://www.codepel.com/wp-content/uploads/2023/01/CodePel-Logo-2.1.png"></a> */}
      </div>
      <Navbar />
      <Routes>
          <Route path="/" element={<About />} />
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
    </div>
  );
}

export default App;
