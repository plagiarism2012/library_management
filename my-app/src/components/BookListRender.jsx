import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bookcontext from "../BookContext/context";
import Book from "./Book"

function BookListRender() {

    const nav = useNavigate();

    const context = useContext(Bookcontext);
    const { book, allBooks } = context;
    useEffect(() => {
        allBooks();
    }, []);

    const Logout = () =>{
        if(localStorage.getItem('token')){
            localStorage.setItem('token', "");
            alert("Logged out sucessfully!");
        }
        else{
            alert("Need to Login first!");
        }
    }

    const Check = ()=>{
        if(localStorage.getItem('token')){
            nav("/newBook")
        }
        else{
            alert("Need to Login first!");
            nav("/");
        }
    }


    return (
        <div>
            <button onClick={Logout}>
                logout
            </button>
            <button onClick={Check}>
                Book Form
            </button>
            <button>
                <Link to="/login">
                    User Login
                </Link>
            </button>
            {book.map(item => (
                <Book name={item.Name} author={item.Author} id={item._id} />
            ))}
        </div>
    );
}

export default BookListRender;