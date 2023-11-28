import {initializeApp} from 'firebase/app';
import {auth} from firebase/auth;
const firebaseConfig ={
    apiKey: process.env.React_App_ApiKey,
  authDomain: process.env.React_App_AuthDomain,
  projectId: process.env.React_App_ProjectId,
  storageBucket: process.env._React_App_StorageBucket,
  messagingSenderId: process.env.React_App_MessagingSenderId,
  appId:process.env.React_App_AppId

}
const app = initializeApp(firebaseConfig);
export const authorization = app.auth();
