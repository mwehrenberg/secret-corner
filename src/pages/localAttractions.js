import React from "react";
import "./localAttractions.css";
import nightbazaar from "../images/activities/nightbazaar.jpg";
import bluetemple from "../images/activities/bluetemple.webp";
import goldentriangle from "../images/activities/goldentriangle.jpg";
import teaplant from "../images/activities/teaplant.jpg";
import cook from "../images/activities/cook.jpg";
// import waterfall from "../images/activities/waterfall.jpg";
import baanDam from "../images/activities/baanDam.jpg"
import doiChang from "../images/activities/doiChang.png";
import maeFah from "../images/activities/maeFah.webp";
import trekking from "../images/activities/trekking.jpg";

const localAttractions = [
  // {
  //   title: "Chiang Rai Night Bazaar",
  //   description: "Make new friends and enjoy a night at the Chiang Rai night bazaar. Every Tuesday and Friday at 7pm.",
  //   image: "https://d13jio720g7qcs.cloudfront.net/images/destinations/origin/5dfb24fd86bd1.jpg",
  //   content: nightbazaar
  // },
  {
    title: "Doi Chang Coffee Mountain Trip",
    description: "This region is an hour and a half drive south and west from the city center. It is actually not far from the city as the bird would fly, but the only roads require a longer drive but the views and tranquil nature will more than make up for the drive. In fact, you will need to stop and car or motorbike frequently just to take in the views. Simply astounding. So many choices of places to stop for coffee and tea and of course Thai food. Our staff are happy to suggest some of the better places to stop if you desire to explore this region. Unlimited exploring, views, and choices for great coffee grown locally.",
    image: "",
    content: doiChang
  },
  {
    title: "Mae Fah Luang Botanical Garden",
    description: "Located one hour north of the city and a lovely place to explore the various flowers and plants in the cooler northern climate.",
    image: "",
    content: maeFah
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
    title: "Saturday Chiang Rai Night Market",
    description: "Located in the streets east of the clock tower this huge market is filled with local people and tourists alike. You will find all kinds of shopping options, and creative food/drink options. Also, entertainment, massage, and so much else. Saturday night is the big night of the week and if you are here over the weekend you will not want to miss this opportunity.",
    image: "",
    content: nightbazaar
  },
  {
    title: "Doi Maesalong",
    description: "Thailand's tea valley. Located about 1.5 hours northwest from the center of the city, this region is filled with tiered hillsides covered with varieties of tea. So many incredible viewpoints and places to stop for tea, some food, and endless incredible views. Plenty of hilltribe markets and still occupied by mostly ethnic Chinese people who migrated into the region in the years following China's civil war and conflicts in Burma during the early 1960s. This region is best explored with a car, motorbike, or with a small group tour.",
    image: "https://www.takemetour.com/amazing-thailand-go-local/wp-content/uploads/2018/03/Top-tea-plantations-in-Thailand-Tea-has-changed-the-hill-tribes-life-and-101-Tea-Plantation-is-part-of-the-movement.jpg",
    content: teaplant
  },
  {
    title: "Trekking to Minority Villages",
    description: "There are many options in the Chiang Rai region for trekking, either for a single day activity or multi-day trips which allow the opportunity to stay overnight with hilltribe families along the trekking route. There are several reliable tour operators located within walking distance of Secret Corner and our staff can assist you to contact them if necessary.",
    image: "https://www.thelostpassport.com/wp-content/uploads/2016/10/things-to-do-in-Chiang-Rai-Khun-Korn-Waterfall.jpg",
    content: trekking
  },
  {
    title: "Thai Cooking Class",
    description: "Learn to make delicious local dishes from scratch.",
    image: "https://www.pelago.com/img/products/TH-Thailand/thai-cooking-class-in-koh-samui/703024e2-d5fc-41ee-88f7-36de75304fe2_thai-cooking-class-in-koh-samui-xlarge.jpg",
    content: cook
  },
  {
    title: "Baan Dam Museum",
    description: "Also known as the Black House, Baan Dam is a bold and unconventional art museum created by Thai artist Thawan Duchanee.",
    image: "https://autourasia.com/uploads/Travel-Guide-Thailand/chiang-rai/baan-dam-museum-chiangrai/700-baan-dan-museum-intro.jpg",
    content: baanDam
  }
];

const LocalAttractions = () => {
    return (
        <div>
        {localAttractions.map((activity, index) => (
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

export default LocalAttractions;