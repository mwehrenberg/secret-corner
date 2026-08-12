import React, { useEffect, useState, useCallback } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import "./guides.css";

import hotSpringImg  from "../../images/activities/maeFah.webp";
import waterfallImg  from "../../images/activities/waterfall.jpg";
import cafeImg       from "../../images/activities/doiChang.png";
import ppbRoute      from "../../images/blog/ppb/ppbRoute.png";

const MAP_LINKS = {
  hotSpring:   "https://maps.app.goo.gl/P4GT9e4Eqwh5369A9",
  waterfall:   "https://www.google.com/maps/place/Pong+Phra+Bat+Water+Fall/@19.9966185,99.7983639,15444m/data=!3m1!1e3!4m6!3m5!1s0x30d702298ebacbe1:0x8bf6f838138c4766!8m2!3d20.0110236!4d99.8040058!16s%2Fg%2F11b67pvj4y?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D",
  idrinCafe:   "https://www.google.com/maps/place/%E0%B9%84%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88/@20.0176869,99.8046289,1063m/data=!3m1!1e3!4m14!1m7!3m6!1s0x30d70378f4b92fbb:0x348cfb1f10c10e95!2zSWRyaW4gY2FmZSAmIOC5guC4ruC4oeC4quC5gOC4leC4ouC5jA!8m2!3d20.019824!4d99.8071716!16s%2Fg%2F11vl5v44dw!3m5!1s0x30d703003f79d5e9:0xee2a7ef2a17dea7c!8m2!3d20.0191405!4d99.805669!16s%2Fg%2F11wg4n8f33?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",
  fullRoute:   "https://www.google.com/maps/dir/Secret+Corner+Boutique+Stay+40,+1+Sanpanard+Soi+2,+Wiang,+Mueang+Chiang+Rai+District,+Chiang+Rai+57000,+Thailand/Pong+Phra+Bat+Water+Fall,+Highway+1511,+Ban+Du,+Mueang+Chiang+Rai,+Chiang+Rai+57100,+Thailand/%E0%B9%84%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88+281+%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88+13+Ban+Du,+Mueang+Chiang+Rai+District,+Chiang+Rai+57100,+Thailand/Pong+Phra+Bat+Hot+Springs,+486+%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88+6+Ban+Du,+Mueang+Chiang+Rai+District,+Chiang+Rai+57100,+Thailand/@19.9610571,99.7889625,15447m/data=!3m2!1e3!4b1!4m26!4m25!1m5!1m1!1s0x30d707dc0b08b67f:0xe5ee37f41d22b7c1!2m2!1d99.8376047!2d19.9031236!1m5!1m1!1s0x30d702298ebacbe1:0x8bf6f838138c4766!2m2!1d99.8040058!2d20.0110236!1m5!1m1!1s0x30d703003f79d5e9:0xee2a7ef2a17dea7c!2m2!1d99.8056694!2d20.0191414!1m5!1m1!1s0x30d701406a161169:0x438cad80d238beab!2m2!1d99.8327446!2d19.9776185!3e0?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D",
};

const newTab = { target: "_blank", rel: "noopener noreferrer" };

const ROUTE_IMAGES = [
  { src: ppbRoute, alt: "Pong Phra Bat District driving route map", caption: "Pong Phra Bat Route" },
];

const stops = [
  {
    id: "hot-spring",
    title: "Hot Spring at Pong Phra Bat Municipality",
    distance: "11 km from city center (~20 min by Grab)",
    tag: "Relaxation",
    hours: "08:00 – 16:00",
    mapLink: MAP_LINKS.hotSpring,    image: hotSpringImg,
    alt: "Pong Phra Bat hot spring soaking pools Chiang Rai",    description:
      "A simple, charming hot spring run by the local government — and one of the easiest day trips from Chiang Rai city without your own transport. Some soaking pools are free to use, and private soaking rooms are available for a small additional charge. Very relaxing, unpretentious, and a genuine local experience rather than a tourist attraction.",
    tips: "A Grab taxi gets you here in about 20 minutes. Free pools are perfectly adequate. Bring a change of clothes and a small towel. Open hours are 08:00–16:00 — arrive by mid-morning to make the most of your time.",
  },
  {
    id: "waterfall",
    title: "Pong Phra Bat Waterfall",
    distance: "Pong Phra Bat District",
    tag: "Nature & Hiking",
    hours: null,
    mapLink: MAP_LINKS.waterfall,
    image: waterfallImg,
    alt: "Pong Phra Bat waterfall hike jungle trail Chiang Rai",
    description:
      "A small national park with no admission fee and a simple car park at the entrance. The hike to the waterfall takes around 30 minutes each way and is reasonably well marked, though some sections can be muddy depending on the season. A pleasant, peaceful walk — on our visits we've had the trail almost entirely to ourselves.",
    tips: "Wear shoes you don't mind getting muddy. The trail is easy enough for most fitness levels. Combine with the hot spring for a full half-day in the district.",
  },
  {
    id: "idrin-cafe",
    title: "Idrin Café – Mountain Coffee Stop",
    distance: "Up in the mountains, Pong Phra Bat District",
    tag: "Coffee & Views",
    hours: null,
    mapLink: MAP_LINKS.idrinCafe,    image: cafeImg,
    alt: "Mountain village coffee shop with panoramic views near Chiang Rai",    description:
      "The drive climbs up into the mountains to a wonderfully simple little café tucked inside an ethnic village of the province. Idrin Café serves both coffee and food, and the views from up here are simply fantastic. You will almost certainly be the only tourist — this is as local as it gets.",
  },
];

const PongPhraBat = () => {
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 });

  const openLightbox = (images, index) => setLightbox({ open: true, images, index });
  const closeLightbox = useCallback(() => setLightbox(lb => ({ ...lb, open: false })), []);
  const prevImage = useCallback(() => setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length })), []);
  const nextImage = useCallback(() => setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.images.length })), []);

  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft")  prevImage();
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open, nextImage, prevImage, closeLightbox]);

  return (
    <article className="guide-page">
      <Helmet>
        <title>Pong Phra Bat Itinerary | Secret Corner Chiang Rai</title>
        <meta name="description" content="A local itinerary for Pong Phra Bat District — hot springs, a jungle waterfall hike, and a mountain café with views. Easy half-day from Chiang Rai city." />
      </Helmet>

      {/* Hero */}
      <header className="guide-hero">
        <h1>Pong Phra Bat Itinerary</h1>
        <p className="guide-subtitle">
          Hot Springs, Waterfalls &amp; Mountain Coffee — Just Outside the City
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="guide-toc">
        <h4>In This Guide</h4>
        <ul>
          {stops.map((stop) => (
            <li key={stop.id}>
              <a href={`#${stop.id}`}>{stop.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Intro */}
      <section className="guide-section">
        <p>
          Pong Phra Bat District sits just outside Chiang Rai city and is easy to
          reach without your own transport. This compact itinerary combines three
          very different stops — a government-run hot spring, a quiet jungle
          waterfall hike, and a mountain-top café in an ethnic village with views
          that will stop you in your tracks.
        </p>
        <p>
          It makes a great half-day or full-day excursion depending on how long
          you linger at each stop. Genuinely off the tourist trail.
        </p>
      </section>

      {/* Stop Cards */}
      {stops.map((stop) => (
        <section className="guide-section" id={stop.id} key={stop.id}>
          <h2>{stop.title}</h2>
          <p style={{ fontSize: "0.9rem", color: "#888", marginBottom: "6px" }}>
            📍 {stop.distance}
            {stop.hours && <span style={{ marginLeft: "16px" }}>🕗 {stop.hours}</span>}
          </p>
          {stop.mapLink && stop.mapLink !== "#" && (
            <p style={{ marginBottom: "12px" }}>
              <a href={stop.mapLink} className="map-link" {...newTab}>
                View on Google Maps
              </a>
            </p>
          )}
          {(stop.mapLink === "#") && (
            <p style={{ marginBottom: "12px", fontSize: "0.85rem", color: "#aaa" }}>
              Map link coming soon
            </p>
          )}
          <figure className="guide-image-block">
            <img src={stop.image} alt={stop.alt} loading="lazy" />
          </figure>
          <p>{stop.description}</p>
          {stop.tips && (
            <div className="guide-tip">
              <strong>💡 Tip</strong>
              {stop.tips}
            </div>
          )}
        </section>
      ))}

      {/* Google Maps Route */}
      <section className="guide-section">
        <h2>Google Maps Driving Route</h2>
        <div className="guide-photo-grid">
          {ROUTE_IMAGES.map((img, i) => (
            <figure key={i} className="guide-photo-grid-item" onClick={() => openLightbox(ROUTE_IMAGES, i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p style={{ marginTop: "10px" }}>
          <a href={MAP_LINKS.fullRoute} className="map-link" {...newTab}>
            Open full route in Google Maps
          </a>
        </p>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&#x2715;</button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prevImage(); }} aria-label="Previous">&#x2039;</button>
          <figure className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.images[lightbox.index].src} alt={lightbox.images[lightbox.index].alt} />
            <figcaption>{lightbox.images[lightbox.index].caption}</figcaption>
            <p className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</p>
          </figure>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); nextImage(); }} aria-label="Next">&#x203a;</button>
        </div>
      )}

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
      <nav className="guide-related">
        <h3>More Chiang Rai Travel Guides</h3>
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

export default PongPhraBat;
