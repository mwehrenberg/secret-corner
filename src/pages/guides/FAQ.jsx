import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./guides.css";

const faqData = [
  {
    category: "Housekeeping",
    questions: [
      {
        q: "Can I extend my reservation?",
        a: "Yes — simply contact reception and we will honor your current rate for additional nights.",
      },
      {
        q: "What are the check-in and check-out times?",
        a: "Check-in is at 15:00 and check-out is by 11:00. Reception is open from 08:00 until 20:00. If you're arriving after 20:00, please arrange with us in advance and we'll leave your key and related information in the drop box at reception.",
      },
      {
        q: "Can I store my luggage at the hostel?",
        a: "Yes, luggage storage can be arranged at reception.",
      },
      {
        q: "Is there laundry available?",
        a: "We have two washers, a dryer, and soap packages available for guest use for a small fee on the honor system.",
      },
      {
        q: "Are towels provided?",
        a: "For dorm room guests, towels are available for rent at reception for 30 THB.",
      },
      {
        q: "What beverages are included?",
        a: "Fruit, coffee, and tea, as well as beer and soda, are available for purchase at reception. Water is available for free.",
      },
      {
        q: "Is there a kitchen I can use?",
        a: "There is a shared fridge on the rooftop for all guests — please be considerate of others. Dishes and a microwave are also available for your use on the rooftop.",
      },
      {
        q: "Are visitors allowed?",
        a: "No, unregistered guests are not allowed at any time.",
      },
      {
        q: "Where do I leave my shoes?",
        a: "Cabinets are provided in each room. Please remove your shoes and use the cabinet.",
      },
      {
        q: "Are there any rooftop rules?",
        a: "Rooftop activity should be finished by 22:00 out of respect for our neighbors. Sound carries easily from the roof, so please be considerate.",
      },
    ],
  },
  {
    category: "Transport",
    questions: [
      {
        q: "How do I get to Secret Corner from the bus station?",
        a: "Secret Corner is about a 12-minute walk from the bus station. Buses arrive from Chiang Mai, Mae Sai, Chiang Saen, and other regional destinations. Buses to the White Temple also depart from there.",
      },
      {
        q: "How do I get to and from the airport?",
        a: "Mae Fah Luang Airport is about a 20-minute drive. Grab or a taxi is the best option when arriving in Chiang Rai. For returning to the airport, Grab works fine, but for early morning flights we recommend booking a car in advance. We can assist with that or you can use Grab.",
      },
      {
        q: "Can I rent a motorbike?",
        a: "Yes — 125cc and 160cc motorbikes are available and can be delivered to Secret Corner in advance of your check-in. The daily fee is 300 THB (125cc) or 400 THB (160cc).",
      },
      {
        q: "Can I rent a bicycle?",
        a: "We have two bikes available to rent for exploring the city at 80 THB for a half day.",
      },
      {
        q: "What about car rental?",
        a: "Self-drive rentals are available at the airport. Secret Corner can also arrange a car or minivan with a driver, either by the day or based on your destination. A price list is posted at reception.",
      },
    ],
  },
  {
    category: "Activities & Excursions",
    questions: [
      {
        q: "What is the Top Sites Chiang Rai day trip?",
        a: "A one-day adventure covering six key stops with an English-speaking guide, all transport, and lunch included for 1,200 THB. Sites include the White Temple, Blue Temple, Black House, a Karen hilltribe village, a tea plantation, and the Golden Triangle & Opium Museum. Entry tickets to individual sites, where applicable, are excluded.",
      },
      {
        q: "What does the one-day trekking walk include?",
        a: "A guided small-group day trek visiting a Lisu Chinese village, waterfalls, a tea plantation, and incredible natural scenery. Lunch is included — your guide will demonstrate how to forage and cook from indigenous jungle ingredients. Pick-up is around 09:00 with return at the end of the day. Cost is 1,500 THB per person, minimum 2 people.",
      },
      {
        q: "Tell me about the two-day trekking trip.",
        a: "Day 1 includes 5–6 hours of guided trekking with a visit to a Lahu village, lunch, and an overnight stay at an Akha village. Day 2 focuses on jungle survival skills, then lunch, followed by an afternoon visit to a Lisu village in the high mountains before driving back to the city. Cost is 2,800 THB per person, minimum 2 people.",
      },
      {
        q: "How does the slow boat to Luang Prabang work?",
        a: "A two-day, one-night journey along the Mekong River. Depart Secret Corner around 05:00 and arrive in Luang Prabang around 16:00 on day two. Cost is 1,600 THB per person and includes taxi to the pier, bus ticket for the border crossing, boat ticket, and lunch on day one. Lao visa fee and overnight accommodation in Pak Beng are excluded.",
      },
      {
        q: "Is there a train option to Luang Prabang?",
        a: "Yes — a one-day journey departing Secret Corner around 05:00, arriving in Luang Prabang at approximately 18:00 the same day. Cost is 1,990 THB per person and includes pick-up from Secret Corner, bus ticket to cross the border into Laos, train ticket to Luang Prabang, and a box lunch.",
      },
      {
        q: "What is the Elephant Peace Project Sanctuary?",
        a: "Spend a day with a Karen family and their elephants. Transport and lunch are provided as part of the half-day program, which includes bathing and feeding the elephants.",
      },
      {
        q: "Where is the Night Market?",
        a: "The Night Market is about a 20-minute walk from the hostel, one block north of the new clock tower. It's a great opportunity to experience a market made for locals — unlimited food options, shopping, drinks, entertainment, and even massage stalls. You'll find some tourists, but it's mostly Chiang Rai citizens.",
      },
    ],
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

const FAQ = () => {
  useEffect(() => {
    document.title =
      "Traveler's FAQ | Secret Corner Hostel Chiang Rai";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Frequently asked questions for travelers visiting Secret Corner Hostel in Chiang Rai, Thailand. Everything you need to know before your trip."
      );
    }
  }, []);

  return (
    <div className="guide-page">
      <header className="guide-hero">
        <h1>Traveler's FAQ</h1>
        <p className="guide-subtitle">
          Everything you need to know before visiting Secret Corner Hostel &amp; Chiang Rai.
        </p>
      </header>

      {faqData.map((section, i) => (
        <section className="guide-section" key={i}>
          <h2>{section.category}</h2>
          {section.questions.map((item, j) => (
            <FAQItem key={j} question={item.q} answer={item.a} />
          ))}
        </section>
      ))}

      {/* CTA */}
      <div className="guide-cta">
        <h3>Ready to Book?</h3>
        <p>Reserve your stay at Secret Corner Hostel today.</p>
        <a
          href="https://us2.cloudbeds.com/reservation/T5pGtj"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      </div>

      {/* Related guides */}
      <div className="guide-related">
        <h3>Travel Guides</h3>
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
      </div>
    </div>
  );
};

export default FAQ;
