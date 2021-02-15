import firebase from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAIHfeH3sWePuskEqQ_dsoWZEKm8jCKHWM",
    authDomain: "test3-dashboard.firebaseapp.com",
    projectId: "test3-dashboard",
    storageBucket: "test3-dashboard.appspot.com",
    messagingSenderId: "657825830901",
    appId: "1:657825830901:web:5c704afba2730e1ba332bc"
})

export const auth = app.auth();
export default app;

// const firebaseConfig = {
//     apiKey: "AIzaSyAIHfeH3sWePuskEqQ_dsoWZEKm8jCKHWM",
//     authDomain: "test3-dashboard.firebaseapp.com",
//     projectId: "test3-dashboard",
//     storageBucket: "test3-dashboard.appspot.com",
//     messagingSenderId: "657825830901",
//     appId: "1:657825830901:web:5c704afba2730e1ba332bc"
// };

// const fire = firebase.initializeApp(firebaseConfig);
// export default fire;