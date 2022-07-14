import React from "react";
import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bookcontext from '../BookContext/context';
import axios from "axios";
import Book from "./Book";

function IndividualBook(props) {
    const nav = useNavigate();
    const location = useLocation();
    console.log(location);
    const { ID } = location.state;

    const context = useContext(Bookcontext);
    const { book, particularBook } = context;
    useEffect(() => {
        particularBook(ID);
    }, []);

    async function Delete() {
        await axios
            .delete("http://localhost:5500/deleteBook/" + ID, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
            })
            .then(res => console.log(res.data))

        alert("Deleted Successfully");
        nav("/");
    }

    console.log(book);

    return (
        <div>
            {localStorage.getItem("token") && <button onClick={Delete}>Delete Book</button>}
            <h1>Lost in woods</h1>
            {/* {book.map(item => (
                <Book name={item.Name} author={item.Author} id={item._id}/>
            ))} */}
        </div>
    );
}

export default IndividualBook;