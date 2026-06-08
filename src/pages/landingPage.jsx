import React, { useEffect } from "react";
import "./landingPage.css";
import Booking from "../images/utils/booking.png";
import Expedia from "../images/utils/expedia.png";
import Agoda from "../images/utils/agoda.png";
import HostelWorld from "../images/utils/hostelworld.png";
import Google from "../images/utils/google.png";
import TripAdvisor from "../images/utils/tripadvisor.svg";
import Hotels from "../images/utils/hotelscom.png";

const LandingPage = () => {
  const otaHighlights = [
    {
      platform: "Booking.com",
      logo: Booking,
      score: "9.3",
      denominator: "/10",
      label: "Wonderful",
      detail: "Based on verified guest reviews"
    },
    {
      platform: "Hostelworld",
      logo: HostelWorld,
      score: "9.5",
      denominator: "/10",
      label: "Superb",
      detail: "Praised for cleanliness, comfort, and value"
    },
    {
      platform: "Tripadvisor",
      logo: TripAdvisor,
      score: "5.0",
      denominator: "/5",
      label: "Excellent",
      detail: "Recognized by travelers for a calm boutique stay"
    },
    {
      platform: "Agoda",
      logo: Agoda,
      score: "9.4",
      denominator: "/10",
      label: "Excellent",
      detail: "Recognized for top value"
    },
    {
      platform: "Expedia",
      logo: Expedia,
      score: "10",
      denominator: "/10",
      label: "Exceptional",
      detail: "Praised for location and comfort"
    },
    {
      platform: "Hotels.com",
      logo: Hotels,
      score: "10",
      denominator: "/10",
      label: "Exceptional",
      detail: "From verified guest stays"
    }
  ];

  const reviews = [
    {
      text: "This hostel is the best we have been to so far. First of all, the world's sweetest girl owns this place and has recently opened with the aim of creating a home when you are not at home. The best thing about the hostel is the cleanliness and the beds. Such incredibly comfortable mattresses and duvets. Everything is incredibly fresh and new. \n We chose this hostel because of its proximity to the bus station as that is where we were dropped off. We could walk around with our backpacks without any problems. 10/10",
      platform: HostelWorld,
      platformText: "HostelWorld.com",
      rating: 5
    },
    {
      name: "Alex",
      text: "This hostel is absolutely wonderful!\nThe beds are extremely comfortable and cozy — I didn’t want to get out of them!\nFemale dorm room and bathroom were very clean (sparkling even!) with both mixed and female-only bathrooms available.\nThe design of the hostel is modern and stylish.\nFree water refill is available, and there’s a washing machine you can use for a small fee.\nThe owner is very friendly and helpful — we received great support on WhatsApp when we arrived late.\n10 minute walk to 7/11, bus station, and night bazaar. Highly recommend to anyone staying in Chiang Rai!",
      platform: Google,
      platformText: "Google.com",
      rating: 5
    },
    {
      name: "Yasuyo",
      text: "It was a really amazing experience for me. The hostel is brand new and the facilities are excellent, and I was really impressed by the warm hospitality of the staff(^^) It’s definitely worth a visit (o^^o)",
      platform: Booking,
      platformText: "Booking.com",
      rating: 5
    },
    {
      text: "Brand new Hostel and with a wonderful interior. A great hospitality staff and service. Excellent Location. Everything was perfect during my stay. I would definitely recommend and will be back to Secret Corner.",
      platform: HostelWorld,
      platformText: "HostelWorld.com",
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
      text: "Steps from Chiang Rai’s best cafes, restaurants, temples, and night market."
    },
    {
      title: "Grand Opening Rates",
      text: "Be part of our first chapter! Enjoy special rates, curated experiences, and that fresh-hostel feel."
    }
  ];

  useEffect(() => {
    document.title = "Best Hostel in Chiang Rai | Book Direct & Save";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Boutique hotel comfort at hostel prices. Enjoy thoughtful design, exceptional cleanliness, comfortable beds, and a calm atmosphere just eight minutes from Chiang Rai\'s Night Bazaar.');
    }
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Secret Corner Hostel</h1>
          <p>Welcome to your home in Chiang Rai</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="content">
          <h2>About Us</h2>
          <p>
            Welcome to Secret Corner Boutique Hostel — truly the best night’s 
            stay in Chiang Rai for travelers who want <b>premium comfort</b> and 
            <b> local immersion</b> in a relaxed atmosphere.
          </p>
          <p>
            Whether you choose a cozy dorm or a private room, we offer clean, thoughtfully 
            designed spaces with hotel-quality beds, soft premium linens, and daily housekeeping 
            services for a restful stay. <b>Newly built</b>, our property 
            features modern facilities and quality amenities such as reliably hot showers, air 
            conditioning, privacy curtains, personal reading lights and power outlets, and complimentary 
            individual lockers. Our guests often mention the exceptional quality of our comfort 
            and cleanliness, stating that Secret Corner stands out above the rest.
          </p>
          <p>
            Enjoy our <b>social rooftop</b> — a laid-back space for sunset drinks, meeting 
            fellow travelers, remote work, or simply unwinding after a day out. We 
            offer complimentary high-speed WiFi, a common kitchen with kitchenware 
            provided (microwave, refrigerator, water kettle, utensils), drinking water, 
            laundry services, coffee/tea/breakfast options, and an evening happy hour. 
            Self-check-in is available for late arrivals.
          </p>
          <p>
            Secret Corner is located conveniently in <b>downtown Chiang Rai</b> just a few 
            minutes walk from the Night Bazaar, walking streets, 7-Eleven, and bus 
            station. Walking distance from many art cafés and local attractions such 
            as the City Clock Tower, fresh morning market, and temples. We are not on 
            the main road, so you may enjoy peaceful, private nights.
          </p>
          <p>
            Lastly, our <b>friendly local team</b> is happy to help arrange day trips, 
            motorbike/scooter rentals, and slow boat journeys to Laos. We often help
             you organize your following plans to make your experience easy-going and enjoyable!
          </p>
        </div>
      </section>

      {/* OTA RATINGS */}
      <section className="ota-ratings" aria-labelledby="ota-ratings-title">
        <div className="content">
          <p className="section-kicker">Trusted by Travelers</p>
          <h2 id="ota-ratings-title">Loved Around the World</h2>
          <div className="ota-ratings-grid">
            {otaHighlights.map(({ platform, logo, score, denominator, label, detail }) => (
              <article className="ota-rating-card" key={platform}>
                <div className="ota-platform">
                  {logo ? (
                    <img src={logo} alt={`${platform} rating for Secret Corner Hostel`} className="ota-logo" />
                  ) : (
                    <span className="ota-platform-name">{platform}</span>
                  )}
                </div>
                <p className="ota-score">
                  <span>{score}</span>
                  <span className="ota-denominator">{denominator}</span>
                </p>
                <h3>{label}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <div className="content">
          <h2>Guest Reviews</h2>
          <div className="reviews-grid">
          {reviews.map(({ text, name, platform, platformText, rating }, idx) => (
            <div className="review-card" key={idx}>
              <p className="review-text">"{text}"</p>
              <p className="review-source">
                — {name} <img src={platform} alt={`5-star review from ${platformText} for Secret Corner Hostel Chiang Rai`} className="review-logo" /> {"★".repeat(rating)}
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
