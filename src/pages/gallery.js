import React from "react";

const Gallery = () => {
    // Dummy image URLs for demonstration
    const images = [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
    ];

    // Number of columns in the grid
    const columns = 3;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                overflowX: "auto", // Enable horizontal scrolling if needed
                overflowY: "hidden", // Hide vertical scrolling
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gap: "10px", // Adjust as needed for spacing between images
                    padding: "20px", // Adjust padding around the grid
                }}
            >
                {images.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Gallery Image ${index + 1}`}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;