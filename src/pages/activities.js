import "./activities.css";
// import yoga from "../images/hostelActivities/dragon-yoga-pose.png";
// import pancakes from "../images/hostelActivities/pancakes.webp";
import happyhour from "../images/hostelActivities/happyhour.png";
import guide from "../images/hostelActivities/guide.png";
import gamenight from "../images/hostelActivities/gamenight.png";
import padthai from "../images/hostelActivities/padthai.png";
import market from "../images/hostelActivities/market.webp";

const weeklySchedule = {
  Monday: {
    blurb: "Secret Supper Night",
    details: "6:30pm - 8:30pm",
    image: padthai,
  },
  Tuesday: {
    blurb: "Morning Walking Tour",
    details: "Discover hidden corners of Chiang Rai with our local guide or on your own using her tips!",
    image: guide,
  },
  Wednesday: {
    blurb: "Secret Supper Night",
    details: "6:30pm - 8:30pm",
    image: padthai,
  },
  Thursday: {
    blurb: "Global Card Game Night",
    details: "8pm on our rooftop",
    image: gamenight,
    comingSoon: true, // 👈 mark as coming soon
  },
  Friday: {
    blurb: "Secret Supper Night",
    details: "6:30pm - 8:30pm",
    image: padthai,
  },
  Saturday: {
    blurb: "Saturday Night Bites: Chiang Rai Walking Street",
    details: "Meet at the front desk at 6pm",
    image: market,
  },
  Sunday: {
    blurb: "Travel Stories & Drinks Night",
    details: "Bring your best travel tales and beverage of choice to unwind on our rooftop! 7pm",
    image: happyhour,
  },
};

const WeeklySchedule = () => {
  return (
    <div className="schedule-grid">
      {Object.entries(weeklySchedule).map(([day, activity]) => (
        <div
          key={day}
          className={`schedule-cell ${activity.comingSoon ? "coming-soon" : ""}`}
        >
          <h2 className="day-title">{day}</h2>
          {activity ? (
            <div className="activity-content">
              <div className="image-wrapper">
                <img src={activity.image} alt={activity.blurb} />
                {activity.comingSoon && (
                  <div className="coming-soon-overlay">
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
              <p className="activity-blurb">{activity.blurb}</p>
              {activity.details && (
                <p className="activity-details">{activity.details}</p>
              )}
            </div>
          ) : (
            <p className="no-activity">No activities scheduled</p>
          )}
        </div>
      ))}
    </div>
  );
};

const Activities = () => {
  return (
    <div>
      <div className="activities-container">
        <h2>Join Our Daily Experiences</h2>
        <p className="activities-text">
          We've got you covered. At Secret Corner, we organize daily activities
          to help you explore the city, connect with other travelers, and dive
          into local culture. From walking tours and temple visits to cooking
          classes and chill movie nights, there's something happening every day
          of the week. Whether you're here to relax or adventure, our schedule
          has something just for you.
        </p>
        <p className="activities-text">
          Check out this week’s lineup below — and don’t forget to ask our team
          at reception if you have any questions or want to join in!
        </p>
      </div>
      <WeeklySchedule />
    </div>
  );
};

export default Activities;
