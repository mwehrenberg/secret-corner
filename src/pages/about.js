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
                        <p>
                            Located in the heart of Chiang Rai, Secret Corner Boutique Hostel offers guests a 
                            clean, beautiful place to stay, connect with the local community, and work comfortably. 
                            With deep local knowledge, we craft authentic activities and experiences you won’t 
                            find anywhere else. At Secret Corner, we put our heart and soul into creating a 
                            fresh, inspiring way to explore the world.
                        </p>
                    </div>
                    <div className="about-image-container">
                        <img src={aboutImage} alt="Hostel Exterior" className="about-image" />
                    </div>
                </div>
                <hr class="custom-line"></hr>
                <div className="about-section">
                    <div className="about-image-container">
                        <img src={chiangraiBackdrop} alt="Local Temple" className="about-image" />
                    </div>
                    <div className="about-text-container">
                        <h3>Family Run</h3>
                        <p>
                            Our hostel features modern amenities, cozy accommodations, and a warm
                            atmosphere that welcomes travelers from around the world. Immerse
                            yourself in the cultural richness of Chiang Rai while enjoying the
                            convenience of staying in a centrally located hostel.
                        </p>
                        <p>
                            Our hostel features modern amenities, cozy accommodations, and a warm
                            atmosphere that welcomes travelers from around the world. Immerse
                            yourself in the cultural richness.
                        </p>
                    </div>
                </div>
                <hr class="custom-line"></hr>
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
                <hr class="custom-line"></hr>
            </div>
        </div>
    );
};

export default About;