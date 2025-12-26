import React, { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LandingPage from "./pages/landingPage"
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Facilities from "./pages/facilities";
import Activities from "./pages/activities"
import LocalAttractions from "./pages/localAttractions"
import Footer from "./components/Footer/footer"

const RedirectToBooking = () => {
    const hasOpened = useRef(false);
    
    useEffect(() => {
        if (!hasOpened.current) {
            hasOpened.current = true;
            window.open('https://book-directonline.com/properties/secretcornerDirect', '_blank');
        }
    }, []);
    
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <p>Opening booking page in a new tab...</p>
            <p>
                If the page didn't open, <a href="https://book-directonline.com/properties/secretcornerDirect" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>click here to book</a>.
            </p>
        </div>
    );
};

function NavigationBar() {
  return (
    <Router>
      <div className="logo">
        {/* <a href="#home"><img width="100px" height="auto" src="https://www.codepel.com/wp-content/uploads/2023/01/CodePel-Logo-2.1.png"></a> */}
      </div>
      <Navbar />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/localAttractions" element={<LocalAttractions />} />
          <Route path="/book" element={<RedirectToBooking />} />
      </Routes>
  </Router>
  )
}

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Footer></Footer>
    </div>
  );
}

export default App;
