import React, {useEffect, useState} from 'react';
import UserService from "../../../servicers/userService";
import ConfigInfoInput from "../conf-info/ConfigInfoInput";

const ConfigurationCard = () => {

    const service = new UserService();

    const [user,setUser] = useState({})

    useEffect(() => {
        // const warning2 = document.getElementsByClassName("message")[0];
        // console.log(warning2.innerText);
       (async () => {
            console.log('Request to backend!');
            const user = await service.getUserInfo();
            setUser(user)
        })()
    }, [])

    function changeUsername(){
        setUser({username: 'Egor'})
    }

    function onChangeInput(inputValue){
        setUser({username: inputValue})
    }

    return (
        <div className="conf__card">
            <div className="conf__header">
                <h1>Personal information.</h1>
            </div>
            <div className="conf__info">
                <div className="conf__info__warning warning">
                    <span className="warning__output message">Write your username and password!</span>
                </div>
                <ConfigInfoInput onChange = {onChangeInput} value = {user.username} placeholder='My second username' />
                <ConfigInfoInput value = {user.username} placeholder='My third username' />
                <ConfigInfoInput value = {user.username} placeholder='My fouth username' />
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
                <button className="change-info__button" onClick={changeUsername}>Apply</button>
            </div>
        </div>
    );
};

export default ConfigurationCard