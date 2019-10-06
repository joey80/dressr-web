import React, { useEffect, useState, createContext } from 'react'
import firebaseConfig from './firebaseConfig'

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
}
