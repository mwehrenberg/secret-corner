import React, { useEffect } from "react";
import "./localAttractions.css";
import nightbazaar from "../images/activities/nightbazaar.jpg";
import bluetemple from "../images/activities/bluetemple.webp";
import teaplant from "../images/activities/teaplant.jpg";
import lpb from "../images/activities/lpb.jpg";
import singhapark from "../images/activities/singhapark.jpg";
import slowboat from "../images/activities/slowboat.webp";
import doiChang from "../images/activities/doiChang.png";
import trek1 from "../images/activities/trek1.jpg";
import trek2 from "../images/activities/trek2.jpeg";
import motorbike from "../images/activities/motorbike.webp";

const motorbikePromotion = {
  title: "Looking for a way to get around town?",
  description:
    "We can arrange motorbike rentals for you during your stay! Please contact us through WhatsApp or visit our front desk for more details and pricing.",
  url: "https://wa.me/66613326191",
  image: motorbike,
};

const featuredActivity = {
  title: "Secret Corner Chiang Rai Walking Tour",
  description:
    "Explore Chiang Rai’s hidden gems every Tuesday morning with our local guide- Khun Tuk!",
  pdfUrl:
    "https://acrobat.adobe.com/id/urn:aaid:sc:AP:c8b56c22-8f70-479b-bfb6-33006382e20e?viewer!megaVerb=group-discover",
  image:
    "https://cdn-icons-png.flaticon.com/512/854/854878.png", // small map/walk icon (swap with your own image if desired)
};

const localAttractions = [
  {
    title: "Slow Boat to Luang Prabang",
    description:
    "Cruise along the mighty Mekong River and experience one of Southeast Asia’s most iconic journeys. This two-day, one-night adventure takes you past dramatic mountains, riverside villages, and lush jungle landscapes on the way to Luang Prabang. Departure from Secret Corner is around 05:00, with arrival in Luang Prabang at approximately 16:00 on day two. The price is 1,600 THB per person and includes taxi to the pier, bus ticket for the border crossing, slow boat ticket, and lunch on day one. Lao visa fees and overnight accommodation in Pak Beng are not included.",
    content: slowboat,
  },
  {
    title: "Train Journey to Laos",
    description:
    "A fast and comfortable one-day journey to Luang Prabang via Laos’ modern railway. Depart Secret Corner around 05:00 and arrive in Luang Prabang at approximately 18:00 the same day. The cost is 1,990 THB per person and includes pickup from Secret Corner, bus ticket for the border crossing, train ticket to Luang Prabang, and a boxed lunch.",
    content: lpb
  },
  {
    title: "Trekking to Minority Villages",
    description:
      "A full-day guided trekking adventure in a small group, visiting a Lisu Chinese village, waterfalls, tea plantations, and stunning natural viewpoints. Lunch is included and prepared with your guide using foraged jungle ingredients — a true hands-on cultural experience. Pickup is around 09:00 with return to Secret Corner in the late afternoon. Minimum of two people. Expect rewarding walking and some climbing. Price: 1,500 THB per person.",
    content: trek1,
  },
  {
    title: "Two Day Trekking Adventure",
    description:
      "An immersive two-day trekking experience through remote hill tribe regions. Day one includes 5–6 hours of moderate trekking with visits to a Lahu village, lunch along the way, and an overnight stay in an Akha village. Day two focuses on jungle survival skills, followed by lunch and a visit to a Lisu village in the high mountains. Return to Chiang Rai city in the late afternoon. Price: 2,800 THB per person. Minimum two people.",
    content: trek2,
  },
  {
    title: "Top Sites and Golden Triangle Day Trip",
    description:
      "A full-day tour visiting Chiang Rai’s highlights, including the White Temple, Blue Temple, Baan Dam Museum, and the famous Golden Triangle where Thailand, Laos, and Myanmar meet. A great way to see the region’s top sights in one day.",
    content: bluetemple,
  },
  {
    title: "Doi Chang Coffee Mountain Trip",
    description:
      "Discover Chiang Rai’s famous coffee region, located about 1.5 hours southwest of the city. While the drive is winding, the panoramic mountain views and peaceful atmosphere make it more than worthwhile. Expect breathtaking viewpoints, fresh mountain air, and countless cafés serving locally grown coffee and tea. Our staff are happy to recommend great spots to stop for food, drinks, and photos. Perfect for a relaxed day of exploration.",
    content: doiChang,
  },
  {
    title: "Saturday Chiang Rai Night Market",
    description:
      "Chiang Rai’s largest and liveliest night market, located east of the Clock Tower. Every Saturday night the streets come alive with local food, handmade crafts, live performances, massage stalls, and endless people-watching. A perfect place to eat, explore, and soak up the local atmosphere.",
    content: nightbazaar,
  },
  {
    title: "Doi Maesalong",
    description:
      "Known as Thailand’s tea valley, Doi Mae Salong is about 1.5 hours northwest of the city and famous for its rolling hills covered in tea plantations. Enjoy breathtaking viewpoints, tea tastings, hill tribe markets, and Chinese-influenced culture. Best explored by car, motorbike, or small group tour.",
    content: teaplant,
  },
  {
    title: "Visit Singha Park",
    description:
      "A beautifully landscaped park just outside Chiang Rai city, Singha Park offers wide open green spaces, tea plantations, cycling paths, and scenic viewpoints. It’s a great spot for a relaxed afternoon, photos, and sunset views, with cafés and restaurants on site.",
    content: singhapark,
  },
];

const LocalAttractions = () => {
  useEffect(() => {
    document.title = "Chiang Rai Attractions & Tours - Secret Corner Hostel Guide";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover top things to do in Chiang Rai! Slow boat to Laos, trekking, Golden Triangle tours, temples, and local experiences. Guided tours from Secret Corner Hostel.');
    }
  }, []);

  return (
    <div>
      <div className="localAttractions-container">
        <h2>Looking for something fun to do in Chiang Rai?</h2>
        <p className="localAttractions-text">
          Not sure where to start with all the options? You’re in the right
          place — we’ve handpicked our favorite day tours and local experiences
          just for you! Whether you’re into cultural sights, food adventures, or
          laid-back nature walks, there’s something here you’ll love.
        </p>
        <p className="localAttractions-text">
          Swing by reception anytime during your stay — our friendly team is
          always happy to share tips, hidden gems, and help you plan the perfect
          day.
        </p>
      </div>

      {/* Motorbike Promotion */}
      <div className="featured-activity">
        <div className="featured-image">
          <img src={motorbikePromotion.image} alt={motorbikePromotion.title} />
        </div>
        <div className="featured-text">
          <h2>{motorbikePromotion.title}</h2>
          <p>{motorbikePromotion.description}</p>
          {/* <a
            href={motorbikePromotion.url}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            Call on WhatsApp
          </a> */}
        </div>
      </div>

      {/* Regular Activities */}
      {localAttractions.map((activity, index) => (
        <div className="activity-container" key={index}>
          <div className="activity-image">
            <img src={activity.content} alt={activity.title} />
          </div>
          <div className="activity-text">
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
          </div>
        </div>
      ))}

      {/* Featured Activity */}
      <div className="featured-activity">
        <div className="featured-image">
          <img src={featuredActivity.image} alt={featuredActivity.title} />
        </div>
        <div className="featured-text">
          <h2>{featuredActivity.title}</h2>
          <p>{featuredActivity.description}</p>
          <a
            href={featuredActivity.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            📍 Download the Walking Tour Guide
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocalAttractions;
