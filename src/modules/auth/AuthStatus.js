import React from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth";
const AuthStatus = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return( <><p>You are not logged in.</p></>)
  }

  return (
    <p>

      Welcome {auth.user.username}!{" "}
      <button
        onClick={() => {
          auth.signOut(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
};

export default AuthStatus