import firebase from "firebase/app";
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlaLUgaYtpEV5xzfXThAiO1HbqxvN0ayY",
  authDomain: "codebar-8a35b.firebaseapp.com",
  projectId: "codebar-8a35b",
  storageBucket: "codebar-8a35b.appspot.com",
  messagingSenderId: "697353393489",
  appId: "1:697353393489:web:f5ed27bee7cb70f4702f70"
};

// Initialize app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}