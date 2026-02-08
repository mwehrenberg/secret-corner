import React, { useEffect } from "react";
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
    useEffect(() => {
        document.title = "Photo Gallery - Secret Corner Hostel Chiang Rai Accommodation";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'View photos of Secret Corner Hostel in Chiang Rai. See our dorms, private rooms, common areas, rooftop bar, and facilities.');
        }
    }, []);

    return (
        <>
            <AbstractGallery></AbstractGallery>
        </>
    );
};

export default Gallery;