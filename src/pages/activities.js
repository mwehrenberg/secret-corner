import React from "react";
import "./activities.css";
import yoga from "../images/hostelActivities/dragon-yoga-pose.png";
import pancakes from "../images/hostelActivities/pancakes.webp";
import happyhour from "../images/hostelActivities/happyhour.png";
import movie from "../images/hostelActivities/movie.png";

const weeklySchedule = {
  Monday: {
    blurb: "Morning rooftop yoga",
    image: yoga,
  },
  Tuesday: null,
  Wednesday: null,
  Thursday: {
    blurb: "Morning rooftop yoga",
    image: yoga,
  },
  Friday: {
    blurb: "Breakfast",
    image: pancakes,
  },
  Saturday: {
    blurb: "Walking tour to the night market",
    image: happyhour,
  },
  Sunday: {
    blurb: "Movie night",
    image: movie,
  },
};

const WeeklySchedule = () => {
  return (
    <div className="schedule-grid">
      {Object.entries(weeklySchedule).map(([day, activity]) => (
        <div key={day} className="schedule-cell">
          <h2 className="day-title">{day}</h2>
          {activity ? (
            <div className="activity-content">
              <img src={activity.image} alt={activity.blurb} />
              <p>{activity.blurb}</p>
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