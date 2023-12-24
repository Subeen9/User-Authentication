import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA6_SUy3eiBf1L5LPUt7I2kUQtv8sClT_w",
  authDomain: "auth-development-57f34.firebaseapp.com",
  projectId: "auth-development-57f34",
  storageBucket: "auth-development-57f34.appspot.com",
  messagingSenderId: "246748498683",
  appId: "1:246748498683:web:65b91dccae68a53361fe5e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
