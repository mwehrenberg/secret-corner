import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./guides.css";

const ElephantsChiangRai = () => {
  return (
    <article className="guide-page editorial-guide elephants-guide">
      <Helmet>
        <title>An Elephant Experience in Chiang Rai | Secret Corner</title>
        <meta
          name="description"
          content="Learn about Elephant Peace Project, a Karen family caring for elephants for generations, and its half-day elephant experience near Chiang Rai."
        />
      </Helmet>

      <header className="guide-hero">
        <p className="guide-eyebrow">Secret Corner local guide</p>
        <h1>An Elephant Experience in Chiang Rai</h1>
        <p className="guide-subtitle">
          Meet a Karen Family Caring for Elephants for Generations
        </p>
      </header>

      <section className="guide-section editorial-intro">
        <p>
          At Secret Corner, we are often asked, “how can I experience elephants in a responsible way?” Rather than simply recommending somewhere because it uses the word “ethical,” it is useful to understand more about the people who actually live with and care for the elephants.
        </p>
        <p>
          Researching local options led us to <strong>Elephant Peace Project</strong> and a fascinating conversation with its owner.
        </p>
      </section>

      <section className="guide-section elephant-story">
        <p>
          The owner of Elephant Peace Project is Karen, one of the ethnic communities of Northern Thailand with a long history of living and working with elephants.
        </p>
        <p>
          She is the third generation of her family to care for elephants. She grew up around them, watching her parents and grandparents care for them and learning from an early age how to understand their behavior and look after them.
        </p>
        <p>
          For her family, caring for elephants isn't a business that began when elephant tourism became popular. It is knowledge, responsibility and a relationship that has been passed from one generation to another.
        </p>
        <p>
          The owner explained that she sometimes feels frustrated when elephant welfare is reduced to simple rules about which activities are automatically “good” or “bad.”
        </p>

        <div className="elephant-questions">
          <p>From her perspective, the more important questions are:</p>
          <p>How is the elephant actually cared for throughout its life?</p>
          <p>Who knows the individual elephant?</p>
          <p>Who notices when its behavior changes?</p>
          <p>Who knows what to do when it is sick?</p>
          <p>Who continues feeding/caring for it when there are no tourists around?</p>
          <p><strong>What happens when the tourists disappear?</strong></p>
        </div>

        <p>
          During the COVID pandemic, Thailand's tourism industry virtually stopped. Elephant tourism was hit particularly hard, and many businesses suddenly had no visitors and no income.
        </p>
        <p>
          But the elephants still needed to eat. They still needed care. They still needed the people who knew them.
        </p>
        <p>Her family continued caring for their elephants through those difficult years.</p>
        <p>
          It reminds one that elephant welfare isn't only about the few hours a visitor spends with an elephant. It is also about what happens during all phases of the elephant’s long life span.
        </p>
      </section>

      <section className="guide-section">
        <h2>Why Elephant Peace Project</h2>
        <p>
          After speaking with the owner of Elephant Peace Project and hearing about her family's history with elephants, we came away with a much deeper appreciation for the knowledge and relationships that develop when people and elephants live together for generations.
        </p>
        <p>
          We also appreciated hearing a local Karen perspective — one that visitors to Thailand may not always encounter in their daily activity.
        </p>
      </section>

      <section className="guide-section">
        <h2>Visiting Elephant Peace Project</h2>
        <p>
          Elephant Peace Project offers a half-day experience near Chiang Rai, giving visitors an opportunity to spend time around the elephants and learn more about them and the people who care for them.
        </p>
        <p>
          The half-day program is currently <strong>1,990 THB per person</strong>, with pickup usually around <strong>8:00–8:30 AM</strong> and the experience finishing at approximately <strong>1:00 PM</strong>.
        </p>
        <p>
          If you're staying at <strong>Secret Corner Boutique Stay</strong> and would like to visit, just ask us.
        </p>
        <p className="elephant-booking-note"><strong>We're happy to arrange the booking for you.</strong></p>
      </section>

      <nav className="guide-related guide-related--more">
        <p className="guide-kicker">Keep exploring</p>
        <h3>More Chiang Rai travel guides</h3>
        <ul>
          <li><Link to="/guides/chiang-rai-no-scooter">Things to Do Without a Scooter</Link></li>
          <li><Link to="/guides/best-day-trips-chiang-rai">Best Day Trips from Chiang Rai</Link></li>
          <li><Link to="/guides/best-cafes-chiang-rai">Best Cafes in Chiang Rai</Link></li>
          <li><Link to="/guides/two-days-chiangrai">2 Days in Chiang Rai: A Local's Itinerary</Link></li>
        </ul>
      </nav>
    </article>
  );
};

export default ElephantsChiangRai;
