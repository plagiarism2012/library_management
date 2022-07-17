import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Bookcontext from "../BookContext/context";


function Header() {

    const nav = useNavigate();
    const Check = () => {
        if (localStorage.getItem('token')) {
            nav("/newBook")
        }
        else {
            alert("Need to Login first!");
            nav("/");
        }
    }

    function LoginClick() {
        nav("/login");
    }

    const Logout = () => {
        localStorage.setItem('token', "");

        const message = document.getElementById("Alert3");
        message.style.visibility = "visible";

        setTimeout(function () {
            message.style.visibility = "hidden";
            nav("/");
        }, 1000);

        // window.location.reload();
    }



    return (
        <header>


            <nav class="navbar navbar-expand-md navbar-light">
            <div class="container-fluid">
                <a href="/" id="Library"><h1 >Library </h1></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="homeButtons ml-auto">
                        {localStorage.getItem("token") && <button onClick={Logout} type="button" class="btn btn-secondary btn-lg homeButton">logout</button>}
                        {localStorage.getItem("token") && <button onClick={Check} type="button" class="btn btn-secondary btn-lg homeButton">Add Book</button>}
                        {!localStorage.getItem("token") && <button onClick={LoginClick} type="button" class="btn btn-secondary btn-lg homeButton">User Login</button>}
                        {localStorage.getItem("token") && <button type="button" class="btn btn-secondary btn-lg homeButton"><i class="fa-solid fa-user"></i></button>}
                    </div>
                </div>
            </div>
            </nav>

            <div id="Alert3" class="alert alert-danger" role="alert">
                Logged Out Successfully.
            </div>
        </header>
    );
}

export default Header;