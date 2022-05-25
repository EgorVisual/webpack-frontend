import React from 'react';
import { Link } from "react-router-dom";
import AuthStatus from "./auth/AuthStatus";
import "../static/styles/navigation.scss";

const NavigationPanel = () => {
  return (
    <div className='navigation-panel'>
      <ul>
        <navigatiom-body>
        <a className='navigation-panel'>
          <Link to="/">Public Page</Link>
        </a>
        {/*<span className='navigation-panel__button'>*/}
        {/*  <Link to="/protected">Protected Page</Link>*/}
        {/*</span>*/}
        <a className='navigation-panel'>
          <Link to="/config">Config Page</Link>
        </a>
        <a className='navigation-panel'>
          <Link to="/main">Main Page</Link>
        </a>
        </navigatiom-body>
      </ul>
        <AuthStatus />
    </div>
  );
};

export default NavigationPanel