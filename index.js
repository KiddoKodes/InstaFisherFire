// Import the functions you need from the SDKs you need
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "<api key>",
  authDomain: "<auth domain>",
  projectId: "<>",
  storageBucket: "<>",
  messagingSenderId: "<>",
  appId: "<>",
  measurementId: "<>",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//create a form submit function and log user to firestore
function submitForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = {
    email: email,
    password: password,
  };
  db.collection("users")
    .add(user)
    .then((res) => {
      alert("Logged in successfully");
    })
    .catch((err) => {
      alert(err);
    });
}
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm();
});
