import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import { login,signup } from '../../firebase'
import netflix_spiner from '../../assets/netflix_spinner.gif'
const Login = () => {
  const [signState,setSignState]=useState("Sign In")
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password, setPasswoed]=useState();
  const [loading, setLoading]=useState(false)
  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.error("Authentication Error:", error);
      alert(error.message); // Optional: show error to the user
    } finally {
      setLoading(false);
    }
  };
  

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spiner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} className='login-inp' type="text" placeholder='UserName' />:<></>}
        <input  value={email} onChange={(e)=>{setEmail(e.target.value)}}className='login-inp' type="email" placeholder='Email Or Mobile Number' />
        <input value={password} onChange={(e)=>{setPasswoed(e.target.value)}}  className='login-inp' type="password" placeholder='Password' />
        <button onClick={user_auth} type='submit' className='sign-up'>{signState}</button>
         <div className="form-help">
              <div className="remember">
              <input className='remember-inp' type="checkbox" />
              <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
        </div>
        <div className="form-switch">
          {signState==="Sign In"?<p>New to Netflix?<span onClick={()=>{setSignState("Sign Up")}} >sign Up Now</span ></p>:<p>Already Have a account?<span onClick={()=>{setSignState("Sign In")}}>sign In Now</span></p>}
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login