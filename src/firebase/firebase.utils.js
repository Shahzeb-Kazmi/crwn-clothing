import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCrRwqWNsOy1E_-4aVDzNIneIFhfzxl8aE",
    authDomain: "crwn-db-5da85.firebaseapp.com",
    databaseURL: "https://crwn-db-5da85.firebaseio.com",
    projectId: "crwn-db-5da85",
    storageBucket: "crwn-db-5da85.appspot.com",
    messagingSenderId: "981888688623",
    appId: "1:981888688623:web:d5b9c58b038af19ad4961a",
    measurementId: "G-5ZF1RN42FH"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log('error creaating user', error.message);
      }
    }
    return userRef;
  };

 

  firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;

