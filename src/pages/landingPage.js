import React from "react";
import "./landingPage.css";
import Booking from "../images/utils/booking.png";
// import Expedia from "../images/utils/expedia.png";
import HostelWorld from "../images/utils/hostelworld.png";
// import Agoda from "../images/utils/agoda.png";

const LandingPage = () => {
  const reviews = [
    {
      name: "Zhen",
      text: "Staff is very warm and welcoming... If you’re looking for more than just a bed — a place where people genuinely connect — this hostel is a gem in Chiang Rai’s growing travel scene. It’s fresh, friendly, and full of heart.",
      platform: Booking,
      platformText: "Booking.com",
      rating: 5
    },
    {
      name: "Pathira",
      text: "Brand new Hostel and with a wonderful interior. A great hospitality staff and service. Excellent Location. Everything was perfect during my stay. I would definitely recommend and will be back to Secret Corner.",
      platform: HostelWorld,
      platformText: "HostelWorld.com",
      rating: 5
    },
    {
      name: "Yasuyo",
      text: "It was a really amazing experience for me. The hostel is brand new and the facilities are excellent, and I was really impressed by the warm hospitality of the staff(^^) It’s definitely worth a visit (o^^o)",
      platform: Booking,
      platformText: "Booking.com",
      rating: 5
    }
  ];

  const whyUs = [
    {
      title: "Boutique Comfort",
      text: "Clean, beautifully designed rooms with thoughtful details and cozy vibes — whether you’re in a dorm or a deluxe private room. Premium mattresses, 100% cotton soft linens, and artisan touches."
    },
    {
      title: "Community Driven",
      text: "We believe in connection — to people and to place. Join our in-house activities, local experiences, and chill nights on the rooftop."
    },
    {
      title: "Work-Friendly Spaces",
      text: "Strong Wi-Fi, peaceful corners, and friendly faces make remote work actually enjoyable."
    },
    {
      title: "Prime Location",
      text: "Steps from Chiang Rai’s best cafes, restaurants, temples, night market, and local gems — we’re in the sweet spot between culture and convenience."
    },
    {
      title: "Soft Opening Rate",
      text: "Be part of our first chapter! Enjoy special rates, curated experiences, and that fresh-hostel feel."
    }
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Secret Corner Hostel</h1>
          <p>Welcome to your home in Chiang Rai</p>
        </div>
      </section>
      {/* <section className="hero">
        <div className="hero-overlay">
          <img src={logo} alt="Secret Corner Hostel logo" className="hero-logo" />
        </div>
      </section> */}

      {/* ABOUT */}
      <section className="about">
        <div className="content">
          <h2>About Us</h2>
          <p>
            Located in the heart of Chiang Rai, Secret Corner Boutique Hostel is
            a clean, beautifully designed space where guests can relax, connect
            with the local community, and work comfortably.
          </p>
          <p>
            Blending modern amenities with cozy, curated accommodations, our
            hostel offers a warm and welcoming atmosphere for travelers from
            around the world. Guests can enjoy practical perks like on-site
            laundry, plus unwind at our rooftop bar for great conversation.
          </p>
          <p>
            With deep local insight, we curate authentic experiences and
            meaningful in-house activities that go beyond the tourist path — from
            cultural workshops to community dinners.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <div className="content">
          <h2>Guest Reviews</h2>
          <div className="reviews-grid">
          {reviews.map(({ text, name, platform, platformText, rating }, idx) => (
            <div className="review-card" key={idx}>
              <p className="review-text">“{text}”</p>
              <p className="review-source">
                — {name}, <img src={platform} alt={platformText} className="review-logo" /> {"★".repeat(rating)}
              </p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <div className="content">
          <h2>Why Stay With Us</h2>
          <div className="why-us-grid">
            {whyUs.map((item, idx) => (
              <div className="why-us-card" key={idx}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;