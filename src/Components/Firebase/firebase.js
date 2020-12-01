import app from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM4wuA-xvtPWxFkxo59YlZGDb1MH-NLSI",
  authDomain: "ecommerce-64cef.firebaseapp.com",
  databaseURL: "https://ecommerce-64cef.firebaseio.com",
  projectId: "ecommerce-64cef",
  storageBucket: "ecommerce-64cef.appspot.com",
  messagingSenderId: "979973243611",
  appId: "1:979973243611:web:53823432dd4cd8808b82fe",
  measurementId: "G-QH00FQW809"
};

class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth=app.auth();
    }
      // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
 
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
 
  doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;