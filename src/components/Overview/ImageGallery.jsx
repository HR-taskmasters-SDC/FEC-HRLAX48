import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { v4 as uuidv4 } from "uuid";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

export default function ImageGallery({ selectedStyle }) {
  const image =
    selectedStyle.photos &&
    selectedStyle.photos.map((photo) => {
      return (
        <div>
          <img
            key={uuidv4()}
            src={photo.url}
            style={{ objectFit: "cover", height: 450 }}
          />
        </div>
      );
    });

  return (
    <div className="pd__gallery-container">
      <div className="image">
        <Carousel
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          key={uuidv4()}
        >
          {image}
        </Carousel>
      </div>
      <div className="expand-icon">
        <AspectRatioIcon sx={{ color: "white" }} />
      </div>
    </div>
  );
}
