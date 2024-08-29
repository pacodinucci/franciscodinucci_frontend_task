import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDu9FA6bS2DtkTXOY2wcn1-SCE1oizNVtE",
  authDomain: "frontend-task-84e69.firebaseapp.com",
  databaseURL: "https://frontend-task-84e69-default-rtdb.firebaseio.com/",
  projectId: "frontend-task-84e69",
  storageBucket: "frontend-task-84e69.appspot.com",
  messagingSenderId: "544129894495",
  appId: "1:544129894495:web:38eeba5060c576d08df3ea",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
