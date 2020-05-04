// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDzxUlPHIztqoChjKorz50ivxcY3HIHpzo",
  authDomain: "myportfolio-suprateem.firebaseapp.com",
  databaseURL: "https://myportfolio-suprateem.firebaseio.com",
  projectId: "myportfolio-suprateem",
  storageBucket: "myportfolio-suprateem.appspot.com",
  messagingSenderId: "495807844443",
  appId: "1:495807844443:web:9aaefd1f7a6dfa79ec2f7e",
  measurementId: "G-7XL3BRX72X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
database = firebase.firestore();

function sendData(name, email, message) {
  console.log(name);
  database.collection("information").add({
      name: name,
      email: email,
      message: message
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  document.getElementById("visitor").reset();
  //sent a message back
  message = document.getElementById("reply_message")
  message.classList.remove('d-none')

}