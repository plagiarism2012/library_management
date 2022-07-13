import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bookcontext from "../BookContext/context";
import Book from "./Book"

function BookListRender() {

    const context = useContext(Bookcontext);
    const { book, allBooks } = context;
    useEffect(() => {
        allBooks();
    }, []);


    return (
        <div>
            <button>
                <Link to="/newBook">
                    Book Form
                </Link>
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