import React from "react";
import "./Footer.css"
function Footer() {
    return (
       <footer class="mr-auto my-auto">
    <div id="all_lists">
        <div class="flist">
            <ul>
                <li><a href="/about">About Website</a></li>{/*Aim-*/}
                <li><a href="/about">About Developers</a></li>
                <li><a href="/about">Contact Us</a></li>{/*Customer Care-*/}
            </ul>
        </div>

        <hr/>
        <div class="flist add">
               <img id="logo" src="https://firebasestorage.googleapis.com/v0/b/library-management-c382b.appspot.com/o/logo3.jpg?alt=media&token=0fdc6f42-4054-4a32-bddc-8c02def2caf3"></img>
        </div>
    </div>
    <div id="tc">
        <div>
            <i class="far fa-copyright"></i> 2022-2023 Copyright Library Management
        </div>
    </div>
</footer>
    );
}

export default Footer;