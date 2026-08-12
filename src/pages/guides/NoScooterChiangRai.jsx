import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import "./guides.css";

import watPhrKaewImg  from "../../images/blog/noScooter/watPhraKaew.jpg";
import maeFahImg      from "../../images/blog/noScooter/maeFahLuang.jpg";
import satMarketImg   from "../../images/blog/whyChiangRai/dancingAtMarket.jpg";
import sunMarketImg   from "../../images/blog/whyChiangRai/freshMarket.jpeg";
import clockTowerImg  from "../../images/blog/noScooter/clock-tower.jpg";
import blueTempleImg  from "../../images/activities/bluetemple.webp";
import templeImg      from "../../images/blog/noScooter/watMingMuang.jpg";
import nightBazaarImg from "../../images/activities/nightbazaar.jpg";
import hillTempleImg  from "../../images/blog/noScooter/watPhraThat.jpg";
import watPTDoiChomImg from "../../images/blog/noScooter/watPTDoiChom.jpg";
import watHuayImg     from "../../images/blog/noScooter/watHuay.webp";
import artMuseumImg   from "../../images/blog/noScooter/crcam.jpg";
import hotSpringImg   from "../../images/blog/ppb/ppbHotSprings.jpg";

const newTab = { target: "_blank", rel: "noopener noreferrer" };

const stops = [
  {
    id: "wat-phra-kaew",
    title: "Wat Phra Kaew",
    thai: "วัดพระแก้ว",
    distance: "2.2 km (25 min walk)",
    hours: "07:00 – 18:00",
    ticket: null,
    mapLink: "https://maps.app.goo.gl/jn8uCbQRV72jZwDZ8",
    image: watPhrKaewImg,
    alt: "Wat Phra Kaew temple Chiang Rai",
    description:
      "A short walk beyond the main market at the Old Clock Tower, this is a recommended destination. Peaceful, serene, shaded, and steeped in history from the 1400s. Home to the Emerald Buddha of the North — a copy of the one in Bangkok, which was originally found here.",
    tips: null,
  },
  {
    id: "mae-fah-luang",
    title: "Mae Fah Luang Cultural Park",
    thai: "อุทยานศิลปวัฒนธรรมแม่ฟ้าหลวง (ไร่แม่ฟ้าหลวง)",
    distance: "4.9 km (11 min)",
    hours: "08:30 – 16:30, closed Mondays",
    ticket: "200 THB",
    mapLink: "https://maps.app.goo.gl/iyKeq9U4tAmzTZ5MA",
    image: maeFahImg,
    alt: "Mae Fah Luang Art and Cultural Park Chiang Rai",
    description: null,
    tips: null,
  },
  {
    id: "saturday-walking-street",
    title: "Chiang Rai Saturday Walking Street",
    thai: null,
    distance: "1.5 km (18 min walk)",
    hours: "17:00 – 22:00 (Saturdays only)",
    ticket: null,
    mapLink: "https://maps.app.goo.gl/GHaNwYQUjrfy6sWT9",
    image: satMarketImg,
    alt: "Chiang Rai Saturday Walking Street night market",
    description: null,
    tips: null,
  },
  {
    id: "sunday-walking-street",
    title: "Sunday Walking Street",
    thai: null,
    distance: "2.2 km (30 min walk)",
    hours: "17:00 – 22:00 (Sundays only)",
    ticket: null,
    mapLink: "https://maps.app.goo.gl/Q3fCtSW88ePj9g5u5",
    image: sunMarketImg,
    alt: "Chiang Rai Sunday Walking Street market",
    description: null,
    tips: null,
  },
  {
    id: "golden-clock-tower",
    title: "Golden Clock Tower",
    thai: null,
    distance: "1.1 km (4 min)",
    hours: null,
    ticket: null,
    mapLink: "https://maps.app.goo.gl/uVGmieTZakXqcWzw6",
    image: clockTowerImg,
    alt: "Golden Clock Tower Chiang Rai city center",
    description: null,
    tips: null,
  },
  {
    id: "blue-temple",
    title: "Blue Temple – Wat Rong Suea Ten",
    thai: "วัดร่องเสือเต้น",
    distance: "3.9 km (11 min)",
    hours: "07:00 – 20:00, open daily",
    ticket: null,
    mapLink: "https://maps.app.goo.gl/TkBgRzMi7hT16QsK9",
    image: blueTempleImg,
    alt: "Blue Temple Wat Rong Suea Ten Chiang Rai",
    description: null,
    tips: null,
  },
  {
    id: "wat-ming-muang",
    title: "Wat Ming Muang",
    thai: "วัดมิ่งเมือง",
    distance: "1.3 km (18 min walk)",
    hours: null,
    ticket: null,
    mapLink: "https://maps.app.goo.gl/drVNNpPjHaVKcbxT8",
    image: templeImg,
    alt: "Wat Ming Muang temple Chiang Rai",
    description:
      "Small temple from the 13th century with intricate decorations. Just a short walk from Wat Phra Kaew and many others — explore it on the same journey. Across the main road straight south from this temple is one of the city's best spots for Pad Grapow, called J Market Chiang Rai. Or head east for a nice little vegetarian place called Kunda.",
    tips: null,
  },
  {
    id: "night-bazaar",
    title: "Chiang Rai Night Bazaar",
    thai: null,
    distance: "950 m (10 min walk)",
    hours: "17:00 – 00:00",
    ticket: null,
    mapLink: "https://maps.app.goo.gl/we1f3n88hEqxd79v9",
    image: nightBazaarImg,
    alt: "Chiang Rai Night Bazaar market",
    description: null,
    tips: null,
  },
  {
    id: "wat-doi-khao-kwai",
    title: "Wat Phra That Doi Khao Kwai Kaew",
    thai: "วัดพระธาตุดอยเขาควายแก้ว",
    distance: "5.5 km (16 min)",
    hours: "05:30 – 18:30",
    ticket: null,
    mapLink: "https://maps.app.goo.gl/PFMscoKRkUNxYF6F9",
    image: hillTempleImg,
    alt: "Wat Phra That Doi Khao Kwai Kaew hilltop temple Chiang Rai",
    description: null,
    tips: null,
  },
  {
    id: "wat-doi-chom-thong",
    title: "Wat Phra That Doi Chom Thong",
    thai: "วัดพระธาตุดอยจอมทอง",
    distance: "2.8 km (6 min)",
    hours: "06:00 – 17:00",
    ticket: null,
    mapLink: "https://maps.app.goo.gl/UZrhKJcxxVmPbaLH6",
    image: watPTDoiChomImg,
    alt: "Wat Phra That Doi Chom Thong temple Chiang Rai city pillar",
    description:
      "Authentic local people's temple complex located near the Chiang Rai City Pillar. Lovely to visit and explore. Easy to combine on the same journey as Wat Phra Kaew.",
    tips: null,
  },
  {
    id: "wat-huay-pla-kang",
    title: "Wat Huay Pla Kang",
    thai: null,
    distance: "8.1 km (15–20 min by Grab)",
    hours: "07:00 – 21:00",
    ticket: null,
    mapLink: null,
    mapAddress: "553, Ban Du, Mueang Chiang Rai District, Chiang Rai 57100",
    image: watHuayImg,
    alt: "Wat Huay Pla Kang large temple complex Chiang Rai",
    description:
      "Large complex with stunning views looking back to the city and across the river valley. Many cafés in the surrounding area. Grab transport is needed from the city centre.",
    tips: null,
  },
  {
    id: "art-museum",
    title: "Chiang Rai Contemporary Art Museum",
    thai: null,
    distance: "8 km (15 min by Grab)",
    hours: "09:00 – 16:00, free entry",
    ticket: null,
    mapLink: "https://maps.app.goo.gl/qirfdkNftxqKGDqq7",
    image: artMuseumImg,
    alt: "Chiang Rai Contemporary Art Museum",
    description:
      "Worth an hour to browse the works inside. The facility isn't 100% finished but usually has 2–3 floors of exhibitions on display. Requires a Grab or Grab Bike but it's not far from town. Afterwards, try Jaipun nearby for coffee and pastries.",
    tips: null,
  },
  {
    id: "hot-spring",
    title: "Hot Spring at Pong Phra Bat Municipality",
    thai: null,
    distance: "11 km (~20 min by Grab)",
    hours: "08:00 – 16:00",
    ticket: null,
    mapLink: "https://maps.app.goo.gl/P4GT9e4Eqwh5369A9",
    image: hotSpringImg,
    alt: "Pong Phra Bat hot spring soaking pools Chiang Rai",
    description:
      "A simple little hot spring run by the local government. Some soaking pools are free; private rooms are available for a small charge. Very relaxing and not difficult to reach from town without your own transport.",
    tips: null,
  },
];

const NoScooterChiangRai = () => {
  return (
    <article className="guide-page no-scooter-guide">
      <Helmet>
        <title>What to Do in Chiang Rai Without a Scooter | Secret Corner</title>
        <meta name="description" content="13 recommended attractions in and around Chiang Rai city that are easy to reach on foot or by Grab — temples, markets, art, and more." />
      </Helmet>

      {/* Hero */}
      <header className="guide-hero">
        <p className="guide-eyebrow">Secret Corner city guide</p>
        <h1>What to Do in Chiang Rai Without a Scooter</h1>
        <p className="guide-subtitle">
          Our staff&rsquo;s favorite places, all within walking distance or an easy Grab ride
        </p>
      </header>

      {/* Table of Contents */}
      {/* <nav className="guide-toc">
        <h4>In This Guide</h4>
        <ol>
          {stops.map((stop) => (
            <li key={stop.id}>
              <a href={`#${stop.id}`}>{stop.title}{stop.thai && <span style={{ color: "#aaa", marginLeft: "8px", fontWeight: "normal" }}>{stop.thai}</span>}</a>
            </li>
          ))}
        </ol>
      </nav> */}

      {/* Intro */}
      <section className="guide-section no-scooter-intro">
        <p>
          You don't need a motorbike to see the best of Chiang Rai. The city
          centre is compact and walkable, and Grab taxis make the slightly
          further destinations easy to reach. Here are 13 local-recommended
          attractions that are accessible without your own wheels. Note- the 
          distances listed are from Secret Corner Boutique Stay, but you can adjust
          based on your own needs.
        </p>
      </section>

      {/* Stop Cards */}
      {stops.map((stop, i) => (
        <section className="guide-section no-scooter-stop" id={stop.id} key={stop.id}>
          <header className="stop-heading">
            <span className="stop-number">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2>{stop.title}</h2>
              {stop.thai && <p className="stop-thai">{stop.thai}</p>}
            </div>
          </header>
          <dl className="stop-details">
            <div>
              <dt>From Secret Corner</dt>
              <dd>{stop.distance}</dd>
            </div>
            {stop.hours && <div><dt>Opening hours</dt><dd>{stop.hours}</dd></div>}
            {stop.ticket && <div><dt>Entry</dt><dd>{stop.ticket}</dd></div>}
          </dl>
          {stop.mapAddress && !stop.mapLink && (
            <p className="stop-address">
              <span>Address</span> {stop.mapAddress}
            </p>
          )}
          {stop.description && <p>{stop.description}</p>}
          <figure className="guide-image-block">
            <img src={stop.image} alt={stop.alt} loading="lazy" />
          </figure>
          {stop.mapLink && (
            <p className="stop-map-wrap">
              <a href={stop.mapLink} className="map-link" {...newTab}>
                View on Google Maps <span aria-hidden="true">↗</span>
              </a>
            </p>
          )}
        </section>
      ))}

      {/* CTA */}
      <div className="guide-cta">
        <p className="guide-kicker">Book Direct</p>
        <h3>Ready to experience Secret Corner?</h3>
        <p>
          Clean rooms, comfortable beds, thoughtful shared spaces, and a rooftop made
          for slow mornings and relaxed evenings in Chiang Rai.
        </p>
        <a
          href="https://us2.cloudbeds.com/reservation/T5pGtj"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Direct
        </a>
      </div>

      {/* Related Guides */}
      <nav className="guide-related guide-related--more">
        <p className="guide-kicker">Keep exploring</p>
        <h3>More Chiang Rai travel guides</h3>
        <ul>
          <li>
            <Link to="/guides/things-to-do-chiang-rai">
              Things to Do in Chiang Rai
            </Link>
          </li>
          <li>
            <Link to="/guides/best-day-trips-chiang-rai">
              Best Day Trips from Chiang Rai
            </Link>
          </li>
          <li>
            <Link to="/guides/pong-phra-bat">
              Pong Phra Bat District Itinerary
            </Link>
          </li>
          <li>
            <Link to="/guides/two-days-chiangrai">
              2 Days in Chiang Rai: A Local's Itinerary
            </Link>
          </li>
          <li>
            <Link to="/guides/best-cafes-chiang-rai">
              Best Cafes in Chiang Rai
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default NoScooterChiangRai;
