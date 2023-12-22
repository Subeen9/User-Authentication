import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_FIREBASE_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyA6_SUy3eiBf1L5LPUt7I2kUQtv8sClT_w",
  authDomain: "auth-development-57f34.firebaseapp.com",
  projectId: "auth-development-57f34",
  storageBucket: "auth-development-57f34.appspot.com",
  messagingSenderId: "246748498683",
  appId: "1:246748498683:web:65b91dccae68a53361fe5e"

};

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;


