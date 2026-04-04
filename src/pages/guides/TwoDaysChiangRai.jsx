import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./guides.css";

import bluetemple from "../../images/activities/bluetemple.webp";
import nightbazaar from "../../images/activities/nightbazaar.jpg";
import trek1 from "../../images/activities/trek1.jpg";
import teaplant from "../../images/activities/teaplant.jpg";

const TwoDaysChiangRai = () => {
  useEffect(() => {
    document.title =
      "How to Spend Two Days in Chiang Rai: A Local's Itinerary (2026) | Secret Corner Hostel";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "The perfect 2-day Chiang Rai itinerary — temples, night markets, mountain tea villages, and local food. Written by the team at Secret Corner Hostel."
      );
    }
  }, []);

  return (
    <article className="guide-page">
      {/* Hero */}
      <header className="guide-hero">
        <h1>How to Spend Two Days in Chiang Rai</h1>
        <p className="guide-subtitle">
          A Local's Itinerary for First-Time Visitors
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="guide-toc">
        <h4>In This Guide</h4>
        <ul>
          <li><a href="#day1-morning">Day 1 Morning — Temples, Cafés, and a Night Market</a></li>
          {/* <li><a href="#day1-afternoon">Day 1 Afternoon — Old Town & Cafés</a></li>
          <li><a href="#day1-evening">Day 1 Evening — Night Market</a></li> */}
          <li><a href="#day2-morning">Day 2 Morning — Mountains, Jungle, and Waterfalls</a></li>
          {/* <li><a href="#day2-afternoon">Day 2 Afternoon — Jungle & Waterfalls</a></li>
          <li><a href="#day2-evening">Day 2 Evening — Dinner & Drinks</a></li> */}
          <li><a href="#tips">Practical Tips</a></li>
          <li><a href="#where-to-stay">Where to Stay</a></li>
        </ul>
      </nav>

      {/* Intro */}
      <section className="guide-section">
        <p>
          Two days is enough to fall in love with Chiang Rai. You won't see
          everything — but you'll get a real taste of what makes this province
          one of the best-kept secrets in northern Thailand. This itinerary
          balances temples, food, nature, and local life without rushing you
          from place to place.
        </p>
        <p>
          We put this together based on what we recommend to guests at our
          hostel every day. It's flexible — swap things around, linger where
          you like, and skip what doesn't call to you.
        </p>
      </section>

      {/* Day 1 Morning */}
      <section className="guide-section" id="day1-morning">
        <h2>Day 1 Morning — The Temples</h2>
        <figure className="guide-image-block">
          <img
            src={bluetemple}
            alt="Blue Temple Wat Rong Suea Ten in Chiang Rai"
            loading="lazy"
          />
        </figure>
        <p>
          Start your first morning at <strong>Wat Rong Khun</strong> (the White
          Temple) — Chiang Rai's most famous landmark. Get there by 8:00 AM to
          beat the tour buses. The architecture is surreal and intricate, and
          it's still being built.
        </p>
        <p>
          From there, head to <strong>Wat Rong Suea Ten</strong> (the Blue
          Temple). It's less crowded, just as striking, and right in the city
          center. If you have time, add{" "}
          <strong>Baan Dam (the Black House)</strong> — a darkly beautiful
          collection of buildings by the late artist Thawan Duchanee, about
          15 minutes north of town.
        </p>
        <div className="guide-tip">
          <strong>💡 Insider Tip</strong>
          The White Temple is about 15 minutes south of the city. Grab a
          songthaew (shared truck taxi) from the old bus station for 20 THB, or
          rent a motorbike and combine it with the Black House in one loop.
        </div>
      </section>

      {/* Day 1 Afternoon */}
      <section className="guide-section" id="day1-afternoon">
        <h2>Day 1 Afternoon — Old Town &amp; Cafés</h2>
        <p>
          After the temples, slow down. Walk through the <strong>old town
          area</strong> around the clock tower — Chiang Rai's golden landmark
          designed by the same artist behind the White Temple. Grab lunch at
          one of the local rice-and-curry spots on the surrounding streets.
          You'll eat well for 50–80 THB.
        </p>
        <p>
          Chiang Rai's café scene has quietly become one of the best in northern
          Thailand. Spend an hour at one of the specialty coffee shops near the
          center — many serve single-origin beans from the surrounding mountains.
        </p>
        <div className="guide-tip">
          <strong>☕ Local Pick</strong>
          Try <strong>Doi Chaang Coffee</strong> near the clock tower for
          locally grown beans, or ask us at the hostel for our current
          favourite spot — it changes with the seasons.
        </div>
      </section>

      {/* Day 1 Evening */}
      <section className="guide-section" id="day1-evening">
        <h2>Day 1 Evening — The Night Market</h2>
        <figure className="guide-image-block">
          <img
            src={nightbazaar}
            alt="Chiang Rai Night Bazaar with food stalls and live music"
            loading="lazy"
          />
        </figure>
        <p>
          Chiang Rai's <strong>Night Bazaar</strong> runs every evening along
          Phahonyothin Road and is the best place for cheap, delicious street
          food. Fill up on grilled skewers, pad thai, mango sticky rice, and
          fresh fruit shakes — all for under 200 THB.
        </p>
        <p>
          On Saturdays, the <strong>Walking Street</strong> near the old town
          offers handmade crafts, hill tribe textiles, and even more food
          stalls. It's lively without being overwhelming — nothing like the
          tourist madness of Chiang Mai's markets.
        </p>
      </section>

      {/* Day 2 Morning */}
      <section className="guide-section" id="day2-morning">
        <h2>Day 2 Morning — Mountain Day Trip</h2>
        <figure className="guide-image-block">
          <img
            src={teaplant}
            alt="Tea plantations in the mountains near Chiang Rai"
            loading="lazy"
          />
        </figure>
        <p>
          Day two is for getting out of the city. Rent a motorbike or arrange
          transport and head to <strong>Doi Mae Salong</strong> — a former
          Chinese settlement high in the mountains where tea plantations blanket
          the hillsides. The winding road up is half the experience.
        </p>
        <p>
          Stop for a tea tasting, explore the hilltop village, and have lunch at
          one of the Yunnan-style noodle shops. Alternatively, head to{" "}
          <strong>Doi Chang</strong> if you're more of a coffee person — the
          single-origin brews up there are incredible.
        </p>
        <div className="guide-tip">
          <strong>🛵 Getting There</strong>
          Both Doi Mae Salong and Doi Chang are about 1.5 hours from the city.
          The mountain roads are steep and winding — confident riders only on
          motorbikes. We can help arrange a private car at the hostel if you'd
          prefer.
        </div>
      </section>

      {/* Day 2 Afternoon */}
      <section className="guide-section" id="day2-afternoon">
        <h2>Day 2 Afternoon — Jungle &amp; Waterfalls</h2>
        <figure className="guide-image-block">
          <img
            src={trek1}
            alt="Jungle trekking trail near Chiang Rai Thailand"
            loading="lazy"
          />
        </figure>
        <p>
          On the way back, stop at <strong>Khun Korn Waterfall</strong> — a
          70-meter cascade tucked inside a national park just south of the city.
          The 1.5 km jungle trail to the falls is easy and beautiful. In the
          cool season the pool at the base is swimmable.
        </p>
        <p>
          If you'd rather spend the full day in nature, we organize{" "}
          <strong>guided treks</strong> to Akha and Lahu hill tribe villages
          through the mountains. It's one of the most rewarding things you can
          do in Chiang Rai — and completely different from anything in the city.
        </p>
      </section>

      {/* Day 2 Evening */}
      <section className="guide-section" id="day2-evening">
        <h2>Day 2 Evening — Dinner &amp; Drinks</h2>
        <p>
          For your last evening, treat yourself to dinner at one of the
          restaurants along the <strong>Mae Kok riverfront</strong>. The food is
          a step up from street stalls — northern Thai dishes like{" "}
          <em>khao soi</em>, <em>sai ua</em> (Chiang Rai sausage), and{" "}
          <em>laab</em> are all must-tries.
        </p>
        <p>
          After dinner, grab a beer on our rooftop at the hostel or head to one
          of the small bars around the city center. Chiang Rai's nightlife is
          low-key — and that's exactly the point.
        </p>
      </section>

      {/* Practical Tips */}
      <section className="guide-section" id="tips">
        <h2>Practical Tips</h2>

        <h3>Getting Around</h3>
        <p>
          A rented motorbike (200–300 THB/day) is the best way to explore.
          Songthaews and Grab are available for shorter trips around town.
          For mountain day trips, we can arrange transport from the hostel.
        </p>

        <h3>Budget</h3>
        <p>
          Chiang Rai is one of the cheapest cities in Thailand. Expect to spend
          around 800–1,200 THB per day including accommodation, food, and
          transport. Temple entry fees are 50–100 THB each.
        </p>

        <h3>Best Time to Visit</h3>
        <p>
          November to February is ideal — cool weather, clear skies, and green
          scenery. March to May is hot and hazy. The rainy season (June–October)
          has fewer tourists and dramatic waterfalls, but mountain roads can be
          tricky.
        </p>
      </section>

      {/* Where to Stay */}
      <section className="guide-section" id="where-to-stay">
        <h2>Where to Stay</h2>
        <p>
          For this kind of itinerary, you want to be in the city center —
          walking distance to the night market, close to motorbike rental
          shops, and with easy access to the main roads heading into the
          mountains.
        </p>
        <p>
          There are guesthouses and hotels at every budget level scattered
          around the clock tower area. If you're travelling on a backpacker
          budget and want a social atmosphere, a hostel in the center is your
          best bet — you'll meet other travellers to share day trips with and
          get recommendations from people who've just done the same routes.
        </p>
        <p>
          We run{" "}
          <b><Link to="/about">Secret Corner Hostel</Link></b> right in the heart of
          town. We're a small, locally owned place and most of the tips in this
          guide come straight from what we tell our guests every day. No
          pressure — but if you're looking for somewhere with a rooftop hangout,
          comfortable beds, and a team that genuinely knows this province, we'd
          love to have you.
        </p>
      </section>

      {/* CTA */}
      <div className="guide-cta">
        <h3>Staying in Chiang Rai?</h3>
        <p>
          Secret Corner Hostel is your home base — right in the city center with
          local tips, day trip planning, and the best vibe in town.
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
            <Link to="/guides/best-day-trips-chiang-rai">
              Best Day Trips from Chiang Rai
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default TwoDaysChiangRai;
