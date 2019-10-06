import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: '',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
})

export default firebaseConfig
