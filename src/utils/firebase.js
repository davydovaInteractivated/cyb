// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc, setDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw4TR-Cax1K_iK30iMaBLrpsUZBEigfBo",
  authDomain: "cyb-db.firebaseapp.com",
  projectId: "cyb-db",
  storageBucket: "cyb-db.appspot.com",
  messagingSenderId: "542544668183",
  appId: "1:542544668183:web:e84807d50fb275dc2bde52"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

/**
 * Create User Doc. From Auth
 * @param {*} userAuth
 * @returns user doc. ref.
 */
export const createUserDocFromAuth = async (userAuth, userInfo) => {
    if (!userAuth) return;

    const {
        displayName,
        email,
    } = userAuth;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    const isUserExist = userSnapShot.exists();
    const createdAt = new Date();

    if (!isUserExist) {
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...userInfo,
            });
        } catch (error) {
            console.error(error);
        }
    }

    return userDocRef;
};

/**
 * Create Auth User With Email And Password
 * @param {*} email
 * @param {*} password
 * @returns respponse
 */
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Sign In Auth User With Email And Password
 * @param {*} email
 * @param {*} password
 * @returns respponse
 */
 export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};
