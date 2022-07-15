import { Link } from "react-router-dom";
import React from "react";

function Book(props) {

    function truncate(str) {
        return str.length > 26 ? str.substring(0, 23) + "..." : str;
    }

    return (
            <Link to="/IndividualBook" state={{ ID: props.id }}>
                <div className="card book">
                    {console.log(props.image)}
                    <img className="card-img-top" src={props.image} alt="NA" />
                    <div className="card-body">
                        <p className="card-title bookName">{truncate(props.name)}</p>
                        <p className="card-text">{props.author}</p>
                    </div>
                </div>
            </Link>
    );
}

export default Book;


