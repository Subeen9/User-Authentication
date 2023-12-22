import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext' 
import {auth} from "../Components/firebase"

function AuthState({children}) {
    const [currentUser, setCurrentUser] = useState();
    function Signin(email, password){
        return auth.createUserWithEmailAndPassword(email,password);
    }
    useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanged(user =>{
            setCurrentUser(user);
        })
        return ()=> unsubscribe(); // cleanup function
    },[])
   
    const value = {
        currentUser,
        Signin
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthState