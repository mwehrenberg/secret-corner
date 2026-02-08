import React from "react";
import { Helmet } from 'react-helmet-async';
import "./facilities.css";
import Standard from "../images/rooms/standard.jpeg";
import DeluxeTv from "../images/rooms/deluxetv.jpeg";
import TripleRoom from "../images/rooms/triple.jpeg";
import SixBedDorm from "../images/rooms/6mixed.jpeg";
import SixBedFemaleDorm from "../images/rooms/xroom4.2.jpeg";
import EightBed from "../images/rooms/eightbed.jpeg";

const Facilities = () => {
    return (
        <div>
            <Helmet>
                <title>Hostel Facilities & Rooms - Secret Corner Chiang Rai</title>
                <meta name="description" content="Explore our dorms and private rooms at Secret Corner Chiang Rai. Female dorms, mixed dorms, deluxe rooms with premium beds and modern facilities." />
            </Helmet>
            <section class="rooms-section">
                <div className="special-offer">
                    <h3>GRAND OPENING RATES</h3>
                    <h4>Use promo code <b className="promo-code">SECRETDEAL</b> at checkout to enjoy an extra <strong>10% off</strong> 🎉</h4>
                </div>
                
                <h2>Our Rooms</h2>
                <div className="room-grid">
                    <div className="room-card">
                    <img src={SixBedFemaleDorm} alt="6-Bed Female Dormitory"></img>
                    <div className="room-info">
                        <h3>6-Bed Female Dormitory (Shared Bath)</h3>
                        <p>Privacy curtains, lockers, reading lights, shared bath.</p>
                    </div>
                    </div>
                    
                    <div className="room-card">
                    <img src={SixBedDorm} alt="6-Bed Mixed Dormitory"></img>
                    <div className="room-info">
                        <h3>6-Bed Mixed Dormitory (Shared Bath)</h3>
                        <p>Privacy curtains, lockers, reading lights, shared bath.</p>
                    </div>
                    </div>
                    
                    <div className="room-card">
                    <img src={EightBed} alt="8-Bed Mixed Dormitory"></img>
                    <div className="room-info">
                        <h3>8-Bed Mixed Dormitory (Shared Bath)</h3>
                        <p>Most affordable option, same great design as our other dormitories.</p>
                    </div>
                    </div>

                    <div className="room-card">
                    <img src={DeluxeTv} alt="Deluxe King Room"></img>
                    <div className="room-info">
                        <h3>Deluxe King Room with Private Bath</h3>
                        <p>Premium furnishings, in-room fridge & TV, ensuite with walk-in shower.</p>
                    </div>
                    </div>

                    {/* <!-- Repeat for other rooms --> */}
                    <div className="room-card">
                    <img src={Standard} alt="Standard King Room"></img>
                    <div className="room-info">
                        <h3>Standard King Room with Private Bath</h3>
                        <p>Cozy layout, king-size bed, in-room fridge, ensuite.</p>
                    </div>
                    </div>
                    
                    <div className="room-card">
                    <img src={TripleRoom} alt="Triple Room"></img>
                    <div className="room-info">
                        <h3>Triple Room with Private Bath</h3>
                        <p>3 twin beds, private bathroom — great for groups or families.</p>
                    </div>
                    </div>
                </div>
            </section>

            <section className="rooms-section">
                <h2>Services & Amenities</h2>
                <div className="amenities-content">
                    <div className="fixed">
                        <p><b>Room Features</b></p>
                    </div>
                    <div className="flex-item">
                        <ul>
                            <li>A/C and fan in every room</li>
                            <li>Fresh towels and bedding</li>
                            <li>Personal lights and outlets (dorms)</li>
                            <li>Lockers (dorms)</li>
                            <li>Fridge and hair dryer (private rooms)</li>
                            <li>TV (Deluxe only)</li>
                        </ul>
                    </div>
                </div>
                <div className="amenities-content">
                    <div className="fixed">
                        <p><b>Shared Spaces</b></p>
                    </div>
                    <div className="flex-item">
                        <ul>
                            <li>Rooftop coworking/lounge</li>
                            <li>Garden and patio</li>
                            <li>Shared bathrooms</li>
                            <li>Laundry machines, dryer, and drying racks</li>
                            <li>Cultural, creative, and social activities</li>
                        </ul>
                    </div>
                </div>
                <div className="amenities-content">
                    <div className="fixed">
                        <p><b>Extras</b></p>
                    </div>
                    <div className="flex-item">
                        <ul>
                            <li>Free high-speed Wi-Fi</li>
                            <li>Luggage storage</li>
                            <li>Travel tips and bookings</li>
                            <li>Coffee and tea available for purchase</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facilities;