import React from "react";
import { Helmet } from 'react-helmet-async';
import imageGallery from "./gallery-source";
import "./gallery.css";

const AbstractGallery = () => {
    return (
        <div className="grid-wrapper">
            {imageGallery.map((image, index) => (
                <div key={index} className={image.className}>
                    <img src={image.url} alt={`Secret Corner Hostel Chiang Rai interior photos showing rooms facilities and common areas`} />
                </div>
            ))}
        </div>
    );
  }

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Photos | Secret Corner Hostel Chiang Rai</title>
                <meta name="description" content="See our clean modern dorms, rooftop bar & coworking space. Privacy curtains, female rooms & comfy beds. Best hostel near Chiang Rai Night Bazaar." />
            </Helmet>
            <AbstractGallery></AbstractGallery>
        </>
    );
};

export default Gallery;