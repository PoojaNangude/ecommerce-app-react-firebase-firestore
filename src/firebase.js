import firebase from 'firebase';
  
  const config = {
    apiKey: "AIzaSyA8CkPN3iANtry53SYImTR-hd9ke3pSBrU",
    authDomain: "fir-react-8ce62.firebaseapp.com",
    databaseURL: "https://fir-react-8ce62.firebaseio.com",
    projectId: "fir-react-8ce62",
    storageBucket: "fir-react-8ce62.appspot.com",
    messagingSenderId: "14076893112",
    appId: "1:14076893112:web:f231be9ed4defc2849a14d"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;