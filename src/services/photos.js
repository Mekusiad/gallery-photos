import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";

import { storage } from "../libs/firebase";
import { v4 as uuid } from "uuid";

export const getAll = async () => {
  let list = [];

  const imageFolder = ref(storage, "image");
  const photoList = await listAll(imageFolder);

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }

  return list;
};

export const insert = async (file) => {
  if (["image/jpg", "image/jpeg", "image/png"].includes(file.type)) {
    let id = uuid();
    let newFile = ref(storage, `image/${id}`);

    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref);

    return { name: upload.ref.name, url: photoUrl };
  } else {
    return new Error("Tipo de arquivo não suportado...");
  }
};

export const deleteImage = async (id) => {
  let photoRef = ref(storage, `image/${id}`);

  await deleteObject(photoRef);
};
