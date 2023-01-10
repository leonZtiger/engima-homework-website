import React, { useContext, useEffect, useState } from "react";
import classes from './style.module.scss'
import { FaFacebookSquare } from 'react-icons/fa'
import { auth } from '../../firebase/firebaseConfig.js'
import { sendSignInLinkToEmail, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { userContext } from "../../components/AuthContext";

function Login() {

    const { user, setUser } = useContext(userContext)
    const [loginInfo, setLogInfo] = useState({});
    const [error, setError] = useState("");

    function submit(event) {
        event.preventDefault();

    }
    const actionCodeSettings = {
          url: 'https://www.example.com/finishSignUp?cartId=1234',
        handleCodeInApp: false,
        dynamicLinkDomain: 'example.page.link'
    };

    function signUp() {

      /*  sendSignInLinkToEmail(auth, loginInfo.email, actionCodeSettings).then((credentials) => {

            setUser(credentials.user);
            window.location.href = "/profile"

        }).catch((error) => {
            setError(error.message)
        })*/
        if(loginInfo.password != loginInfo.Repassword)
        {

            setError("passwords do not match")
            setLogInfo({...loginInfo,password:"",Repassword:""})
            return;

        }
        if(loginInfo.password.length < 8)
        {
            setError("password must be atleast 8 characters long")
            setLogInfo({...loginInfo,password:"",Repassword:""})
            return;
        }
        createUserWithEmailAndPassword(auth, loginInfo.email, loginInfo.password).then((credentials) => {

            setUser(credentials.user);
            window.location.href = "/profile"

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
            window.location.href = "/profile";

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
            window.location.href = "/profile";

        }).catch((error) => {
            setError(error.message)
        })

    }
    useEffect(() => {


    }, [])

    return (
        <div className={classes.container}>

            <form onSubmit={(event) => submit(event)}>
                <h1>Sign up with</h1>

                <div className={classes.otherLogginsCon}>
                    <button onClick={() => logginInWithGoogle()}><img src={require("../../google.png")} />Google</button>
                    <button onClick={() => logginInWithFacebook()}><FaFacebookSquare className={classes.icon} />Facebook</button>
                </div> <h2>{error}</h2>
                <input value={loginInfo.email} onChange={(event) => setLogInfo({ ...loginInfo, email: event.target.value })} required={!user} placeholder="Email" />
                <input value={loginInfo.password} onChange={(event) => setLogInfo({ ...loginInfo, password: event.target.value })} required={!user} placeholder="Password" />
                <input value={loginInfo.Repassword} onChange={(event) => setLogInfo({ ...loginInfo, Repassword: event.target.value })} required={!user} placeholder="Retype password" />

                <button onClick={() => signUp()}>Sign up</button>
                <p>already have a account? Login <a href="/login">here</a> </p>
               
            </form>
        </div>);
}

export default Login; 