import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../public/firebase.config";
import { axiospublic } from "../Hook/useAxios";
import UseaxiosPublic from "../Hook/UseaxiosPublic";




export const AuthControl = createContext(null)
const AuthProvider = ({ children }) => {
    // const axiosPublic = UseaxiosPublic()
    const axiosJust = UseaxiosPublic()
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const signUp = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const update = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            if (currentUser) {
                const userinfo = { email: currentUser?.email }
                axiosJust.post('/jwt', userinfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data) {
                            localStorage.setItem('access-token', res.data)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setloading(false)
        })
        return () => {
            unsubsribe()
        }
    }, [])
    const info =
    {
        user,
        signUp,
        login,
        loading,
        update,
        logOut,
    }
    return (
        <AuthControl.Provider value={info} >
            {children}
        </AuthControl.Provider>
    );
};

export default AuthProvider;