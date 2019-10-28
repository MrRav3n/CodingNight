import './App.css'
import {
    Link
} from "react-router-dom";
import React from 'react'
//Navbar with account address
function Navbar({account}) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand text-center" to="/"><h2>HelpMePlz!</h2></Link>
                <span className="text-white ml-auto ">
                            <h4 className="text-white d-none d-lg-block">Your account: {account} </h4>
                        </span>
            </div>
        </nav>
    );
}

export default Navbar