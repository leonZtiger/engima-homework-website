import React, { createContext, useEffect, useState } from "react"
import { Context } from "react"
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig.js'


export const userContext = createContext();


const AuthContext = props => {

    

    const [authentication, setAuthenticationt] = useState();
    const [user, setUser] = useState();

    const provider = new GoogleAuthProvider();

    function signIn(email, password) {

        signInWithEmailAndPassword(auth, email, password).then((credentials) => {

            setUser(credentials.user);

        }).catch((error) => {

        })

    }
    function createAccount(email, password) {
        createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
            setUser(credentials.user)
        }).catch((error) => {

        })

    }
   
    function signOut() {

        signOut(auth).then(() => {

        }).catch((error) => {

        })
    }

    useEffect(()=>{

        auth.onAuthStateChanged((credentials)=>{
            setUser(credentials);
        })
    
    },[])

    const values = {
        authentication,
        user,
        setUser
    }

    return (
        <userContext.Provider value={values}>
            {props.children}
        </userContext.Provider>
    )
}
export default AuthContext;