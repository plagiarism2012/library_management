import React from "react";
import "./Footer.css"
function Footer() {
    return (
       <footer class="mr-auto">
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
                <p>Library Management Private Limited,<br/>Birla Institute of Technology<br/>Mesra, Ranchi-835215,<br/>Jharkhand, India</p>
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