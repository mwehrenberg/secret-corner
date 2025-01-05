import React from "react";
import clockTower from '../clockTower.webp';

const AboutHeader = () => {
    return (
      <div className="AboutHeader">
          <img src={clockTower} alt="logo" />
          <p className="centered">About Us</p>
      </div>
    );
  }

const About = () => {
    return (
        <div>
            <AboutHeader></AboutHeader>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <h1
                    style={{
                        fontSize: "2rem",
                        marginBottom: "20px",
                        color: "#333333", // Dark gray text color
                    }}
                >
                    About Our Boutique Hostel in Chiang Rai
                </h1>
                <p
                    style={{
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        color: "#555555", // Darker gray text color
                    }}
                >
                    Located in the heart of Chiang Rai, our boutique hostel offers a unique
                    blend of comfort, style, and local charm. Whether you're exploring the
                    vibrant city center or venturing out to discover the natural beauty of
                    northern Thailand, our hostel is the perfect home base for your
                    adventures.
                </p>
                <p
                    style={{
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        color: "#555555", // Darker gray text color
                    }}
                >
                    Our hostel features modern amenities, cozy accommodations, and a warm
                    atmosphere that welcomes travelers from around the world. Immerse
                    yourself in the cultural richness of Chiang Rai while enjoying the
                    convenience of staying in a centrally located hostel.
                </p>
                <div
                    style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Hostel Exterior"
                        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                    />
                    {/* Add more images or a map if needed */}
                </div>
                <p
                    style={{
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        color: "#555555", // Darker gray text color
                    }}
                >
                    Whether you're traveling solo, with friends, or as a family, our
                    friendly staff is dedicated to ensuring you have a memorable stay in
                    Chiang Rai. Discover the tranquility of our hostel and the excitement
                    of the surrounding area while creating lasting memories.
                </p>
                <p
                    style={{
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        color: "#555555", // Darker gray text color
                    }}
                >
                    We look forward to welcoming you to Secret Corner Hostel in Chiang Rai and
                    sharing the best of northern Thailand with you.
                </p>
            </div>
        </div>
    );
};

export default About;