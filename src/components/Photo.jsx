import * as Photos from "../services/photos";

const Photo = ({ item, getPhotos }) => {
  const handleDeletePhoto = async (id) => {
    await Photos.deleteImage(id);
    getPhotos();
  };
  return (
    <div className="photo">
      <button id="deleteItem" onClick={() => handleDeletePhoto(item.name)}>
        X
      </button>
      <img src={item.url} alt={item.name} />
      <p>{item.name} </p>
    </div>
  );
};

export default Photo;
