import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../non-components/Header";
import Footer from "../non-components/Footer";

const details = {
    Name: "",
    Author: "",
    Image: "",
    Rating: 0,
    tags: [],
    countBook: 0
};


function BookForm() {

    let nav = useNavigate();
    const [contact, setContact] = useState({
        name: "",
        author: "",
        image: "",
        rating: "",
        tags: [],
        countBook: ""
    });

    function update(event) {
        const { name, value } = event.target;

        if (name === "tags") {
            const val = value.split(",");
            setContact((prevValue) => {
                return {
                    ...prevValue,
                    tags: val
                };
            });
        }

        if (name !== "tags") {
            setContact((prevValue) => {
                return {
                    ...prevValue,
                    [name]: value
                };
            });
        }
    }

    async function onSubmit(event) {

        event.preventDefault();
        details.Name = contact.name;
        details.Author = contact.author;
        details.Image = contact.image;
        details.Rating = contact.rating;
        details.tags = contact.tags;
        details.countBook = contact.countCopy;



        await axios
            .post("http://localhost:5500/newBook/", details, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))


        const message = document.getElementById("bookAddAlert");
        message.style.visibility = "visible";

        setTimeout(function () {
            setContact(() => {
                return {
                    name: "",
                    author: "",
                    image: "",
                    rating: "",
                    tags: [],
                    countCopy: ""
                };
            });
            nav("/");
        }, 1000);

    }

    return (
        <div>
            <Header />
            <div className="formContainer">
                <h1>Add New Book</h1>
                <form className="bookForm" onSubmit={onSubmit}>
                    <div class="input-group mb-3">
                        <span class="input-group-text col-sm-2" >Book Name</span>
                        <input class="form-control col-sm-5" onChange={update}
                            type="text"
                            name="name"
                            placeholder="Book Name"
                            value={contact.name} />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text col-sm-2">Book Author</span>
                        <input class="form-control col-sm-5" onChange={update}
                            name="author"
                            type="text"
                            placeholder="Book Author"
                            value={contact.author} />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text col-sm-2" >Image URL</span>
                        <input class="form-control col-sm-5" onChange={update}
                            name="image"
                            placeholder="Book Image URL"
                            value={contact.image} />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text col-sm-2" >Rating</span>
                        <input class="form-control col-sm-5" onChange={update}
                            type="number"
                            min="0"
                            max="5"
                            pattern="[0-5]*"
                            name="rating"
                            placeholder="Book Rating (0-5)"
                            value={contact.rating} />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text col-sm-2" >Tags</span>
                        <input class="form-control col-sm-5" onChange={update}
                            name="tags"
                            type="text"
                            placeholder="Tags seperated by ,(comma)"
                            value={contact.tags} />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text col-sm-2">Book Count</span>
                        <input class="form-control col-sm-5" onChange={update}
                            name="countCopy"
                            type="number"
                            min="1"
                            placeholder="Number of Copies"
                            value={contact.countCopy} />
                    </div>
                    <button type="submit" class="btn btn-secondary"> Submit</button>
                </form>

                <div id="bookAddAlert" class="alert alert-success" role="alert">
                    Book Added Successfully.
                </div>
            </div>
        </div>
    );
}

export default BookForm;

export { details };



{/* <input
                    onChange={update} z
                    type="text"
                    name="name"
                    placeholder="Book Name"
                    value={contact.name}
                />
                <input
                    onChange={update}
                    name="author"
                    type="text"
                    placeholder="Book Author"
                    value={contact.author}
                />
                <input
                    onChange={update}
                    name="image"
                    placeholder="Book Image URL"
                    value={contact.image}
                />
                <input
                    onChange={update}
                    type="number"
                    min="0"
                    max="5"
                    pattern="[0-5]*"
                    name="rating"
                    placeholder="Book Rating (0-5)"
                    value={contact.rating}
                />
                <input
                    onChange={update}
                    name="tags"
                    type="text"
                    placeholder="Tags seperated by ,(comma)"
                    value={contact.tags}
                />
                <input
                    onChange={update}
                    name="countCopy"
                    type="number"
                    min="1"
                    placeholder="Number of Copies"
                    value={contact.countCopy}
                /> */}