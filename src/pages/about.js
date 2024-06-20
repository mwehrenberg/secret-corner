import React from "react";

const About = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                textAlign: "center",
            }}
        >
            <h1>About Our Boutique Hostel in Chiang Rai</h1>
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
                convenience of staying in a centrally located boutique hostel.
            </p>
            <div
                style={{git 
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
            <p>
                Whether you're traveling solo, with friends, or as a family, our
                friendly staff is dedicated to ensuring you have a memorable stay in
                Chiang Rai. Discover the tranquility of our hostel and the excitement
                of the surrounding area while creating lasting memories.
            </p>
            <p>
                We look forward to welcoming you to our boutique hostel in Chiang Rai and
                sharing the best of northern Thailand with you.
            </p>
        </div>
    );
};

export default About;