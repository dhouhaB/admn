import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from "react-router-dom";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {


    const navigate=useNavigate();

    const [error,setError]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");


  
  const handleLogin =(e)=>
  {
try 
{
  if (email ==="admin" && password === "A@12345678")
   {
navigate("/");
   }
  }
catch(err)
   {
    console.log(err)
    setError(true)
   }

}
 

  
  
  
  
  
  
  
  
  



  return (
    <>
    <div class="container">
    <div class="wrapper">




    <div class="title"><span>Welcome </span></div>





      <form onSubmit={handleLogin}>
        <div class="row">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="UserName" required onChange={e=>setEmail(e.target.value)} />
        </div>
        <div class="row">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" required onChange={e=>setPassword(e.target.value)}/>
        </div>

        {error &&
        <div class="pass"><a href="#">Wrong mail Or Password?</a></div>

}

        <div class="row button">
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
  </div>










  </>






  )
}

export default Login