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
    largeIndexes: [0, 8],
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
  // {
  //   folder: "queen1",
  //   id: "queen-1",
  //   title: "Queen 1",
  //   alt: "Queen private room with bright bedding",
  //   largeIndexes: [0, 5],
  // },
  // {
  //   folder: "queen2",
  //   id: "queen-2",
  //   title: "Queen 2",
  //   alt: "Queen private room with warm lighting",
  //   largeIndexes: [0, 7],
  // },
  // {
  //   folder: "queen3",
  //   id: "queen-3",
  //   title: "Queen 3",
  //   alt: "Queen private room detail",
  //   largeIndexes: [0],
  // },
  // {
  //   folder: "queenGreen",
  //   id: "queen-green",
  //   title: "Green Queen Room",
  //   alt: "Green-accent queen private room",
  //   largeIndexes: [0, 4],
  // },
  // {
  //   folder: "triple",
  //   id: "triple",
  //   title: "Triple",
  //   alt: "Triple private room for friends or small groups",
  //   largeIndexes: [0, 5],
  // },
  {
    folder: "dormRooms",
    id: "dorm-rooms",
    title: "Dorm Rooms",
    alt: "Four dorm rooms with privacy bunks",
    largeIndexes: [1, 5],
  },
  // {
  //   folder: "bunkBlue",
  //   id: "bunk-blue",
  //   title: "Blue Bunk Dorm",
  //   alt: "Blue-curtain dorm room with privacy bunks",
  // },
  // {
  //   folder: "bunkGreen",
  //   id: "bunk-green",
  //   title: "Green Bunk Dorm",
  //   alt: "Green-accent dorm room with privacy bunks",
  // },
  // {
  //   folder: "bunkRainbow",
  //   id: "bunk-rainbow",
  //   title: "Rainbow Bunk Dorm",
  //   alt: "Colorful dorm room with privacy bunks",
  // },
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
