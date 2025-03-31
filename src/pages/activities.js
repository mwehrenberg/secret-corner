import React, { useEffect } from "react";
import "./activities.css";
import nightbazaar from "../images/activities/nightbazaar.jpg";
import bluetemple from "../images/activities/bluetemple.webp";
import goldentriangle from "../images/activities/goldentriangle.jpg";
import teaplant from "../images/activities/teaplant.jpg";
import cook from "../images/activities/cook.jpg";
import waterfall from "../images/activities/waterfall.jpg";

const activities = [
  {
    title: "Chiang Rai Night Bazaar",
    description: "Make new friends and enjoy a night at the Chiang Rai night bazaar. Every Tuesday and Friday at 7pm.",
    image: "https://d13jio720g7qcs.cloudfront.net/images/destinations/origin/5dfb24fd86bd1.jpg",
    content: nightbazaar
  },
  {
    title: "White Temple & Blue Temple Tour",
    description: "Explore Chiang Rai’s most famous landmarks with a guided experience.",
    image: "https://thishumantribe.com/wp-content/uploads/2023/02/THT-Article-Images-Blue-White-New2-1.webp",
    content: bluetemple
  },
  {
    title: "Golden Triangle Day Trip",
    description: "Visit the border of Thailand, Laos, and Myanmar with stops at scenic viewpoints.",
    image: "https://royalvacationdmc.com/wp-content/uploads/2023/11/golden-triangle-chiang-rai.jpg",
    content: goldentriangle
  },
  {
    title: "Hot Springs & Tea Plantation Tour",
    description: "Relax in natural hot springs and taste some of Thailand’s finest tea.",
    image: "https://www.takemetour.com/amazing-thailand-go-local/wp-content/uploads/2018/03/Top-tea-plantations-in-Thailand-Tea-has-changed-the-hill-tribes-life-and-101-Tea-Plantation-is-part-of-the-movement.jpg",
    content: teaplant
  },
  {
    title: "Hiking & Waterfall Excursions",
    description: "Join a guided hike to hidden waterfalls and lush jungle trails.",
    image: "https://www.thelostpassport.com/wp-content/uploads/2016/10/things-to-do-in-Chiang-Rai-Khun-Korn-Waterfall.jpg",
    content: waterfall
  },
  {
    title: "Thai Cooking Class",
    description: "Learn to make delicious local dishes from scratch.",
    image: "https://www.pelago.com/img/products/TH-Thailand/thai-cooking-class-in-koh-samui/703024e2-d5fc-41ee-88f7-36de75304fe2_thai-cooking-class-in-koh-samui-xlarge.jpg",
    content: cook
  }
];

const Activities = () => {
    return (
        <div>
        {activities.map((activity, index) => (
            <div className="activity-container">
                <div className="activity-image">
                    <img src={activity.content} alt={activity.title} />
                </div>
                <div className="activity-text">
                    <h2>{activity.title}</h2>
                    <p>{activity.description}</p>
                </div>
            </div>
        ))}
        </div>
    )
};

export default Activities;
