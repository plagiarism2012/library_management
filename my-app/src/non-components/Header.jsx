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


            <nav class="navbar navbar-light">
                <Link to="/"><h1 id="Library">Library </h1></Link>

                {/* <form class="form-inline mx-auto">
                    <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" name="search" value={user.search} />
                    <button class="btn btn-secondary btn-md my-2 my-sm-0" type="submit">Search</button>
                </form> */}

                <div className="homeButtons">
                    {localStorage.getItem("token") && <button onClick={Logout} type="button" class="btn btn-secondary btn-lg homeButton">logout</button>}
                    {localStorage.getItem("token") && <button onClick={Check} type="button" class="btn btn-secondary btn-lg homeButton">Book Form</button>}
                    {!localStorage.getItem("token") && <button onClick={LoginClick} type="button" class="btn btn-secondary btn-lg homeButton">User Login</button>}
                    {localStorage.getItem("token") && <button type="button" class="btn btn-secondary btn-lg homeButton"><i class="fa-solid fa-user"></i></button>}
                </div>
            </nav>

            <div id="Alert3" class="alert alert-danger" role="alert">
                Logged Out Successfully.
            </div>
        </header>
    );
}

export default Header;