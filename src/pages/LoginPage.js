import React from 'react';
import {useLocation} from "react-router";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/auth";
import "../static/styles/components_auth/login.scss";

//TODO: здесь можно реализовать свою форму для login
const LoginPage = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username");
        let password = formData.get("password");


        auth.signIn(username, password, () => {
            // Send them back to the page they tried to visit when they were
            // redirected to the login page. Use { replace: true } so we don't create
            // another entry in the history stack for the login page.  This means that
            // when they get to the protected page and click the back button, they
            // won't end up back on the login page, which is also really nice for the
            // user experience.
            navigate(from, {replace: true});
        });
    }

    function registrate(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username");
        let password = formData.get("password");
        let fullname = formData.get("fullname");

        if (username && password && fullname) {
            auth.createNewUser(username, password, fullname, () => {
                navigate(from, {replace: true});
            });
        }
    }

    return (
        <body>
            <p>You must log in or register a new user to view the page at {from}</p>
            <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <h1 className="auth">Autorisation</h1>
                    <div><input type="text" name="username" placeholder="Username"/></div>
                    <div><input type="text" name="password" placeholder="Password"/></div>
                </label>{" "}
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
            <form onSubmit={registrate}>
                <label>
                    <h1 className="auth">Registration</h1>
                    <div><input type="text" name="username" placeholder="Username"/></div>
                    <div><input type="text" name="password" placeholder="Password"/></div>
                    <div><input type="text" name="fullname" placeholder="Fullname"/></div>
                </label>{" "}
                <button type="submit">Register</button>
                <button type="reset">Reset</button>
            </form>
            </div>
        </body>
    );
};

export default LoginPage