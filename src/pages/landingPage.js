// import React from "react";
// import "./landingPage.css";

// const LandingPage = () => {
//     return (
//         <body>
//         <section class="hero">
//             <div class="hero-overlay">
//                 <h1>Secret Corner Hostel</h1>
//                 <p>Welcome to your home in Chiang Rai</p>
//             </div>
//         </section>

//         <section class="about">
//             <div class="content">
//             <h2>About Us</h2>
//                 <p>
//                     Located in the heart of Chiang Rai, Secret Corner Boutique Hostel is a clean, beautifully designed space where guests can relax, connect with the local community, and work comfortably.
//                 </p>
//                 <p>
//                     Blending modern amenities with cozy, thoughtfully curated accommodations, our hostel offers a warm and welcoming atmosphere for travelers from around the world. Guests can enjoy practical perks like an on-site laundry facility, plus unwind at our rooftop bar for great conversation.
//                 </p>
//                 <p>
//                     With deep local insight, we curate authentic experiences and meaningful in-house activities that go beyond the typical tourist path — from cultural workshops to community dinners.
//                 </p>
//                 <p>
//                     At Secret Corner, we put our heart and soul into creating a fresh, inspiring way to explore Chiang Rai — a place where culture, comfort, and creativity meet. Immerse yourself in the richness of the Lanna heritage while enjoying the convenience of staying in a centrally located boutique hostel.
//                 </p>
//             </div>
//         </section>

//         <section class="why-us">
//             <div class="content">
//                 <h2>Why Stay With Us</h2>
//                 <div class="why-us-content">
//                     <div class="fixed">
//                         <p><b>Boutique Comfort</b></p>
//                     </div>
//                     <div class="flex-item">
//                         <p>Clean, beautifully designed rooms with thoughtful details and cozy vibes — whether you’re in a dorm or a deluxe private room. We offer premium mattresses, high quality 100% cotton linens, and local artisan touches.</p>
//                     </div>
//                 </div>
//                 <div class="why-us-content">
//                     <div class="fixed">
//                         <p><b>Community Driven</b></p>
//                     </div>
//                     <div class="flex-item">
//                         <p>We believe in connection — to people and to place. Join our in-house activities, local experiences, and chill nights on the rooftop.</p>
//                     </div>
//                 </div>
//                 <div class="why-us-content">
//                     <div class="fixed">
//                         <p><b>Work-Friendly Spaces</b></p>
//                     </div>
//                     <div class="flex-item">
//                         <p>With strong Wi-Fi, peaceful corners, and friendly faces, we make remote work actually enjoyable.</p>
//                     </div>
//                 </div>
//                 <div class="why-us-content">
//                     <div class="fixed">
//                         <p><b>Prime Location</b></p>
//                     </div>
//                     <div class="flex-item">
//                         <p>Just steps from Chiang Rai’s best cafes, restaurants, temples, night market, and local gems — we’re in the sweet spot between culture and convenience.</p>
//                     </div>
//                 </div>
//                 <div class="why-us-content">
//                     <div class="fixed">
//                         <p><b>Soft Opening Rate</b></p>
//                     </div>
//                     <div class="flex-item">
//                         <p>Come be part of our first chapter! Enjoy special rates, curated experiences, and that fresh-hostel feel.</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </body>
//     );
// };

// export default LandingPage;

import React from "react";
import "./landingPage1.css";

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