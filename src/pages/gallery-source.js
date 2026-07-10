const galleryImages = import.meta.glob("../images/gallery/**/*.{png,jpg,jpeg,JPG,webp,svg}", {
  eager: true,
  import: "default",
});

const folderImages = (folder, altBase, largeIndexes = [0]) =>
  Object.entries(galleryImages)
    .filter(([path]) => path.includes(`/gallery/${folder}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, src], index) => ({
      src,
      alt: `${altBase} at Secret Corner Boutique Hostel in Chiang Rai${index > 0 ? `, photo ${index + 1}` : ""}`,
      index,
      size: largeIndexes.includes(index) ? "large" : "standard",
      path,
    }));

const galleryFolders = [
  {
    folder: "outside",
    id: "outside",
    title: "All",
    alt: "Exterior, entrance, and courtyard area",
    largeIndexes: [4, 13],
  },
  {
    folder: "roof",
    id: "roof",
    title: "Rooftop",
    alt: "Rooftop lounge and shared space",
    largeIndexes: [3, 7],
  },
  {
    folder: "privateRooms",
    id: "private-rooms",
    title: "Private Rooms",
    alt: "Standard Queen, Deluxe King, and Triple private rooms",
    largeIndexes: [10, 2],
  },
  {
    folder: "dormRooms",
    id: "dorm-rooms",
    title: "Dorm Rooms",
    alt: "Four dorm rooms with privacy bunks",
    largeIndexes: [1, 5],
  }
];

export const bookingUrl = "https://us2.cloudbeds.com/reservation/T5pGtj";

export const galleryNav = galleryFolders.map(({ id, title }) => ({
  label: title,
  href: `#${id}`,
}));

export const gallerySections = galleryFolders.map(({ folder, id, title, alt, largeIndexes }) => ({
  id,
  title,
  images: folderImages(folder, alt, largeIndexes),
}));
