import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDGGPK9AD7dRV88xHU3HWvT1L9f4Hvpu8o",
  authDomain: "ebike-fc9da.firebaseapp.com",
  projectId: "ebike-fc9da",
  storageBucket: "ebike-fc9da.appspot.com",
  messagingSenderId: "219846855107",
  appId: "1:219846855107:web:c523e83a38fd68aef6d576"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
