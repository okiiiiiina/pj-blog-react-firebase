import { initializeApp } from "firebase/app";
// see: https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDhgkImE4uifI73aultM7qjo4jF1QAUBjY",
  authDomain: "blog-6290b.firebaseapp.com",
  projectId: "blog-6290b",
  storageBucket: "blog-6290b.appspot.com",
  messagingSenderId: "276107190",
  appId: "1:276107190:web:018183aa31e126e2a3bb17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};