import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore/lite'
import{getAuth} from 'firebase/auth';
import { getFunctions } from "firebase/functions";


const firebaseConfig = {

    apiKey: "",

    authDomain: "enigma-homework.firebaseapp.com",

    projectId: "enigma-homework",

    storageBucket: "enigma-homework.appspot.com",

    messagingSenderId: "",

    appId: "",

    measurementId: ""

};


export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);

