import React from 'react';


const ConfigurationCard = () => {


    const warning2 = this.getElementsByClassName("message")[0];

    // function Console(warning2) {
    //     console.log(warning2.innerText);
    //
    // }

    return (
        <div className="conf__card">
            <div className="conf__header">
                <h1>Personal information.</h1>
            </div>
            <div className="conf__info">
                <div className="conf__info__warning warning">
                    <span className="warning__output message">Write your username and password!</span>
                </div>
                <div className="conf__info__username username">
                    <input type="text" className="username__input" placeholder="Username"/>
                </div>
                <div className="conf__info__password password">
                    <input type="text" className="password__input" placeholder="Password"/>
                </div>
                <div className="conf__info__fullname fullname">
                    <input type="text" className="fullname__input" placeholder="Fullname"/>
                </div>
                <div className="conf__info__role role">
                    <input type="text" className="role__input" placeholder="Role"/>
                </div>
            </div>
            <div className="conf__button change-info">
                <button className="change-info__button">Apply</button>
            </div>
        </div>
    );
};

export default ConfigurationCard