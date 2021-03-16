import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD3j0zgefGD1Gq3ZSV6UCkJIfBp6feTSC4",
  authDomain: "netflix-bc272.firebaseapp.com",
  projectId: "netflix-bc272",
  storageBucket: "netflix-bc272.appspot.com",
  messagingSenderId: "156985217665",
  appId: "1:156985217665:web:0a398ba260b124e81e3380",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase };
