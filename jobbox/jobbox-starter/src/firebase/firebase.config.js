import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqdahBEjopA9OHRLyMjYAyPctYKRhdQ7s",
  authDomain: "job-box-test.firebaseapp.com",
  projectId: "job-box-test",
  storageBucket: "job-box-test.appspot.com",
  messagingSenderId: "251621780458",
  appId: "1:251621780458:web:f674c469c8626414b42093",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
