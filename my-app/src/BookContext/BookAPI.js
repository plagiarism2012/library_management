import { useState } from "react";
import BookInfo from "./context";

const BookAPI = (props) => {
    const url = "http://localhost:5500";

    const initBook = [];

    const [book, setBook] = useState(initBook);

    // get all books
    const allBooks = async () => {
        const response = await fetch(`${url}/allBooks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const json = await response.json();
        console.log(json);
        setBook(json);
    };

    // get book with id 
    const particularBook = async (id) => {
        const response = await fetch(`${url}/particularBook/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const json = await response.json();
        setBook(json);
    }

    return (
        // here props.children means that the "value" will be accesible to all the items(props) present inside the blogcontext component.
        // simple explanation of what props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component.
        <BookInfo.Provider value={{ book, setBook, allBooks, particularBook }}>
            {props.children}
        </BookInfo.Provider>
    );
};

export default BookAPI;