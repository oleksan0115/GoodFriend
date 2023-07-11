import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = { 
  apiKey : "AIzaSyA1lgDuKCJ9f0IzxjfzNlVM-RABJG0AXrI" , 
  authDomain : "goodfriends-d24d6.firebaseapp.com" , 
  projectId : "goodfriends-d24d6" , 
  storageBucket : "goodfriends-d24d6.appspot.com" , 
  messagingSenderId : "405581140600" , 
  appId : "1:405581140600:web:ef722b35f2f25a3858938d" 
};

firebase.initializeApp(firebaseConfig);

export default firebase;