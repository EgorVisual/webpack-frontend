import React from 'react';
import { Link } from "react-router-dom";
import AuthStatus from "./auth/AuthStatus";

const NavigationPanel = () => {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
        <li>
          <Link to="/config">Config Page</Link>
        </li>
        <li>
          <Link to="/main">Main Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationPanel