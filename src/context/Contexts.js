import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase';





export const Authcontext=createContext()
const auth=getAuth(app);
const Contexts = ({children}) => {
    
   
   const provider=new GoogleAuthProvider()
    
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)


    const googlelogin=()=>{
        return signInWithPopup(auth,provider)
    }

    const logout=()=>{
        return signOut(auth);
    }
    const emailpass=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // useEffect(()=>{
    //     const unsubscribe=onAuthStateChanged(auth,currentUser=>{
    //         setUser(currentUser);
           
    //         console.log('auth state changed ', currentUser);
    //     })
    //     return ()=>{
    //          unsubscribe();
    //     }
    // },[])
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser)
            setLoading(false)
        })
    
        return()=>{
            unsubscribe();
        }
    },[])
    
    
    const info={user,googlelogin,emailpass,logout,loading}
    return (
        <div>
            <Authcontext.Provider value={info}>
             {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Contexts;