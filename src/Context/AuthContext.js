import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../Firebase/firebase';
import app from '../Firebase/firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const [currentUser, setcurrentUser] = useState();
    const [Loading, setLoading] = useState(true);

    function signup(username, email, password) {
        return auth.createUserWithEmailAndPassword(email, password).then((user) => {
            user.user.updateProfile({
                displayName: username
            })
        })
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setcurrentUser(user)
            setLoading(false)
        });

        return unsubscribe;
    }, [])


    const value = {
        signup,
        login,
        logout,
        currentUser,
    }
    return (
        <AuthContext.Provider value={value}>
            {!Loading && children}</AuthContext.Provider>
    );
}