import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./guides.css";

import cafeHopping from "../../images/blog/whyChiangRai/cafeHopping.jpeg";
import chuiFongCafe from "../../images/blog/whyChiangRai/chuiFongCafe.jpeg";
import chuiFongTeaPlantation from "../../images/blog/whyChiangRai/chuiFongTeaPLantation.jpeg";
import doiMaeSalongLunch from "../../images/blog/whyChiangRai/doiMaeSalongLunch.jpeg";
import flowerFestival from "../../images/blog/whyChiangRai/flowerFestival.webp";
import freshMarket from "../../images/blog/whyChiangRai/freshMarket.jpeg";
import whiteTemple from "../../images/blog/whyChiangRai/whiteTemple.jpeg";
import royalGarden from "../../images/blog/whyChiangRai/doiTungRoyalVillaGarden.webp";
import papaEatery from "../../images/blog/whyChiangRai/papaEatery.png";
import homPanDinVineyard from "../../images/blog/whyChiangRai/homPahDinVineyard.png";
import doiChangRoute from "../../images/blog/whyChiangRai/doiChangRoute.png";
import doiMaeSalongRoute from "../../images/blog/whyChiangRai/doiMaeSalongRoute.png";
import goldenTriangleRoute from "../../images/blog/whyChiangRai/goldenTriangleRoute.png";
import maeSaiRoute from "../../images/blog/whyChiangRai/maeSaiRoute.png";
import john from "../../images/blog/whyChiangRai/john.jpeg";
import watPrathat from "../../images/blog/whyChiangRai/watPrathat.jpg";
import atTheBorder from "../../images/blog/whyChiangRai/atTheBorder.jpeg";

const MAP_LINKS = {
  doiMaeSalong:      "https://maps.app.goo.gl/aXmm6MZaHvh2NJjY7",
  doiMaeSalongMuseum:"https://maps.app.goo.gl/oDexWBQ5dVYj1xdg9",
  papaEatery:        "https://maps.app.goo.gl/tpinrBF9woXAzyCYA",
  laoLiPlantation:   "https://maps.app.goo.gl/gXsE5ZmMZk8GeyBy8",
  waweeMainRoad:     "https://maps.app.goo.gl/gvrVVixCc8f4yjED6",
  homPanDinVineyard: "https://maps.app.goo.gl/UyLFUmrPFa9hcLSr7",
  hotSprings:        "https://maps.app.goo.gl/Y8tbg3gqMyHFMu3dA",
  royalVilla:        "https://maps.app.goo.gl/d4rxBg69mm2WsWtAA",
  pahHeeVillage:     "https://maps.app.goo.gl/kbymJ5a2pzjFF9y76",
  giantSwing:        "https://maps.app.goo.gl/w7czQD5EJG1kAjKv8",
  watPraThatDoiWao:  "https://maps.app.goo.gl/c945nrRwQuZjhAK59",
  houseOfOpium:      "https://maps.app.goo.gl/tEyjVUfqaHCTr6Mb6",
  chiangRaiBeach:    "https://maps.app.goo.gl/QBJHGhaT2q6enzYx7",
  nightBazaar:       "https://maps.app.goo.gl/ynvYJTPeNG8gJwUD9",
  saturdayMarket:    "https://maps.app.goo.gl/5GtDNwcCg4QRw2BdA"
};

const newTab = { target: "_blank", rel: "noopener noreferrer" };

const ADVENTURE_I_IMAGES = [
  { src: doiMaeSalongLunch,    alt: "Lunch at Doi Mae Salong",                  caption: "Lunch at Doi Mae Salong" },
  { src: papaEatery,           alt: "Papa Eatery",                              caption: "Papa Eatery" },
  { src: royalGarden,         alt: "Royal Garden at Doi Tung",                 caption: "Royal Garden at Doi Tung" },
  { src: homPanDinVineyard,    alt: "Hom Pan Din Vineyard",                     caption: "Hom Pan Din Vineyard" },
];

const ADVENTURE_I_ROUTES = [
  { src: doiChangRoute,        alt: "Doi Chang route map",                      caption: "Doi Chang Route" },
  { src: doiMaeSalongRoute,    alt: "Doi Mae Salong route map",                 caption: "Doi Mae Salong Route" },
];

const ADVENTURE_II_IMAGES = [
  { src: chuiFongTeaPlantation,alt: "Chui Fong tea plantation",                 caption: "Chui Fong Tea Plantation (Another possible stop)" },
  { src: chuiFongCafe,         alt: "Chui Fong Tea Plantation cafe",            caption: "Chui Fong Tea Plantation Cafe" },
  { src: atTheBorder,          alt: "At the border",                            caption: "At the border" },
  { src: watPrathat,           alt: "Wat Prathat Doi Wao",                       caption: "Wat Prathat Doi Wao" },
];

const ADVENTURE_II_ROUTES = [
  { src: maeSaiRoute,          alt: "Mae Sai route map",                       caption: "Mae Sai Route" },
  { src: goldenTriangleRoute,  alt: "Golden Triangle route map",               caption: "Golden Triangle Route" },
];

const ADVENTURE_III_IMAGES = [
  { src: whiteTemple,          alt: "White Temple Wat Rong Khun in Chiang Rai", caption: "White Temple (Wat Rong Khun)" },
//   { src: chiangRaiNightMarket, alt: "Chiang Rai Night Bazaar",                  caption: "Chiang Rai Night Bazaar" },
  { src: freshMarket,          alt: "Fresh local market in Chiang Rai",         caption: "Fresh local market" },
  { src: flowerFestival,       alt: "Chiang Rai flower festival season",        caption: "Flower festival season" },
  { src: cafeHopping,          alt: "Cafe hopping in Chiang Rai",               caption: "Cafe hopping in the city (Pasom - Art cafe and activity)" },
];

const WhyChiangRai = () => {
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

  useEffect(() => {
    document.title =
      "Why Chiang Rai is Absolutely Worth Visiting | Secret Corner Hostel";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Wondering if Chiang Rai is worth visiting? Here's why this northern Thai city deserves a place on your itinerary — from the temples and mountains to the food and culture."
      );
    }
  }, []);

  return (
    <article className="guide-page">
      {/* Hero */}
      <header className="guide-hero">
        <h1>Why Chiang Rai is Absolutely Worth Visiting</h1>
        <p className="guide-subtitle">
          Trust me, it's worth it. Here are itinerary ideas for your next visit. 
        </p>
      </header>

      {/* Intro */}
      <section className="guide-section">
        <p>
          Hi, I'm John. I've lived in Bangkok since 1990 and, as of recently, have been spending lots of 
          time up north in Chiang Rai. In the last three years, I've split my time between the two places and 
          discovered a whole new world of culture and natural beauty right here at home. Here are my favorite 
          ways to experience the beauty of Chiang Rai– all of which I've personally experienced.
        </p>
        <p>
            It's important to note, there are <u>two</u> "adventure" itineraries provided in this guide. <u>Each of which
            may take a full day or two to complete</u>, depending on your pace and interests. I hope these ideas help you plan your own trip to this amazing place!
        </p>
        <figure className="guide-author-photo">
          <img src={john} alt="John, author" loading="lazy" />
        </figure>
      </section>

      {/* Section 1 */}
      <section className="guide-section">
        <h2>A bit about Chiang Rai...</h2>
        <p>
          Chiang Rai is much more than just the city.  The Province of Chaing Rai belongs on a curious traveler’s 
          itinerary who has a bit of time to explore the ethnic diversity of the Northern Kingdom. 
           While Chiang Rai is no longer a kingdom it is certainly a unique place and culture.  
           Chiang Rai province includes many ethnic groups.  You will hear many different 
           languages on the street in the city and in the market the local Northern language 
           – which until 1932 was the language of the kingdom.  It was only in 1932 that 
           Lanna was incorporated into the Kingdom of Siam.  
        </p>
      </section>

      {/* Section 2 */}
      <section className="guide-section">
        <h2>Adventure I - Exploring Hilltribe Villages</h2>
        <p>
            Today, the province hosts more than a dozen different ethnic groups who 
            make up roughly 20% of the population.  You can experience an Akha hilltribe
             village on a <u><a href="/localAttractions#:~:text=TREKKING%20TO%20MINORITY%20VILLAGES">trekking adventure</a></u> or
              take a car or scooter to <a href={MAP_LINKS.doiMaeSalong} className="map-link" {...newTab}>Doi Mae Salong District</a> for incredible 
             views of tea plantations while listening to the 
              locals speak among themselves in Mandarin.  They have a story that carries
               back to the civil war in China when they fled first to Burma and then 
               later to Chiang Rai.  It is worth exploring at this 
               local <a href={MAP_LINKS.doiMaeSalongMuseum} className="map-link" {...newTab}>museum</a>.  
        </p>
        <div className="guide-photo-grid">
          {ADVENTURE_I_ROUTES.map((img, i) => (
            <figure key={i} className="guide-photo-grid-item" onClick={() => openLightbox(ADVENTURE_I_ROUTES, i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p>
            If coffee is more your thing, drive or scooter southwest to <b>Doi Chang Valley</b>. 
            Drive road # 5047 from south at junction of road # 3037 to the north. 
            The views alone are worth the trip.  
            You will stop in awe dozens of times.  Of course, there are plenty 
            of spots to stop for local coffee, dessert, noodles, and even homemade 
            Napolitan style pizza with a million dollar view (Check out <a href={MAP_LINKS.papaEatery} className="map-link" {...newTab}>Papa Eatery</a>).
            For those with a bit more time, take the road less traveled from 
            Doi Chang area further north and northwest along mountain road #3037 
            for breathtaking views with no tourists.  
            Travel west from Baan Doi Chang village on the only road that goes through to road # 3037.  Turn north on # 3037 toward Wawee Village.  
        </p>
        <p>
            Villages perched on hillsides and an occasional 
            tea plantation (like this one <a href={MAP_LINKS.laoLiPlantation} className="map-link" {...newTab}>Lao Li Plantation</a>) 
            make good stopping points on your adventure.  Wawee Village is also a 
            great spot to stop for lunch or a bowl of noodles on your drive north.
            Park the car along the <a href={MAP_LINKS.waweeMainRoad} className="map-link" {...newTab}>main road</a> and 
            walk in to explore more easily on foot.  
        </p>
        <p>
            Finish at the north end by turning right on road # 1089 and head back east 
            passing <a href={MAP_LINKS.homPanDinVineyard} className="map-link" {...newTab}>Hom Pan Din Vineyard</a> – 
            another great spot for a break.  Then back 
            up over the hills toward the <a href={MAP_LINKS.hotSprings} className="map-link" {...newTab}>hot springs</a> operated 
            by the local government 
            in Pa Tueng where on a sunny day you can enjoy not only the hot spring but 
            also lunch served while sitting knee-deep in the river under sun shades – 
            simply classic Thailand and just lovely.  
        </p>
        <p>
            From Pa Tueng, the drive back to Chiang Rai City is about 45 minutes. 
             There are still places to stop along the way, but it is likely you will
              be out of energy and out of daylight by this time in the trip.  
        </p>
        <p>
            The above is only 1/2 days in Chiang Rai Province – there is so much more to do!  
        </p>
        <div className="guide-photo-grid">
          {ADVENTURE_I_IMAGES.map((img, i) => (
            <figure key={i} className="guide-photo-grid-item" onClick={() => openLightbox(ADVENTURE_I_IMAGES, i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className="guide-section">
        <h2>Adventure II - Laos Border Road</h2>
        <p>
          Another great driving experience is the border road in the NW of the province. Start this day
          of adventure by visiting the{" "}
          <a href={MAP_LINKS.royalVilla} className="map-link" {...newTab}>
            Doi Tung Royal Villa
          </a>{" "}
          and its beautiful gardens. You will see all kinds of nurseries growing flowers and plants
          lining the curvy mountain roads and ethnic villages clinging to the mountain sides.
        </p>
        <p>
          Follow road #1149 as it winds NW and then runs along the border itself all the way to Mae Sai.
          Stop in{" "}
          <a href={MAP_LINKS.pahHeeVillage} className="map-link" {...newTab}>
            Pah Hee Village
          </a>{" "}
          for a glimpse of Akha culture and divine coffee and views. Park above the village in the large
          lot just below the main road (20.352042, 99.825378) and above the giant swing to explore the
          village community. Back headed north along the border road, another 20-minute drive will bring
          you to Pahmee Village where the road turns left — great food and views at Oasis Pahmee. Look
          out for the{" "}
          <a href={MAP_LINKS.giantSwing} className="map-link" {...newTab}>
            Pha Hami Village Giant Swing
          </a>.
        </p>
        <p>
          The road will then lead you all the way into Mae Sai and rejoin the main road just south of
          the border bridge. Park the car or bike and walk the fantastic local market with traders moving
          in both directions across the small border bridge. It is also recommended to climb up{" "}
          <a href={MAP_LINKS.watPraThatDoiWao} className="map-link" {...newTab}>
            Wat Phra That Doi Wao
          </a>{" "}
          at the NW edge of the market for great views into Myanmar.
        </p>
        <div className="guide-photo-grid">
          {ADVENTURE_II_ROUTES.map((img, i) => (
            <figure key={i} className="guide-photo-grid-item" onClick={() => openLightbox(ADVENTURE_II_ROUTES, i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p>
          If one had more hours of daylight, it is easy to continue from Mae Sai southeast to the
          Golden Triangle — the road is in good condition and filled with fabulous views. Don't miss the{" "}
          <a href={MAP_LINKS.houseOfOpium} className="map-link" {...newTab}>
            House of Opium Museum
          </a>{" "}
          at the Golden Triangle. It is not large but absolutely worth an hour of your time to explore
          the stories and learn the history. Visit Chiang Saen on your way back and explore the temples
          and ruins of the original capital. Consider saving this stretch for a fourth day in Chiang Rai.
        </p>
        <div className="guide-photo-grid">
          {ADVENTURE_II_IMAGES.map((img, i) => (
            <figure key={i} className="guide-photo-grid-item" onClick={() => openLightbox(ADVENTURE_II_IMAGES, i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section className="guide-section">
        <h2>Adventure III - Chiang Rai City</h2>
        <p>
          Of course, another day in Chiang Rai should be reserved for exploring within and near
          the city center which could include the various fabulous temples,{" "}
          <a href={MAP_LINKS.chiangRaiBeach} className="map-link" {...newTab}>
            Chiang Rai Beach
          </a>{" "}
          — especially if it is winter season and the flower show is taking place — the{" "}
          <a href={MAP_LINKS.nightBazaar} className="map-link" {...newTab}>
            Night Bazaar
          </a>
          , the main local fresh market, and if you visit on a Saturday the{" "}
          <a href={MAP_LINKS.saturdayMarket} className="map-link" {...newTab}>
            full night market
          </a>{" "}
          which encompasses blocks of the city center for food, shopping, music, dancing, and so much more.
        </p>
        <p>
            With five days, you'll have plenty of time to explore everything Chiang Rai has to offer!
        </p>
        <div className="guide-photo-grid">
          {ADVENTURE_III_IMAGES.map((img, i) => (
            <figure key={i} className="guide-photo-grid-item" onClick={() => openLightbox(ADVENTURE_III_IMAGES, i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Adventure III - Lightbox */}
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
        <h3>Ready to Experience Chiang Rai?</h3>
        <p>
          Book direct with Secret Corner Hostel for the best rates and local tips.
        </p>
        <a
          href="https://us2.cloudbeds.com/reservation/T5pGtj"
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
            <Link to="/guides/best-day-trips-chiang-rai">
              Best Day Trips from Chiang Rai
            </Link>
          </li>
          <li>
            <Link to="/guides/two-days-chiangrai">
              2 Days in Chiang Rai: A Local's Itinerary
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default WhyChiangRai;
