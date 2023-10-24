import React from "react";
import {Navigate, Outlet} from 'react-router-dom'
import './Home.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function Home(){
    let user = localStorage.getItem('temp_chat')
	user = JSON.parse(user)

	if(user != null){
        return( <Navigate to="/app" />)
    }
    else{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="https://livewirenamakkal.com/"><img src="logo.jpg" alt="LiveWire Namakkal" /></a>
        </div>
        </nav>

        

        <Outlet/>
        </>
    )
    }
}

export default Home