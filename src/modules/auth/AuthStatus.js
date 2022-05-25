import React from 'react';
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/auth";
import "../../static/styles/authorizationStatus.scss";


const AuthStatus = () => {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {

        return (<div className="place">
            <div className="place_text"><p>You are not logged in.</p></div>
        </div>)
    }

    return (
        <div className="place">
            <div className="place_text">
                {/*<p>*/}
                <span>
                    <a
                        href=""
                        className="double-border-button"
                        onClick={() => {
                            auth.signOut(() => navigate("/"));
                        }}
                    >
                        Sign out
                    </a>
                        </span>
                <span>
                    Welcome {auth.user.username}!{" "}
                        </span>
                {/*</p>*/}
            </div>
        </div>
    );
};

export default AuthStatus