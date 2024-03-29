import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../Firebase/Firebase.config'

export const AuthContext = createContext(null)

const auth = getAuth(app)
const Authprovider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

const createUser = (email, password) =>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) =>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
}

const logout = () =>{
  setLoading(true)
  return signOut(auth)
}

useEffect(() =>{
  const unSubscribe = onAuthStateChanged(auth, loggedUser =>{
    console.log("yes logged")
    setUser(loggedUser)
    setLoading(false)
  })

  return () => {
    unSubscribe()
  }
}, [])


const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logout
}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default Authprovider