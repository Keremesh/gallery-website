import React from "react";

function Gallery({ images }) {
  return (
    // <div> 
    <div
      data-testid="gallery"
      //   className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5"
    >
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img
            // key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded-lg"
          />
          {/* <p>{image.description}</p> */}
        </div>
      ))}
    </div>
    // </div>
  );
}

export default Gallery;
