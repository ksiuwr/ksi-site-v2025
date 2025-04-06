interface ImageGalleryProps {
    images: string[];
  }
  
  function ImageGallery({ images }: ImageGalleryProps) {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`gallery-${index}`}
            className="max-h-70 max-w-100 object-cover rounded
            hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    );
  }
  
  export default ImageGallery;