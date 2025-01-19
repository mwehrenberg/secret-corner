import React from "react";
import logo from "../logo.svg";
import clockTower from '../clockTower.webp';
import "./about.css";

const AboutHeader = () => {
    return (
      <div className="AboutHeader">
          <img src={clockTower} alt={logo} />
          <p className="centered">About Us</p>
      </div>
    );
  }

const About = () => {
    return (
        <div>
            <AboutHeader></AboutHeader>
            <div class="about-paragraphs" >
                <h1 class="about-title ">
                    About Our Boutique Hostel in Chiang Rai
                </h1>

                <div class="container">
                    <div class="text-column">
                        <p>
                            Located in the heart of Chiang Rai, our boutique hostel offers a unique
                            blend of comfort, style, and local charm. Whether you're exploring the
                            vibrant city center or venturing out to discover the natural beauty of
                            northern Thailand, our hostel is the perfect home base for your
                            adventures. 
                        </p>
                        <p>
                            Our hostel features modern amenities, cozy accommodations, and a warm
                            atmosphere that welcomes travelers from around the world. Immerse
                            yourself in the cultural richness of Chiang Rai while enjoying the
                            convenience of staying in a centrally located hostel.
                        </p>
                        <p>
                            Whether you're traveling solo, with friends, or as a family, our
                            friendly staff is dedicated to ensuring you have a memorable stay in
                            Chiang Rai. Discover the tranquility of our hostel and the excitement
                            of the surrounding area while creating lasting memories.
                        </p>
                        <p>
                            We look forward to welcoming you to Secret Corner Hostel in Chiang Rai and
                            sharing the best of northern Thailand with you.
                        </p>
                    </div>
                    <div class="image-column">
                        <img
                            src="https://happynest-inspiring-hostel-chiang-rai.hotelmix.co.th/data/Photos/450x450/3390/339097/339097186.JPEG"
                            alt="Hostel Exterior"
                            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;