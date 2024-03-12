import * as Photos from "./services/photos";

import "./App.css";
import { useEffect, useState } from "react";
import Photo from "./components/Photo";

function App() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPhotos = async () => {
    setGallery(await Photos.getAll());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image");

    if (file && file.size > 0) {
      setLoading(true);
      await Photos.insert(file);
      setLoading(false);
      getPhotos();
    }

    if (gallery instanceof Error) {
      alert(gallery.message);
    }
  };

  useEffect(() => {
    const photos = () => {
      getPhotos();
    };

    photos();
  }, []);

  return (
    <div className="App">
      <h1>Galeria de fotos</h1>
      <form action="POST" onSubmit={(e) => handleSubmit(e)}>
        <input type="file" name="image" />
        <input
          type="submit"
          disabled={loading}
          value={loading ? "Enviando..." : "Enviar"}
        />
      </form>
      <div className="gallery">
        {gallery.length === 0 && !loading
          ? "Não há nada para mostrar..."
          : gallery.map((item, index) => (
              <Photo key={index} item={item} getPhotos={getPhotos} />
            ))}
      </div>
    </div>
  );
}

export default App;
