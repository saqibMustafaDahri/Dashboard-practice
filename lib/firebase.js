import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAeKcY-CZP6BFwmvAPWRVMJnj19kRqEKw4",
    authDomain: "firstnext-215e7.firebaseapp.com",
    projectId: "firstnext-215e7",
    storageBucket: "firstnext-215e7.firebasestorage.app",
    messagingSenderId: "576086795478",
    appId: "1:576086795478:web:407e20c3fe6c3018f11577",
    measurementId: "G-1NQJ1FHRJ7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);