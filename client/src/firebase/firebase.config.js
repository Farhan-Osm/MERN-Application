// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO8NERgaDECtUeetiC3RLpOlj8rZOhtbc",
  authDomain: "book-store-application-97250.firebaseapp.com",
  projectId: "book-store-application-97250",
  storageBucket: "book-store-application-97250.appspot.com",
  messagingSenderId: "124513330410",
  appId: "1:124513330410:web:25637be0656c98a4476393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;