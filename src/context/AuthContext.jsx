import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth'
import {auth, db} from '../services/firebase'
import {doc,setDoc} from 'firebase/firestore'
const AuthContext = createContext()
export function AuthContextProvider ({children}){
    const [user,setUser] = useState({})
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (curretUser)=>{
            setUser(curretUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    function signup(email,password){
       createUserWithEmailAndPassword(auth,email,password)
       setDoc(doc(db,"users",email),{
        favShows: []
       })
    }
    function login(email,password){
       return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(email,password){
        return signOut(auth)
    }
    return (
        <AuthContext.Provider value={{user, login,logout, signup}}>
        {children}
        </AuthContext.Provider>
    )
}
export function UserAuth(){
    return useContext(AuthContext)
}