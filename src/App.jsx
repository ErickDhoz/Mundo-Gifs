import { useState } from "react";
import { AddCategories, GifGrid } from "./components";

function App() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onRefreshCategory = () => {
    setCategories([]);
  };

  return (
    <div>
      <div className="appBar">
        <div>
          <h1 className="title">Mundo Gif </h1>
          <p className="parrafo">
            Encuentra todo tipo de Gif para tus Plataformas.
          </p>
        </div>

        <div>
          <img
            className="gif"
            src="https://i.pinimg.com/originals/32/79/46/3279462667fb3498a6aa144e7cdea2ae.gif"
            alt="LOgo"
          />
          <img
            className="gif2"
            src="https://www.loomly.com/hs-fs/hubfs/Imported_Blog_Media/earth-Apr-03-2024-12-19-31-1897-AM.gif?width=540&height=540&name=earth-Apr-03-2024-12-19-31-1897-AM.gif"
            alt="Logo"
          />
        </div>
      </div>

      <AddCategories
        onNewCategory={onAddCategory}
        onRefresh={onRefreshCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
}

export default App;
