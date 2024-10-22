import { useEffect } from "react";
import { GetGif } from "../helpers/GetGifs";
import { useState } from "react";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImagess] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await GetGif(category);
    setImagess(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h4 className="parrafo">{category}</h4>
      {isLoading ? <h5>Cargando...</h5> : null}
      <div className="card-grid">
        {images.map(({ title, id, url }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
