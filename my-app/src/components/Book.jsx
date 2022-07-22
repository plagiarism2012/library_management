import { Link } from "react-router-dom";
import React from "react";
import "./Book.css"
function Book(props) {

    function truncate(str) {
        return str.length > 26 ? str.substring(0, 21) + "..." : str;
    }
    function handleClick(){
        window.scrollTo(0,0);
    }
    return (
        
            <Link onClick={handleClick} to="/IndividualBook" state={{ ID: props.id }}>
                <div  data-aos-once="false" data-aos-easing="ease-in" data-aos="flip-left" className="aos-item card book mx-10" id="card">
                    <img className="card-img-top" src={props.image} alt="NA" />
                    <div className="card-body">
                        <p className="card-title bookName">{truncate(props.name)}</p>
                        <p className="card-text authorName">{props.author}</p>
                    </div>
                </div>                
            </Link>
    );
}

export default Book;


