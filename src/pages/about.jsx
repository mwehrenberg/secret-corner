import React, { useEffect } from "react";
import aboutDorm from "../images/about/aboutDorm.jpeg";
// import aboutImage from "../images/about/aboutImage.png";
// import welcome1 from "../images/about/welcome1.jpeg";
import welcome2 from "../images/about/welcome2.jpeg";
import welcome3 from "../images/about/welcome3.jpeg";
import about0 from "../images/architecture/IMG_0295.JPG";
import "./about.css";

const founderStoryParagraphs = [
    "Secret Corner began with a simple idea. I wanted to create the kind of place I personally always searched for while traveling — somewhere safe, clean, comfortable, centrally located, thoughtfully designed, and still affordable. The kind of hidden gem travelers are always hoping to find.",
    "I’ve been a traveler and explorer since my early twenties, long before smartphones, Google Maps, or online reviews existed. Back then, traveling — especially as a solo female traveler — felt very different. Every journey came with uncertainty. You learned to trust your instincts, ask strangers for directions, adapt quickly, and embrace the unexpected.",
    "Those experiences shaped not only the way I travel, but also the way I see life. Traveling has brought me such joy in seeing the new, but it’s also been a journey inward.",
    "Stepping into the unknown, navigating unfamiliar streets, and connecting with people from different walks of life push us beyond our comfort zones. And that’s where the magic happens. When you leave the familiar behind, you grow. You begin to see both the world and yourself with fresh eyes. Travel invites reflection, discovery, and a deeper understanding of who you are — and who you want to become.",
    "Over the years, after staying in many types of accommodations around the world, I realized there were many travelers searching for the same thing I was: the openness and human connection of shared travel combined with the comfort and calm that make a place feel like home.",
    "This path of exploration has all led me to Secret Corner.",
    "At Secret Corner, comfort comes first. From hotel-quality mattresses and soft linens to peaceful shared spaces and a relaxed rooftop atmosphere, I chose every detail with care. We wanted to create a space where travelers can slow down, sleep well, feel safe, and connect naturally — without pressure or noise.",
    "Located on a quiet street near the Night Bazaar, Secret Corner is perfectly balanced. Central, yet peaceful. Social, yet respectful. Simple, yet thoughtful.",
    "Today, we welcome travelers from around the world — solo travelers, couples, digital nomads, families, and people simply looking for a calmer, more meaningful way to travel. Thank you so much for being part of our story.",
];

const storyPhotos = [
    {
        src: welcome2,
        alt: "Secret Corner Hostel exterior entrance in Chiang Rai Thailand",
    },
    {
        src: aboutDorm,
        alt: "Clean modern dormitory interior at Secret Corner Hostel Chiang Rai",
    },
    {
        src: welcome3,
        alt: "Warm welcome area at Secret Corner Hostel Chiang Rai",
    },
];

const AboutHeader = () => {
    return (
        <div className="about-header">
            <img src={about0} alt="Secret Corner Hostel Chiang Rai boutique hostel interior and common areas" className="header-image" />
            <p className="header-text">Our Story</p>
        </div>
    );
};

const About = () => {
    useEffect(() => {
        document.title = "About Us | Secret Corner Hostel Chiang Rai";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Read the founder story behind Secret Corner Hostel in Chiang Rai, a calm boutique hostel created for comfort, connection, and meaningful travel near the Night Bazaar.');
        }
    }, []);

    return (
        <div className="about-container">
            <AboutHeader />
            <main className="founder-story" aria-labelledby="founder-story-title">
                <div className="letter-shell">
                    <aside className="story-photo-rail" aria-label="Photos from Secret Corner Hostel">
                        {storyPhotos.map((photo, index) => (
                            <img
                                key={photo.src}
                                src={photo.src}
                                alt={photo.alt}
                                className={`story-photo story-photo-${index + 1}`}
                            />
                        ))}
                    </aside>

                    <article className="founder-letter">
                        <p className="letter-eyebrow">A Letter from Our Founder</p>
                        {/* <h2 id="founder-story-title">The origin of Secret Corner</h2> */}
                        {founderStoryParagraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                        <div className="founder-signature" aria-label="Letter signature">
                            <span>— Ying</span>
                            <span>Founder of Secret Corner Boutique Hostel</span>
                        </div>
                    </article>
                </div>
            </main>

            {/*
                Practical info sections preserved for reuse on another page.
                Restore these image imports before moving the JSX:
                import about1 from "../images/architecture/IMG_0286.JPG";
                import about2 from "../images/architecture/IMG_0308.JPG";
                import about3 from "../images/architecture/IMG_0279.JPG";

                <div className="about-section">
                    <div className="about-text-container">
                        <h3>Directions</h3>
                        <ul>
                            <li>From Chiang Rai Bus Terminal 1 - 600m, 8-10 min walk.</li>
                            <li>From Airport - 10 km, 15-20 min taxi or Grab.</li>
                        </ul>
                    </div>
                    <div className="about-image-container">
                        <img src={about1} alt="Secret Corner Hostel building architecture in Chiang Rai near bus station" className="about-image" />
                    </div>
                </div>

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
                        <img src={about2} alt="Secret Corner Hostel Chiang Rai location near airport and bus terminal" className="about-image" />
                    </div>
                </div>

                <div className="about-section">
                    <div className="about-image-container">
                        <img src={about3} alt="Boutique hostel architecture and design at Secret Corner Chiang Rai" className="about-image" />
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
            */}
        </div>
    );
};

export default About;
