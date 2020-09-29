import firebase from 'firebase/app';
import 'firebase/analytics';
import clientCredentials from '../../firebaseconfig.json';

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
  if (process.env.NODE_ENV === 'production') {
    firebase.analytics();
  }
}
