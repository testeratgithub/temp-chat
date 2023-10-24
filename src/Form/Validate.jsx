import React, { useState } from "react";
import axios from "axios";

function Validate(props){
    const [checkUser,setcheckUser] = useState(0)
    if (props.form === "signup"){
        if ((props.pass && props.conpass)!== ""){
            if (props.pass !== props.conpass){
                return(
                    <h6>Both password should be same</h6>
                )
            }
        }
        if (props.username !== ""){
            const options = {
                method: 'POST',
                url: 'http://localhost:5000/checkuser',
                headers: {'Content-Type': 'text/plain'},
                data: props.username
              };
            
            axios.request(options).then((data)=>{
                setcheckUser(data.data)
            })
            // console.log("Check User : ",checkUser)
            if (checkUser === 1){
                // console.log("working")
                return(
                    <h6>Username already taken</h6> 
                )
            }            
        }
    }

}


export default Validate
