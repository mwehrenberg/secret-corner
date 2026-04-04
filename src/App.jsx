import React, { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/NavBar/index.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx"
import About from "./pages/about.jsx";
import Gallery from "./pages/gallery.jsx";
import Facilities from "./pages/facilities.jsx";
import Activities from "./pages/activities.jsx"
import LocalAttractions from "./pages/localAttractions.jsx"
import BestDayTripsChiangRai from "./pages/guides/BestDayTripsChiangRai.jsx"
import TwoDaysChiangRai from "./pages/guides/TwoDaysChiangRai.jsx"
import Footer from "./components/Footer/footer.jsx"

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

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function NavigationBar() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/guides/best-day-trips-chiang-rai" element={<BestDayTripsChiangRai />} />
          <Route path="/guides/two-days-chiangrai" element={<TwoDaysChiangRai />} />
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
