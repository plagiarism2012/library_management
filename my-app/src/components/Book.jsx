import { Link } from "react-router-dom";
import React from "react";

function Book(props) {

    return (
        <div>
            <Link to="/IndividualBook" state={{ID:props.id}}>
                <div className="book">
                    {console.log(props.image)}
                    <img src={props.image} alt="NA" />
                    <h1>{props.name}</h1>
                    <p>{props.author}</p>
                </div>
            </Link>          
        </div>
    );
}

export default Book;