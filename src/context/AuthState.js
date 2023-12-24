import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext' 
import { auth } from "../Components/firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

function AuthState({children}) {
    const [currentUser, setCurrentUser] = useState();
    function signIn(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        })
        return ()=> unsubscribe(); // cleanup function
    },[])
   
    const value = {
        currentUser,
        signIn
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthState
