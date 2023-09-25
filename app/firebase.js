// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCTI9F4BcH7ObKvRYisnV9PvGaw3u1vkA",
  authDomain: "prototipo-projeto-integrado.firebaseapp.com",
  projectId: "prototipo-projeto-integrado",
  storageBucket: "prototipo-projeto-integrado.appspot.com",
  messagingSenderId: "1083059321621",
  appId: "1:1083059321621:web:5a365a65838d76f11cc71c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);