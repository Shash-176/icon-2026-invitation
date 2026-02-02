import { eventImages } from "./imageList";
import "./ImageGrid.css";

function ImageGrid() {
  // Duplicate images for seamless scroll
  const scrollingImages = [...eventImages, ...eventImages];

  return (
    <div className="scroll-container">
      <div className="masonry">
        {scrollingImages.map((src, index) => (
          <div className="masonry-item" key={index}>
            <img src={src} alt={`event-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
