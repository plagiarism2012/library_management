import { Link } from "react-router-dom";
import React from "react";
import "./Book.css"
function Book(props) {

    function truncate(str) {
        return str.length > 26 ? str.substring(0, 21) + "..." : str;
    }

    return (
        // <div class="col-lg-12">
            <Link to="/IndividualBook" state={{ ID: props.id }}>
                {/* <div class="col-lg-6"> */}
                    <div className="card book mx-10" id="card">
                        <img className="card-img-top" src={props.image} alt="NA" />
                        <div className="card-body">
                            <p className="card-title bookName">{truncate(props.name)}</p>
                            <p className="card-text authorName">{props.author}</p>
                        </div>
                    </div>
                {/* </div> */}
                
            </Link>
        // </div>
    );
}

export default Book;


