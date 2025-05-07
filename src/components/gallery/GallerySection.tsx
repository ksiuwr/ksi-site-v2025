import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

type GallerySectionProps = {
  images: { src: string; thumb: string; alt?: string }[];
};

/**
 * A section component for displaying a gallery of images in a grid layout.
 *
 * The component uses the lightGallery library to display the images in a
 * gallery with thumbnails and zoom functionality.
 *
 * @prop {Array<{ src: string; thumb: string; alt?: string }>} images - An array
 *     of objects with 'src', 'thumb', and optional 'alt' properties.
 *     'src' is the URL of the full-size image, 'thumb' is the URL of the
 *     thumbnail, and 'alt' is the alt text for the image.
 *
 * @returns {JSX.Element} A styled section containing a lightGallery component.
 */
const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  return (
    <section className="bg-section-secondary px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((img, idx) => (
            <a
              href={img.src}
              key={idx}
              className="block overflow-hidden rounded-lg"
            >
              <img
                src={img.thumb}
                alt={img.alt || `Image ${idx + 1}`}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  );
};

export default GallerySection;
