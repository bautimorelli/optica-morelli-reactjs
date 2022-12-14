import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyCuriZw6w3mJrCWNqezlgZnDtcmfJVnnOw",
	authDomain: "optica-morelli-reactjs.firebaseapp.com",
	projectId: "optica-morelli-reactjs",
	storageBucket: "optica-morelli-reactjs.appspot.com",
	messagingSenderId: "650711750913",
	appId: "1:650711750913:web:0bffb0161ddaed67036300",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
