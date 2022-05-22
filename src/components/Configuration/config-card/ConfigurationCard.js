import React, {useEffect, useState} from 'react';
import UserService from "../../../servicers/userService";
import ConfigInfoInput from "../conf-info/ConfigInfoInput";
import useAuth from "../../../hooks/auth";
import {useNavigate} from "react-router-dom";

const ConfigurationCard = () => {
    let auth = useAuth();
    let navigate = useNavigate();
    const service = new UserService();
    let [userInfo, setUserInfo] = useState({
        username: auth.user.username,
        password: auth.user.password,
        fullname: auth.user.fullname,
        role: auth.user.role
    });

    // useEffect(() => {
    //     // const warning2 = document.getElementsByClassName("message")[0];
    //     // console.log(warning2.innerText);
    //     (async () => {
    //         console.log('Request to backend!');
    //         const user = await service.getUserInfo();
    //         setUser(user)
    //     })()
    // }, [])

    function changeInfo() {
        auth.updateInfo(userInfo, () => navigate("/config"))
    }

    function onChangeInput(parameter, inputValue) {
        console.log(parameter)
        console.log(inputValue)
        setUserInfo(previousState => {
            previousState[parameter] = inputValue;
            return {...previousState}
        })
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
                <ConfigInfoInput parameter='fullname' onChange={onChangeInput} value={userInfo.fullname}
                                 placeholder='Fullname'/>
                <ConfigInfoInput parameter='username' onChange={onChangeInput} value={userInfo.username}
                                 placeholder='Username'/>
                <ConfigInfoInput parameter='password' onChange={onChangeInput} value={userInfo.password}
                                 placeholder='Password'/>
                <ConfigInfoInput parameter='role' onChange={onChangeInput} value={userInfo.role}
                                 placeholder='Role'/>
            </div>
            <div className="conf__button change-info">
                <button className="change-info__button" onClick={changeInfo}>Apply</button>
            </div>
        </div>
    );
};

export default ConfigurationCard