import React from 'react';
import {useLocation} from "react-router";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/auth";
import "E:/Учёба 2 сем/Стратегии и Методы/webpack-frontend/src/static/styles/components_auth/login.scss";

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
        <div>
            <p>You must log in or register a new user to view the page at {from}</p>
            <div>
            <forml onSubmit={handleSubmit}>
                <label>
                    <div>Username: <input name="username" type="text"/></div>
                    <div>Password: <input name="password" type="text"/></div>
                </label>{" "}
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </forml>
            </div>
            <div>
            <forml onSubmit={registrate}>
                <label>
                    <div>Username: <input name="username" type="text"/></div>
                    <div>Password: <input name="password" type="text"/></div>
                    <div>Fullname: <input name="fullname" type="text"/></div>
                </label>{" "}
                <button type="submit">Registrate</button>
                <button type="reset">Reset</button>
            </forml>
            </div>
        </div>
    );
};

export default LoginPage