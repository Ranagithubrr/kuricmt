import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDFBJO3va7DlB9YUj3jDTPTMP6bKR_8Th8",
  authDomain: "cmt-kuri.firebaseapp.com",
  projectId: "cmt-kuri",
  storageBucket: "cmt-kuri.appspot.com",
  messagingSenderId: "306688652701",
  appId: "1:306688652701:web:7bb5275d62ecabb3a02b74"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);