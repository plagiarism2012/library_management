import React from "react";
import { useNavigate } from "react-router-dom";


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
        if (localStorage.getItem('token')) {
            localStorage.setItem('token', "");
            alert("Logged out sucessfully!");
            window.location.reload();
        }
        else {
            alert("Need to Login first!");
        }
    }

    return (
        <header>
            <h1>Library</h1>

            <div className="homeButtons">
                {localStorage.getItem("token") && <button onClick={Logout} type="button" class="btn btn-secondary btn-lg homeButton">logout</button>}
                {localStorage.getItem("token") && <button onClick={Check} type="button" class="btn btn-secondary btn-lg homeButton">Book Form</button>}
                {!localStorage.getItem("token") && <button onClick={LoginClick} type="button" class="btn btn-secondary btn-lg homeButton">User Login</button>}
                {localStorage.getItem("token") && <button type="button" class="btn btn-secondary btn-lg homeButton"><i class="fa-solid fa-user"></i></button>}
            </div>
        </header>
    );
}

export default Header;