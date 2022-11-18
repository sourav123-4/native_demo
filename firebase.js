import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC--AUzf-OX5iawI9CqO5tt5rdKEG0EKKk",
    authDomain: "ecommerce-a4b71.firebaseapp.com",
    projectId: "ecommerce-a4b71",
    storageBucket: "ecommerce-a4b71.appspot.com",
    messagingSenderId: "460048385141",
    appId: "1:460048385141:web:86f3b78e4d53d1b9e5e43c",
    measurementId: "G-Q07HF46PSV"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);