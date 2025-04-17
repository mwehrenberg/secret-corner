import React from "react";
import "./activities.css";

const weeklySchedule = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: ["Walking tour to the night market"],
    Sunday: [],
  };
  
const WeeklySchedule = () => {
    return (
      <div className="schedule-grid">
        {Object.entries(weeklySchedule).map(([day, activities]) => (
          <div key={day} className="schedule-cell">
            <h2 className="day-title">{day}</h2>
            {activities.length > 0 ? (
              <ul className="activity-list">
                {activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
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
            <WeeklySchedule></WeeklySchedule>
        </div>
    )
};

export default Activities;