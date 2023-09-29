'use client'
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { app } from "../../firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
      }

    useEffect(()=>{
        const unSub = onAuthStateChanged(auth,(user)=>{
            setUser(user)
        });
        return ()=>{
            unSub();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        updateUserProfile
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>

}

export {AuthProvider}