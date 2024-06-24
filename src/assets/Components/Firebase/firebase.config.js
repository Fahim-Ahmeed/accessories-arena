// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeEcCHtfZ5MdvjWApEJfAM-ymHTl75oHw",
  authDomain: "accessory-arena.firebaseapp.com",
  projectId: "accessory-arena",
  storageBucket: "accessory-arena.appspot.com",
  messagingSenderId: "368568392205",
  appId: "1:368568392205:web:4110ad6eed216d2f885344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);