import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDAqn0iAl8Px9xO7NuBUrNJ4EJ9Bcukr78",
  authDomain: "login-auth-git.firebaseapp.com",
  databaseURL: "https://login-auth-git.firebaseio.com",
  projectId: "login-auth-git",
  storageBucket: "login-auth-git.appspot.com",
  messagingSenderId: "822924112792",
  appId: "1:822924112792:web:090f5284ccb158445ab1ed",
  measurementId: "G-SXDTCF401J",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // returns a query reference

  const snapShot = await userRef.get();

  // Add user to db if snapshot does not exist
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      
    } catch (error) {
      console.log("Error creating user,", error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Set to always use google pop up when we use the GoogleAuthProvider for
// authentication and sign in
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
