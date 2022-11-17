import React, { useState } from 'react'
import './loginn.css'
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";




const Loginn = () => {
    const [error,setError]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");
    
    const   navitage = useNavigate();
    /*
    const handleLogin =(e)=>
    {
        e.preventdefault()  
   
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
 
    const user = userCredential.user;
    console.log (user)
   
    navigate("/");
    alert("I am an alert box!");

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  
  }
   */

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
       
        navitage("/user")
      })
      .catch((error) => {
        setError(true);
      });
  };




















  return (
    <div>
        <div className="container-login">
        <div className="box">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                
                <div>
                    <i className="fas fa-user"></i>
            

                    <input className="inputstyle" type="email" placeholder="Enter Username" required onChange={(e)=>setEmail(e.target.value)}  />
                </div>
             
                <div>
                    <i className="fas fa-lock"></i>
                    <input  className="inputstyle"  type="password" placeholder="Enter Password" required onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <a href="#" className="forgot">Forgot Password?</a>
                <input className="inputstyle1"  type="submit" value="Login"/>
                {error ?
    <span>Worng email or password!</span>:null

}
            </form>
      
        </div>
    </div>
    </div>
  )
}

export default Loginn