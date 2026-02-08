// const importAll = (r) => r.keys().map(r);
import.meta.glob

// Dynamically import all images from the attachments folder
// const architectureImages = importAll(
//   require.context("../images/architecture", false, /\.(png|jpe?g|JPG|svg)$/)
// );
const architectureImages = Object.values(
  import.meta.glob("../images/architecture/*.{png,jpg,jpeg,JPG,svg}", {
    eager: true,
    import: "default",
  })
);

const interiorImages = Object.values(
  import.meta.glob("../images/attachments/*.{png,jpg,jpeg,JPG,svg}", {
    eager: true,
    import: "default",
  })
);

// Combine them into one array
const images = [...architectureImages, ...interiorImages];

// Generate the image gallery
const imageGallery = images.map((image, index) => ({
    url: image,
    className: index % 3 === 0 ? "tall" : index % 4 === 0 ? "wide" : "", // Assign classes dynamically
}));

export default imageGallery;