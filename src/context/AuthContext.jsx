import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth'
import {auth, db} from '../services/firebase'
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
    }
    function login(email,password){
        signInWithEmailAndPassword(auth,email,password)
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