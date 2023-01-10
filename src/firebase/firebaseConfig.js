import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore/lite'
import{getAuth} from 'firebase/auth';
import { getFunctions } from "firebase/functions";


const firebaseConfig = {

    apiKey: "AIzaSyBQ9s14iH1HCKZJebodpMex2kS7Bxyx_SE",

    authDomain: "enigma-homework.firebaseapp.com",

    projectId: "enigma-homework",

    storageBucket: "enigma-homework.appspot.com",

    messagingSenderId: "593199837146",

    appId: "1:593199837146:web:57fe7e583875dac2c49ae3",

    measurementId: "G-KX28074L9K"

};


export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);

