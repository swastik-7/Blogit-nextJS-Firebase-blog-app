import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyD5RNXu9Ptyo17F3zc2S6ySIM7rvgfT9dw",
  authDomain: "blogit-69db1.firebaseapp.com",
  projectId: "blogit-69db1",
  storageBucket: "blogit-69db1.appspot.com",
  messagingSenderId: "156564964147",
  appId: "1:156564964147:web:4b952cb64557ed70c73446",
  measurementId: "G-L2T8M6RL0T"
  };


if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)


const auth  = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export {auth,db,storage,serverTimestamp}


