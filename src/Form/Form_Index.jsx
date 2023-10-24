import React from "react";
import {Link} from 'react-router-dom'


import './Form_index.css'


const linkStyle = {
    textDecoration: "none",
    color: 'White'
  };

function Form_index(){
    return(
        <div className="form">
            <div className="form-content">
            <button className="btn btn-primary form-btn"><Link to='/login' style={linkStyle}>Login</Link></button>
            <h3>or</h3>
            <button className="btn btn-primary form-btn"><Link to='/signup' style={linkStyle}>Sign-up</Link></button>
            </div>
        </div>
    )
}

export default Form_index