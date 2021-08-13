import React from "react";
import "./index.css";

type GifProps = {
  url: string,
  alt: string
}

const index = ({ url, alt }: GifProps) => {
  return (
    <div className="item">
      <img
        src={url || "https://dummyimage.com/400x400/fff/000.png"}
        className="img"
        alt={alt}
      />
      <h1>{alt}</h1>
    </div>
  );
};

export default index;
