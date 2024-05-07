import { createContext } from 'react';
import {GoogleAuthProvider ,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebaseConfig';
import { useState } from 'react';
import { useEffect } from 'react';
export const authContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        console.log('youser is In this web', currentUser);
            setUser(currentUser);
            setLoading(false);
            
        });
        return ()=>{
            unSubscribe();
        }
    },[])


    const authInFo = {
                        user, 
                        loading, 
                        createUser,
                        signInUser, 
                        signInWithGoogle,
                        logOut
                    };
    return (
        <authContext.Provider value={authInFo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
