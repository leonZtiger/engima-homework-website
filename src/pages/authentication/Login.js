import React, { useContext, useEffect,useState } from "react";
import classes from './style.module.scss'
import { FaFacebookSquare } from 'react-icons/fa'
import { auth } from '../../firebase/firebaseConfig.js'
import { signInWithPopup,FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, SignInMethod } from 'firebase/auth';
import { userContext } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

    const { user, setUser } = useContext(userContext)
    const [loginInfo,setLogInfo] = useState({});
    const [error,setError] = useState("");
    
    function submit(event) {
        event.preventDefault();
        
    }

    function signIn() {
 
        signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password).then((credentials) => {
           
            setUser(credentials.user);
            window.location.href ="/profile"

        }).catch((error) => {
         setError(error.message)
        })
    }

    function logginInWithGoogle() {

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            setUser(result.user);
            window.location.href ="/profile";
            
        }).catch((error) => {
           setError(error.message)
        })
        
    }
    function logginInWithFacebook() {

        const provider = new FacebookAuthProvider();

        signInWithPopup(auth, provider).then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            setUser(result.user);
            window.location.href ="/profile";
            
        }).catch((error) => {
           setError(error.message)
        })
        
    }
    useEffect(() => {
   
     
    }, [])

    return (
        <div className={classes.container}>

            <form onSubmit={(event) => submit(event)}>
                <h1>Sign in with</h1>
                
                <div className={classes.otherLogginsCon}>
                    <button onClick={() => logginInWithGoogle()}><img src={require("../../google.png")} />Google</button>
                    <button onClick={() => logginInWithFacebook()}><FaFacebookSquare className={classes.icon} />Facebook</button>
                </div>
                <input onChange={(event)=>setLogInfo({email: event.target.value})} required={!user} placeholder="Email" />
                <input onChange={(event)=>setLogInfo({password: event.target.value})} required={!user} placeholder="Password" />

                <button onClick={()=>signIn()}>Sign in</button>
                <p>dont have a account? Sign up <a href="/signup">here</a> </p>
                <h2>{error}</h2>
            </form>
        </div>);
}

export default Login; 