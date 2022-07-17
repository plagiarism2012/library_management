import React from "react";
import "./About.css"
import Header from "./Header";

function About() {
    return (
        <div className="About">
            <Header />
            <div className="content">
                <h1>About the Website</h1>
                <p>loresdghbvsdahjvasidvbwasdvowahsvdbvcudiwq loresdghbvsdahjvasidvbwasdvowahsvdbvcudiwqloresdghbvsdahjvasidvbwasdvowahsvdbvcudiwqloresdghbvsdahjvasidvbwasdvowahsvdbvcudiwqloresdghbvsdahjvasidvbwasdvowahsvdbvcudiwq</p>

                <hr>
                </hr>
                <div class="card" style={{ width: "33%", height: "200px" }}>
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
                <div class="card" style={{ width: "33%", height: "200px" }}>
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
                <div class="card" style={{ width: "33%", height: "200px" }}>
                    <div class="card-body">
                        <h3 class="card-title">SIDDHANT JAIN</h3>
                        <h5 class="card-subtitle mb-2 text-muted">B.Tech CSE student at BIT Mesra</h5>
                        <div className="logos">
                            <span><a href="https://www.linkedin.com/in/siddhant-jain-a88ab41bb/" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a></span>
                            <span><a href="https://github.com/Sid08JLUCKY" target="_blank"><i class="fa-brands fa-github fa-2xl"></i></a></span>
                            <span><a href="sjain2531@gmail.com" target="_blank"><i class="fa-solid fa-envelope fa-2xl"></i></a></span>
                        </div>
                    </div>
                </div>
                <div class="card" style={{ width: "33%", height: "200px" }}>
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