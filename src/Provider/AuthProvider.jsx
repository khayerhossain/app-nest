import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };
    const createUser=(email,password)=>{
        setLoading(true);   
       return createUserWithEmailAndPassword(auth,email,password);
    };
    const signOutUser=()=>{
        return signOut(auth);
    };
    const provider=new GoogleAuthProvider;
    const signInWithGoogle=()=>{
         return signInWithPopup(auth,provider);
    };

    const updatedUser=(updatedData)=>{
return updateProfile(auth.currentUser,updatedData)
    };

    const resetPassword=(email)=>{
      setLoading(true)
      return sendPasswordResetEmail(auth,email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          // console.log('user state changed', currentUser);
          setUser(currentUser);
          setTimeout(() => {
            setLoading(false);
          }, 3000); 
        });
        return () => unsubscribe();
      }, []);
      

    const userInfo={
        signOutUser,
        user,
        signInUser,
        createUser,
        loading,
        setLoading,
        signInWithGoogle,
        updatedUser,
        setUser,
        resetPassword    
    };
    return (
        <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
      
    );
};

export default AuthProvider;