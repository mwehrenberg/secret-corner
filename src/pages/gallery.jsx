import React from "react";
import { Helmet } from 'react-helmet-async';
import imageGallery from "./gallery-source";
import "./gallery.css";

const AbstractGallery = () => {
    return (
        <div className="grid-wrapper">
            {imageGallery.map((image, index) => (
                <div key={index} className={image.className}>
                    <img src={image.url} alt={`Gallery ${index + 1}`} />
                </div>
            ))}
        </div>
    );
  }

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Photo Gallery - Secret Corner Hostel Chiang Rai Accommodation</title>
                <meta name="description" content="View photos of Secret Corner Hostel in Chiang Rai. See our dorms, private rooms, common areas, rooftop bar, and facilities." />
            </Helmet>
            <AbstractGallery></AbstractGallery>
        </>
    );
};

export default Gallery;