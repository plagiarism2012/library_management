import React, { useState, useEffect } from "react";
import "../non-components/BookForm.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { token } from "./Login";

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

    console.log(localStorage.getItem('token'));



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

        await axios
            .post("http://localhost:5500/newBook/", details, {
                headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}
            })
            .then(res => console.log(res.data))

        nav("/");

    }

    return (
        <div className="container">
            <h1>Add New Book</h1>
            <p>{contact.email}</p>
            <form onSubmit={onSubmit}>
                <input
                    onChange={update}
                    name="name"
                    placeholder="Book Name"
                    value={contact.name}
                />
                <input
                    onChange={update}
                    name="author"
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
                    type="text"
                    pattern="[0-5]*"
                    name="rating"
                    placeholder="Book Rating (0-5)"
                    value={contact.rating}
                />
                <input
                    onChange={update}
                    name="tags"
                    placeholder="Tags seperated by ,(comma)"
                    value={contact.tags}
                />
                <input
                    onChange={update}
                    name="countCopy"
                    placeholder="Number of Copies"
                    value={contact.countCopy}
                />
                <button type="submit"> Submit</button>
            </form>
        </div>
    );
}

export default BookForm;

export { details };