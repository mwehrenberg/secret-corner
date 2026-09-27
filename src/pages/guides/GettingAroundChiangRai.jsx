import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./guides.css";

const GettingAroundChiangRai = () => (
  <article className="guide-page editorial-guide transport-guide">
    <Helmet>
      <title>How to Get Around Chiang Rai | Secret Corner</title>
      <meta
        name="description"
        content="Grab, scooter, tour or private driver? Secret Corner's local guide to choosing transport for Chiang Rai city, temples, mountain villages and day trips."
      />
    </Helmet>

    <header className="guide-hero">
      <p className="guide-eyebrow">Secret Corner local guide</p>
      <h1>How to Get Around Chiang Rai</h1>
      <p className="guide-subtitle">Grab, Scooter, Tour or Private Driver? Here's our advice.</p>
    </header>

    <section className="guide-section editorial-intro">
      <p>
        Responding to this question requires an understanding of what one wants to do in
        Chiang Rai Province. There are city options, countryside options that are not so
        distant, and hidden sites in the hills that each require a different approach to
        transport. Of course, how many days you have for adventure also must be a consideration.
      </p>
    </section>

    <section className="guide-section transport-option">
      <h2>Staying mostly in town?</h2>
      <p>
        <strong>Walk + Grab or ride the Secret Corner bikes that are available.</strong>{" "}
        A bike ride is often the best way to reach dinner locations that are a bit farther
        away during a time when the roads are less chaotic.
      </p>
    </section>

    <section className="guide-section transport-option">
      <h2>White/Blue Temple or Pong Phra Bat hot spring area?</h2>
      <p>
        <strong>Grab/local transport</strong> or an easy and flexible day on a rented motorbike.
      </p>
    </section>

    <section className="guide-section transport-option">
      <h2>Mae Salong and tea plantations or Doi Chang and coffee plantations?</h2>
      <p>
        <strong>Rent a car and driver or scooter for experienced riders.</strong>{" "}
        Keep in mind that during the winter season you will want some warm attire if
        exploring these areas by motorbike. It is always colder up in the higher elevations
        during that time — much more so than in town.
      </p>
    </section>

    <section className="guide-section transport-option">
      <h2>Golden Triangle + several stops?</h2>
      <p>
        <strong>Tour/private driver.</strong> You can combine this destination with a visit
        to Doi Thung area and the Akha ethnic villages of Pha Hi and Pha Mee. Great road
        along the Myanmar border with incredible views.
      </p>
    </section>

    <section className="guide-section transport-option">
      <h2>Family/couple wanting an easy day?</h2>
      <p>
        Or perhaps you want a really full day and desire to cover Mae Salong, Mae Sai,
        and Golden Triangle all in one day. You can do this! <strong>Best method is a
        private car and driver.</strong> This will best take advantage of limited time
        and cover the most territory plus provide flexibility if you want to deviate
        during the day.
      </p>
    </section>

    <section className="guide-section transport-option">
      <h2>Budget solo traveler?</h2>
      <p>
        <strong>Public transport/group tour</strong> or better yet form your own group
        with a couple of other people and then hire a car for flexible exploring at a
        reasonable cost when shared.
      </p>
    </section>

    <section className="guide-section transport-note">
      <p>
        If there are more unique itineraries that you want to consider, please engage
        with our Secret Corner team — we are happy to offer advice and “local” research
        if that will help.
      </p>
    </section>

    <nav className="guide-related guide-related--more">
      <p className="guide-kicker">Keep exploring</p>
      <h3>More Chiang Rai travel guides</h3>
      <ul>
        <li><Link to="/guides/best-day-trips-chiang-rai">Best Day Trips from Chiang Rai</Link></li>
        <li><Link to="/guides/elephants-chiang-rai">An Elephant Experience in Chiang Rai</Link></li>
        <li><Link to="/guides/chiang-rai-no-scooter">Things to Do Without a Scooter</Link></li>
        <li><Link to="/guides/pong-phra-bat">Pong Phra Bat District Itinerary</Link></li>
      </ul>
    </nav>
  </article>
);

export default GettingAroundChiangRai;
