import firebase from 'firebase';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyBCuC6AarHqPR-9na2A1dIMGFDW2ECyn14',
  authDomain: 'play-bag.firebaseapp.com',
  databaseURL:
    'https://play-bag-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'play-bag',
  storageBucket: 'play-bag.appspot.com',
  messagingSenderId: '314101417780',
  appId: '1:314101417780:web:ce3b54f7efa7a220aac761',
  measurementId: 'G-GF2RKTBJRR',
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const auth = app.auth();
export { auth };
export default app;