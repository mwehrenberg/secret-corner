const importAll = (r) => r.keys().map(r);

// Dynamically import all images from the attachments folder
const images = importAll(require.context("../images/attachments", false, /\.(png|jpe?g|svg)$/));

// Generate the image gallery
const imageGallery = images.map((image, index) => ({
    url: image,
    className: index % 3 === 0 ? "tall" : index % 4 === 0 ? "wide" : "", // Assign classes dynamically
}));

export default imageGallery;