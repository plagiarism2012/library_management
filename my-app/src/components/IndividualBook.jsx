import React from "react";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Bookcontext from '../BookContext/context'
import Book from "./Book";

function IndividualBook(props) {
    const location = useLocation();
    console.log(location);
    const { ID } = location.state;

    const context = useContext(Bookcontext);
    const { book, particularBook } = context;
    useEffect(() => {
        particularBook(ID);
    }, []);

    const Delete = ()=>{

    }

    console.log(book);

    return (
        <div>
            <button onClick={Delete}>
                Delete Book
            </button>
            <h1>Lost in woods</h1>
            {/* {book.map(item => (
                <Book name={item.Name} author={item.Author} id={item._id}/>
            ))} */}
        </div>
    );
}

export default IndividualBook;