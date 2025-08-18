import React from "react";
import chiangraiBackdrop from "../images/chiangraibackdrop.jpg";
import aboutCover from "../images/aboutCover.png";
import aboutImage from "../images/aboutImage.png";
import "./about.css";

const AboutHeader = () => {
    return (
        <div className="about-header">
            <img src={aboutCover} alt="Temple in Chiang Rai" className="header-image" />
            <p className="header-text">Our Story</p>
        </div>
    );
};

const About = () => {
    return (
        <div className="about-container">
            <AboutHeader />
            <div className="about-content">
                <div className="about-section">
                    <div className="about-text-container">
                        <h3>Who We Are</h3>
                        <p>
                        At Secret Corner, we believe travel is more than just movement — it’s a journey inward. Chiang Rai’s quiet charm and deep Lanna heritage made it the perfect home for our dream hostel.
                        </p>
                        <p>
                        We designed Secret Corner to feel like a home away from home — where culture, comfort, and creativity meet.
                        </p>
                    </div>
                    <div className="about-image-container">
                        <img src={aboutImage} alt="Hostel Exterior" className="about-image" />
                    </div>
                </div>
                <hr className="custom-line"></hr>
                <div className="about-section">
                    <div className="about-image-container">
                        <img src={chiangraiBackdrop} alt="Local Temple" className="about-image" />
                    </div>
                    <div className="about-text-container">
                        <h3>What We Believe</h3>
                        <ul>
                            <li>Home is a feeling — belonging, slowing down, being seen.</li>
                            <li>Travel should be personal — not just a checklist.</li>
                            <li>Design matters — every detail crafted with intention.</li>
                            <li>People make the place — our guests, staff, and neighbors create the vibe.</li>
                        </ul>
                    </div>
                </div>
                <hr className="custom-line"></hr>
                <div className="about-section">
                    <div className="about-text-container">
                        <h3>Directions</h3>
                        <ul>
                            <li>From Chiang Rai Bus Terminal 1 - 600m, 8-10 min walk.</li>
                            <li>From Airport - 10 km, 15-20 min taxi or Grab.</li>
                        </ul>
                    </div>
                    <div className="about-image-container">
                        <img src={aboutImage} alt="Hostel Exterior" className="about-image" />
                    </div>
                </div>
                <hr className="custom-line"></hr>
                <div className="about-section">
                    <div className="about-text-container">
                        <h3>Getting Here</h3>
                        <p>
                            Arrival by <b>bus</b>- the walk from the bus station is about ten minutes.
                        </p>
                        <p>
                            From the <b>airport</b>- it takes about 20 minutes. We provide airport transfer for THB250 one way per car. Alternatively, you can use a taxi, Grab, or Bolt service.
                        </p>
                    </div>
                    <div className="about-image-container">
                        <img src={aboutImage} alt="Hostel Exterior" className="about-image" />
                    </div>
                </div>
                <hr className="custom-line"></hr>
                <div className="about-section">
                    <div className="about-image-container">
                        <img src={aboutImage} alt="Hostel Exterior" className="about-image" />
                    </div>
                    <div className="about-text-container">
                        <h3>House Rules</h3>
                        <ul>
                            <li><b>Check-in</b>: 15:00-20:00 | <b>Check-out</b>: 11:00</li>
                            <li>Quiet hours: 22:00-07:00</li>
                            <li>No smoking indoors (garden area provided)</li>
                            <li>Keep shared spaces tidy (slippers provided)</li>
                            <li>No eating in guest rooms</li>
                            <li>Lockers for valuables (locks available at desk)</li>
                            <li>No outside guests in rooms</li>
                            <li>Be mindful & respectful — we are cozy & community-focused, not a party hostel</li>
                        </ul>
                    </div>
                </div>
                <hr className="custom-line"></hr>
            </div>
        </div>
    );
};

export default About;