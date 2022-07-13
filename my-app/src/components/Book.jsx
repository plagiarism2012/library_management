import {
    useNavigate, Link
} from "react-router-dom";
import React from "react";

function Book(props) {

    const navigate = useNavigate(); 

    return (
        <div>
            <Link to="/IndividualBook" state={{ID:props.id}}>
                <div className="book">
                    <img alt="NA" />
                    <h1>{props.name}</h1>
                    <p>{props.author}</p>
                </div>
            </Link>          
        </div>
    );
}

export default Book;