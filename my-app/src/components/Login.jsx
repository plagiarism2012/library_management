import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

var token = "tatz";

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
        nav("/");
        if (json.success) {
            token = json.authToken;
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged in Successfully", "success");
            nav("/");
            // window. location. reload(false);
        }
        else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
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
                />
                <button type="submit"> Submit</button>
            </form>
        </div>
    );
}

export default Login;

export {token};