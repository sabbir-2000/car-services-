// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNlswiIS4IwvHAKmHiN2K2T6T0PM9I1yI",
    authDomain: "genius-car-services-9a776.firebaseapp.com",
    projectId: "genius-car-services-9a776",
    storageBucket: "genius-car-services-9a776.appspot.com",
    messagingSenderId: "1052167537201",
    appId: "1:1052167537201:web:66cb769445d2dffc210b10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth