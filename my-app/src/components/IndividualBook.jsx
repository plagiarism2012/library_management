import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bookcontext from '../BookContext/context';
import axios from "axios";
import "../non-components/IndividualBook.css"
import Header from "../non-components/Header";
import Footer from "../non-components/Footer.jsx";
import { Alert } from "reactstrap";

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

        const message = document.getElementById("Alert");
        message.style.visibility = "visible";

        setTimeout(function () {
            nav("/");
        }, 1000);
    }

    console.log(book);

    var stars = [];
    for (var i = 0; i < book.Rating; i++) {
        stars.push(<i class="fa-solid fa-star fa-2xl"></i>);
    }

    return (
        <div>
            <Header />
            <main class="container">

                <div class="left-column">
                    <img className="bookImg" src={book.Image} alt="NA" />
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
                            {book.tags?.map(item => { return (<button type="button" class="btn btn-outline-secondary">{item}</button>) })}
                        </div>
                    </div>


                    <div class="product-price">
                        <br />
                        <span className="numbers">Current Availibility : {book.countBook} books</span>
                    </div>

                </div>

            </main>

            <div className="editData">
                {localStorage.getItem("token") &&
                    <div className="editBookData">
                        <div class="input-group mb-3">
                            <span class="input-group-text col-sm-3"> Count</span>
                            <input class="form-control col-sm-4"
                                name="countCopy"
                                type="number"
                                min="1"
                                placeholder="Number of Copies"
                                value={book.countBook} />
                            <button className="btn btn-secondary btn-sm ml-2">Confirm</button>
                        </div>

                        <br />
                        <div>
                            <span className="content">Delete Book : </span>
                            <button className="delete" onClick={Delete}><i class="fa-solid fa-trash-can fa-xl delete"></i></button>
                        </div>
                    </div>
                }
            
                <div id="Alert" class="alert alert-danger" role="alert">
                    Book Deleted Successfully.
                </div>
            </div>
        </div>
    );
}

export default IndividualBook;

