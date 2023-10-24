import React from "react";
import ReactDOM  from "react-dom/client";


import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./Home";
import Login from './Form/Login'
import Signup from './Form/Signup'
import DirectChatPage from "./App/App";
import Form_index from "./Form/Form_Index";

function HomePage(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route index element={<Form_index/>} />
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<Signup/>} />
            </Route>
            <Route path="app" element={<DirectChatPage/>} />
        </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HomePage/>
);