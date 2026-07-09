import React, { useState, useCallback, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import "./guides.css";

import cafe10 from "../../images/blog/bestCafes/cafe10.jpg";
import cafe11 from "../../images/blog/bestCafes/cafe11.jpg";
import cafe12 from "../../images/blog/bestCafes/cafe12.jpg";
import cafe20 from "../../images/blog/bestCafes/cafe20.jpg";
import cafe21 from "../../images/blog/bestCafes/cafe21.jpg";
import cafe30 from "../../images/blog/bestCafes/cafe30.jpg";
import cafe40 from "../../images/blog/bestCafes/cafe40.webp";
import cafe41 from "../../images/blog/bestCafes/cafe41.jpg";
import cafe50 from "../../images/blog/bestCafes/cafe50.jpg";
import cafe51 from "../../images/blog/bestCafes/cafe51.jpeg";
import cafe60 from "../../images/blog/bestCafes/cafe60.webp";
import cafe61 from "../../images/blog/bestCafes/cafe61.webp";
import cafe70 from "../../images/blog/bestCafes/cafe70.png";
import cafe71 from "../../images/blog/bestCafes/cafe71.png";
import cafe80 from "../../images/blog/bestCafes/cafe80.webp";
import cafe81 from "../../images/blog/bestCafes/cafe81.jpg";
import cafe82 from "../../images/blog/bestCafes/cafe82.jpg";
import cafe90 from "../../images/blog/bestCafes/cafe90.jpg";
import cafe91 from "../../images/blog/bestCafes/cafe91.webp";
import cafe100 from "../../images/blog/bestCafes/cafe100.webp";
import cafe101 from "../../images/blog/bestCafes/cafe101.webp";
import cafe102 from "../../images/blog/bestCafes/cafe102.jpeg";

const newTab = { target: "_blank", rel: "noopener noreferrer" };

const cafes = [
  {
    name: "Chiwit Thammada Coffee House, Bistro & Bar",
    thaiName: "ชีวิตธรรมดา คอฟฟี่เฮาส์ บิสโทร บาร์",
    description: "A beautiful riverside café with one of the best atmospheres in Chiang Rai. Chivit Thamma Da offers an extensive menu of savory dishes, decadent desserts, and both alcoholic and non-alcoholic beverages, making it a great spot for any time of day.",
    hours: "9:00 AM – 10:00 PM (Open Daily)",
    map: "https://maps.app.goo.gl/jGiWPWTCSXBqTffS8",
    images: [
      { src: cafe100, alt: "Chiwit Thammada coffee house bistro bar in Chiang Rai" },
      { src: cafe101, alt: "Chiwit Thammada bar and bistro interior" },
      { src: cafe102, alt: "Chiwit Thammada drinks and atmosphere" },
    ],
  },
  {
    name: "ABONZO Yama Mitsu",
    description: "Nestled in the mountains outside Chiang Rai, ABONZO Yama Mitsu offers stunning panoramic views and a peaceful atmosphere surrounded by nature. Known for its Japanese-inspired design, specialty coffee, and selection of drinks and light bites, it's the perfect place to relax and take in the scenery.",
    hours: "8:00 AM – 6:00 PM (Open Daily)",
    map: "https://maps.app.goo.gl/pFUp6MzfhKZsMXRz6",
    images: [
      { src: cafe10, alt: "ABONZO Yama Mitsu cafe in Chiang Rai" },
      { src: cafe11, alt: "ABONZO Yama Mitsu cafe interior" },
      { src: cafe12, alt: "ABONZO Yama Mitsu drinks and food" },
    ],
  },
  {
    name: "Pasom – Art Cafe & Activity",
    description: "Just a short walk from Secret Corner Hostel and the Chiang Rai Bus Terminal, Pasom – Art Cafe & Activity is a convenient spot to relax in the heart of the city. With its creative atmosphere, quality coffee, and unique art-inspired space, it's a great place to unwind between adventures.",
    hours: "9:00 AM – 5:00 PM (Open Daily)",
    map: "https://maps.app.goo.gl/wq5Hpd82PBPm4xEd8",
    images: [
      { src: cafe20, alt: "Pasom Art Cafe and Activity in Chiang Rai" },
      { src: cafe21, alt: "Pasom Art Cafe activities and space" },
    ],
  },
  {
    name: "Australian Sheep Farm Cafe",
    thaiName: "ฟาร์มแกะออสเตรเลีย",
    description: "Trade the city streets for rolling green hills at Australian Sheep Farm Cafe. With grazing sheep, fresh mountain air, and picturesque views in every direction, it's one of the most unique café destinations near Chiang Rai.",
    hours: "7:00 AM – 6:00 PM (Open Daily)",
    map: "https://maps.app.goo.gl/J7gmC81m2nfYai3T6",
    images: [
      { src: cafe30, alt: "Australian Sheep Farm Cafe near Chiang Rai" },
    ],
  },
  {
    name: "Horizon: Cafe & Restaurant",
    description: "With its elevated location and breathtaking vistas, Horizon is one of the best places in Chiang Rai to enjoy a meal or drink while overlooking the mountains and valleys below.",
    hours: "7:00 AM – 8:00 PM (Open Daily)",
    map: "https://maps.app.goo.gl/tRQK2u7eTDDmE3477",
    images: [
      { src: cafe40, alt: "Horizon Cafe and Restaurant in Chiang Rai" },
      { src: cafe41, alt: "Horizon Cafe food and drinks" },
    ],
  },
  {
    name: "Melt in Your Mouth",
    description: "For anyone with a sweet tooth, Melt in Your Mouth is a must-visit. The desserts are the highlight, but the charming setting and welcoming atmosphere are what keep people coming back.",
    hours: "9:00 AM – 8:00 PM (Open Daily)",
    map: "https://maps.app.goo.gl/J1Gaf5ykVxQgej1C8",
    images: [
      { src: cafe50, alt: "Melt in Your Mouth cafe in Chiang Rai" },
      { src: cafe51, alt: "Melt in Your Mouth desserts and drinks" },
    ],
  },
  {
    name: "Jai Kwang Homemade Cake",
    thaiName: "ใจกว้าง โฮมเมด ร้านขนมเค้ก",
    description: "Not every great café needs a grand view. Jai Kwang Homemade Cake wins people over with its homemade desserts, cozy atmosphere, and laid-back charm that makes you feel right at home.",
    hours: "7:00 AM – 10:00 PM (Open Daily)",
    map: "https://maps.app.goo.gl/ss1citNbQX4ALN8a8",
    images: [
      { src: cafe60, alt: "Jai Kwang Homemade Cake shop in Chiang Rai" },
      { src: cafe61, alt: "Jai Kwang cakes and pastries" },
    ],
  },
  {
    name: "much. tea house & bar",
    thaiName: "มัทฉะ MATCHA",
    description: "I love Much. for its versatility—it works just as well for a quiet afternoon tea as it does for evening drinks. The thoughtfully crafted beverages and contemporary atmosphere make it a standout in Chiang Rai's café scene.",
    hours: "8:30 AM – 8:00 PM (Open Daily)",
    map: "https://maps.app.goo.gl/k8iX2uGAGUfn7MUw5",
    images: [
      { src: cafe70, alt: "Much tea house and matcha bar in Chiang Rai" },
      { src: cafe71, alt: "Much tea house drinks and interior" },
    ],
  },
  {
    name: "More Than Yogurt (Homemade Greek Yogurt)",
    thaiName: "มากกว่า Yo-เกิดด",
    description: "For something a little different, More Than Yogurt specializes in homemade Greek yogurt served with a variety of fresh fruits, toppings, and healthy add-ons. It's a light, refreshing option that's perfect for breakfast, a snack, or a guilt-free treat.",
    hours: "10:00 AM – 8:40 PM (Open Daily)",
    map: "https://maps.app.goo.gl/uvBrPnt9B4enY3rT7",
    images: [
      { src: cafe80, alt: "More Than Yogurt homemade Greek yogurt cafe in Chiang Rai" },
      { src: cafe81, alt: "More Than Yogurt bowls and toppings" },
      { src: cafe82, alt: "More Than Yogurt cafe interior" },
    ],
  },
  {
    name: "CAT 'n' A CUP Cat Café",
    description: "Part café, part cat sanctuary, CAT 'n' A CUP offers a unique experience where guests can unwind with drinks and snacks while surrounded by playful and affectionate cats.",
    hours: "11:30 AM – 9:00 PM (Open Daily)",
    map: "https://maps.app.goo.gl/kTYzeBCCHWb1GzMb7",
    images: [
      { src: cafe90, alt: "CAT n A CUP Cat Cafe in Chiang Rai" },
      { src: cafe91, alt: "Cats and coffee at CAT n A CUP cafe" },
    ],
  },
];

const BestCafesChiangRai = () => {
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
        <title>Best Cafes in Chiang Rai</title>
        <meta name="description" content="The best cafes in Chiang Rai — from specialty coffee roasters to mountain-view terraces and hidden local gems." />
      </Helmet>

      {/* Hero */}
      <header className="guide-hero">
        <h1>Best Cafes in Chiang Rai</h1>
        <p className="guide-subtitle">
          Where to Find Great Coffee in the City and Beyond
        </p>
      </header>

      {/* Intro */}
      <section className="guide-section">
        <p>
          Chiang Rai has quietly become one of the best coffee destinations in
          Thailand. Sitting at the heart of the country's northern growing
          regions — Doi Chang, Doi Mae Salong, and the surrounding highlands —
          the city has a thriving café scene that ranges from specialty roasters
          to charming garden spots and mountain-view terraces.
        </p>
        <p>
          Here are some of our favorite cafes in Chiang Rai in no particular order.
          They've all got their own unique character and charm- so take your time
          and explore at your own pace.
        </p>
      </section>

      {/* Table of Contents */}
      {/* <nav className="guide-toc">
        <h4>In This Guide</h4>
        <ul>
          {cafes.map((cafe, i) => (
            <li key={i}>
              <a href={`#cafe-${i}`}>{cafe.name}</a>
            </li>
          ))}
        </ul>
      </nav> */}

      {/* Cafe Cards */}
      {cafes.map((cafe, i) => (
        <section className="guide-section" id={`cafe-${i}`} key={i}>
          <h2>{cafe.name}</h2>
          {cafe.thaiName && (
            <p style={{ fontSize: "0.95rem", color: "#888", marginTop: "-10px", marginBottom: "8px" }}>
              {cafe.thaiName}
            </p>
          )}
          <p style={{ fontSize: "0.9rem", color: "#888", marginBottom: "6px" }}>
            🕐 {cafe.hours}
          </p>
          <p>{cafe.description}</p>
          <div className="guide-photo-grid">
            {cafe.images.map((img, j) => (
              <figure key={j} className="guide-photo-grid-item" onClick={() => openLightbox(cafe.images, j)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </figure>
            ))}
          </div>
          <div className="guide-tip">
            <a className="map-link" href={cafe.map} {...newTab}>Open in Google Maps</a>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&#x2715;</button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prevImage(); }} aria-label="Previous">&#x2039;</button>
          <figure className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.images[lightbox.index].src} alt={lightbox.images[lightbox.index].alt} />
            {lightbox.images.length > 1 && (
              <p className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</p>
            )}
          </figure>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); nextImage(); }} aria-label="Next">&#x203a;</button>
        </div>
      )}

      {/* Book CTA */}
      <div className="guide-cta">
        <p className="guide-kicker">Book Direct</p>
        <h3>Ready to experience Secret Corner?</h3>
        <p>
          Clean rooms, comfortable beds, thoughtful shared spaces, and a rooftop made
          for slow mornings and relaxed evenings in Chiang Rai.
        </p>
        <a
          className="guide-cta-btn"
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
            <Link to="/guides/why-chiang-rai">
              Why Chiang Rai is Absolutely Worth Visiting
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default BestCafesChiangRai;
