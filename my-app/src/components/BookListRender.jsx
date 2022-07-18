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

        setUser(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });

        var key = value;
        var count=0;
        const card = document.querySelectorAll("#card");
        var i = 0;
        console.log(key);
        book.forEach(element => {
            const isVisible =
                element.Name.toLowerCase().includes(key) ||
                element.Author.toLowerCase().includes(key)


            if (isVisible) {
                card[i].classList.remove("hide");
                card[i].removeAttribute("data-aos");
            }
            else {
                card[i].classList.add("hide");
                // if(!card[i].hasAttribute("data-aos")){
                //     card[i].setAttribute("data-aos","flip-left");
                // }
                count+=1;
            }
            i++;
        })
        
        if(count==book.length){
            document.querySelectorAll(".noBook")[0].classList.remove("hide");
        }else{
            document.querySelectorAll(".noBook")[0].classList.add("hide");
            count=0;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        var key = user.search;

        const card = document.querySelectorAll("#card");
        var i = 0;
        var count=0;
        console.log(key);
        book.forEach(element => {
            const isVisible =
                element.Name.toLowerCase().includes(key) ||
                element.Author.toLowerCase().includes(key)


            if (isVisible) {
                card[i].classList.remove("hide");
                card[i].removeAttribute("data-aos");
            }
            else {
                card[i].classList.add("hide");
                // if(!card[i].hasAttribute("data-aos")){
                //     card[i].setAttribute("data-aos","flip-left");
                // }
                count+=1;
            }
            i++;
        })
        if(count==book.length){
            document.querySelectorAll(".noBook")[0].classList.remove("hide");
        }else{
            document.querySelectorAll(".noBook")[0].classList.add("hide");
            count=0;
        }
    }

    return (
        <div>
            <Header />

            <div className="search-bar">
                <form class="form-inline mx-auto search" onSubmit={handleSubmit}>
                    <input class="form-control mr-sm-2 " onChange={handleChange} type="search" placeholder="Search" aria-label="Search" name="search" value={user.search} />
                    <button class="btn btn-secondary btn-md my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <h1 className="noBook hide"><i class="fa-solid fa-circle-exclamation fa-xl"></i>&nbsp;&nbsp;No Book available</h1>
            {Array.isArray(book) ? book.map(item => (
                <Book name={item.Name} author={item.Author} id={item._id} image={item.Image} />
            )) : []}
            {/* <Footer/> */}
        </div>
    );
}

export default BookListRender;