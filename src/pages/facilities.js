import "./facilities.css";
import DeluxeKingRoom from "../images/rooms/deluxeKingCover.jpeg";
import StandardKingRoom from "../images/rooms/standardKingCover.jpeg";

const Facilities = () => {
    return (
        <div>
            <section class="rooms-section">
                <h2>Our Rooms</h2>
                <div class="room-grid">
                    <div class="room-card">
                    <img src="images/triple-room.jpg" alt="6-Bed Female Dormitory"></img>
                    <div class="room-info">
                        <h3>6-Bed Female Dormitory (Shared Bath)</h3>
                        <p>Privacy curtains, lockers, reading lights, shared bath.</p>
                        <p class="rate">THB 600 / night</p>
                        {/* <a href="/book" class="btn">Book Now</a> */}
                    </div>
                    </div>
                    
                    <div class="room-card">
                    <img src="images/triple-room.jpg" alt="6-Bed Mixed Dormitory"></img>
                    <div class="room-info">
                        <h3>6-Bed Mixed Dormitory (Shared Bath)</h3>
                        <p>Privacy curtains, lockers, reading lights, shared bath.</p>
                        <p class="rate">THB 550 / night</p>
                        {/* <a href="/book" class="btn">Book Now</a> */}
                    </div>
                    </div>
                    
                    <div class="room-card">
                    <img src="images/triple-room.jpg" alt="8-Bed Mixed Dormitory"></img>
                    <div class="room-info">
                        <h3>8-Bed Mixed Dormitory (Shared Bath)</h3>
                        <p>Most affordable option, same great design as our other dormitories.</p>
                        <p class="rate">THB 500 / night</p>
                        {/* <a href="/book" class="btn">Book Now</a> */}
                    </div>
                    </div>

                    <div class="room-card">
                    <img src={DeluxeKingRoom} alt="Deluxe King Room"></img>
                    <div class="room-info">
                        <h3>Deluxe King Room with Private Bath</h3>
                        <p>Premium furnishings, in-room fridge & TV, ensuite with walk-in shower.</p>
                        <p class="rate">THB 2,500 / night</p>
                        {/* <a href="/book" class="btn">Book Now</a> */}
                    </div>
                    </div>

                    {/* <!-- Repeat for other rooms --> */}
                    <div class="room-card">
                    <img src={StandardKingRoom} alt="Standard King Room"></img>
                    <div class="room-info">
                        <h3>Standard King Room with Private Bath</h3>
                        <p>Cozy layout, king-size bed, in-room fridge, ensuite.</p>
                        <p class="rate">THB 2,000 / night</p>
                        {/* <a href="/book" class="btn">Book Now</a> */}
                    </div>
                    </div>
                    
                    <div class="room-card">
                    <img src="images/triple-room.jpg" alt="Triple Room"></img>
                    <div class="room-info">
                        <h3>Triple Room with Private Bath</h3>
                        <p>3 twin beds, private bathroom — great for groups or families.</p>
                        <p class="rate">THB 2,500 / night</p>
                        {/* <a href="/book" class="btn">Book Now</a> */}
                    </div>
                    </div>
                </div>

                <div class="special-offer">
                    <p>🎉 Book directly and enjoy <strong>25% off</strong> + a welcome drink on our rooftop!</p>
                </div>
            </section>

            <section class="rooms-section">
                <h2>Services & Amenities</h2>
                <div class="amenities-content">
                    <div class="fixed">
                        <p><b>Room Features</b></p>
                    </div>
                    <div class="flex-item">
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
                <div class="amenities-content">
                    <div class="fixed">
                        <p><b>Shared Spaces</b></p>
                    </div>
                    <div class="flex-item">
                        <ul>
                            <li>Rooftop coworking/lounge</li>
                            <li>Rooftop bar open 5pm-11pm</li>
                            <li>Garden and patio</li>
                            <li>Shared bathrooms</li>
                            <li>Laundry machines and drying racks</li>
                            <li>Cultural, creative, and social activities</li>
                        </ul>
                    </div>
                </div>
                <div class="amenities-content">
                    <div class="fixed">
                        <p><b>Extras</b></p>
                    </div>
                    <div class="flex-item">
                        <ul>
                            <li>Free high-speed Wi-Fi</li>
                            <li>Luggage storage</li>
                            <li>Travel tips and bookings</li>
                            <li>Morning cofee and tea</li>
                            <li>Drinks vending machine</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Facilities;