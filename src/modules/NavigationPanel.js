import React from 'react';
import { Link } from "react-router-dom";
import AuthStatus from "./auth/AuthStatus";

const NavigationPanel = () => {
  return (
    <div className='navigation-panel'>
      <ul>
        <span className='navigation-panel__button'>
          <Link to="/">Public Page</Link>
        </span>
        <span className='navigation-panel__button'>
          <Link to="/protected">Protected Page</Link>
        </span>
        <span className='navigation-panel__button'>
          <Link to="/config">Config Page</Link>
        </span>
        <span className='navigation-panel__button'>
          <Link to="/main">Main Page</Link>
        </span>
      </ul>
        <AuthStatus />
    </div>
  );
};

export default NavigationPanel