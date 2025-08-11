import React from "react";
import "./landingPage.css";

const LandingPage = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero-overlay">
                    <h1>Secret Corner Hostel</h1>
                    <p>Welcome to your home in Chiang Rai</p>
                </div>
            </section>

            <section className="about">
                <div className="content">
                    <h2>About Us</h2>
                    <p>Located in the heart of Chiang Rai, Secret Corner Boutique Hostel is a clean, beautifully designed space...</p>
                    <p>Blending modern amenities with cozy, thoughtfully curated accommodations, our hostel offers a warm...</p>
                    <p>With deep local insight, we curate authentic experiences and meaningful in-house activities...</p>
                    <p>At Secret Corner, we put our heart and soul into creating a fresh, inspiring way to explore Chiang Rai...</p>
                </div>
            </section>

            <section className="why-us">
                <div className="content">
                    <h2>Why Stay With Us</h2>
                    {[
                        { title: "Boutique Comfort", text: "Clean, beautifully designed rooms..." },
                        { title: "Community Driven", text: "We believe in connection — to people..." },
                        { title: "Work-Friendly Spaces", text: "With strong Wi-Fi, peaceful corners..." },
                        { title: "Prime Location", text: "Just steps from Chiang Rai’s best cafes..." },
                        { title: "Soft Opening Rate", text: "Come be part of our first chapter..." }
                    ].map((item, idx) => (
                        <div className="why-us-content" key={idx}>
                            <div className="fixed"><p><b>{item.title}</b></p></div>
                            <div className="flex-item"><p>{item.text}</p></div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default LandingPage;