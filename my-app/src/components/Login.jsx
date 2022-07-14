import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../non-components/Header.jsx";

function Login(props) {

    const nav = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setUser(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    async function handleSubmit(e) {

        e.preventDefault();
        const response = await fetch("http://localhost:5500/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: user.email, password: user.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            alert("Logged in Successfully", "success");
            nav("/");
            // window. location. reload(false);
        }
        else {
            alert("Invalid Credentials");
            setUser({
                email: "",
                password: ""
            })
        }
    }

    return (
        <div>
            <Header />
            <div className="formContainer">
                <form className="bookForm" onSubmit={handleSubmit}>

                    <div class="input-group mb-3">
                        <span class="input-group-text col-sm-2" >E-mail</span>
                        <input class="form-control col-sm-5" onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            value={user.email} />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text col-sm-2" >Password</span>
                        <input class="form-control col-sm-5" onChange={handleChange}
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            value={user.password} />
                    </div>


                    <button class="btn btn-secondary" type="submit"> Log in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;


{/* <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        value={user.email}
                    />
                    <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        value={user.password}
                    /> */}