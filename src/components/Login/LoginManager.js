import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
        const {displayName, email} = res.user;
        const signedInUser = {
          name: displayName,
          email: email
        };
        return signedInUser;
    })
    .catch(err => {
        console.log(err);
        console.log(err.message);
    })
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        name: '',
        email: ''
      }
      return signedOutUser;
    }).catch(err => {

    });
  }