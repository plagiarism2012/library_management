import React from "react";
import "./About.css"
import Header from "./Header";

function About() {
    return (
        <div className="About">
            <Header />
            <div className="content">
                <h1>About the Website</h1>
                <p>This is a library managemnet app to easily maintain and show availability of books in the library.
                    Readers can browse the library online and check availabilty of desired books without visiting the library.
                    Librarians can easily update count of books available, add, search and delete books.
                    The aim is to digitalise basic library functions and minimalise human effort.
                    The search feature gives real-time results based on the book title/author so that the user need not know or type the full thing.
                    In addition it displays the themes/tags associated with the book, rating and book description.

                    TECH STACKS used: React, MongoDB, Express, Node.</p>
                <div data-aos="zoom-in" data-aos-once="true" data-aos-easing="ease-in" data-aos-mirror="true" class="card">
                    <div class="card-body ">
                        <h3 class="card-title">SONU DEO</h3>
                        <h5 class="card-subtitle mb-2 text-muted">B.Tech CSE student at BIT Mesra</h5>
                        <div className="logos">
                            <span><a href="https://www.linkedin.com/in/sonu-deo-227b9a243/" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a></span>
                            <span><a href="https://github.com/plagiarism2012 " target="_blank"><i class="fa-brands fa-github fa-2xl"></i></a></span>
                            <span><a href="mailto:sonu.deo2012@gmail.com" target="_blank"><i class="fa-solid fa-envelope fa-2xl"></i></a></span>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-once="true" data-aos-easing="ease-in" data-aos-mirror="true" class="card">
                    <div class="card-body">
                        <h3 class="card-title">TATHASTU SHARMA</h3>
                        <h5 class="card-subtitle mb-2 text-muted">B.Tech CSE student at BIT Mesra</h5>
                        <div className="logos">
                            <span><a href="https://www.linkedin.com/in/tathastu-sharma-000826229/" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a></span>
                            <span><a href="https://github.com/itsTathastu" target="_blank"><i class="fa-brands fa-github fa-2xl"></i></a></span>
                            <span><a href="mailto:tathastusharma3005@gmail.com" target="_blank"><i class="fa-solid fa-envelope fa-2xl"></i></a></span>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-once="true" data-aos-easing="ease-in" data-aos-mirror="true" class="card">
                    <div class="card-body">
                        <h3 class="card-title">SIDDHANT JAIN</h3>
                        <h5 class="card-subtitle mb-2 text-muted">B.Tech CSE student at BIT Mesra</h5>
                        <div className="logos">
                            <span><a href="https://www.linkedin.com/in/siddhant-jain-a88ab41bb/" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a></span>
                            <span><a href="https://github.com/Sid08JLUCKY" target="_blank"><i class="fa-brands fa-github fa-2xl"></i></a></span>
                            <span><a href="mailto:sjain2531@gmail.com" target="_blank"><i class="fa-solid fa-envelope fa-2xl"></i></a></span>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-once="true" data-aos-easing="ease-in" data-aos-mirror="true" class="card">
                    <div class="card-body">
                        <h3 class="card-title">PRIYANKA CHOUDHARY</h3>
                        <h5 class="card-subtitle mb-2 text-muted">B.Tech CSE student at BIT Mesra</h5>
                        <div className="logos">
                            <span><a href="https://www.linkedin.com/in/priyanka-choudhary-6baa551b1/" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a></span>
                            <span><a href="https://github.com/Priyanka526168" target="_blank"><i class="fa-brands fa-github fa-2xl"></i></a></span>
                            <span><a href="mailto:priyankach5647@gmail.com" target="_blank"><i class="fa-solid fa-envelope fa-2xl"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;