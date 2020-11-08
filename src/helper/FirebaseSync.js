import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCUJ3yuiWYdYgH0s9VB7i99OejyYFuxakg',
  authDomain: 'hallopolice-346a6.firebaseapp.com',
  databaseURL: 'https://hallopolice-346a6.firebaseio.com',
  projectId: 'hallopolice-346a6',
  storageBucket: 'hallopolice-346a6.appspot.com',
  messagingSenderId: '191693298973',
  appId: '1:191693298973:web:7bcd5ff89b1e1ac2f2d5f4',
  measurementId: 'G-FSYEF9CLQZ',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
