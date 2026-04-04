import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./guides.css";

import teaplant from "../../images/activities/teaplant.jpg";
import doiChang from "../../images/activities/doiChang.png";
import trek1 from "../../images/activities/trek1.jpg";
import slowboat from "../../images/activities/slowboat.webp";
import goldentriangle from "../../images/activities/goldentriangle.jpg";
import waterfall from "../../images/activities/waterfall.jpg";

const dayTrips = [
  {
    title: "The Golden Triangle & Chiang Saen",
    distance: "~1.5 hours from city center",
    tag: "History & Culture",
    description:
      "Stand where Thailand, Laos, and Myanmar meet at the confluence of the Ruak and Mekong rivers. The Golden Triangle was once the heart of the global opium trade, and the area's fascinating history is brought to life at the Hall of Opium museum nearby. Combine it with a stroll through the ancient ruins of Chiang Saen, one of the oldest settlements in northern Thailand, and a boat ride along the Mekong for views into Laos.",
    tips: "Go early to beat the tour buses. The Hall of Opium is worth the 200 THB entry fee. A longboat ride on the Mekong (around 300–500 THB) gives you a unique perspective of three countries from the water.",
    image: goldentriangle,
    alt: "Golden Triangle viewpoint where Thailand Laos and Myanmar meet near Chiang Rai",
  },
  {
    title: "Doi Mae Salong Tea Villages",
    distance: "~1.5 hours northwest of the city",
    tag: "Tea & Mountains",
    description:
      "Perched high in the mountains, Doi Mae Salong is a former Chinese Nationalist settlement that feels like a slice of Yunnan dropped into Thailand. The hillsides are blanketed in tea and coffee plantations, and the village streets are lined with tea shops, Chinese restaurants, and small markets. On a clear morning, the sunrise views from the ridgeline are otherworldly. Winding roads through lush green hills make the journey itself part of the experience.",
    tips: "Best enjoyed by motorbike if you're comfortable on mountain roads. Visit one of the hilltop tea plantations for a tasting — Choui Fong Tea is popular, but smaller local shops offer a more authentic experience. Stay for lunch and try the Yunnan-style noodles.",
    image: teaplant,
    alt: "Doi Mae Salong tea plantations and mountain views near Chiang Rai Thailand",
  },
  {
    title: "Doi Chang Coffee Mountain",
    distance: "~1.5 hours southwest of the city",
    tag: "Coffee & Scenery",
    description:
      "Thailand's premier coffee-growing region sits high in the mountains southwest of Chiang Rai. The drive up is winding but rewarding, with sweeping panoramic views at every turn. Once you arrive, the village is dotted with hillside cafés serving single-origin coffee grown just meters away. The air is cool, the pace is slow, and the scenery is incredible. It's the perfect escape from the heat of the lowlands.",
    tips: "The road is steep and winding — confident motorbike riders will love it, but a car is easier if you're not experienced. Bring a light jacket — it's noticeably cooler at altitude. Several viewpoint cafés have terraces overlooking the valley.",
    image: doiChang,
    alt: "Doi Chang coffee mountain cafes and viewpoints near Chiang Rai Thailand",
  },
  {
    title: "Trekking to Hill Tribe Villages",
    distance: "Pickup from city center",
    tag: "Adventure & Culture",
    description:
      "A guided trek into the mountains surrounding Chiang Rai is one of the most rewarding experiences in northern Thailand. Full-day and two-day treks take you through dense jungle trails to visit Akha, Lahu, and Lisu communities. Along the way, your guide will forage ingredients for a jungle-cooked lunch, point out medicinal plants, and lead you to hidden waterfalls. It's an authentic cultural exchange that goes far beyond sightseeing.",
    tips: "Minimum two people for most treks. Wear sturdy shoes and bring insect repellent. We organize treks directly from our hostel — a full-day trek is around 1,500 THB per person including lunch and transport. Two-day treks with an overnight village stay are also available.",
    image: trek1,
    alt: "Trekking to Akha and Lahu hill tribe villages near Chiang Rai",
  },
  {
    title: "Khun Korn Waterfall & National Park",
    distance: "~30 minutes south of the city",
    tag: "Nature & Hiking",
    description:
      "Tucked inside a lush national park just south of the city, Khun Korn is Chiang Rai's most impressive waterfall — a 70-meter cascade surrounded by dense tropical forest. A well-maintained jungle trail (about 1.5 km each way) winds through towering trees and across small streams before revealing the falls. In the rainy season it's thunderously powerful; in the cool season the pool at the base is calm enough for a swim.",
    tips: "The trail is easy to moderate — trainers or sandals with grip are fine. Bring water and a swimsuit. It's rarely crowded, especially on weekdays. Entry is 100 THB for foreign visitors. Combine it with a stop at one of the local restaurants along the road back to town.",
    image: waterfall,
    alt: "Khun Korn Waterfall jungle hike near Chiang Rai Thailand",
  },
  {
    title: "Slow Boat to Luang Prabang",
    distance: "2-day journey via Chiang Khong border",
    tag: "Epic Journey",
    description:
      "One of Southeast Asia's most legendary journeys begins right from Chiang Rai. Board a traditional wooden boat on the Mekong River and drift through dramatic mountain gorges, past riverside villages and lush jungle, arriving in the UNESCO-listed town of Luang Prabang two days later. It's less a day trip and more a life experience — and the departure point in Chiang Khong is just a couple of hours from the city.",
    tips: "We organize the full trip from our hostel: 1,600 THB per person includes taxi to the pier, bus for the border crossing, slow boat ticket, and lunch on day one. Lao visa fees and the overnight in Pak Beng are not included. Departure is around 05:00. Bring a book, snacks, and a sense of adventure.",
    image: slowboat,
    alt: "Slow boat journey on the Mekong River from Chiang Rai to Luang Prabang Laos",
  },
];

const BestDayTripsChiangRai = () => {
  useEffect(() => {
    document.title =
      "Best Day Trips from Chiang Rai (2026) | Local Guide to Excursions & Tours";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Discover the best day trips from Chiang Rai — from the Golden Triangle and Doi Mae Salong tea villages to hill tribe treks and the slow boat to Laos. Curated by locals at Secret Corner Hostel."
      );
    }
  }, []);

  return (
    <article className="guide-page">
      {/* Hero */}
      <header className="guide-hero">
        <h1>Best Day Trips from Chiang Rai</h1>
        <p className="guide-subtitle">
          Where to Go When You’ve Seen the White Temple
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="guide-toc">
        <h4>In This Guide</h4>
        <ul>
          {dayTrips.map((trip, i) => (
            <li key={i}>
              <a href={`#trip-${i}`}>{trip.title}</a>
            </li>
          ))}
          <li><a href="#planning">Planning Tips &amp; Getting Around</a></li>
          <li><a href="#where-to-stay">Where to Stay</a></li>
        </ul>
      </nav>

      {/* Intro */}
      <section className="guide-section">
        <p>
          Chiang Rai city has plenty to keep you busy, but the real magic lies in
          the province that surrounds it. Within an hour or two you can be sipping
          freshly picked tea on a misty mountaintop, trekking through jungle to a
          remote hill tribe village, or staring out across three countries at the
          Golden Triangle.
        </p>
        <p>
          As locals running a hostel in the heart of town, these are the trips
          we actually send our guests on — the ones they come back raving about.
          Each one can be done in a single day (with one epic exception), by
          motorbike, private car, or organized tour.
        </p>
      </section>

      {/* Day Trip Cards */}
      {dayTrips.map((trip, i) => (
        <section className="guide-section" id={`trip-${i}`} key={i}>
          <h2>{trip.title}</h2>
          <p style={{ fontSize: "0.9rem", color: "#888", marginBottom: "6px" }}>
            📍 {trip.distance}
          </p>
          <figure className="guide-image-block">
            <img src={trip.image} alt={trip.alt} loading="lazy" />
          </figure>
          <p>{trip.description}</p>
          <div className="guide-tip">
            <strong>💡 Insider Tip</strong>
            {trip.tips}
          </div>
        </section>
      ))}

      {/* Planning Tips */}
      <section className="guide-section" id="planning">
        <h2>Planning Tips &amp; Getting Around</h2>

        <h3>By Motorbike</h3>
        <p>
          Renting a motorbike (200–300 THB/day) is the most flexible and
          rewarding way to explore. The mountain roads to Doi Mae Salong and Doi
          Chang are winding but beautiful — confident riders will love them. We
          can arrange rentals at the hostel.
        </p>

        <h3>By Tour or Private Car</h3>
        <p>
          If you'd rather sit back and enjoy the views, we can help organize
          private day tours or small group trips to most of these destinations.
          Ask at reception for current pricing and availability.
        </p>

        <h3>Best Time of Year</h3>
        <p>
          The cool season (November–February) is ideal — clear skies, comfortable
          temperatures, and lush green scenery. The rainy season (June–October)
          makes waterfalls more dramatic but mountain roads slippery. March–May
          is hot and can be hazy from seasonal burning.
        </p>

        <div className="guide-tip">
          <strong>💰 Budget Tip</strong>
          Most of these day trips cost very little beyond fuel or a tour fee.
          Pack water, sunscreen, and a light jacket for mountain trips. Bring cash
          — card payments are rare outside the city.
        </div>
      </section>

      {/* Where to Stay */}
      <section className="guide-section" id="where-to-stay">
        <h2>Where to Stay in Chiang Rai</h2>
        <p>
          The best base for day trips is the city center — close to motorbike
          rental shops, tour agencies, and easy access to the main roads heading
          north, south, and west.
        </p>
        <p>
          <strong>Secret Corner Hostel</strong> is right in the heart of it all.
          We help our guests plan day trips every day — from organizing treks and
          the slow boat to Laos, to lending out maps and sharing the best routes
          for motorbike rides. Comfortable beds, a rooftop hangout, and a team
          that genuinely loves this province.
        </p>
      </section>

      {/* CTA */}
      <div className="guide-cta">
        <h3>Ready to Explore Chiang Rai?</h3>
        <p>
          Book direct with Secret Corner Hostel for the best rates, free local
          tips, and help planning your perfect day trip.
        </p>
        <a
          href="https://book-directonline.com/properties/secretcornerDirect"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now &amp; Save
        </a>
      </div>

      {/* Related Guides */}
      <nav className="guide-related">
        <h3>More Chiang Rai Travel Guides</h3>
        <ul>
          <li>
            <Link to="/guides/two-days-chiangrai">
              2 Days in Chiang Rai: A Local’s Itinerary
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default BestDayTripsChiangRai;
