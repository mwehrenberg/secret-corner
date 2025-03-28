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
                        <h3>Locally Run</h3>
                        <p>
                            Located in the heart of Chiang Rai, our boutique hostel offers a unique
                            blend of comfort, style, and local charm. Whether you're exploring the
                            vibrant city center or venturing out to discover the natural beauty of
                            northern Thailand, our hostel is the perfect home base for your
                            adventures.
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
                {/* <div className="about-section">
                    <div className="about-image-container">
                        <img src={temple} alt="Local Temple" className="about-image" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default About;