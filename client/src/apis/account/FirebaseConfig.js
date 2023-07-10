import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

// const firebaseConfig = {
// 	apiKey: "AIzaSyCltJHu0dg9ynSWyyXkJdt4TDbnUMXvXy0",
// 	authDomain: "dev-whitelabel-app.firebaseapp.com",
// 	projectId: "dev-whitelabel-app",
// 	storageBucket: "dev-whitelabel-app.appspot.com",
// 	messagingSenderId: "994635593718",
// 	appId: "1:994635593718:web:50c5c80ab5bbf5fae239d7",
// 	measurementId: "G-YPRGD4K5GW"
// };

const firebaseConfig = { 
  apiKey : "AIzaSyA1lgDuKCJ9f0IzxjfzNlVM-RABJG0AXrI" , 
  authDomain : "goodfriends-d24d6.firebaseapp.com" , 
  projectId : "goodfriends-d24d6" , 
  storageBucket : "goodfriends-d24d6.appspot.com" , 
  messagingSenderId : "405581140600" , 
  appId : "1:405581140600:web:ef722b35f2f25a3858938d" 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;