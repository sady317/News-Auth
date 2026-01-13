import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const[loading,setLoading]=useState(false)
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider()

  const handleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handleGithubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const handleRegisterWithEmailAndPass=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   
  }
  const handleLogInWithEmailAndPass=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   
  }



  const handleLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    handleLogin,
    user,
    handleLogOut,
    handleRegisterWithEmailAndPass,
    loading,
    handleLogInWithEmailAndPass,
    handleGithubLogin
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
