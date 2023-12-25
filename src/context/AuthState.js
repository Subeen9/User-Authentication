import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext' 
import { auth } from "../Components/firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';

function AuthState({children}) {
    const [currentUser, setCurrentUser] = useState();
    function signIn(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout(){
        return signOut(auth);
    }
    function resetPassword(email){
        return sendPasswordResetEmail(auth,email);
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        })
        return ()=> unsubscribe(); // cleanup function
    },[])
   
    const value = {
        currentUser,
        signIn,
        login,
        logout,
        resetPassword
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthState
