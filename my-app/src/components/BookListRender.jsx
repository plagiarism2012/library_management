import React, { useContext, useState, useEffect } from "react";
import Bookcontext from "../BookContext/context";
import Footer from "../non-components/Footer";
import Header from "../non-components/Header";
import Book from "./Book";


function BookListRender() {


    const context = useContext(Bookcontext);
    const { book, allBooks } = context;
    useEffect(() => {
        allBooks();
    }, []);

    return (
        <div>
            <Header />
            
            {Array.isArray(book) ? book.map(item => (
                <Book name={item.Name} author={item.Author} id={item._id} image={item.Image} />
            )) : []}
        </div>
    );
}

export default BookListRender;