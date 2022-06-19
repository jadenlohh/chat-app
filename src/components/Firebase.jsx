import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "chat-app-84fd8.firebaseapp.com",
    projectId: "chat-app-84fd8",
    storageBucket: "chat-app-84fd8.appspot.com",
    messagingSenderId: "439819070091",
    appId: process.env.appID,
    measurementId: "G-PWKGVVSR0G"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db