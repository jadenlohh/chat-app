import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPgy75bobkx-wntJNCEsc-aLgagw42AO8",
    authDomain: "chat-app-84fd8.firebaseapp.com",
    projectId: "chat-app-84fd8",
    storageBucket: "chat-app-84fd8.appspot.com",
    messagingSenderId: "439819070091",
    appId: "1:439819070091:web:1f1c2ca1461a848219428e",
    measurementId: "G-PWKGVVSR0G"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
