import React from 'react';
import "../static/styles/publicINFO.scss"

const PublicPage = () => {
  return (
    <div>
        <div>
         <header>Welcome to the Task Manager!</header>
        </div>
        <div className="description">
        <p>Using our application you will be able to create and manage your projects.
Each task can be assigned to one of three states, which will help you optimize your work!</p>
         <p>Good luck with your work!</p>
     </div>
    </div>
  );
};

export default PublicPage