import React from "react";
import { Helmet } from "react-helmet-async";
import { bookingUrl, galleryNav, gallerySections } from "./gallery-source";
import "./gallery.css";

const GalleryImage = ({ image, isPriority = false }) => (
  <figure className={`gallery-photo gallery-photo-${image.size || "standard"}`}>
    <img
      src={image.src}
      alt={image.alt}
      loading={isPriority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={isPriority ? "high" : "auto"}
    />
  </figure>
);

const buildGalleryBlocks = (images) => {
  const largeIndexes = images
    .map((image, index) => (image.size === "large" ? index : -1))
    .filter((index) => index >= 0);

  if (largeIndexes.length === 0) {
    return [{ id: "standard", largeImage: null, supportingImages: images }];
  }

  return largeIndexes.map((largeIndex, blockIndex) => {
    const nextLargeIndex = largeIndexes[blockIndex + 1] ?? images.length;
    const leadingImages = blockIndex === 0 ? images.slice(0, largeIndex) : [];
    const followingImages = images.slice(largeIndex + 1, nextLargeIndex);

    return {
      id: images[largeIndex].path,
      largeImage: images[largeIndex],
      supportingImages: [...leadingImages, ...followingImages],
    };
  });
};

const GallerySection = ({ section, sectionIndex }) => {
  const hasSectionCopy = section.title || section.description;
  const galleryBlocks = buildGalleryBlocks(section.images);

  return (
    <section
      className="gallery-section"
      id={section.id}
      aria-labelledby={section.title ? `${section.id}-title` : undefined}
    >
      {hasSectionCopy && (
        <div className="gallery-section-copy">
          {/* {section.title && <h2 id={`${section.id}-title`}>{section.title}</h2>} */}
          {section.description && <p>{section.description}</p>}
        </div>
      )}

      <div className="gallery-flow">
        {galleryBlocks.map((block, blockIndex) => (
          <div className="gallery-flow-block" key={`${section.id}-${block.id}`}>
            {block.largeImage && (
              <GalleryImage
                image={block.largeImage}
                isPriority={sectionIndex === 0 && blockIndex === 0}
              />
            )}

            {block.supportingImages.length > 0 && (
              <div className="gallery-masonry">
                {block.supportingImages.map((image) => (
                  <GalleryImage
                    image={image}
                    isPriority={sectionIndex === 0 && !block.largeImage && image.index < 2}
                    key={`${section.id}-${image.src}`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <main className="gallery-page" id="gallery-tour">
      <Helmet>
        <title>Gallery | Secret Corner Hostel Chiang Rai</title>
        <meta
          name="description"
          content="Take a visual tour of Secret Corner Boutique Hostel in Chiang Rai, including shared spaces, dorm rooms, private rooms, bathrooms, rooftop, exterior, and warm design details."
        />
      </Helmet>

      <div className="gallery-layout">
        <nav className="gallery-jump-nav" aria-label="Gallery sections">
          {galleryNav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="gallery-tour">
          {gallerySections.map((section, index) => (
            <GallerySection section={section} sectionIndex={index} key={section.id} />
          ))}
        </div>
      </div>

      <section className="gallery-cta" aria-labelledby="gallery-cta-title">
        <div>
          <p className="gallery-kicker">Book Direct</p>
          <h2 id="gallery-cta-title">Ready to experience Secret Corner?</h2>
          <p>
            Clean rooms, comfortable beds, thoughtful shared spaces, and a rooftop made
            for slow mornings and relaxed evenings in Chiang Rai.
          </p>
        </div>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="gallery-cta-button">
          Book Direct
        </a>
      </section>
    </main>
  );
};

export default Gallery;
