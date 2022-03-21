
import  {initializeApp} from "firebase/app";
import{getStorage ,ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import {getFirestore,collection,addDoc} from 'firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyCSrg4Wtx1oji3yl8UgmXpAYqEBwlKzCpw",
  authDomain: "firegram-60128.firebaseapp.com",
  projectId: "firegram-60128",
  storageBucket: "firegram-60128.appspot.com",
  messagingSenderId: "728160613112",
  appId: "1:728160613112:web:dbb8220d0ef433abe3810d"
};

const app = initializeApp(firebaseConfig);

const firegramStorage = getStorage(app);
const firegramFirestore = getFirestore(app);
// const timestamp = serverTimestamp;
export {firegramFirestore,firegramStorage,ref,uploadBytesResumable,getDownloadURL,collection ,addDoc} ;