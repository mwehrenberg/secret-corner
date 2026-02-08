import React from "react";
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
        <AbstractGallery></AbstractGallery>
    );
};

export default Gallery;