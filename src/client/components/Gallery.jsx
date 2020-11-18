import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ images, type }) => {
  const imagesComponents = images.map(({ plantId, url }, i) => (
    <div className="w-1/3 p-px" key={`gallery-img-${i}`}>
      <div className="relative pb-full">
        {type === 'dashboard' ? (
          <Link to={`/plant/${plantId}`}>
            <img
              className="absolute h-full w-full object-cover border rounded-sm"
              src={url}
              alt=""
            />
          </Link>
        ) : (
          <img
            className="absolute h-full w-full object-cover border rounded-sm"
            src={url}
            alt=""
          />
        )}
      </div>
    </div>
  ));

  return (
    <div id="gallery-container" className="flex-grow overflow-scroll">
      <div
        id="gallery-images-container"
        className="flex flex-wrap px-px w-full"
      >
        {imagesComponents}
      </div>
    </div>
  );
};

export default Gallery;
