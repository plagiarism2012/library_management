import React from "react";
import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bookcontext from '../BookContext/context';
import axios from "axios";
import "../non-components/IndividualBook.css"
import Header from "../non-components/Header";

function IndividualBook(props) {
    const nav = useNavigate();
    const location = useLocation();
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

    var stars = [];
    for(var i=0;i<book.Rating;i++){
        stars.push(<i class="fa-solid fa-star fa-2xl"></i>);
    }

    return (
        <div>
        <Header/>
        <main class="container">

            {/* Image */}
            <div class="left-column">
                <img src={book.Image} alt="NA" />
            </div>

            <div class="right-column">

                <div class="product-description">
                    <h1>{book.Name}</h1>
                    <h3>{book.Author}</h3>
                    <span>{stars}</span>
                    <p className="description">Description</p>
                </div>


                <div class="product-configuration">
                    <div class="cable-config">
                        <span>Tags : </span>
                        {book.tags?.map(item => {return(<button type="button" class="btn btn-outline-secondary">{item}</button>)})}
                    </div>
                </div>


                <div class="product-price">
                    
                    <br/>
                    <span className="numbers">Current Availibility : {book.countBook} books</span>
                </div>
            </div>
        </main>
        </div>
    );
}

export default IndividualBook;

// {localStorage.getItem("token") && <button onClick={Delete}>Delete Book</button>}