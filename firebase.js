import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcXiyBekSs2QfFPmaFcyqyxdmlWD9TUNo",
  authDomain: "a4a27-32769.firebaseapp.com",
  projectId: "a4a27-32769",
  storageBucket: "a4a27-32769.firebasestorage.app",
  messagingSenderId: "763840052465",
  appId: "1:763840052465:web:1960466af80ebbaa34fd50"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
