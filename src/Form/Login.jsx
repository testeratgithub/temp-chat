import React,{useState} from "react";
import axios from "axios";
import './signup.css'
import { Navigate, useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate()
    const [Username,setUsername] = useState("")
    const [Password,setPassword] = useState("")
    const [Redirect,setRedirect] = useState(false)

    // console.log(Username,Password)
    let log = ()=>{
        const options = {
            method: 'POST',
            url: 'https://chat-server-uwwa.onrender.com/checklogin',
            headers: {'Content-Type': 'text/plain'},
            data: {"name":Username,"pass":Password}
          };

          axios.request(options).then((data)=>{
            console.log(data.data)
            if (data.data == 1){
                localStorage.setItem("temp_chat",JSON.stringify({user:Username,pass:Password}))
                setRedirect(true)
            }
            else{
                alert("Invalid Username or Password")
            }
            
        })
    }

    if (Redirect){
        navigate("/app")
    }
    
    let user = localStorage.getItem('temp_chat')
	user = JSON.parse(user)

	if(user != null){
        return( <Navigate to="/app" />)
    }
    else{
    return(
        <>
        <div className="login">
            <form action="/app">
                <div className="mb-3 mt-3">
                    <label htmlFor="Username" className="form-label">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter Username" name="username" onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                    <h6> <input className="form-check-input" type="checkbox" name="remember" /> Remember me </h6>
                    </label>
                </div>
                <button type="button" className="btn btn-primary" onClick={log}>Login</button>
            </form>
        </div>
        </>
    )
    }
}

export default Login