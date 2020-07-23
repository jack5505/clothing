import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAikOMG3ztEpWVe3C0wSDK2cPP7zNdu6oc",
    authDomain: "clothes-1af06.firebaseapp.com",
    databaseURL: "https://clothes-1af06.firebaseio.com",
    projectId: "clothes-1af06",
    storageBucket: "clothes-1af06.appspot.com",
    messagingSenderId: "479785078099",
    appId: "1:479785078099:web:5ede1127b52e22bd39a5a6",
    measurementId: "G-Y7LJR6JZQR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
