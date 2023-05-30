import { useRef } from "react";
import React from 'react';  
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
      e.preventDefault();
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          console.log(userCredential)
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert (errorMessage)
        });
      };

  const signIn = (e) => {
    e.preventDefault();
    
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert (errorMessage)
      });
  };

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder='Password' type='password' />
            <button onClick={signIn} type='submit'>Sign In </button>     
            
            <h4>
              <span className='signupScreen__gray'>New to Netflix? </span>
              <span onClick={register} className='signupScreen__link'>Sign Up now. </span>
            </h4>
        </form>
    </div>
  )
}

export default SignupScreen;