import React, { useContext, useState, useEffect } from "react";
import Bookcontext from "../BookContext/context";
import Footer from "../non-components/Footer";
import Header from "../non-components/Header";
import Book from "./Book";


function BookListRender() {


    const context = useContext(Bookcontext);
    const { book, allBooks } = context;
    const [user, setUser] = useState({
        search: ""
    });
    
    useEffect(() => {
        allBooks();
    }, []);

    async function handleChange(event) {
        const { name, value } = event.target;

        await setUser(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });

        const card = document.querySelectorAll("#card");
        var i = 0;
        const key = user.search.toLowerCase();
        console.log(key);
        book.forEach(element => {
            const isVisible =
                element.Name.toLowerCase().includes(key) ||
                element.Author.toLowerCase().includes(key)
            
            
            if(isVisible){
                card[i].classList.remove("hide");
            }
            else{
                card[i].classList.add("hide");
            }
            i++;
        })
        console.log("lol")
    }

    return (
        <div>
            <Header />

            <form class="form-inline mx-auto">
                <input class="form-control mr-sm-2 " onChange={handleChange} type="search" placeholder="Search" aria-label="Search" name="search" value={user.search} />
                <button class="btn btn-secondary btn-md my-2 my-sm-0" type="submit">Search</button>
            </form>

            {Array.isArray(book) ? book.map(item => (
                <Book name={item.Name} author={item.Author} id={item._id} image={item.Image} />
            )) : []}
        </div>
    );
}

export default BookListRender;