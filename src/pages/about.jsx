import React from "react";
import { Helmet } from 'react-helmet-async';
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
        alt: "Secret Corner Boutique Stay exterior entrance in Chiang Rai Thailand",
    },
    {
        src: aboutDorm,
        alt: "Clean modern dormitory interior at Secret Corner Boutique Stay Chiang Rai",
    },
    {
        src: welcome3,
        alt: "Warm welcome area at Secret Corner Boutique Stay Chiang Rai",
    },
];

const AboutHeader = () => {
    return (
        <div className="about-header">
            <img src={about0} alt="Secret Corner Boutique Stay Chiang Rai boutique hostel interior and common areas" className="header-image" />
            <p className="header-text">Our Story</p>
        </div>
    );
};

const About = () => {
    return (
        <div className="about-container">
            <Helmet>
                <title>About Us | Secret Corner Boutique Stay Chiang Rai</title>
                <meta name="description" content="The story behind Secret Corner — why we built it and what makes it our guests' favourite hostel in Chiang Rai." />
            </Helmet>
            <AboutHeader />
            <main className="founder-story" aria-labelledby="founder-story-title">
                <div className="letter-shell">
                    <aside className="story-photo-rail" aria-label="Photos from Secret Corner Boutique Stay">
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
                            <span>Founder of Secret Corner Boutique Stay</span>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default About;
