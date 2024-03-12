import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGTqD6RC8L4Y8pRBLx5H6L0cB1nTJ50rk",
  authDomain: "gallery-photos-37f0d.firebaseapp.com",
  projectId: "gallery-photos-37f0d",
  storageBucket: "gallery-photos-37f0d.appspot.com",
  messagingSenderId: "738697922753",
  appId: "1:738697922753:web:73bf8fffa6928526cb6c40",
};

const firebaseapp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseapp);
