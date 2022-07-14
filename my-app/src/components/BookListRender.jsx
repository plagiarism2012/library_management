import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bookcontext from "../BookContext/context";
import Book from "./Book";


function BookListRender() {
    const nav = useNavigate();

    const context = useContext(Bookcontext);
    const { book, allBooks } = context;
    useEffect(() => {
        allBooks();
    }, []);

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

    const Check = () => {
        if (localStorage.getItem('token')) {
            nav("/newBook")
        }
        else {
            alert("Need to Login first!");
            nav("/");
        }
    }

    


    return (
        <div>
            {localStorage.getItem("token") && <button onClick={Logout}>logout</button>}
            {localStorage.getItem("token") && <button onClick={Check}>Book Form</button>}
            {!localStorage.getItem("token") && <button>
                <Link to="/login">
                    User Login
                </Link>
            </button>}
            {localStorage.getItem("token") && <button>Logged In</button>}
            
            {book.map(item => (
                <Book name={item.Name} author={item.Author} id={item._id} image={item.Image} />
            ))}
        </div>
    );
}

export default BookListRender;