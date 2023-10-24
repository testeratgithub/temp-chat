import React from "react";
import axios from 'axios'
import { useState } from "react";
import {useNavigate} from "react-router-dom"

import Validate from "./Validate";
import './signup.css'


function Signup(){

    const [Username,setUsername] = useState('')
    const [Firstname,setFirstname] = useState('')
    const [Lastname,setLastname] = useState('')
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [Conpassword,setConpassword] = useState('')
    const [Rememberme,setRememberme] = useState(false)
    const [Redirect,setRedirect] = useState(false)
    const navigate = useNavigate()

    if (Redirect){
        navigate("/app")
    }
    // console.log(Username,Firstname,Lastname,Email,Password,Conpassword,Rememberme)
    function on_sub(){
        const options = {
            method: 'POST',
            url: 'https://chat-server-uwwa.onrender.com/signup',
            headers: {'Content-Type': 'text/plain'},
            data: {"name":Username,"pass":Password,"con_pass":Conpassword,"mail":Email,"fn":Firstname,"ln":Lastname}
          };
        
        axios.request(options).then((data)=>{
            console.log(data.data)
            if (data.data == 1){
                localStorage.setItem("temp_chat",JSON.stringify({user:Username,pass:Password}))
                setRedirect(true)
            }
            else{
                alert("Error Signing up\nIf you have account please log_in")
            }
        })

    }
    return(
        <>
        <div className="signup">
        <div className="login">
            <form>
                <Validate form="signup" pass={Password} conpass={Conpassword} username={Username} />
                <div className="mb-3 mt-3">
                    <label htmlFor="Username" className="form-label">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter Username" name="username" onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="firstname" className="form-label">First Name:</label>
                    <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" name="firstname" onChange={(e)=>setFirstname(e.target.value)} required />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="lastname" className="form-label">Last Name:</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" name="lastname" onChange={(e)=>setLastname(e.target.value)} required />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Conform Password:</label>
                    <input type="password" className="form-control" id="pwd_a" placeholder="Enter password Again" name="repswd" onChange={(e)=>setConpassword(e.target.value)} required />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                    <h6> <input className="form-check-input" type="checkbox" name="remember" onClick={(e)=>setRememberme(!Rememberme)} /> Remember me </h6>
                    </label>
                </div>
                <button type="button" className="btn btn-primary" onClick={on_sub}>Sign up</button>
            </form>
        </div>
        </div>
        </>
    )

    
}

export default Signup